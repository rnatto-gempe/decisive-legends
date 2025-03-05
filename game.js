import { enemies, bosses, situations, bonuses, skills, narrativeEvents } from "./constants.js";

// Estado do jogador - será carregado do localStorage se disponível
const player = {
    health: 100,
    maxHealth: 100,
    attack: 10,
    defense: 5,
    lifesteal: 0,
    mana: 50,
    maxMana: 100,
    position: 0,
    level: 1,
    experience: 0,
    nextLevelExp: 100
};

// Estado do jogo
let gameStarted = false;
let inCombat = false;
let animationId = null;
let backgroundPosition = 0;
let movingForward = false;
let bossEncountered = false;
let killCount = 0;
let eventCounter = 0;

// Local Storage Functions
// Salva o progresso do jogador no localStorage
function saveProgress() {
    const gameState = {
        player: { ...player },
        killCount,
        eventCounter,
        bossEncountered,
        lastSaved: new Date().toISOString()
    };
    
    localStorage.setItem('decisiveLegends_saveData', JSON.stringify(gameState));
    console.log('Progresso salvo!', gameState);
    
    // Mostra notificação de salvamento
    showSaveNotification();
}

// Mostra uma notificação de salvamento
function showSaveNotification() {
    const notification = document.createElement('div');
    notification.className = 'save-notification';
    notification.textContent = 'Progresso salvo!';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 1500);
}

// Carrega o progresso do jogador do localStorage
function loadProgress() {
    const savedData = localStorage.getItem('decisiveLegends_saveData');
    
    if (savedData) {
        try {
            const gameState = JSON.parse(savedData);
            
            // Restaura dados do player
            Object.assign(player, gameState.player);
            
            // Restaura outros estados do jogo
            killCount = gameState.killCount || 0;
            eventCounter = gameState.eventCounter || 0;
            bossEncountered = gameState.bossEncountered || false;
            
            console.log('Progresso carregado!', gameState);
            return true;
        } catch (error) {
            console.error('Erro ao carregar progresso:', error);
            return false;
        }
    }
    
    return false;
}

// Limpa o progresso salvo
function clearProgress() {
    localStorage.removeItem('decisiveLegends_saveData');
    console.log('Progresso apagado!');
    
    // Mostra confirmação
    const notification = document.createElement('div');
    notification.className = 'save-notification clear-notification';
    notification.textContent = 'Progresso apagado!';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 1500);
}

// Verifica se existe save game
function hasSavedGame() {
    return localStorage.getItem('decisiveLegends_saveData') !== null;
}

// Referências DOM
const playerEl = document.getElementById("player");
const enemyEl = document.getElementById("enemy");
const cardsArea = document.getElementById("cards-area");
const startButton = document.getElementById("start-game");
const sceneryEl = document.getElementById("scenery");
const backgroundEl = document.getElementById("background");
const effectContainerEl = document.getElementById("effect-container");
const playerSlashEl = document.getElementById("player-slash");
const enemySlashEl = document.getElementById("enemy-slash");
const levelEl = document.getElementById("level");
const experienceEl = document.getElementById("experience");
const gameAreaEl = document.getElementById("game-area");

// Efeitos visuais e partículas
const particles = [];
const MAX_PARTICLES = 50;

// Definição da skill

// Variáveis de controle da skill
let currentSkill = skills[0]; // Por enquanto, apenas uma skill
let skillReady = true;
let skillActive = false;
let lastSkillTime = 0;

// Referências DOM para a UI da skill
let skillButtonEl;
let skillCooldownEl;

// Adiciona os estilos CSS para a barra de vida e skill
function addCustomStyles () {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
    /* Estilos para o botão de skill */
    .skill-button {
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: rgba(30, 30, 30, 0.7);
      border-radius: 10px;
      bottom: 10px;
      left: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      z-index: 20;
      transition: all 0.2s ease;
      overflow: hidden;
      color: #7E57C2;
      user-select: none;
    }
    
    .skill-button:hover {
      transform: scale(1.1);
      background-color: rgba(40, 40, 40, 0.8);
    }
    
    .skill-button:active {
      transform: scale(0.95);
    }
    
    /* Cooldown da skill */
    .skill-cooldown {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0%;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: -1;
      transition: height 0.1s linear;
    }
    
    /* Estados da skill */
    .skill-active {
      animation: skillActive 0.5s infinite alternate;
      box-shadow: 0 0 15px #7E57C2;
    }
    
    .skill-error {
      animation: skillError 0.3s;
    }
    
    .skill-ready {
      animation: skillReady 0.5s;
    }
    
    /* Efeitos visuais da skill */
    .skill-windup {
      position: absolute;
      border-radius: 50%;
      border: 3px solid #7E57C2;
      box-sizing: content-box;
      transform: translate(-5px, -5px);
      animation: skillWindup 0.5s ease-in-out;
      z-index: 19;
    }
    
    .skill-wave {
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #7E57C2;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      z-index: 20;
      box-shadow: 0 0 15px #7E57C2;
    }
    
    .skill-impact {
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      z-index: 20;
      animation: skillImpact 0.3s ease-out;
    }
    
    .skill-activation-message {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 24px;
      font-weight: bold;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
      animation: skillMessage 2s forwards;
      z-index: 25;
    }
    
    /* Barra de vida do inimigo */
    .enemy-health-bar {
      position: absolute;
      width: 100px;
      height: 8px;
      background-color: #333;
      border-radius: 4px;
      overflow: hidden;
      z-index: 25;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }
    
    .enemy-health-fill {
      height: 100%;
      width: 100%;
      background-color: #4CAF50;
      transition: width 0.3s ease;
    }
    
    .enemy-name {
      position: absolute;
      top: -30px;
      width: 100%;
      text-align: center;
      font-size: 12px;
      color: white;
      text-shadow: 1px 1px 3px black;
      font-weight: bold;
    }
    
    /* Animações para a skill */
    @keyframes skillActive {
      0% {
        transform: scale(1);
        box-shadow: 0 0 10px #7E57C2;
      }
      100% {
        transform: scale(1.1);
        box-shadow: 0 0 20px #7E57C2;
      }
    }
    
    @keyframes skillError {
      0%, 100% {
        background-color: rgba(30, 30, 30, 0.7);
        transform: scale(1);
      }
      50% {
        background-color: rgba(255, 82, 82, 0.7);
        transform: scale(0.9);
      }
    }
    
    @keyframes skillReady {
      0% {
        transform: scale(1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }
      50% {
        transform: scale(1.2);
        box-shadow: 0 0 20px #7E57C2;
      }
      100% {
        transform: scale(1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }
    }
    
    @keyframes skillWindup {
      0% {
        transform: translate(-5px, -5px) scale(1);
        opacity: 0.8;
        border-width: 3px;
      }
      100% {
        transform: translate(-5px, -5px) scale(2);
        opacity: 0;
        border-width: 1px;
      }
    }
    
    @keyframes skillImpact {
      0% {
        opacity: 0.8;
        transform: translate(-50%, -50%) scale(0);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(3);
      }
    }
    
    @keyframes skillMessage {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.5);
      }
      20% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.2);
      }
      80% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
      }
    }

    /* Notificação de salvamento */
    .save-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: rgba(76, 175, 80, 0.9);
        color: white;
        padding: 10px 20px;
        border-radius: 4px;
        z-index: 1000;
        opacity: 1;
        transition: opacity 0.5s;
        font-size: 14px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    
    .save-notification.fade-out {
        opacity: 0;
    }
    
    .clear-notification {
        background-color: rgba(244, 67, 54, 0.9);
    }
    
    /* Botões de gerenciamento de save */
    .save-controls {
        position: absolute;
        bottom: 10px;
        right: 10px;
        display: flex;
        gap: 10px;
        z-index: 100;
    }
    
    .save-button, .clear-save-button {
        background-color: rgba(33, 150, 243, 0.7);
        color: white;
        border: none;
        border-radius: 4px;
        padding: 8px 12px;
        cursor: pointer;
        font-size: 12px;
        transition: all 0.3s;
    }
    
    .save-button:hover {
        background-color: rgba(33, 150, 243, 0.9);
    }
    
    .clear-save-button {
        background-color: rgba(244, 67, 54, 0.7);
    }
    
    .clear-save-button:hover {
        background-color: rgba(244, 67, 54, 0.9);
    }
    
    .continue-game-btn {
        margin-top: 10px;
        padding: 12px 30px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: 500;
        transition: all 0.3s ease;
        z-index: 2;
        box-shadow: 0 0 15px rgba(76, 175, 80, 0.7);
    }
    
    .continue-game-btn:hover {
        background-color: #388E3C;
        transform: translateY(-5px);
        box-shadow: 0 0 30px rgba(76, 175, 80, 0.9);
    }
  `;

    document.head.appendChild(styleEl);
}

// Adiciona os botões de controle de salvamento
function addSaveControls() {
    // Criar container
    const saveControls = document.createElement('div');
    saveControls.className = 'save-controls';
    
    // Botão de salvar manualmente
    const saveButton = document.createElement('button');
    saveButton.className = 'save-button';
    saveButton.textContent = '💾 Salvar Manualmente';
    saveButton.addEventListener('click', () => {
        saveProgress();
    });
    
    // Botão de limpar salvamento
    const clearButton = document.createElement('button');
    clearButton.className = 'clear-save-button';
    clearButton.textContent = '🗑️ Apagar Save';
    clearButton.addEventListener('click', () => {
        // Confirmação antes de apagar
        if (confirm('Tem certeza que deseja apagar todo o progresso salvo? Esta ação não pode ser desfeita.')) {
            clearProgress();
            
            // Se o jogo estiver em andamento, pergunta se quer reiniciar
            if (gameStarted) {
                if (confirm('Deseja reiniciar o jogo agora?')) {
                    resetGame();
                }
            }
        }
    });
    
    saveControls.appendChild(saveButton);
    saveControls.appendChild(clearButton);
    gameAreaEl.appendChild(saveControls);
}

// Atualiza as estatísticas na interface
function updateStats () {
    document.getElementById("health").textContent = player.health;
    document.getElementById("max-health").textContent = player.maxHealth;
    document.getElementById("attack").textContent = player.attack;
    document.getElementById("defense").textContent = player.defense;
    document.getElementById("lifesteal").textContent = player.lifesteal;
    document.getElementById("mana").textContent = player.mana;
    document.getElementById("max-mana").textContent = player.maxMana;
    levelEl.textContent = player.level;
    experienceEl.style.width = `${(player.experience / player.nextLevelExp) * 100}%`;
}

// Sistema de experiência e nível
function gainExperience (amount) {
    player.experience += amount;

    // Verificar level up
    if (player.experience >= player.nextLevelExp) {
        levelUp();
    }

    updateStats();
}

// Level up do jogador
function levelUp () {
    player.level++;
    player.experience -= player.nextLevelExp;
    player.nextLevelExp = Math.floor(player.nextLevelExp * 1.8); // Aumentado de 1.5

    // Aumentar estatísticas
    player.maxHealth += 5; // Reduzido de 10
    player.health = player.maxHealth;
    player.attack += 1; // Reduzido de 2
    player.defense += 0.5; // Reduzido de 1
    player.maxMana += 3; // Reduzido de 5
    player.mana = player.maxMana;

    // Efeito visual
    createLevelUpEffect();

    // Mensagem de level up
    addCard({
        title: "Nível Aumentado!",
        description: `Você atingiu o nível ${player.level}! Suas estatísticas aumentaram.`
    });
}
// Cria o efeito visual de level up
function createLevelUpEffect () {
    const levelUpEffect = document.createElement("div");
    levelUpEffect.className = "level-up-effect";
    levelUpEffect.textContent = "LEVEL UP!";
    effectContainerEl.appendChild(levelUpEffect);

    // Remove após animação
    setTimeout(() => {
        levelUpEffect.remove();
    }, 2500);

    // Cria partículas douradas ao redor do jogador
    createParticleExplosion(
        playerEl.offsetLeft + playerEl.offsetWidth / 2,
        playerEl.offsetTop + playerEl.offsetHeight / 2,
        30, // quantidade de partículas
        "#FFD700", // cor dourada
        1.5 // duração em segundos
    );

    // Aplica efeito de brilho ao jogador
    playerEl.classList.add("glow-effect");
    setTimeout(() => {
        playerEl.classList.remove("glow-effect");
    }, 2000);

    // Som de level up
    playSound("levelUp");
}

// Gerador de situações aleatórias
function generateSituation () {
    return situations[Math.floor(Math.random() * situations.length)];
}

// Gerador de bônus aleatórios
function generateBonus () {
    return bonuses[Math.floor(Math.random() * bonuses.length)];
}

// Gera um inimigo aleatório
function generateEnemy () {
    const enemy = { ...enemies[Math.floor(Math.random() * enemies.length)] };

    // Escala de inimigos baseada no nível do jogador
    if (player.level > 1) {
        const scaleFactor = 1 + (player.level - 1) * 0.2;
        enemy.health = Math.floor(enemy.health * scaleFactor);
        enemy.maxHealth = enemy.health; // Armazena a vida máxima para a barra de vida
        enemy.attack = Math.floor(enemy.attack * scaleFactor);
        enemy.defense = Math.floor(enemy.defense * scaleFactor);
        enemy.experience = Math.floor(enemy.experience * scaleFactor);
    } else {
        enemy.maxHealth = enemy.health; // Para inimigos de nível 1
    }

    return enemy;
}

// Gera um chefe
function generateBoss () {
    const boss = { ...bosses[Math.floor(Math.random() * bosses.length)] };

    // Escala o chefe baseado no nível do jogador
    const scaleFactor = 1 + (player.level - 1) * 0.15;
    boss.health = Math.floor(boss.health * scaleFactor);
    boss.maxHealth = boss.health; // Armazena a vida máxima para a barra de vida
    boss.attack = Math.floor(boss.attack * scaleFactor);
    boss.defense = Math.floor(boss.defense * scaleFactor);
    boss.experience = Math.floor(boss.experience * scaleFactor);

    return boss;
}

// Adiciona um cartão à área de cartões
function addCard (cardData) {
    const card = document.createElement("div");
    card.className = "card";

    // Adiciona classe especial para chefes
    if (cardData.isBoss) {
        card.classList.add("boss-card");
    }

    const title = document.createElement("div");
    title.className = "card-title";
    title.textContent = cardData.title;
    card.appendChild(title);

    const description = document.createElement("div");
    description.textContent = cardData.description;
    card.appendChild(description);

    if (cardData.options) {
        const options = document.createElement("div");
        options.className = "card-options";

        cardData.options.forEach((option) => {
            const button = document.createElement("button");
            button.innerHTML = option.text;

            // Adiciona indicadores visuais de ganhos/perdas
            if (option.effectDisplay) {
                button.innerHTML += ` ${option.effectDisplay}`;
            }

            button.addEventListener("click", () => {
                // Efeito de clique no botão
                playSound("buttonClick");
                createClickEffect(button);
                applyEffects(option.effect);

                addCard({
                    title: "Resultado",
                    description: option.description
                });

                // Remover botões após a escolha
                options.innerHTML = "";

                // Iniciar combate após escolha
                startCombat();
            });

            options.appendChild(button);
        });

        card.appendChild(options);
    }

    // Animação de entrada do cartão
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    cardsArea.appendChild(card);
    cardsArea.scrollTop = cardsArea.scrollHeight;

    // Aciona a animação
    setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 10);
}

// Aplica os efeitos da escolha ao jogador
function applyEffects (effects) {
    for (const stat in effects) {
        const oldValue = player[stat];

        if (stat === "health") {
            player.health = Math.min(
                player.maxHealth,
                Math.max(1, player.health + effects[stat])
            );

            // Efeito visual de cura ou dano
            if (effects[stat] > 0) {
                showHeal(playerEl, effects[stat]);
                playerEl.classList.add("flash");
                playSound("heal");
                createHealingParticles(playerEl);
                setTimeout(() => {
                    playerEl.classList.remove("flash");
                }, 500);
            } else if (effects[stat] < 0) {
                showDamage(playerEl, Math.abs(effects[stat]));
                gameAreaEl.classList.add("shake");
                playSound("playerDamage");
                createBloodParticles(playerEl, 10);
                setTimeout(() => {
                    gameAreaEl.classList.remove("shake");
                }, 500);
            }
        } else if (stat === "mana") {
            player.mana = Math.min(
                player.maxMana,
                Math.max(0, player.mana + effects[stat])
            );

            // Efeito visual de mana
            if (effects[stat] !== 0) {
                showStatChange("MANA", effects[stat]);
                if (effects[stat] > 0) {
                    createManaParticles(playerEl);
                    playSound("manaGain");
                }
            }
        } else {
            player[stat] = Math.max(0, player[stat] + effects[stat]);

            // Efeito visual para outras estatísticas
            if (effects[stat] !== 0) {
                showStatChange(stat.toUpperCase(), effects[stat]);
                if (effects[stat] > 0) {
                    createStatBoostParticles(playerEl, stat);
                    playSound("statBoost");
                }
            }
        }
    }

    updateStats();
}

// Exibe o dano visual
function showDamage (target, amount) {
    const damageEl = document.createElement("div");
    damageEl.className = "damage";
    damageEl.textContent = `-${amount}`;
    damageEl.style.left = `${target.offsetLeft + target.offsetWidth / 2}px`;
    damageEl.style.top = `${target.offsetTop}px`;
    effectContainerEl.appendChild(damageEl);

    // Remove o elemento após a animação
    setTimeout(() => {
        damageEl.remove();
    }, 1000);
}

// Exibe a cura visual
function showHeal (target, amount) {
    const healEl = document.createElement("div");
    healEl.className = "heal";
    healEl.textContent = `+${amount}`;
    healEl.style.left = `${target.offsetLeft + target.offsetWidth / 2}px`;
    healEl.style.top = `${target.offsetTop}px`;
    effectContainerEl.appendChild(healEl);

    // Remove o elemento após a animação
    setTimeout(() => {
        healEl.remove();
    }, 1000);
}

// Exibe alteração de estatística
function showStatChange (stat, amount) {
    const statEl = document.createElement("div");
    if (amount > 0) {
        statEl.className = "stat-change stat-increase";
        statEl.textContent = `+${amount} ${stat}`;
    } else {
        statEl.className = "stat-change stat-decrease";
        statEl.textContent = `${amount} ${stat}`;
    }
    effectContainerEl.appendChild(statEl);

    // Remove o elemento após a animação
    setTimeout(() => {
        statEl.remove();
    }, 1500);
}

// Exibe ganho de experiência
function showExperienceGain (amount) {
    const expEl = document.createElement("div");
    expEl.className = "exp-gain";
    expEl.textContent = `+${amount} EXP`;
    expEl.style.left = `${playerEl.offsetLeft + playerEl.offsetWidth / 2}px`;
    expEl.style.top = `${playerEl.offsetTop - 20}px`;
    effectContainerEl.appendChild(expEl);

    // Remove o elemento após a animação
    setTimeout(() => {
        expEl.remove();
    }, 1500);
}

// Barra de vida do inimigo
function createEnemyHealthBar (enemy) {
    // Remove a barra existente, se houver
    const existingBar = document.querySelector('.enemy-health-bar');
    if (existingBar) {
        existingBar.remove();
    }

    // Criar a barra de vida
    const healthBar = document.createElement('div');
    healthBar.className = 'enemy-health-bar';

    // Criar o preenchimento da barra
    const healthFill = document.createElement('div');
    healthFill.className = 'enemy-health-fill';
    healthBar.appendChild(healthFill);

    // Criar o nome do inimigo
    const nameEl = document.createElement('div');
    nameEl.className = 'enemy-name';
    nameEl.textContent = enemy.name;
    healthBar.appendChild(nameEl);

    // Adicionar a barra ao inimigo
    enemyEl.appendChild(healthBar);

    // Atualizar a barra com o valor atual
    updateEnemyHealthBar(enemy);
}

// Atualiza a barra de vida do inimigo
function updateEnemyHealthBar (enemy) {
    const healthBar = document.querySelector('.enemy-health-fill');
    if (!healthBar) return;

    // Calcular porcentagem de vida
    const percent = Math.max(0, Math.min(100, (enemy.health / enemy.maxHealth) * 100));

    // Atualizar a largura da barra
    healthBar.style.width = `${percent}%`;

    // Mudar a cor baseada na porcentagem de vida
    if (percent > 50) {
        healthBar.style.backgroundColor = '#4CAF50'; // Verde
    } else if (percent > 25) {
        healthBar.style.backgroundColor = '#FFC107'; // Amarelo
    } else {
        healthBar.style.backgroundColor = '#F44336'; // Vermelho
    }
}

// Inicia o combate com um inimigo
function startCombat () {
    if (inCombat) return;

    inCombat = true;

    // Para a animação do cenário durante o combate
    cancelAnimationFrame(animationId);
    animationId = null;

    // Decide se é um encontro de chefe baseado em contadores
    const isBossEncounter =
        (killCount > 0 && killCount % 5 === 0) ||
        (eventCounter > 0 && eventCounter % 10 === 0);

    // Gera um inimigo ou chefe
    const enemy = isBossEncounter ? generateBoss() : generateEnemy();

    // Remove todas as classes que contenham "enemy-layout-"
    enemyEl.classList.forEach((className) => {
        if (className.startsWith("enemy-layout-")) {
            enemyEl.classList.remove(className);
        }
    });

    enemyEl.classList.add(`enemy-layout-${enemy.name.replace(/\s+/g, '-')}`);

    // Aplica escala para chefes
    if (isBossEncounter) {
        enemyEl.classList.add("boss-enemy");
        bossEncountered = true;

        // Toca música de chefe
        playSound("bossMusic");

        // Efeito dramático para entrada do chefe
        gameAreaEl.classList.add("boss-encounter");
        setTimeout(() => {
            gameAreaEl.classList.remove("boss-encounter");
        }, 2000);
    } else {
        enemyEl.classList.remove("boss-enemy");
        bossEncountered = false;

        // Toca música de combate normal
        playSound("battleMusic");
    }

    // Mostra o inimigo com animação
    enemyEl.style.display = "block";
    enemyEl.style.opacity = "0";
    enemyEl.style.transform = "scale(0.5)";

    setTimeout(() => {
        enemyEl.style.opacity = "1";
        enemyEl.style.transform = "scale(1)";

        // Cria a barra de vida do inimigo
        createEnemyHealthBar(enemy);
    }, 100);

    // Adiciona cartão do combate
    if (isBossEncounter) {
        addCard({
            title: `CHEFE: ${enemy.name}`,
            description: `${enemy.description || "Um poderoso adversário apareceu!"
                } (Vida: ${enemy.health}, Ataque: ${enemy.attack}, Defesa: ${enemy.defense
                })`,
            isBoss: true
        });

        // Efeito de entrada do chefe
        createParticleExplosion(
            enemyEl.offsetLeft + enemyEl.offsetWidth / 2,
            enemyEl.offsetTop + enemyEl.offsetHeight / 2,
            40,
            enemy.color || "#FF5252",
            2
        );
    } else {
        addCard({
            title: "Combate!",
            description: `Um ${enemy.name} apareceu! (Vida: ${enemy.health}, Ataque: ${enemy.attack}, Defesa: ${enemy.defense})`
        });
    }

    // Define posições iniciais dos elementos de ataque
    playerSlashEl.style.left = `${playerEl.offsetLeft + 30}px`;
    playerSlashEl.style.top = `${playerEl.offsetTop}px`;
    enemySlashEl.style.left = `${enemyEl.offsetLeft - 20}px`;
    enemySlashEl.style.top = `${enemyEl.offsetTop}px`;

    // Inicia a lógica de combate com animações
    let playerTurn = true;
    let specialAttackUsed = false;

    // Inicia a lógica de combate
    let combatInterval = setInterval(() => {
        if (playerTurn) {
            // Turno do jogador
            playerAttack();
        } else {
            // Turno do inimigo
            const specialAttackChance = Math.random() < 0.2 + player.level * 0.1;

            if (
                isBossEncounter &&
                !specialAttackUsed &&
                specialAttackChance &&
                enemy.health < enemy.maxHealth * 0.75
            ) {
                // Chefe usa ataque especial quando está com menos de 75% de vida
                specialAttackUsed = true;
                bossSpecialAttack(enemy);
            } else {
                enemyAttack();
                specialAttackUsed = false;
            }
        }

        // Atualiza a barra de vida do inimigo
        updateEnemyHealthBar(enemy);

        // Alterna os turnos
        playerTurn = !playerTurn;

        // Verifica fim de combate
        if (enemy.health <= 0 || player.health <= 0) {
            clearInterval(combatInterval);
            endCombat(enemy, isBossEncounter);
        }
    }, 2000); // Intervalo entre turnos

    function playerAttack () {
        // Animação de ataque do jogador
        const playerOriginalLeft = playerEl.style.left;
        const enemyPosition = enemyEl.getBoundingClientRect();

        // Verifica se a skill está ativa
        if (skillActive) {
            // Usa a skill em vez do ataque normal
            const skillDamage = useSkill(enemy);

            // Efeito de roubo de vida (se aplicável)
            const lifeStolen = Math.floor(skillDamage * (player.lifesteal / 100));
            if (lifeStolen > 0) {
                player.health = Math.min(player.maxHealth, player.health + lifeStolen);
                showHeal(playerEl, lifeStolen);
                createLifestealEffect(playerEl, enemyEl);
                playSound("lifesteal");
                updateStats();
            }

            // Atualiza a barra de vida
            updateEnemyHealthBar(enemy);

            return;
        }

        // Efeito de preparação
        createWindupEffect(playerEl);
        playSound("playerAttackPrepare");

        // Jogador se move para atacar
        setTimeout(() => {
            playerEl.style.transition = "all 0.4s ease";
            playerEl.style.left = `${enemyPosition.left - 30}px`;
            playSound("playerAttack");

            setTimeout(() => {
                // Exibe o efeito de corte
                playerSlashEl.style.left = `${enemyPosition.left - 15}px`;
                playerSlashEl.classList.add("show-slash");

                // Calcula dano
                const playerDamage = Math.max(1, player.attack - enemy.defense);
                enemy.health -= playerDamage;

                // Atualiza a barra de vida
                updateEnemyHealthBar(enemy);

                // Efeito visual de dano
                showDamage(enemyEl, playerDamage);
                enemyEl.classList.add("hit-animation");
                createImpactEffect(enemyEl);
                createBloodParticles(enemyEl, 15);
                playSound("enemyDamage");

                // Efeito de roubo de vida
                const lifeStolen = Math.floor(playerDamage * (player.lifesteal / 100));
                if (lifeStolen > 0) {
                    player.health = Math.min(
                        player.maxHealth,
                        player.health + lifeStolen
                    );
                    showHeal(playerEl, lifeStolen);
                    createLifestealEffect(playerEl, enemyEl);
                    playSound("lifesteal");
                    updateStats();
                }

                // Registra no log
                addCard({
                    title: "Seu Ataque",
                    description: `Você causou ${playerDamage} de dano ao ${enemy.name}. Vida restante: ${enemy.health < 0 ? 0 : enemy.health}
                        ${lifeStolen > 0
                            ? `Você roubou ${lifeStolen} de vida!`
                            : ""
                        }`
                });

                // Remove classes de animação
                setTimeout(() => {
                    playerSlashEl.classList.remove("show-slash");
                    enemyEl.classList.remove("hit-animation");

                    // Retorna o jogador à posição original
                    playerEl.style.left = playerOriginalLeft;
                }, 400);
            }, 400);
        }, 300);
    }

    function enemyAttack () {
        // Só continua se o inimigo ainda estiver vivo
        if (enemy.health <= 0) return;

        // Efeito de preparação
        createWindupEffect(enemyEl);
        playSound("enemyAttackPrepare");

        // Animação de ataque do inimigo
        setTimeout(() => {
            const enemyOriginalRight = enemyEl.style.right;
            const playerPosition = playerEl.getBoundingClientRect();

            // Inimigo se move para atacar
            enemyEl.style.transition = "all 0.4s ease";
            enemyEl.style.right = `${gameAreaEl.offsetWidth - playerPosition.right - 10
                }px`;

            playSound("enemyAttack");

            setTimeout(() => {
                // Exibe o efeito de corte
                enemySlashEl.style.left = `${playerPosition.left + 30}px`;
                enemySlashEl.classList.add("show-slash");

                // Calcula dano
                const enemyDamage = Math.max(1, enemy.attack - player.defense);
                player.health -= enemyDamage;
                updateStats();

                // Efeito visual de dano
                showDamage(playerEl, enemyDamage);
                playerEl.classList.add("hit-animation");
                createImpactEffect(playerEl);
                createBloodParticles(playerEl, 15);
                playSound("playerDamage");

                // Registra no log
                addCard({
                    title: "Ataque Inimigo",
                    description: `O ${enemy.name} causou ${enemyDamage} de dano a você.`
                });

                // Remove classes de animação
                setTimeout(() => {
                    enemySlashEl.classList.remove("show-slash");
                    playerEl.classList.remove("hit-animation");

                    // Retorna o inimigo à posição original
                    enemyEl.style.right = enemyOriginalRight;
                }, 400);
            }, 400);
        }, 300);
    }

    function bossSpecialAttack (boss) {
        // Efeito de carregamento do ataque especial
        createBossSpecialAttackChargeEffect(enemyEl, boss.color);

        // Som de carregamento
        playSound("bossSpecialCharge");

        // Adiciona aviso ao log
        addCard({
            title: "ATENÇÃO!",
            description: `${boss.name} está preparando seu ataque especial: ${boss.specialAttack}!`,
            isBoss: true
        });

        // Executa o ataque especial após um tempo
        setTimeout(() => {
            // Som do ataque especial
            playSound("bossSpecialAttack");

            // Efeito visual do ataque especial
            createBossSpecialAttackEffect(boss.specialAttack, boss.color);

            // Balança a tela
            gameAreaEl.classList.add("heavy-shake");
            setTimeout(() => {
                gameAreaEl.classList.remove("heavy-shake");
            }, 1000);

            // Calcula dano
            const specialDamage = boss.specialAttackDamage;
            player.health -= specialDamage;
            updateStats();

            // Efeito visual de dano
            showDamage(playerEl, specialDamage);
            playerEl.classList.add("special-hit-animation");
            createBloodParticles(playerEl, 30);

            // Registra no log
            addCard({
                title: "Ataque Especial!",
                description: `${boss.name} usou ${boss.specialAttack} causando ${specialDamage} de dano!`,
                isBoss: true
            });

            // Remove classes de animação
            setTimeout(() => {
                playerEl.classList.remove("special-hit-animation");
            }, 600);
        }, 2000);
    }

    function endCombat (enemy, isBoss) {
        if (enemy.health <= 0) {
            // Vitória
            killCount++;

            // Efeito de morte do inimigo
            createEnemyDeathEffect(enemyEl);
            playSound(isBoss ? "bossDefeat" : "enemyDefeat");

            // Ganho de experiência
            const expGained = enemy.experience || (isBoss ? 100 : 20);
            gainExperience(expGained);
            showExperienceGain(expGained);

            // Mensagem de vitória
            addCard({
                title: isBoss ? "CHEFE DERROTADO!" : "Vitória!",
                description: `Você derrotou o ${enemy.name}! Ganhou ${expGained} de experiência.`,
                isBoss: isBoss
            });

            // Salvar progresso após vitória em combate
            saveProgress();

            // Esconde o inimigo
            setTimeout(() => {
                enemyEl.style.display = "none";
                enemyEl.style.opacity = "0";

                // Remove a barra de vida
                const healthBar = document.querySelector('.enemy-health-bar');
                if (healthBar) {
                    healthBar.remove();
                }

                // Move para próxima etapa
                inCombat = false;
                moveToNextTile();
            }, 1500);
        } else {
            // Derrota
            playSound("playerDefeat");

            // Efeito de escurecimento da tela
            const gameOverOverlay = document.createElement("div");
            gameOverOverlay.className = "game-over-overlay";
            gameAreaEl.appendChild(gameOverOverlay);

            // Texto de Game Over
            const gameOverText = document.createElement("div");
            gameOverText.className = "game-over-text";
            gameOverText.textContent = "GAME OVER";
            gameOverOverlay.appendChild(gameOverText);

            // Fade in do overlay
            setTimeout(() => {
                gameOverOverlay.style.opacity = "1";
            }, 100);

            addCard({
                title: "Derrota!",
                description: `Você foi derrotado por ${enemy.name}... Sua jornada chegou ao fim.`
            });

            // Botão de reinício
            setTimeout(() => {
                const restartButton = document.createElement("button");
                restartButton.textContent = "Tentar Novamente";
                restartButton.className = "restart-button";
                gameOverOverlay.appendChild(restartButton);
                restartButton.addEventListener("click", () => {
                    resetGame();
                    gameOverOverlay.remove();
                });
            }, 2000);

            // Esconde o inimigo
            enemyEl.style.display = "none";

            // Remove a barra de vida
            const healthBar = document.querySelector('.enemy-health-bar');
            if (healthBar) {
                healthBar.remove();
            }

            // Termina o jogo
            inCombat = false;
            gameStarted = false;
        }
    }
}
// Reinicia o jogo
function resetGame () {
    // Reseta estatísticas do jogador
    player.health = 100;
    player.maxHealth = 100;
    player.attack = 10;
    player.defense = 5;
    player.lifesteal = 0;
    player.mana = 50;
    player.maxMana = 100;
    player.position = 0;
    player.level = 1;
    player.experience = 0;
    player.nextLevelExp = 100;

    // Reseta contadores
    killCount = 0;
    eventCounter = 0;

    // Reativa a skill
    skillReady = true;
    skillActive = false;
    lastSkillTime = 0;

    if (skillCooldownEl) {
        skillCooldownEl.style.height = "0";
    }

    // Limpa a área de cartões
    cardsArea.innerHTML = "";

    // Apaga o salvamento
    clearProgress();

    // Inicia o jogo novamente
    startGame();
}

// Cria elementos de cenário
function createSceneryElements () {
    sceneryEl.innerHTML = "";

    // Criar montanhas (em segundo plano)
    for (let i = 0; i < 3; i++) {
        const mountain = document.createElement("div");
        mountain.className = "mountain";
        mountain.style.left = `${i * 150 + 50}px`;
        sceneryEl.appendChild(mountain);
    }

    // Criar árvores (em primeiro plano)
    const treePositions = [80, 180, 300, 420, 500];
    for (let i = 0; i < 5; i++) {
        const tree = document.createElement("div");
        tree.className = "tree";
        tree.style.left = `${treePositions[i]}px`;
        tree.style.height = `${Math.random() * 20 + 50}px`;
        sceneryEl.appendChild(tree);
    }

    // Criar nuvens
    const cloudPositions = [50, 150, 280, 380];
    const cloudHeights = [15, 35, 25, 10];
    for (let i = 0; i < 4; i++) {
        const cloud = document.createElement("div");
        cloud.className = "cloud";
        cloud.style.left = `${cloudPositions[i]}px`;
        cloud.style.top = `${cloudHeights[i]}px`;
        sceneryEl.appendChild(cloud);
    }
}

// Inicia a animação do cenário
function animateScenery () {
    if (!gameStarted || inCombat) return;

    // Move o fundo
    backgroundPosition -= 0.5;
    backgroundEl.style.backgroundPosition = `${backgroundPosition}px 0`;

    // Move os elementos do cenário
    const sceneryElements = sceneryEl.children;
    for (let i = 0; i < sceneryElements.length; i++) {
        const element = sceneryElements[i];
        const currentLeft = parseFloat(element.style.left) || 0;
        let speed = 0.5;

        // Elementos diferentes se movem em velocidades diferentes para criar paralaxe
        if (element.className === "tree") {
            speed = movingForward ? 2 : 0.8;
        } else if (element.className === "mountain") {
            speed = movingForward ? 1 : 0.3;
        } else if (element.className === "cloud") {
            speed = movingForward ? 0.5 : 0.1;
        }

        element.style.left = `${currentLeft - speed}px`;

        // Reposiciona elemento quando sai da tela
        if (currentLeft < -200) {
            if (element.className === "tree") {
                element.style.left = "520px";
                element.style.height = `${Math.random() * 20 + 50}px`;
            } else if (element.className === "mountain") {
                element.style.left = "520px";
            } else if (element.className === "cloud") {
                element.style.left = "520px";
                element.style.top = `${Math.random() * 30 + 10}px`;
            }
        }
    }

    // Anima partículas
    updateParticles();

    animationId = requestAnimationFrame(animateScenery);
}

// Inicia o movimento para frente
function startMovingForward () {
    movingForward = true;

    if (animationId === null) {
        animateScenery();
    }

    // Efeito de vento enquanto se move
    createMovementParticles();

    // Para o movimento após um tempo
    setTimeout(() => {
        movingForward = false;
    }, 3000);
}

// Move o jogador para a próxima casa
function moveToNextTile () {
    player.position++;
    eventCounter++;

    // Move visualmente o jogador
    playerEl.style.left = "20%";

    // Som de movimento
    playSound("movement");

    // Inicia o movimento do cenário
    startMovingForward();

    // Reinicia a animação do cenário se estiver parada
    if (animationId === null) {
        animateScenery();
    }

    // Chance de evento narrativo
    if (eventCounter % 5 === 0 && Math.random() < 0.3) {
        triggerNarrativeEvent();
    }

    setTimeout(() => {
        // Gera uma nova situação (70% situação, 30% bônus)
        const nextEvent =
            Math.random() < 0.7 ? generateSituation() : generateBonus();

        addCard(nextEvent);

        // Reposiciona o jogador
        playerEl.style.left = "35%";
    }, 3000);
}

// Gatilho para eventos narrativos
function triggerNarrativeEvent () {
    const event =
        narrativeEvents[Math.floor(Math.random() * narrativeEvents.length)];

    // Efeito visual de evento narrativo
    createNarrativeEventEffect();

    // Som de evento narrativo
    playSound("narrativeEvent");

    // Adiciona o evento narrativo como um cartão especial
    addCard({
        title: event.title,
        description: event.description
    });
}

// Sistema de Skill
// Inicializa o sistema de skills
function initSkillSystem () {
    // Adiciona os estilos CSS
    addCustomStyles();

    // Cria o botão de skill
    skillButtonEl = document.createElement("div");
    skillButtonEl.id = "skill-button";
    skillButtonEl.className = "skill-button";
    skillButtonEl.innerHTML = `${currentSkill.icon}`;
    skillButtonEl.title = `${currentSkill.name}: ${currentSkill.description} (Custo: ${currentSkill.manaCost} mana)`;

    // Cria o indicador de cooldown
    skillCooldownEl = document.createElement("div");
    skillCooldownEl.className = "skill-cooldown";
    skillButtonEl.appendChild(skillCooldownEl);

    // Adiciona o botão ao game area
    gameAreaEl.appendChild(skillButtonEl);

    // Adiciona o evento de clique
    skillButtonEl.addEventListener("click", activateSkill);

    // Inicia o loop de atualização do cooldown
    updateSkillCooldown();
}

// Ativa a skill
function activateSkill () {
    // Verifica se a skill está pronta e se o jogador tem mana suficiente
    if (!skillReady || player.mana < currentSkill.manaCost || inCombat === false) {
        // Efeito visual de erro
        skillButtonEl.classList.add("skill-error");
        setTimeout(() => {
            skillButtonEl.classList.remove("skill-error");
        }, 300);

        // Som de erro
        playSound("skillError");
        return;
    }

    // Ativa a skill
    skillActive = true;

    // Efeito visual de ativação
    skillButtonEl.classList.add("skill-active");

    // Som de ativação
    playSound("skillActivate");

    // Mostra mensagem de skill ativada
    showSkillActivationMessage();
}

// Mostra mensagem de ativação da skill
function showSkillActivationMessage () {
    const messageEl = document.createElement("div");
    messageEl.className = "skill-activation-message";
    messageEl.innerHTML = `${currentSkill.name} ativado!`;
    messageEl.style.color = currentSkill.color;

    effectContainerEl.appendChild(messageEl);

    // Remove após a animação
    setTimeout(() => {
        messageEl.remove();
    }, 2000);
}

// Usa a skill durante o combate
function useSkill (enemy) {
    // Consome mana
    player.mana -= currentSkill.manaCost;
    updateStats();

    // Inicia cooldown
    skillReady = false;
    lastSkillTime = Date.now();
    skillButtonEl.classList.remove("skill-active");

    // Efeito visual da skill
    createSkillEffect(playerEl, enemyEl, currentSkill);

    // Som da skill
    playSound("skillUse");

    // Calcula dano (baseado no ataque do jogador)
    const skillDamage = Math.max(1, Math.floor(player.attack * currentSkill.damageMultiplier) - enemy.defense);

    // Aplica dano
    enemy.health -= skillDamage;

    // Efeito visual de dano
    showDamage(enemyEl, skillDamage);

    // Efeito de impacto
    createSkillImpactEffect(enemyEl, currentSkill.color);

    // Adiciona ao log
    addCard({
        title: `${currentSkill.name} usado!`,
        description: `Você usou ${currentSkill.name} causando ${skillDamage} de dano ao ${enemy.name}! Vida restante: ${enemy.health < 0 ? 0 : enemy.health}`
    });

    // Reseta o estado da skill
    skillActive = false;

    // Retorna o dano causado para a função de combate
    return skillDamage;
}

// Atualiza o cooldown da skill
function updateSkillCooldown () {
    if (!skillReady) {
        const currentTime = Date.now();
        const elapsedTime = currentTime - lastSkillTime;
        const cooldownProgress = Math.min(1, elapsedTime / currentSkill.cooldown);

        // Atualiza o visual do cooldown
        skillCooldownEl.style.height = `${(1 - cooldownProgress) * 100}%`;

        // Verifica se o cooldown acabou
        if (cooldownProgress >= 1) {
            skillReady = true;
            skillCooldownEl.style.height = "0";

            // Efeito visual de skill pronta
            skillButtonEl.classList.add("skill-ready");
            setTimeout(() => {
                skillButtonEl.classList.remove("skill-ready");
            }, 500);

            // Som de skill pronta
            playSound("skillReady");
        }
    }

    // Continua atualizando
    requestAnimationFrame(updateSkillCooldown);
}

// Cria efeito visual da skill
function createSkillEffect (source, target, skill) {
    // Efeito de preparação
    createSkillWindupEffect(source, skill.color);

    // Efeito de onda de energia
    setTimeout(() => {
        createSkillWaveEffect(source, target, skill.color);
    }, 300);
}

// Cria efeito de preparação da skill
function createSkillWindupEffect (source, color) {
    const windupEl = document.createElement("div");
    windupEl.className = "skill-windup";
    windupEl.style.left = `${source.offsetLeft}px`;
    windupEl.style.top = `${source.offsetTop}px`;
    windupEl.style.width = `${source.offsetWidth}px`;
    windupEl.style.height = `${source.offsetHeight}px`;
    windupEl.style.borderColor = color;

    effectContainerEl.appendChild(windupEl);

    // Remove após a animação
    setTimeout(() => {
        windupEl.remove();
    }, 500);
}

// Cria efeito de onda de energia
function createSkillWaveEffect (source, target, color) {
    const waveEl = document.createElement("div");
    waveEl.className = "skill-wave";
    waveEl.style.left = `${source.offsetLeft + source.offsetWidth / 2}px`;
    waveEl.style.top = `${source.offsetTop + source.offsetHeight / 2}px`;
    waveEl.style.backgroundColor = color;

    effectContainerEl.appendChild(waveEl);

    // Anima a onda até o alvo
    const sourceX = source.offsetLeft + source.offsetWidth / 2;
    const sourceY = source.offsetTop + source.offsetHeight / 2;
    const targetX = target.offsetLeft + target.offsetWidth / 2;
    const targetY = target.offsetTop + target.offsetHeight / 2;

    const angle = Math.atan2(targetY - sourceY, targetX - sourceX);

    let distance = 0;
    const totalDistance = Math.sqrt(
        Math.pow(targetX - sourceX, 2) + Math.pow(targetY - sourceY, 2)
    );

    const animateWave = () => {
        distance += 10;

        const progress = Math.min(1, distance / totalDistance);
        const currentX = sourceX + (targetX - sourceX) * progress;
        const currentY = sourceY + (targetY - sourceY) * progress;

        waveEl.style.left = `${currentX}px`;
        waveEl.style.top = `${currentY}px`;

        if (progress < 1) {
            requestAnimationFrame(animateWave);
        } else {
            // Chegou ao alvo
            waveEl.remove();
        }
    };

    animateWave();
}

// Cria efeito de impacto da skill
function createSkillImpactEffect (target, color) {
    // Explosão de partículas
    const targetX = target.offsetLeft + target.offsetWidth / 2;
    const targetY = target.offsetTop + target.offsetHeight / 2;

    createParticleExplosion(targetX, targetY, 20, color, 1);

    // Efeito de impacto
    const impactEl = document.createElement("div");
    impactEl.className = "skill-impact";
    impactEl.style.left = `${targetX}px`;
    impactEl.style.top = `${targetY}px`;
    impactEl.style.backgroundColor = color;

    effectContainerEl.appendChild(impactEl);

    // Remove após a animação
    setTimeout(() => {
        impactEl.remove();
    }, 300);
}

// Sistema de efeitos visuais
// Partícula individual
class Particle {
    constructor(x, y, color, size, speedX, speedY, gravity, duration) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.originalSize = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.gravity = gravity || 0;
        this.duration = duration || 1;
        this.life = 1; // 1 = 100% vida, 0 = morta

        this.element = document.createElement("div");
        this.element.className = "particle";
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.element.style.backgroundColor = this.color;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.element.style.opacity = this.life;
        effectContainerEl.appendChild(this.element);
    }

    update (deltaTime) {
        this.life -= deltaTime / this.duration;

        if (this.life <= 0) {
            this.element.remove();
            return false;
        }

        this.speedY += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY;

        // Atualiza o tamanho e a opacidade com base na vida restante
        const currentSize = this.originalSize * this.life;
        this.element.style.width = `${currentSize}px`;
        this.element.style.height = `${currentSize}px`;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.element.style.opacity = this.life;

        return true;
    }
}

// Atualiza todas as partículas
function updateParticles () {
    const deltaTime = 0.016; // ~60 FPS

    for (let i = particles.length - 1; i >= 0; i--) {
        const isAlive = particles[i].update(deltaTime);
        if (!isAlive) {
            particles.splice(i, 1);
        }
    }
}

// Cria uma explosão de partículas
function createParticleExplosion (x, y, count, color, duration) {
    for (let i = 0; i < count && particles.length < MAX_PARTICLES; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2;
        const speedX = Math.cos(angle) * speed;
        const speedY = Math.sin(angle) * speed;
        const size = Math.random() * 8 + 4;

        particles.push(
            new Particle(
                x,
                y,
                color,
                size,
                speedX,
                speedY,
                0.1,
                duration
            )
        );
    }
}

// Cria partículas de sangue
function createBloodParticles (target, count) {
    const x = target.offsetLeft + target.offsetWidth / 2;
    const y = target.offsetTop + target.offsetHeight / 2;

    for (let i = 0; i < count && particles.length < MAX_PARTICLES; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        const speedX = Math.cos(angle) * speed;
        const speedY = Math.sin(angle) * speed;
        const size = Math.random() * 5 + 2;

        particles.push(
            new Particle(
                x,
                y,
                "#FF0000",
                size,
                speedX,
                speedY,
                0.2,
                0.8
            )
        );
    }
}

// Cria partículas de cura
function createHealingParticles (target) {
    const x = target.offsetLeft + target.offsetWidth / 2;
    const y = target.offsetTop;

    for (let i = 0; i < 15 && particles.length < MAX_PARTICLES; i++) {
        const angle = Math.random() * Math.PI - Math.PI / 2; // -90° a 90°
        const speed = Math.random() * 2 + 1;
        const speedX = Math.cos(angle) * speed;
        const speedY = Math.sin(angle) * speed;
        const size = Math.random() * 6 + 3;

        particles.push(
            new Particle(
                x,
                y,
                "#4CAF50",
                size,
                speedX,
                speedY,
                -0.1, // gravidade negativa, sobe
                1.2
            )
        );
    }
}

// Cria partículas de mana
function createManaParticles (target) {
    const x = target.offsetLeft + target.offsetWidth / 2;
    const y = target.offsetTop;

    for (let i = 0; i < 15 && particles.length < MAX_PARTICLES; i++) {
        const angle = Math.random() * Math.PI - Math.PI / 2;
        const speed = Math.random() * 2 + 1;
        const speedX = Math.cos(angle) * speed;
        const speedY = Math.sin(angle) * speed;
        const size = Math.random() * 6 + 3;

        particles.push(
            new Particle(
                x,
                y,
                "#2196F3",
                size,
                speedX,
                speedY,
                -0.1,
                1.2
            )
        );
    }
}

// Cria partículas para aumento de estatísticas
function createStatBoostParticles (target, stat) {
    const x = target.offsetLeft + target.offsetWidth / 2;
    const y = target.offsetTop + target.offsetHeight / 2;

    // Cor baseada na estatística
    let color;
    switch (stat) {
        case "attack":
            color = "#FF9800"; // laranja
            break;
        case "defense":
            color = "#607D8B"; // azul acinzentado
            break;
        case "lifesteal":
            color = "#9C27B0"; // roxo
            break;
        default:
            color = "#FFEB3B"; // amarelo
    }

    for (let i = 0; i < 20 && particles.length < MAX_PARTICLES; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        const speedX = Math.cos(angle) * speed;
        const speedY = Math.sin(angle) * speed;
        const size = Math.random() * 5 + 3;

        particles.push(
            new Particle(
                x,
                y,
                color,
                size,
                speedX,
                speedY,
                0,
                1.5
            )
        );
    }
}

// Cria partículas para efeito de movimento
function createMovementParticles () {
    const interval = setInterval(() => {
        if (!movingForward) {
            clearInterval(interval);
            return;
        }

        const x = playerEl.offsetLeft - 10;
        const y = playerEl.offsetTop + playerEl.offsetHeight / 2;

        for (let i = 0; i < 2 && particles.length < MAX_PARTICLES; i++) {
            const speedX = -Math.random() * 3 - 2;
            const speedY = (Math.random() - 0.5) * 2;
            const size = Math.random() * 4 + 2;

            particles.push(
                new Particle(
                    x,
                    y,
                    "#FFFFFF",
                    size,
                    speedX,
                    speedY,
                    0,
                    0.5
                )
            );
        }
    }, 100);
}

// Cria efeito de impacto
function createImpactEffect (target) {
    const impactEl = document.createElement("div");
    impactEl.className = "impact-effect";
    impactEl.style.left = `${target.offsetLeft + target.offsetWidth / 2}px`;
    impactEl.style.top = `${target.offsetTop + target.offsetHeight / 2}px`;
    effectContainerEl.appendChild(impactEl);

    setTimeout(() => {
        impactEl.remove();
    }, 300);
}

// Cria efeito de preparação para ataque
function createWindupEffect (target) {
    const windupEl = document.createElement("div");
    windupEl.className = "windup-effect";
    windupEl.style.left = `${target.offsetLeft}px`;
    windupEl.style.top = `${target.offsetTop}px`;
    windupEl.style.width = `${target.offsetWidth}px`;
    windupEl.style.height = `${target.offsetHeight}px`;
    effectContainerEl.appendChild(windupEl);

    setTimeout(() => {
        windupEl.remove();
    }, 300);
}

// Cria efeito de roubo de vida
function createLifestealEffect (player, enemy) {
    const startX = enemy.offsetLeft + enemy.offsetWidth / 2;
    const startY = enemy.offsetTop + enemy.offsetHeight / 2;
    const endX = player.offsetLeft + player.offsetWidth / 2;
    const endY = player.offsetTop + player.offsetHeight / 2;

    for (let i = 0; i < 10 && particles.length < MAX_PARTICLES; i++) {
        const delay = i * 50;

        setTimeout(() => {
            const particle = document.createElement("div");
            particle.className = "lifesteal-particle";
            particle.style.left = `${startX}px`;
            particle.style.top = `${startY}px`;
            effectContainerEl.appendChild(particle);

            // Animação do movimento da partícula
            const duration = 500;
            const startTime = Date.now();

            const animate = () => {
                const elapsedTime = Date.now() - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const currentX = startX + (endX - startX) * progress;
                const currentY = startY + (endY - startY) * progress;

                particle.style.left = `${currentX}px`;
                particle.style.top = `${currentY}px`;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    // Chegou ao destino
                    particle.remove();
                    createParticleExplosion(endX, endY, 3, "#9C27B0", 0.5);
                }
            };

            animate();
        }, delay);
    }
}

// Cria efeito de morte do inimigo
function createEnemyDeathEffect (enemy) {
    const x = enemy.offsetLeft + enemy.offsetWidth / 2;
    const y = enemy.offsetTop + enemy.offsetHeight / 2;

    // Explosão de partículas
    createParticleExplosion(x, y, 30, enemy.style.backgroundColor, 1.5);

    // Cria fade out do inimigo
    enemy.style.transition = "opacity 1.5s, transform 1.5s";
    enemy.style.opacity = "0";
    enemy.style.transform = "scale(0.2) rotate(720deg)";
}

// Cria efeito para carregamento de ataque especial de chefe
function createBossSpecialAttackChargeEffect (boss, color) {
    const chargeEffectEl = document.createElement("div");
    chargeEffectEl.className = "boss-charge-effect";
    chargeEffectEl.style.left = `${boss.offsetLeft}px`;
    chargeEffectEl.style.top = `${boss.offsetTop}px`;
    chargeEffectEl.style.width = `${boss.offsetWidth}px`;
    chargeEffectEl.style.height = `${boss.offsetHeight}px`;
    chargeEffectEl.style.boxShadow = `0 0 30px ${color}`;
    effectContainerEl.appendChild(chargeEffectEl);

    // Animação pulsante
    let scale = 1;
    let growing = true;
    const pulseInterval = setInterval(() => {
        if (growing) {
            scale += 0.05;
            if (scale >= 1.3) growing = false;
        } else {
            scale -= 0.05;
            if (scale <= 1) growing = true;
        }

        chargeEffectEl.style.transform = `scale(${scale})`;
    }, 50);

    // Remove após término do carregamento
    setTimeout(() => {
        clearInterval(pulseInterval);
        chargeEffectEl.remove();
    }, 2000);
}

// Cria efeito de ataque especial do chefe
function createBossSpecialAttackEffect (attackName, color) {
    // Efeitos diferentes com base no nome do ataque
    if (attackName.includes("Rajada") || attackName.includes("Flechas")) {
        // Efeito de múltiplos projéteis
        for (let i = 0; i < 20; i++) {
            const delay = i * 50;

            setTimeout(() => {
                const projectile = document.createElement("div");
                projectile.className = "boss-projectile";
                projectile.style.backgroundColor = color;

                // Posição inicial aleatória próxima ao inimigo
                const startX = enemyEl.offsetLeft + Math.random() * 50 - 25;
                const startY = enemyEl.offsetTop + Math.random() * 50 - 25;

                projectile.style.left = `${startX}px`;
                projectile.style.top = `${startY}px`;

                effectContainerEl.appendChild(projectile);

                // Animação do projétil
                const angle = Math.atan2(
                    playerEl.offsetTop - startY,
                    playerEl.offsetLeft - startX
                );

                const speed = 10;
                const speedX = Math.cos(angle) * speed;
                const speedY = Math.sin(angle) * speed;

                const moveProjectile = setInterval(() => {
                    const currentLeft = parseFloat(projectile.style.left) || startX;
                    const currentTop = parseFloat(projectile.style.top) || startY;

                    projectile.style.left = `${currentLeft + speedX}px`;
                    projectile.style.top = `${currentTop + speedY}px`;

                    // Verificar colisão com jogador
                    const projectileRect = projectile.getBoundingClientRect();
                    const playerRect = playerEl.getBoundingClientRect();

                    if (
                        projectileRect.left < playerRect.right &&
                        projectileRect.right > playerRect.left &&
                        projectileRect.top < playerRect.bottom &&
                        projectileRect.bottom > playerRect.top
                    ) {
                        clearInterval(moveProjectile);
                        projectile.remove();
                        createImpactEffect(playerEl);
                    }

                    // Remove quando sair da tela
                    if (
                        currentLeft < 0 ||
                        currentLeft > gameAreaEl.offsetWidth ||
                        currentTop < 0 ||
                        currentTop > gameAreaEl.offsetHeight
                    ) {
                        clearInterval(moveProjectile);
                        projectile.remove();
                    }
                }, 16);

                // Tempo limite para o projétil
                setTimeout(() => {
                    clearInterval(moveProjectile);
                    projectile.remove();
                }, 2000);
            }, delay);
        }
    } else if (attackName.includes("Baforada") || attackName.includes("Fogo")) {
        // Efeito de explosão em cone
        const fireEffect = document.createElement("div");
        fireEffect.className = "boss-fire-breath";
        fireEffect.style.left = `${enemyEl.offsetLeft}px`;
        fireEffect.style.top = `${enemyEl.offsetTop - 20}px`;
        effectContainerEl.appendChild(fireEffect);

        // Animação de expansão
        setTimeout(() => {
            fireEffect.style.width = "300px";
            fireEffect.style.opacity = "1";

            // Partículas de fogo
            const interval = setInterval(() => {
                const x = enemyEl.offsetLeft + Math.random() * 300;
                const y = enemyEl.offsetTop - 20 + Math.random() * 40;

                createParticleExplosion(x, y, 3, "#FF9800", 0.5);
            }, 100);

            // Remove após término
            setTimeout(() => {
                clearInterval(interval);
                fireEffect.style.width = "0";
                fireEffect.style.opacity = "0";

                setTimeout(() => {
                    fireEffect.remove();
                }, 500);
            }, 1500);
        }, 100);
    } else if (attackName.includes("Terremoto")) {
        // Efeito de terremoto
        const duration = 2000;
        const startTime = Date.now();

        // Cria rachaduras no chão
        for (let i = 0; i < 5; i++) {
            const crack = document.createElement("div");
            crack.className = "ground-crack";
            crack.style.left = `${Math.random() * (gameAreaEl.offsetWidth - 100)}px`;
            crack.style.width = `${Math.random() * 50 + 50}px`;
            effectContainerEl.appendChild(crack);

            // Expande a rachadura
            setTimeout(() => {
                crack.style.height = "100px";
            }, i * 200);

            // Remove após o efeito
            setTimeout(() => {
                crack.remove();
            }, duration);
        }

        // Balança a tela continuamente
        const earthquakeInterval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;

            if (elapsedTime >= duration) {
                clearInterval(earthquakeInterval);
                gameAreaEl.style.transform = "translate(0, 0)";
                return;
            }

            const offsetX = (Math.random() - 0.5) * 20;
            const offsetY = (Math.random() - 0.5) * 20;

            gameAreaEl.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }, 50);
    } else {
        // Efeito genérico para outros ataques
        createParticleExplosion(
            playerEl.offsetLeft + playerEl.offsetWidth / 2,
            playerEl.offsetTop + playerEl.offsetHeight / 2,
            40,
            color,
            1.5
        );
    }
}

// Cria efeito para evento narrativo
function createNarrativeEventEffect () {
    // Efeito de flash na tela
    const flashOverlay = document.createElement("div");
    flashOverlay.className = "narrative-flash";
    gameAreaEl.appendChild(flashOverlay);

    setTimeout(() => {
        flashOverlay.style.opacity = "0.7";

        setTimeout(() => {
            flashOverlay.style.opacity = "0";

            setTimeout(() => {
                flashOverlay.remove();
            }, 500);
        }, 300);
    }, 10);
}

// Cria efeito de clique
function createClickEffect (button) {
    button.classList.add("button-clicked");

    setTimeout(() => {
        button.classList.remove("button-clicked");
    }, 100);
}

// Sistema básico de som
function playSound (soundName) {
    // Implementação fictícia - em um jogo real, carregaria e tocaria arquivos de som
    console.log(`Playing sound: ${soundName}`);
}

// Inicia o jogo
function startGame () {
    if (gameStarted) return;

    gameStarted = true;

    // Toca música de background
    playSound("backgroundMusic");

    // Limpa área de cartões
    cardsArea.innerHTML = "";

    // Cria elementos de cenário
    createSceneryElements();

    // Inicia a animação do cenário
    animateScenery();

    // Inicializa o sistema de skills
    initSkillSystem();
    
    // Adiciona controles de salvamento
    // addSaveControls();

    // Adiciona cartão inicial
    addCard({
        title: "A Jornada Começa",
        description: "Você parte em busca de aventuras em um mundo misterioso..."
    });

    // Salva o estado inicial do jogo
    saveProgress();

    // Gera a primeira situação
    setTimeout(() => {
        const firstEvent = generateSituation();
        addCard(firstEvent);
    }, 1000);
}

// Função para continuar jogo salvo
function continueGame() {
    if (loadProgress()) {
        startGame();
        
        // Atualiza a interface com os dados carregados
        updateStats();
        
        // Adiciona um cartão de boas-vindas de volta
        addCard({
            title: "Jornada Continuada",
            description: `Bem-vindo de volta! Você está no nível ${player.level} com ${player.experience} de experiência. Sua jornada continua...`
        });
        
        // Esconder tela de título
        document.getElementById('title-screen').style.display = 'none';
    }
}

// Evento de clique do botão de início
startButton.addEventListener("click", () => {
    startGame();
});

// Inicializa a interface
updateStats();

// Verifica se existe um jogo salvo ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se há um jogo salvo
    if (hasSavedGame()) {
        // Adiciona botão para continuar jogo
        const titleScreen = document.getElementById('title-screen');
        const buttonsContainer = document.querySelector('#start-title-btn').parentNode;
        
        // Adicionar botão de continuar antes do botão "Ver Bosses"
        const continueBtn = document.createElement('button');
        continueBtn.id = 'continue-game-btn';
        continueBtn.className = 'continue-game-btn';
        continueBtn.textContent = 'CONTINUAR JORNADA';
        
        // Inserir após o botão iniciar
        buttonsContainer.insertBefore(continueBtn, document.querySelector('#preview-bosses-btn'));
        
        // Adicionar evento de clique
        continueBtn.addEventListener('click', function() {
            titleScreen.style.display = 'none';
            continueGame();
        });
    }
});

// Adicionar evento para salvar automaticamente quando o usuário sair da página
window.addEventListener('beforeunload', function() {
    if (gameStarted) {
        saveProgress();
    }
});