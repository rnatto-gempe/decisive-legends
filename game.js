const narrativeEvents = [
    {
      title: "Visão do Passado",
      description:
        "Um flash de luz revela imagens do passado. Você vê a antiga civilização que habitava essas terras e o cataclismo que a destruiu."
    },
    {
      title: "Profecia do Oráculo",
      description:
        "Uma voz ecoa em sua mente: 'O portador da chama enfrentará o senhor das sombras quando a lua sangrar'."
    },
    {
      title: "Fragmento de Memória",
      description:
        "Uma sensação de déjà vu o atinge. Por um momento, você se lembra de algo importante sobre seu passado que havia esquecido."
    },
    {
      title: "Sussurros do Vento",
      description:
        "O vento carrega vozes distantes que narram uma história antiga sobre um herói portador de uma marca idêntica à sua."
    },
    {
      title: "Sonho Profético",
      description:
        "Você adormece por alguns instantes e tem uma visão vívida do futuro. Nela, você vê um castelo em chamas e uma figura coroada de espinhos."
    },
    {
      title: "Escultura Ancestral",
      description:
        "Você encontra uma escultura antiga que retrata uma figura idêntica a você empunhando uma arma lendária contra uma besta das sombras."
    },
    {
      title: "Conexão Astral",
      description:
        "Por um momento, as estrelas formam um padrão no céu que parece contar sua história. Uma constelação brilha mais intensamente, como se o observasse."
    },
    {
      title: "Cicatriz Ressonante",
      description:
        "Uma cicatriz ou marca em seu corpo começa a brilhar sutilmente quando você passa por um local antigo. Você sente uma conexão inexplicável com este lugar."
    },
    {
      title: "Reflexos de Outros Mundos",
      description:
        "Em um lago perfeitamente parado, você vê não apenas seu reflexo, mas versões alternativas de si mesmo em mundos paralelos, cada um seguindo um caminho diferente."
    },
    {
      title: "Chamado das Profundezas",
      description:
        "Uma voz antiga ecoa de um abismo, chamando seu nome de forma que apenas você pode ouvir. 'Seu destino está nas profundezas', ela sussurra."
    },
    {
      title: "Manuscrito Perdido",
      description:
        "Você encontra páginas de um livro antigo espalhadas pelo caminho. Ao juntar algumas delas, percebe que contam a história de alguém muito parecido com você."
    },
    {
      title: "Dança das Sombras",
      description:
        "Sua sombra momentaneamente se move de forma independente, como se tentasse comunicar algo importante antes de voltar ao normal."
    },
    {
      title: "Encontro com o Eremita",
      description:
        "Um velho sábio o reconhece imediatamente: 'Ah, o escolhido retornou. Os sinais estavam corretos.' Ele desaparece antes que você possa questioná-lo."
    },
    {
      title: "Eco do Futuro",
      description:
        "Você ouve o eco de uma conversa que ainda não aconteceu, palavras que você mesmo dirá em um momento crucial que está por vir."
    },
    {
      title: "Pinturas Proféticas",
      description:
        "Em uma caverna, você encontra pinturas rupestres que mostram sua jornada até o momento presente e indicam caminhos futuros ainda não percorridos."
    },
    {
      title: "Espelho da Verdade",
      description:
        "Um espelho mágico não mostra seu reflexo atual, mas quem você realmente é por dentro, revelando aspectos de si mesmo que você não conhecia."
    },
    {
      title: "Convergência Temporal",
      description:
        "Por um breve momento, você vislumbra versões mais jovens e mais velhas de si mesmo, como se todas as suas possíveis idades existissem simultaneamente."
    },
    {
      title: "Presságio nas Chamas",
      description:
        "As chamas de uma fogueira formam imagens que contam uma história antiga sobre um campeão destinado a enfrentar a escuridão. A figura no fogo se parece muito com você."
    },
    {
      title: "Marca do Destino",
      description:
        "Um símbolo misterioso aparece momentaneamente em sua pele, idêntico a antigos símbolos que você tem visto em templos e monumentos durante sua jornada."
    },
    {
      title: "Chamado da Realeza",
      description:
        "Um mensageiro espectral aparece brevemente, prestando reverência a você como se fosse da realeza: 'Seu trono aguarda, Majestade. Seu povo precisa de você.'"
    },
    {
      title: "Encontro com seu Futuro",
      description:
        "Uma versão mais velha de você aparece momentaneamente, oferecendo um conselho críptico: 'Quando chegar a hora, escolha com o coração, não com a espada.'"
    },
    {
      title: "Lembranças Ancestrais",
      description:
        "Memórias que não são suas fluem por sua mente - você vivencia momentos da vida de um ancestral distante cujo caminho se assemelha muito ao seu."
    },
    {
      title: "Canção Esquecida",
      description:
        "Uma melodia antiga surge em sua mente, uma canção que você nunca aprendeu mas conhece perfeitamente. Ela fala de um herói com sua exata descrição."
    },
    {
      title: "Convergência de Linhas Ley",
      description:
        "Você sente a terra pulsar sob seus pés enquanto linhas de energia mágica se cruzam neste exato ponto, criando uma visão momentânea de eventos significativos do passado e futuro."
    },
    {
      title: "Segredo nas Estrelas",
      description:
        "As estrelas brevemente se reorganizam, formando uma mensagem em uma língua antiga que, inexplicavelmente, você consegue compreender: 'O equilíbrio depende da sua escolha.'"
    },
    {
      title: "Sussurros do Abismo",
      description:
        "Uma voz das profundezas ressoa em sua mente: 'Você é o último de sua linhagem. Somente você pode selar o portal antes que eles retornem.'"
    },
    {
      title: "Relógio Congelado",
      description:
        "Todo o tempo ao seu redor para por alguns segundos. Neste momento de suspensão, você vislumbra figuras espectrais observando sua jornada com grande interesse."
    },
    {
      title: "Livro do Destino",
      description:
        "Um tomo antigo se abre sozinho ao seu toque, revelando páginas que descrevem sua vida até o momento presente. As próximas páginas estão em branco, aguardando suas decisões."
    },
    {
      title: "Marca do Campeão",
      description:
        "Uma marca ancestral aparece brevemente em sua mão, idêntica àquelas retratadas nos heróis míticos que, segundo as lendas, salvaram o mundo em eras passadas."
    },
    {
      title: "Presença Divina",
      description:
        "Uma presença divina se manifesta sutilmente ao seu redor. 'Você foi escolhido', sussurra uma voz etérea. 'Seu sacrifício não será esquecido.'"
    },
    {
      title: "Espíritos Ancestrais",
      description:
        "Figuras espirituais de guerreiros antigos aparecem momentaneamente, observando você com aprovação. Eles executam um gesto de respeito antes de desaparecerem."
    },
    {
      title: "Eco das Batalhas Passadas",
      description:
        "Você ouve momentaneamente os sons de uma batalha antiga ocorrida neste mesmo local. Os guerreiros gritam um nome em meio ao caos - o seu nome."
    },
    {
      title: "Reflexo no Tempo",
      description:
        "Ao tocar uma água cristalina, você vê não seu reflexo atual, mas como você será no futuro - mais velho, com cicatrizes de batalha, porém com um olhar de paz."
    },
    {
      title: "Visão do Trono Vazio",
      description:
        "Uma visão repentina mostra um salão majestoso com um trono vazio. Todos na sala se viram para você, como se esperassem que você ocupasse o lugar que lhe é de direito."
    },
    {
      title: "Sussurro dos Mortos",
      description:
        "Passando por um antigo campo de batalha, você ouve os sussurros dos que ali pereceram: 'Você carrega nossa esperança. Não repita nossos erros.'"
    },
    {
      title: "Chamado da Floresta",
      description:
        "As árvores se curvam sutilmente em sua direção, como se reconhecessem uma presença real. Uma voz vegetal murmura: 'O protetor retornou. A floresta se lembra.'"
    },
    {
      title: "Mapa nas Estrelas",
      description:
        "Olhando para o céu noturno, você percebe que as estrelas formam um mapa que indica um local específico - um lugar que você sente que deve encontrar."
    },
    {
      title: "Vislumbre do Guardião",
      description:
        "Por um momento, você vê a imagem de um guardião ancestral ao seu lado - uma figura protetora que parece ter sido designada para acompanhar sua linhagem."
    },
    {
      title: "Sangue Desperto",
      description:
        "Uma gota de seu sangue cai no solo e provoca uma reação inesperada - símbolos antigos brilham no chão e você sente o poder de seus ancestrais correndo em suas veias."
    },
    {
      title: "Ciclo Renovado",
      description:
        "Uma visão mostra o mesmo local em diferentes épocas - passado, presente e futuro. Em cada era, alguém com sua aparência enfrenta o mesmo inimigo em formas diferentes."
    },
    {
      title: "A Trama do Destino",
      description:
        "Você vislumbra brevemente os fios do destino - linhas douradas que conectam você a pessoas e lugares importantes, revelando que nada em sua jornada tem sido por acaso."
    },
    {
      title: "Voz do Primeiro",
      description:
        "A voz do primeiro de sua linhagem ressoa em sua mente: 'Carregue nosso legado com honra. O pacto que fizemos deve ser mantido até o fim dos tempos.'"
    },
    {
      title: "Árvore da Profecia",
      description:
        "Uma árvore antiga cujas folhas se movem sem vento forma padrões que contam uma história - sua história, incluindo eventos que ainda não aconteceram."
    },
    {
      title: "Escolha Predestinada",
      description:
        "Você revive momentaneamente uma decisão crucial que tomou no passado, percebendo que forças invisíveis guiaram sua mão. 'Todas as escolhas levam a este momento', sussurra uma voz."
    },
    {
      title: "Sentinela do Tempo",
      description:
        "Uma figura encapuzada o observa de longe e desaparece quando notada. Você tem a estranha sensação de que essa entidade tem monitorado pontos cruciais de sua vida."
    },
    {
      title: "O Chamado do Abismo",
      description:
        "Um abismo se abre mentalmente diante de você, revelando horrores e maravilhas além da compreensão. 'Apenas você pode impedir que eles escapem', sussurra uma voz do vazio."
    },
    {
      title: "A Primeira Chave",
      description:
        "Um objeto comum que você carrega desde o início de sua jornada brilha repentinamente, revelando-se como uma das chaves lendárias mencionadas nas profecias antigas."
    },
    {
      title: "Conselho dos Anciões",
      description:
        "Espíritos de sábios antigos se manifestam em um breve conclave ao seu redor. 'O momento que temíamos está próximo. Você é nossa última esperança.'"
    },
    {
      title: "A Porta Selada",
      description:
        "Você tem uma visão de uma porta colossal selada com magia antiga. De alguma forma, você sabe que seu destino está ligado ao que há além dela - e que somente você pode abri-la."
    },
    {
      title: "Reflexos da Alma",
      description:
        "Em um momento de quietude, seu reflexo se divide em dois - um radiante de luz, outro consumido pela escuridão. Ambos são possibilidades de seu futuro, dependendo das escolhas que fizer."
    },
    {
      title: "O Nome Verdadeiro",
      description:
        "Em um sonho vívido, você ouve seu nome verdadeiro - não aquele pelo qual é chamado, mas o nome que define sua essência e concede poder sobre seu destino."
    },
    {
      title: "Cronologia Fraturada",
      description:
        "Por um instante, você vê além da linha do tempo atual - vislumbres de realidades alternativas onde suas diferentes escolhas levaram a desfechos drasticamente diferentes."
    },
    {
      title: "A Última Página",
      description:
        "Você encontra um livro antigo cuja última página mostra uma ilustração de você enfrentando uma entidade sombria. O resultado da batalha está borrado, como se ainda não determinado."
    },
    {
      title: "Sangue da Aliança",
      description:
        "Uma ferida em seu braço forma momentaneamente um símbolo de pacto. Você se lembra de uma promessa ancestral feita por sua linhagem a poderes além da compreensão mortal."
    },
    {
      title: "Convergência de Heróis",
      description:
        "Em um momento de descanso, você vislumbra outros heróis de diferentes terras, todos convergindo para um único ponto de confronto final. Você é um deles."
    },
    {
      title: "O Pilar Esquecido",
      description:
        "Você tem uma visão de um antigo pilar de poder - um dos vários que sustentam a realidade. De alguma forma, você sabe que deve encontrá-lo antes que caia nas mãos erradas."
    },
    {
      title: "Eclipse Profético",
      description:
        "Durante um raro eclipse, sombras formam mensagens em uma língua que você nunca aprendeu, mas compreende perfeitamente: 'Quando as luzes se apagarem, apenas você permanecerá.'"
    },
    {
      title: "A Arma Predestinada",
      description:
        "Sua arma vibra com energia incomum ao passar por um local antigo. Por um momento, ela se transforma, revelando sua verdadeira forma - uma relíquia lendária ligada ao seu destino."
    },
    {
      title: "Sussurros da Coroa",
      description:
        "Você ouve momentaneamente os sussurros de uma coroa antiga: 'Todos os falsos reis cairão. Somente o verdadeiro herdeiro poderá me empunhar sem ser consumido.'"
    },
    {
      title: "O Véu Rasgado",
      description:
        "Por um momento, o véu entre os mundos se rasga, e você vislumbra criaturas de outros planos observando sua jornada com intenso interesse."
    }
  ];
  
  // Ajustar a dificuldade dos chefes
  const bosses = [
    {
      name: "Rei Goblin",
      health: 200, // Aumentado de 150
      attack: 20, // Aumentado de 15
      defense: 12, // Aumentado de 8
      color: "#558B2F",
      specialAttack: "Rajada de Flechas",
      specialAttackDamage: 30, // Aumentado de 20
      abilities: ["regeneração", "frenesi"],
      experience: 100, // Reduzido de 120
      description:
        "Um goblin gigante com uma coroa de ossos, empunhando um cetro macabro. Comanda uma horda de goblins menores e utiliza táticas surpreendentemente inteligentes."
    },
    {
      name: "Quimera",
      health: 240, // Aumentado de 180
      attack: 25, // Aumentado de 18
      defense: 10, // Aumentado de 6
      color: "#9C27B0",
      specialAttack: "Baforada de Fogo",
      specialAttackDamage: 35, // Aumentado de 25
      abilities: ["ataque triplo", "venenoso"],
      experience: 130, // Reduzido de 150
      description:
        "Uma besta monstruosa com cabeça de leão, corpo de cabra e cauda de serpente. Cada parte possui um ataque diferente, tornando-a extremamente perigosa e imprevisível."
    },
    {
      name: "Guardião de Pedra",
      health: 220,
      attack: 14,
      defense: 12,
      color: "#607D8B",
      specialAttack: "Terremoto",
      specialAttackDamage: 22,
      abilities: ["escudo refletor", "fúria crescente"],
      experience: 160,
      description:
        "Uma estátua colossal animada por magia antiga, com runas brilhantes por todo seu corpo rochoso. Cada golpe que recebe aumenta sua fúria e poder de ataque."
    },
    {
      name: "Necromante Kardaros",
      health: 140,
      attack: 12,
      defense: 10,
      color: "#303F9F",
      specialAttack: "Dreno Vital",
      specialAttackDamage: 18,
      abilities: ["invocar mortos-vivos", "maldição", "teleporte"],
      experience: 180,
      description:
        "Um feiticeiro humano corrompido pelo poder da necromancia. Veste mantos negros adornados com ossos e empunha um cajado feito de uma coluna vertebral. Pode convocar mortos-vivos e lançar maldições debilitantes."
    },
    {
      name: "Hidra Venenosa",
      health: 200,
      attack: 16,
      defense: 8,
      color: "#00BFA5",
      specialAttack: "Spray Venenoso",
      specialAttackDamage: 15,
      abilities: [
        "regeneração de cabeças",
        "imunidade a veneno",
        "ataques múltiplos"
      ],
      experience: 200,
      description:
        "Uma serpente monstruosa de múltiplas cabeças, cada uma gotejando veneno mortal. Quando uma cabeça é cortada, duas crescem em seu lugar, tornando-a mais perigosa conforme a batalha progride."
    },
    {
      name: "Senhor da Forja",
      health: 180,
      attack: 20,
      defense: 15,
      color: "#BF360C",
      specialAttack: "Martelo Flamejante",
      specialAttackDamage: 30,
      abilities: ["armadura fundida", "armas encantadas", "controle do fogo"],
      experience: 190,
      description:
        "Um gigante humanóide cuja pele parece metal fundido. Habita uma forja vulcânica e utiliza armas incandescentes que podem derreter armaduras comuns. Sua própria pele é quase impenetrável para armas normais."
    },
    {
      name: "Banshee da Floresta",
      health: 130,
      attack: 22,
      defense: 5,
      color: "#4DB6AC",
      specialAttack: "Grito Ensurdecedor",
      specialAttackDamage: 35,
      abilities: ["forma etérea", "dreno de mana", "invisibilidade"],
      experience: 170,
      description:
        "O espírito vingativo de uma dríade traída, agora assombra a floresta onde foi assassinada. Seu grito pode paralisar de medo o mais corajoso dos guerreiros e sua forma etérea torna difícil acertá-la com armas convencionais."
    },
    {
      name: "Wyrm Antigo",
      health: 250,
      attack: 18,
      defense: 18,
      color: "#FFC107",
      specialAttack: "Tempestade Elétrica",
      specialAttackDamage: 40,
      abilities: ["voo", "escamas impenetráveis", "domínio do relâmpago"],
      experience: 250,
      description:
        "Um dragão serpentino ancião que viveu por milênios. Suas escamas azul-metálicas são quase impenetráveis e ele controla tempestades com sua mente. Raramente sai de seu covil nas montanhas, exceto para defender seu território."
    },
    {
      name: "Cavaleiro do Abismo",
      health: 200,
      attack: 25,
      defense: 15,
      color: "#212121",
      specialAttack: "Corte Dimensional",
      specialAttackDamage: 35,
      abilities: ["absorção de sombras", "golpes rápidos", "teletransporte"],
      experience: 220,
      description:
        "Um cavaleiro em armadura negra que fez um pacto com entidades das trevas. Sua espada pode cortar a própria realidade, criando fendas dimensionais. A armadura absorve luz e magia, tornando-o mais forte em ambientes escuros."
    },
    {
      name: "Kraken das Profundezas",
      health: 300,
      attack: 16,
      defense: 10,
      color: "#01579B",
      specialAttack: "Maelstrom",
      specialAttackDamage: 28,
      abilities: ["tentáculos múltiplos", "constrição", "jato de tinta"],
      experience: 240,
      description:
        "Uma criatura colossal com dezenas de tentáculos que pode arrastar navios inteiros para as profundezas. Sua pele viscosa é resistente a muitos tipos de dano e pode criar redemoinhos devastadores nas águas ao seu redor."
    },
    {
      name: "Titã de Obsidiana",
      health: 400,
      attack: 30,
      defense: 25,
      color: "#263238",
      specialAttack: "Pulso de Aniquilação",
      specialAttackDamage: 50,
      abilities: [
        "regeneração",
        "invulnerabilidade temporária",
        "absorção de energia"
      ],
      experience: 500,
      description:
        "O guardião final, uma entidade colossal feita de obsidiana pura com veias de energia primordial. Criado pelos deuses antigos para proteger os segredos mais profundos do mundo. Seu poder é quase divino, e derrotá-lo requer tanto estratégia quanto força bruta."
    }
  ];
  
  // Ajustar a dificuldade dos inimigos
  const enemies = [
    // Inimigos básicos
    {
      name: "Goblin",
      health: 50, // Aumentado de 30
      attack: 7, // Aumentado de 5
      defense: 3, // Aumentado de 2
      color: "#8BC34A",
      experience: 15, // Reduzido de 20
      type: "comum"
    },
    {
      name: "Lobo",
      health: 40, // Aumentado de 25
      attack: 9, // Aumentado de 7
      defense: 2, // Aumentado de 1
      color: "#795548",
      experience: 20, // Reduzido de 25
      type: "comum"
    },
    {
      name: "Esqueleto",
      health: 35,
      attack: 4,
      defense: 3,
      color: "#BDBDBD",
      experience: 30,
      type: "comum"
    },
    {
      name: "Slime",
      health: 20,
      attack: 3,
      defense: 0,
      color: "#4CAF50",
      experience: 15,
      type: "comum"
    },
    {
      name: "Rato Gigante",
      health: 15,
      attack: 4,
      defense: 0,
      color: "#9E9E9E",
      experience: 12,
      type: "comum"
    },
    {
      name: "Morcego Vampiro",
      health: 18,
      attack: 6,
      defense: 0,
      color: "#5D4037",
      experience: 18,
      type: "comum"
    },
    {
      name: "Aranha Venenosa",
      health: 22,
      attack: 8,
      defense: 1,
      color: "#7B1FA2",
      experience: 28,
      type: "comum"
    },
    {
      name: "Kobold",
      health: 28,
      attack: 6,
      defense: 2,
      color: "#FF9800",
      experience: 22,
      type: "comum"
    },
    {
      name: "Duende",
      health: 22,
      attack: 3,
      defense: 1,
      color: "#66BB6A",
      experience: 18,
      type: "comum"
    },
    {
      name: "Zumbi",
      health: 40,
      attack: 4,
      defense: 1,
      color: "#689F38",
      experience: 25,
      type: "comum"
    },
  
    // Inimigos médios
    {
      name: "Ogro",
      health: 60,
      attack: 8,
      defense: 3,
      color: "#33691E",
      experience: 40,
      type: "médio"
    },
    {
      name: "Troll",
      health: 70,
      attack: 9,
      defense: 4,
      color: "#558B2F",
      experience: 45,
      type: "médio"
    },
    {
      name: "Guerreiro Esqueleto",
      health: 45,
      attack: 10,
      defense: 5,
      color: "#757575",
      experience: 38,
      type: "médio"
    },
    {
      name: "Elementar de Fogo",
      health: 50,
      attack: 12,
      defense: 2,
      color: "#FF5722",
      experience: 42,
      type: "médio"
    },
    {
      name: "Fantasma",
      health: 35,
      attack: 7,
      defense: 7,
      color: "#B0BEC5",
      experience: 36,
      type: "médio"
    },
    {
      name: "Golem de Pedra",
      health: 65,
      attack: 6,
      defense: 8,
      color: "#607D8B",
      experience: 44,
      type: "médio"
    },
    {
      name: "Harpia",
      health: 40,
      attack: 11,
      defense: 3,
      color: "#8D6E63",
      experience: 40,
      type: "médio"
    },
    {
      name: "Homem-Lagarto",
      health: 55,
      attack: 8,
      defense: 6,
      color: "#2E7D32",
      experience: 42,
      type: "médio"
    },
    {
      name: "Golem de Gelo",
      health: 58,
      attack: 7,
      defense: 7,
      color: "#90CAF9",
      experience: 43,
      type: "médio"
    },
    {
      name: "Druida Corrompido",
      health: 48,
      attack: 9,
      defense: 5,
      color: "#827717",
      experience: 41,
      type: "médio"
    },
  
    // Inimigos fortes
    {
      name: "Minotauro",
      health: 85,
      attack: 13,
      defense: 7,
      color: "#BF360C",
      experience: 60,
      type: "forte"
    },
    {
      name: "Cavaleiro das Trevas",
      health: 80,
      attack: 14,
      defense: 9,
      color: "#263238",
      experience: 65,
      type: "forte"
    },
    {
      name: "Gigante",
      health: 100,
      attack: 15,
      defense: 6,
      color: "#6D4C41",
      experience: 70,
      type: "forte"
    },
    {
      name: "Elementar de Raios",
      health: 75,
      attack: 17,
      defense: 4,
      color: "#FFC107",
      experience: 68,
      type: "forte"
    },
    {
      name: "Hidra",
      health: 90,
      attack: 12,
      defense: 8,
      color: "#00BFA5",
      experience: 72,
      type: "forte"
    },
    {
      name: "Ciclope",
      health: 95,
      attack: 16,
      defense: 5,
      color: "#5D4037",
      experience: 75,
      type: "forte"
    },
  {
    name: "Construto Arcano",
    health: 86,
    attack: 15,
    defense: 8,
    color: "#0091EA",
    experience: 72,
    type: "forte"
  },
    {
      name: "Manticora",
      health: 92,
      attack: 14,
      defense: 8,
      color: "#C2185B",
      experience: 74,
      type: "forte"
    },
    {
      name: "Lich",
      health: 82,
      attack: 18,
      defense: 6,
      color: "#4527A0",
      experience: 78,
      type: "forte"
    },
    {
      name: "Necromante",
      health: 78,
      attack: 16,
      defense: 7,
      color: "#303F9F",
      experience: 76,
      type: "forte"
    }
  ];
  
  const bonuses = [
    {
      title: "Tesouro Encontrado!",
  
      description: "Você encontra um pequeno baú com itens valiosos.",
  
      options: [
        {
          text: "Pegar o amuleto",
  
          effect: { lifesteal: 5 },
  
          description: "Você ganha +5% de roubo de vida.",
  
          effectDisplay:
            "<span class='option-effect option-positive'>+5% ROUBO DE VIDA</span>"
        },
  
        {
          text: "Pegar a adaga",
  
          effect: { attack: 3 },
  
          description: "Você ganha +3 de ataque.",
  
          effectDisplay:
            "<span class='option-effect option-positive'>+3 ATK</span>"
        },
  
        {
          text: "Pegar o escudo",
  
          effect: { defense: 2 },
  
          description: "Você ganha +2 de defesa.",
  
          effectDisplay:
            "<span class='option-effect option-positive'>+2 DEF</span>"
        }
      ]
    },
  
    {
      title: "Benção Divina",
  
      description: "Um raio de luz desce dos céus e envolve você.",
  
      options: [
        {
          text: "Aceitar a benção",
  
          effect: { health: 20, mana: 20 },
  
          description: "Você recupera 20 de vida e 20 de mana.",
  
          effectDisplay:
            "<span class='option-effect option-positive'>+20 HP</span> <span class='option-effect option-positive'>+20 MANA</span>"
        },
  
        {
          text: "Canalizar para sua arma",
  
          effect: { attack: 5 },
  
          description: "Você ganha +5 de ataque.",
  
          effectDisplay:
            "<span class='option-effect option-positive'>+5 ATK</span>"
        }
      ]
    },
    {
      title: "Obelisco Ancestral",
      description:
        "Uma estrutura de pedra coberta de runas brilhantes emerge do solo.",
      options: [
        {
          text: "Tocar o obelisco",
          effect: { mana: 40 },
          description:
            "Energia arcana flui para seu corpo, aumentando suas reservas mágicas.",
          effectDisplay:
            "<span class='option-effect option-positive'>+40 MANA</span>"
        },
        {
          text: "Decifrar as runas",
          effect: { attack: 2, defense: 2 },
          description:
            "As inscrições revelam segredos de combate, melhorando suas capacidades.",
          effectDisplay:
            "<span class='option-effect option-positive'>+2 ATK</span> <span class='option-effect option-positive'>+2 DEF</span>"
        }
      ]
    },
    {
      title: "Fruta Estranha",
      description:
        "Uma árvore única carrega frutas de cores vibrantes e forma incomum.",
      options: [
        {
          text: "Comer a fruta vermelha",
          effect: { health: 30 },
          description:
            "A fruta tem propriedades curativas poderosas, restaurando sua vitalidade.",
          effectDisplay:
            "<span class='option-effect option-positive'>+30 HP</span>"
        },
        {
          text: "Comer a fruta azul",
          effect: { mana: 35 },
          description:
            "A fruta nutre sua essência mágica, recarregando seu poder arcano.",
          effectDisplay:
            "<span class='option-effect option-positive'>+35 MANA</span>"
        }
      ]
    },
    {
      title: "Fonte Rejuvenescedora",
      description:
        "Águas cristalinas borbulham de uma fonte nas profundezas da floresta.",
      options: [
        {
          text: "Beber da água",
          effect: { health: 25, mana: 15 },
          description: "A água pura restaura sua energia física e mágica.",
          effectDisplay:
            "<span class='option-effect option-positive'>+25 HP</span> <span class='option-effect option-positive'>+15 MANA</span>"
        },
        {
          text: "Banhar-se na fonte",
          effect: { defense: 3, lifesteal: 2 },
          description:
            "As propriedades mágicas da água fortalecem sua pele e conexão vital.",
          effectDisplay:
            "<span class='option-effect option-positive'>+3 DEF</span> <span class='option-effect option-positive'>+2% ROUBO DE VIDA</span>"
        }
      ]
    },
    {
      title: "Altar Abandonado",
      description: "Um altar de pedra esquecido, coberto por vinhas e musgo.",
      options: [
        {
          text: "Limpar o altar",
          effect: { attack: 4, mana: 10 },
          description:
            "A entidade agradecida concede poder de ataque e energia mágica.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4 ATK</span> <span class='option-effect option-positive'>+10 MANA</span>"
        },
        {
          text: "Fazer uma oferenda",
          effect: { health: 15, defense: 3 },
          description:
            "Seu ato reverente é recompensado com bênçãos de proteção e vitalidade.",
          effectDisplay:
            "<span class='option-effect option-positive'>+15 HP</span> <span class='option-effect option-positive'>+3 DEF</span>"
        }
      ]
    },
    {
      title: "Cachoeira de Arco-Íris",
      description:
        "Uma cachoeira cujas águas refratam a luz em todas as cores do arco-íris.",
      options: [
        {
          text: "Meditar sob a cachoeira",
          effect: { mana: 30, lifesteal: 3 },
          description:
            "A energia cromática amplifica seu poder mágico e conexão vital.",
          effectDisplay:
            "<span class='option-effect option-positive'>+30 MANA</span> <span class='option-effect option-positive'>+3% ROUBO DE VIDA</span>"
        },
        {
          text: "Coletar água do arco-íris",
          effect: { health: 20, attack: 2 },
          description:
            "A água mágica restaura sua saúde e energiza seus ataques.",
          effectDisplay:
            "<span class='option-effect option-positive'>+20 HP</span> <span class='option-effect option-positive'>+2 ATK</span>"
        }
      ]
    },
    {
      title: "Estátua do Herói",
      description:
        "Uma estátua de um lendário herói esquecido, ainda emanando energia.",
      options: [
        {
          text: "Estudar a postura de combate",
          effect: { attack: 5 },
          description:
            "A posição da estátua revela técnicas de ataque superiores.",
          effectDisplay:
            "<span class='option-effect option-positive'>+5 ATK</span>"
        },
        {
          text: "Estudar o equipamento defensivo",
          effect: { defense: 4 },
          description:
            "Os detalhes da armadura mostram segredos de proteção eficaz.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4 DEF</span>"
        }
      ]
    },
    {
      title: "Espelho Dimensional",
      description:
        "Um espelho que não reflete seu rosto, mas versões alternativas de você.",
      options: [
        {
          text: "Observar seu reflexo guerreiro",
          effect: { attack: 4, defense: 2 },
          description:
            "Você incorpora técnicas de combate de sua versão mais forte.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4 ATK</span> <span class='option-effect option-positive'>+2 DEF</span>"
        },
        {
          text: "Observar seu reflexo místico",
          effect: { mana: 25, lifesteal: 3 },
          description: "Você absorve conhecimentos arcanos de sua versão mágica.",
          effectDisplay:
            "<span class='option-effect option-positive'>+25 MANA</span> <span class='option-effect option-positive'>+3% ROUBO DE VIDA</span>"
        }
      ]
    },
    {
      title: "Biblioteca Flutuante",
      description:
        "Livros e pergaminhos levitam em uma pequena clareira, sem bibliotecário à vista.",
      options: [
        {
          text: "Ler tomos de magia",
          effect: { mana: 35 },
          description:
            "Você absorve conhecimentos arcanos que expandem seu poder mágico.",
          effectDisplay:
            "<span class='option-effect option-positive'>+35 MANA</span>"
        },
        {
          text: "Estudar manuais de combate",
          effect: { attack: 3, defense: 2 },
          description:
            "Os tratados militares revelam técnicas avançadas de luta.",
          effectDisplay:
            "<span class='option-effect option-positive'>+3 ATK</span> <span class='option-effect option-positive'>+2 DEF</span>"
        }
      ]
    },
    {
      title: "Jardim de Flores Lunares",
      description:
        "Flores que só desabrocham sob o luar emitem um brilho prateado hipnotizante.",
      options: [
        {
          text: "Inalar o perfume das flores",
          effect: { health: 25, mana: 15 },
          description: "A fragrância mágica revitaliza seu corpo e espírito.",
          effectDisplay:
            "<span class='option-effect option-positive'>+25 HP</span> <span class='option-effect option-positive'>+15 MANA</span>"
        },
        {
          text: "Colher algumas flores",
          effect: { lifesteal: 4, attack: 2 },
          description:
            "As pétalas contêm propriedades que melhoram sua conexão vital e força.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4% ROUBO DE VIDA</span> <span class='option-effect option-positive'>+2 ATK</span>"
        }
      ]
    },
    {
      title: "Meteorito Caído",
      description:
        "Um fragmento metálico de outro mundo, ainda fumegante da entrada na atmosfera.",
      options: [
        {
          text: "Forjar uma arma com o metal",
          effect: { attack: 6 },
          description:
            "O metal extraterrestre cria uma arma excepcionalmente poderosa.",
          effectDisplay:
            "<span class='option-effect option-positive'>+6 ATK</span>"
        },
        {
          text: "Reforçar armadura com o metal",
          effect: { defense: 5 },
          description:
            "O material alienígena fortalece significativamente sua proteção.",
          effectDisplay:
            "<span class='option-effect option-positive'>+5 DEF</span>"
        }
      ]
    },
    {
      title: "Círculo de Fadas",
      description:
        "Pequenas criaturas aladas dançam em um círculo de cogumelos brilhantes.",
      options: [
        {
          text: "Aceitar presente das fadas",
          effect: { health: 20, mana: 20 },
          description:
            "As fadas concedem uma bênção que restaura sua vida e poder mágico.",
          effectDisplay:
            "<span class='option-effect option-positive'>+20 HP</span> <span class='option-effect option-positive'>+20 MANA</span>"
        },
        {
          text: "Dançar com as fadas",
          effect: { attack: 2, defense: 2, lifesteal: 2 },
          description: "A dança mágica aprimora diversas facetas de seu poder.",
          effectDisplay:
            "<span class='option-effect option-positive'>+2 ATK</span> <span class='option-effect option-positive'>+2 DEF</span> <span class='option-effect option-positive'>+2% ROUBO DE VIDA</span>"
        }
      ]
    },
    {
      title: "Forja Elemental",
      description:
        "Uma forja mágica onde os quatro elementos se fundem em harmonia.",
      options: [
        {
          text: "Forjar com fogo e terra",
          effect: { attack: 4, defense: 3 },
          description:
            "Elementos de poder e resistência fortalecem seu equipamento.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4 ATK</span> <span class='option-effect option-positive'>+3 DEF</span>"
        },
        {
          text: "Forjar com água e ar",
          effect: { mana: 25, lifesteal: 3 },
          description:
            "Elementos de fluidez e movimento aprimoram suas energias místicas.",
          effectDisplay:
            "<span class='option-effect option-positive'>+25 MANA</span> <span class='option-effect option-positive'>+3% ROUBO DE VIDA</span>"
        }
      ]
    },
    {
      title: "Santuário da Luz",
      description:
        "Um templo abandonado onde raios de luz dançam pelo ar como se fossem vivos.",
      options: [
        {
          text: "Banhar-se na luz",
          effect: { health: 35 },
          description:
            "A energia luminosa restaura profundamente sua vitalidade.",
          effectDisplay:
            "<span class='option-effect option-positive'>+35 HP</span>"
        },
        {
          text: "Meditar sob o feixe central",
          effect: { mana: 30, defense: 2 },
          description: "A meditação iluminada fortalece sua alma e corpo.",
          effectDisplay:
            "<span class='option-effect option-positive'>+30 MANA</span> <span class='option-effect option-positive'>+2 DEF</span>"
        }
      ]
    },
    {
      title: "Poço dos Sussurros",
      description:
        "Um poço antigo de onde emergem sussurros de conhecimentos ancestrais.",
      options: [
        {
          text: "Ouvir os segredos de combate",
          effect: { attack: 3, lifesteal: 3 },
          description:
            "Os sussurros revelam técnicas letais e métodos de absorção vital.",
          effectDisplay:
            "<span class='option-effect option-positive'>+3 ATK</span> <span class='option-effect option-positive'>+3% ROUBO DE VIDA</span>"
        },
        {
          text: "Ouvir os segredos arcanos",
          effect: { mana: 35, defense: 1 },
          description:
            "As vozes compartilham fórmulas mágicas e técnicas defensivas.",
          effectDisplay:
            "<span class='option-effect option-positive'>+35 MANA</span> <span class='option-effect option-positive'>+1 DEF</span>"
        }
      ]
    },
    {
      title: "Altar da Lua",
      description:
        "Um altar de pedra prateada que brilha intensamente sob o luar.",
      options: [
        {
          text: "Realizar ritual lunar",
          effect: { mana: 30, lifesteal: 2 },
          description:
            "A energia da lua aumenta seu poder mágico e conexão vital.",
          effectDisplay:
            "<span class='option-effect option-positive'>+30 MANA</span> <span class='option-effect option-positive'>+2% ROUBO DE VIDA</span>"
        },
        {
          text: "Orar à deusa da lua",
          effect: { health: 20, defense: 3 },
          description: "A deusa concede bênçãos de proteção e cura.",
          effectDisplay:
            "<span class='option-effect option-positive'>+20 HP</span> <span class='option-effect option-positive'>+3 DEF</span>"
        }
      ]
    },
    {
      title: "Altar do Sol",
      description:
        "Um altar dourado que emite calor e luz mesmo durante a noite.",
      options: [
        {
          text: "Realizar ritual solar",
          effect: { attack: 4, health: 15 },
          description:
            "A energia do sol fortalece seus ataques e revitaliza seu corpo.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4 ATK</span> <span class='option-effect option-positive'>+15 HP</span>"
        },
        {
          text: "Orar ao deus do sol",
          effect: { mana: 20, attack: 2 },
          description: "O deus concede poder mágico e força de combate.",
          effectDisplay:
            "<span class='option-effect option-positive'>+20 MANA</span> <span class='option-effect option-positive'>+2 ATK</span>"
        }
      ]
    },
    {
      title: "Cemitério de Heróis",
      description:
        "Um campo de descanso para lendários guerreiros de eras passadas.",
      options: [
        {
          text: "Honrar os mortos",
          effect: { attack: 3, defense: 3 },
          description: "Os espíritos dos heróis concedem força e proteção.",
          effectDisplay:
            "<span class='option-effect option-positive'>+3 ATK</span> <span class='option-effect option-positive'>+3 DEF</span>"
        },
        {
          text: "Meditar entre os túmulos",
          effect: { health: 20, lifesteal: 2 },
          description:
            "A reflexão sobre a mortalidade fortalece sua determinação e conexão vital.",
          effectDisplay:
            "<span class='option-effect option-positive'>+20 HP</span> <span class='option-effect option-positive'>+2% ROUBO DE VIDA</span>"
        }
      ]
    },
    {
      title: "Monumento Esquecido",
      description:
        "Uma estrutura colossal coberta por vinhas e símbolos de uma era esquecida.",
      options: [
        {
          text: "Estudar os símbolos",
          effect: { mana: 30, attack: 2 },
          description: "Os glifos antigos revelam segredos de magia ofensiva.",
          effectDisplay:
            "<span class='option-effect option-positive'>+30 MANA</span> <span class='option-effect option-positive'>+2 ATK</span>"
        },
        {
          text: "Explorar as ruínas",
          effect: { health: 15, defense: 3 },
          description:
            "Você encontra relíquias úteis nas profundezas do monumento.",
          effectDisplay:
            "<span class='option-effect option-positive'>+15 HP</span> <span class='option-effect option-positive'>+3 DEF</span>"
        }
      ]
    },
    {
      title: "Nascente Mística",
      description:
        "Uma pequena fonte de água que brota de uma rocha coberta de runas.",
      options: [
        {
          text: "Beber da água",
          effect: { health: 30, mana: 10 },
          description: "A água pura restaura sua saúde e energia mágica.",
          effectDisplay:
            "<span class='option-effect option-positive'>+30 HP</span> <span class='option-effect option-positive'>+10 MANA</span>"
        },
        {
          text: "Molhar sua arma",
          effect: { attack: 3, lifesteal: 2 },
          description:
            "A água mística imbuí sua arma com propriedades de drenagem.",
          effectDisplay:
            "<span class='option-effect option-positive'>+3 ATK</span> <span class='option-effect option-positive'>+2% ROUBO DE VIDA</span>"
        }
      ]
    },
    {
      title: "Jardim de Pedras",
      description:
        "Formações rochosas dispostas em padrões que parecem seguir alguma lógica mística.",
      options: [
        {
          text: "Meditar no centro",
          effect: { defense: 4, mana: 15 },
          description:
            "A energia geomântica fortalece sua resistência e poder mágico.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4 DEF</span> <span class='option-effect option-positive'>+15 MANA</span>"
        },
        {
          text: "Reorganizar as pedras",
          effect: { attack: 3, health: 15 },
          description:
            "O novo padrão canaliza energias que fortalecem seu ataque e vitalidade.",
          effectDisplay:
            "<span class='option-effect option-positive'>+3 ATK</span> <span class='option-effect option-positive'>+15 HP</span>"
        }
      ]
    },
    {
      title: "Árvore dos Desejos",
      description:
        "Uma árvore gigantesca com fitas coloridas amarradas em seus galhos.",
      options: [
        {
          text: "Pendurar uma fita e desejar força",
          effect: { attack: 4, lifesteal: 2 },
          description:
            "Seu desejo é atendido com poder ofensivo e capacidade de drenar vida.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4 ATK</span> <span class='option-effect option-positive'>+2% ROUBO DE VIDA</span>"
        },
        {
          text: "Pendurar uma fita e desejar proteção",
          effect: { defense: 3, health: 20 },
          description:
            "Seu desejo é atendido com resistência aprimorada e vitalidade.",
          effectDisplay:
            "<span class='option-effect option-positive'>+3 DEF</span> <span class='option-effect option-positive'>+20 HP</span>"
        }
      ]
    },
    {
      title: "Lagoa dos Espíritos",
      description:
        "Uma lagoa onde luzes etéreas dançam sobre a superfície da água.",
      options: [
        {
          text: "Pedir conselho aos espíritos",
          effect: { mana: 25, lifesteal: 3 },
          description:
            "Os espíritos compartilham conhecimentos místicos de poder e drenagem.",
          effectDisplay:
            "<span class='option-effect option-positive'>+25 MANA</span> <span class='option-effect option-positive'>+3% ROUBO DE VIDA</span>"
        },
        {
          text: "Mergulhar na lagoa",
          effect: { health: 25, defense: 2 },
          description:
            "As águas espirituais curam suas feridas e fortalecem sua resistência.",
          effectDisplay:
            "<span class='option-effect option-positive'>+25 HP</span> <span class='option-effect option-positive'>+2 DEF</span>"
        }
      ]
    },
    {
      title: "Altar Elemental",
      description:
        "Um altar onde os quatro elementos (fogo, água, terra e ar) coexistem em equilíbrio.",
      options: [
        {
          text: "Comungar com fogo e ar",
          effect: { attack: 4, mana: 15 },
          description:
            "Os elementos de energia e movimento potencializam seu ataque e magia.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4 ATK</span> <span class='option-effect option-positive'>+15 MANA</span>"
        },
        {
          text: "Comungar com terra e água",
          effect: { defense: 3, health: 20 },
          description:
            "Os elementos de estabilidade e fluxo melhoram sua proteção e vitalidade.",
          effectDisplay:
            "<span class='option-effect option-positive'>+3 DEF</span> <span class='option-effect option-positive'>+20 HP</span>"
        }
      ]
    },
    {
      title: "Pilar do Tempo",
      description:
        "Uma estrutura onde areias do tempo fluem para cima, desafiando a gravidade.",
      options: [
        {
          text: "Tocar o pilar",
          effect: { attack: 3, defense: 3 },
          description:
            "Seu corpo absorve conhecimentos de combate de várias eras.",
          effectDisplay:
            "<span class='option-effect option-positive'>+3 ATK</span> <span class='option-effect option-positive'>+3 DEF</span>"
        },
        {
          text: "Meditar junto ao pilar",
          effect: { health: 15, mana: 20 },
          description: "Seu corpo recupera-se acelerado pela energia temporal.",
          effectDisplay:
            "<span class='option-effect option-positive'>+15 HP</span> <span class='option-effect option-positive'>+20 MANA</span>"
        }
      ]
    },
    {
      title: "Cristal Gigante",
      description:
        "Um enorme cristal multifacetado que pulsa com energia arcana.",
      options: [
        {
          text: "Absorver energia do cristal",
          effect: { mana: 40 },
          description:
            "O cristal transfere parte de sua vasta energia mágica para você.",
          effectDisplay:
            "<span class='option-effect option-positive'>+40 MANA</span>"
        },
        {
          text: "Sintonizar sua arma",
          effect: { attack: 5 },
          description:
            "A ressonância cristalina potencializa significativamente suas armas.",
          effectDisplay:
            "<span class='option-effect option-positive'>+5 ATK</span>"
        }
      ]
    },
    {
      title: "Santuário dos Ancestrais",
      description:
        "Um local sagrado onde os espíritos dos antepassados oferecem sabedoria.",
      options: [
        {
          text: "Pedir orientação para combate",
          effect: { attack: 3, lifesteal: 3 },
          description:
            "Os ancestrais revelam técnicas letais e métodos de absorção de energia.",
          effectDisplay:
            "<span class='option-effect option-positive'>+3 ATK</span> <span class='option-effect option-positive'>+3% ROUBO DE VIDA</span>"
        },
        {
          text: "Pedir orientação para sobrevivência",
          effect: { defense: 4, health: 15 },
          description:
            "Os ancestrais ensinam técnicas de proteção e recuperação.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4 DEF</span> <span class='option-effect option-positive'>+15 HP</span>"
        }
      ]
    },
    {
      title: "Escultura do Dragão",
      description:
        "Uma estátua de dragão incrivelmente detalhada que parece observar seus movimentos.",
      options: [
        {
          text: "Estudar as técnicas ofensivas",
          effect: { attack: 5 },
          description:
            "A postura do dragão revela segredos de ataques devastadores.",
          effectDisplay:
            "<span class='option-effect option-positive'>+5 ATK</span>"
        },
        {
          text: "Examinar as escamas protetoras",
          effect: { defense: 4 },
          description:
            "O padrão das escamas revela princípios avançados de proteção.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4 DEF</span>"
        }
      ]
    },
    {
      title: "Templo Aquático",
      description:
        "Um templo parcialmente submerso onde a água flui em padrões impossíveis.",
      options: [
        {
          text: "Nadar nas águas sagradas",
          effect: { health: 25, mana: 15 },
          description: "As águas místicas restauram sua saúde e poder mágico.",
          effectDisplay:
            "<span class='option-effect option-positive'>+25 HP</span> <span class='option-effect option-positive'>+15 MANA</span>"
        },
        {
          text: "Estudar os padrões de fluxo",
          effect: { defense: 3, lifesteal: 2 },
          description:
            "Os movimentos fluidos inspiram técnicas de defesa e absorção.",
          effectDisplay:
            "<span class='option-effect option-positive'>+3 DEF</span> <span class='option-effect option-positive'>+2% ROUBO DE VIDA</span>"
        }
      ]
    },
    {
      title: "Gruta de Cristais",
      description:
        "Uma caverna repleta de cristais brilhantes que mudam de cor constantemente.",
      options: [
        {
          text: "Meditar entre os cristais",
          effect: { mana: 35 },
          description:
            "As energias dos cristais amplificam seu potencial mágico.",
          effectDisplay:
            "<span class='option-effect option-positive'>+35 MANA</span>"
        },
        {
          text: "Incorporar fragmentos ao equipamento",
          effect: { attack: 2, defense: 3 },
          description:
            "Os cristais fortalecem seu equipamento ofensivo e defensivo.",
          effectDisplay:
            "<span class='option-effect option-positive'>+2 ATK</span> <span class='option-effect option-positive'>+3 DEF</span>"
        }
      ]
    }
  ];
  
  const situations = [
    {
      title: "Encruzilhada Sombria",
  
      description: "Você encontra uma encruzilhada envolta em névoa escura.",
  
      options: [
        {
          text: "Seguir pelo caminho mais escuro",
  
          effect: { attack: 5, health: -10 },
  
          description: "Você ganha +5 de ataque, mas perde 10 de vida.",
  
          effectDisplay:
            "<span class='option-effect option-positive'>+5 ATK</span> <span class='option-effect option-negative'>-10 HP</span>"
        },
  
        {
          text: "Atravessar a ponte instável",
  
          effect: { defense: 4, attack: -1 },
  
          description: "Você ganha +3 de defesa, mas perde 1 de ataque.",
  
          effectDisplay:
            "<span class='option-effect option-positive'>+4 DEF</span> <span class='option-effect option-negative'>-1 ATK</span>"
        }
      ]
    },
  
    {
      title: "Fonte Mágica",
  
      description: "Você encontra uma fonte brilhando com energia mágica.",
  
      options: [
        {
          text: "Beber da fonte",
  
          effect: { mana: 30, defense: -1 },
  
          description: "Você recupera 30 de mana, mas perde 1 de defesa.",
  
          effectDisplay:
            "<span class='option-effect option-positive'>+30 MANA</span> <span class='option-effect option-negative'>-1 DEF</span>"
        },
  
        {
          text: "Mergulhar a arma na fonte",
  
          effect: { attack: 3, mana: -10 },
  
          description: "Você ganha +3 de ataque, mas perde 10 de mana.",
  
          effectDisplay:
            "<span class='option-effect option-positive'>+3 ATK</span> <span class='option-effect option-negative'>-10 MANA</span>"
        }
      ]
    },
    {
      title: "Templo Abandonado",
      description:
        "Um templo antigo emerge da floresta. Estátuas de guerreiros guardam a entrada.",
      options: [
        {
          text: "Rezar no altar central",
          effect: { health: 25, attack: -2 },
          description:
            "Uma luz curativa envolve seu corpo, mas você sente sua força diminuir temporariamente.",
          effectDisplay:
            "<span class='option-effect option-positive'>+25 HP</span> <span class='option-effect option-negative'>-2 ATK</span>"
        },
        {
          text: "Pegar o artefato do altar",
          effect: { attack: 5, defense: -2 },
          description:
            "O artefato concede poder, mas você sente que perdeu parte de sua proteção.",
          effectDisplay:
            "<span class='option-effect option-positive'>+5 ATK</span> <span class='option-effect option-negative'>-2 DEF</span>"
        }
      ]
    },
    {
      title: "Viajante Misterioso",
      description: "Um viajante encapuzado oferece algo em troca de sua ajuda.",
      options: [
        {
          text: "Ajudar a carregar suprimentos",
          effect: { health: -5, defense: 4 },
          description:
            "O esforço cansa você, mas seus músculos ficam mais resistentes.",
          effectDisplay:
            "<span class='option-effect option-negative'>-5 HP</span> <span class='option-effect option-positive'>+4 DEF</span>"
        },
        {
          text: "Escoltar até a próxima cidade",
          effect: { lifesteal: 3, mana: -15 },
          description:
            "O viajante ensina técnicas de combate que drenam a vitalidade do inimigo, mas exigem energia.",
          effectDisplay:
            "<span class='option-effect option-positive'>+3% ROUBO</span> <span class='option-effect option-negative'>-15 MANA</span>"
        }
      ]
    },
    {
      title: "Caverna Luminosa",
      description:
        "Você encontra uma caverna com cristais que emitem uma luz pulsante.",
      options: [
        {
          text: "Absorver a energia dos cristais",
          effect: { mana: 40, health: -8 },
          description:
            "A energia mágica aumenta seu poder, mas causa desconforto físico.",
          effectDisplay:
            "<span class='option-effect option-positive'>+40 MANA</span> <span class='option-effect option-negative'>-8 HP</span>"
        },
        {
          text: "Extrair um fragmento de cristal",
          effect: { attack: 4, mana: -20 },
          description:
            "O fragmento potencializa seus ataques, mas consome parte de sua energia mágica para se fundir a você.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4 ATK</span> <span class='option-effect option-negative'>-20 MANA</span>"
        }
      ]
    },
    {
      title: "Acampamento de Mercenários",
      description:
        "Você encontra um acampamento com mercenários descansando após uma batalha.",
      options: [
        {
          text: "Treinar com os guerreiros",
          effect: { attack: 3, defense: 2 },
          description:
            "Os mercenários ensinam técnicas de combate que melhoram seu ataque e defesa.",
          effectDisplay:
            "<span class='option-effect option-positive'>+3 ATK</span> <span class='option-effect option-positive'>+2 DEF</span>"
        },
        {
          text: "Trocar histórias de batalha",
          effect: { lifesteal: 4, attack: -1 },
          description:
            "Você aprende técnicas de combate que drenam a vida do inimigo, mas são menos diretas.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4% ROUBO</span> <span class='option-effect option-negative'>-1 ATK</span>"
        }
      ]
    },
    {
      title: "Lago Congelado",
      description:
        "Um lago completamente congelado reflete a luz como um espelho.",
      options: [
        {
          text: "Quebrar o gelo e nadar",
          effect: { health: -15, mana: 35 },
          description:
            "A água gelada causa dor, mas energiza suas reservas mágicas.",
          effectDisplay:
            "<span class='option-effect option-negative'>-15 HP</span> <span class='option-effect option-positive'>+35 MANA</span>"
        },
        {
          text: "Meditar na superfície congelada",
          effect: { defense: 5, attack: -2 },
          description:
            "A calma e o frio fortalecem sua resistência, mas sua agressividade diminui.",
          effectDisplay:
            "<span class='option-effect option-positive'>+5 DEF</span> <span class='option-effect option-negative'>-2 ATK</span>"
        }
      ]
    },
    {
      title: "Biblioteca Abandonada",
      description:
        "Prateleiras empoeiradas contêm tomos antigos e pergaminhos misteriosos.",
      options: [
        {
          text: "Estudar grimórios de maldições",
          effect: { attack: 6, health: -12 },
          description:
            "O conhecimento sombrio aumenta seu poder ofensivo, mas cobra um preço físico.",
          effectDisplay:
            "<span class='option-effect option-positive'>+6 ATK</span> <span class='option-effect option-negative'>-12 HP</span>"
        },
        {
          text: "Ler tratados de alquimia",
          effect: { health: 20, lifesteal: 2 },
          description:
            "Você aprende a extrair essência vital e aplicá-la ao seu próprio corpo.",
          effectDisplay:
            "<span class='option-effect option-positive'>+20 HP</span> <span class='option-effect option-positive'>+2% ROUBO</span>"
        }
      ]
    },
    {
      title: "Campos de Batalha Antigos",
      description:
        "Você encontra um campo onde uma grande batalha aconteceu. Armas e armaduras ainda estão espalhadas.",
      options: [
        {
          text: "Coletar armas e armaduras",
          effect: { attack: 2, defense: 3 },
          description:
            "Você encontra itens bem conservados que melhoram seu equipamento.",
          effectDisplay:
            "<span class='option-effect option-positive'>+2 ATK</span> <span class='option-effect option-positive'>+3 DEF</span>"
        },
        {
          text: "Honrar os mortos com um ritual",
          effect: { mana: 25, lifesteal: 3 },
          description:
            "Os espíritos dos guerreiros caídos concedem poder místico e técnicas de combate.",
          effectDisplay:
            "<span class='option-effect option-positive'>+25 MANA</span> <span class='option-effect option-positive'>+3% ROUBO</span>"
        }
      ]
    },
    {
      title: "Altar da Dualidade",
      description:
        "Um altar dividido em luz e sombra convida você a fazer uma escolha.",
      options: [
        {
          text: "Abraçar a luz",
          effect: { health: 30, attack: -3 },
          description:
            "A energia da luz cura suas feridas, mas reduz sua capacidade ofensiva.",
          effectDisplay:
            "<span class='option-effect option-positive'>+30 HP</span> <span class='option-effect option-negative'>-3 ATK</span>"
        },
        {
          text: "Acolher a sombra",
          effect: { attack: 5, health: -10 },
          description:
            "O poder das sombras aumenta sua força de ataque, mas consome parte de sua vitalidade.",
          effectDisplay:
            "<span class='option-effect option-positive'>+5 ATK</span> <span class='option-effect option-negative'>-10 HP</span>"
        }
      ]
    },
    {
      title: "Árvore Ancestral",
      description:
        "Uma árvore gigantesca com marcas de civilizações antigas em seu tronco.",
      options: [
        {
          text: "Descansar sob a árvore",
          effect: { health: 15, mana: 15 },
          description:
            "A aura tranquila da árvore restaura sua energia física e mágica.",
          effectDisplay:
            "<span class='option-effect option-positive'>+15 HP</span> <span class='option-effect option-positive'>+15 MANA</span>"
        },
        {
          text: "Extrair seiva da árvore",
          effect: { lifesteal: 5, defense: -2 },
          description:
            "A seiva fortalece sua conexão com a energia vital, mas diminui sua resistência física.",
          effectDisplay:
            "<span class='option-effect option-positive'>+5% ROUBO</span> <span class='option-effect option-negative'>-2 DEF</span>"
        }
      ]
    },
    {
      title: "Forja Abandonada",
      description:
        "Uma antiga forja com brasas que ainda brilham misteriosamente após anos.",
      options: [
        {
          text: "Reparar suas armas",
          effect: { attack: 4, mana: -15 },
          description:
            "Suas armas ganham um novo fio, mas o processo consome sua energia mágica.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4 ATK</span> <span class='option-effect option-negative'>-15 MANA</span>"
        },
        {
          text: "Reforçar sua armadura",
          effect: { defense: 5, attack: -1 },
          description:
            "Sua armadura fica mais resistente, mas o peso extra limita seu ataque.",
          effectDisplay:
            "<span class='option-effect option-positive'>+5 DEF</span> <span class='option-effect option-negative'>-1 ATK</span>"
        }
      ]
    },
    {
      title: "Mercador de Poções",
      description:
        "Um vendedor ambulante oferece poções coloridas de efeitos duvidosos.",
      options: [
        {
          text: "Comprar poção vermelha borbulhante",
          effect: { health: 30, defense: -2 },
          description:
            "A poção cura suas feridas, mas suaviza temporariamente seus reflexos defensivos.",
          effectDisplay:
            "<span class='option-effect option-positive'>+30 HP</span> <span class='option-effect option-negative'>-2 DEF</span>"
        },
        {
          text: "Comprar poção azul cintilante",
          effect: { mana: 40, health: -5 },
          description:
            "A poção energiza seu poder mágico, mas causa leve envenenamento.",
          effectDisplay:
            "<span class='option-effect option-positive'>+40 MANA</span> <span class='option-effect option-negative'>-5 HP</span>"
        }
      ]
    },
    {
      title: "Oásis Encantado",
      description:
        "Um pequeno lago cercado por vegetação exuberante no meio do deserto.",
      options: [
        {
          text: "Beber a água cristalina",
          effect: { health: 20, attack: 2 },
          description: "A água restaura sua saúde e revigora sua força.",
          effectDisplay:
            "<span class='option-effect option-positive'>+20 HP</span> <span class='option-effect option-positive'>+2 ATK</span>"
        },
        {
          text: "Banhar-se nas águas",
          effect: { defense: 3, mana: 20 },
          description:
            "As propriedades mágicas da água fortalecem sua pele e seu poder arcano.",
          effectDisplay:
            "<span class='option-effect option-positive'>+3 DEF</span> <span class='option-effect option-positive'>+20 MANA</span>"
        }
      ]
    },
    {
      title: "Santuário Esquecido",
      description:
        "Um pequeno templo coberto por vinhas, com um altar dedicado a alguma divindade esquecida.",
      options: [
        {
          text: "Fazer uma oferenda",
          effect: { mana: 30, attack: 3 },
          description:
            "A divindade aceita sua oferenda e concede bênçãos de poder.",
          effectDisplay:
            "<span class='option-effect option-positive'>+30 MANA</span> <span class='option-effect option-positive'>+3 ATK</span>"
        },
        {
          text: "Meditar em silêncio",
          effect: { defense: 4, lifesteal: 3 },
          description:
            "A meditação revela segredos de autopreservação e absorção de energia.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4 DEF</span> <span class='option-effect option-positive'>+3% ROUBO</span>"
        }
      ]
    },
    {
      title: "Mercado Negro",
      description:
        "Em uma caverna escondida, comerciantes sombrios vendem itens proibidos.",
      options: [
        {
          text: "Comprar venenos raros",
          effect: { attack: 6, health: -8 },
          description:
            "Os venenos potencializam seus ataques, mas o contato causa envenenamento leve.",
          effectDisplay:
            "<span class='option-effect option-positive'>+6 ATK</span> <span class='option-effect option-negative'>-8 HP</span>"
        },
        {
          text: "Adquirir amuleto de sangue",
          effect: { lifesteal: 6, defense: -3 },
          description:
            "O amuleto permite sugar a vida de seus inimigos, mas reduz sua proteção física.",
          effectDisplay:
            "<span class='option-effect option-positive'>+6% ROUBO</span> <span class='option-effect option-negative'>-3 DEF</span>"
        }
      ]
    },
    {
      title: "Cachoeira Reluzente",
      description:
        "Uma cachoeira que brilha com cores impossíveis quando a luz a atinge.",
      options: [
        {
          text: "Nadar até a fonte",
          effect: { mana: 35, lifesteal: 2 },
          description:
            "As águas mágicas fortalecem seu poder arcano e sua conexão com a energia vital.",
          effectDisplay:
            "<span class='option-effect option-positive'>+35 MANA</span> <span class='option-effect option-positive'>+2% ROUBO</span>"
        },
        {
          text: "Encher um frasco com a água",
          effect: { health: 25, attack: 1 },
          description:
            "A água possui propriedades curativas e levemente estimulantes.",
          effectDisplay:
            "<span class='option-effect option-positive'>+25 HP</span> <span class='option-effect option-positive'>+1 ATK</span>"
        }
      ]
    },
    {
      title: "Laboratório Alquímico",
      description:
        "As ruínas de um laboratório com tubos de ensaio e caldeirões ainda intactos.",
      options: [
        {
          text: "Misturar reagentes ao acaso",
          effect: { attack: 5, health: -5 },
          description:
            "A mistura explode, causando queimaduras leves, mas imbuindo seu equipamento com poder.",
          effectDisplay:
            "<span class='option-effect option-positive'>+5 ATK</span> <span class='option-effect option-negative'>-5 HP</span>"
        },
        {
          text: "Seguir um livro de receitas",
          effect: { defense: 3, mana: 20 },
          description:
            "Você cria uma poção que endurece sua pele e aumenta seu poder mágico.",
          effectDisplay:
            "<span class='option-effect option-positive'>+3 DEF</span> <span class='option-effect option-positive'>+20 MANA</span>"
        }
      ]
    },
    {
      title: "Tribo de Nômades",
      description:
        "Um acampamento de viajantes com tradições guerreiras antigas.",
      options: [
        {
          text: "Participar do ritual de guerra",
          effect: { attack: 4, health: -5 },
          description:
            "O ritual envolve autoflagelação, mas fortalece o espírito guerreiro.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4 ATK</span> <span class='option-effect option-negative'>-5 HP</span>"
        },
        {
          text: "Aprender técnicas defensivas",
          effect: { defense: 5, lifesteal: 2 },
          description:
            "Os anciões ensinam métodos de autopreservação e contra-ataque.",
          effectDisplay:
            "<span class='option-effect option-positive'>+5 DEF</span> <span class='option-effect option-positive'>+2% ROUBO</span>"
        }
      ]
    },
    {
      title: "Pedra de Sacrifício",
      description:
        "Uma grande pedra plana coberta com runas antigas e manchas de sangue seco.",
      options: [
        {
          text: "Oferecer seu próprio sangue",
          effect: { attack: 6, health: -15 },
          description:
            "A pedra absorve seu sangue e fortalece sua capacidade ofensiva.",
          effectDisplay:
            "<span class='option-effect option-positive'>+6 ATK</span> <span class='option-effect option-negative'>-15 HP</span>"
        },
        {
          text: "Decifrar as runas antigas",
          effect: { mana: 30, defense: 2 },
          description:
            "Você descobre segredos arcanos que aumentam seu poder mágico e capacidade defensiva.",
          effectDisplay:
            "<span class='option-effect option-positive'>+30 MANA</span> <span class='option-effect option-positive'>+2 DEF</span>"
        }
      ]
    },
    {
      title: "Armeiro Excêntrico",
      description:
        "Um ferreiro com métodos incomuns oferece melhorias para seu equipamento.",
      options: [
        {
          text: "Modificação ofensiva experimental",
          effect: { attack: 7, defense: -3 },
          description:
            "A modificação torna sua arma mais letal, mas sacrifica parte da proteção.",
          effectDisplay:
            "<span class='option-effect option-positive'>+7 ATK</span> <span class='option-effect option-negative'>-3 DEF</span>"
        },
        {
          text: "Reforço defensivo não-convencional",
          effect: { defense: 6, attack: -2 },
          description:
            "Sua armadura fica excepcionalmente resistente, mas limita seus movimentos de ataque.",
          effectDisplay:
            "<span class='option-effect option-positive'>+6 DEF</span> <span class='option-effect option-negative'>-2 ATK</span>"
        }
      ]
    },
    {
      title: "Círculo de Cogumelos",
      description:
        "Um círculo perfeito de cogumelos coloridos em uma clareira da floresta.",
      options: [
        {
          text: "Comer os cogumelos",
          effect: { mana: 45, health: -10 },
          description:
            "Os cogumelos têm propriedades alucinógenas que ampliam seu poder mágico, mas intoxicam seu corpo.",
          effectDisplay:
            "<span class='option-effect option-positive'>+45 MANA</span> <span class='option-effect option-negative'>-10 HP</span>"
        },
        {
          text: "Sentar no centro do círculo",
          effect: { lifesteal: 4, defense: 3 },
          description:
            "Energias místicas fluem através do círculo, ensinando segredos de absorção vital e proteção.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4% ROUBO</span> <span class='option-effect option-positive'>+3 DEF</span>"
        }
      ]
    },
    {
      title: "Mestre de Armas Aposentado",
      description: "Um velho guerreiro que vive isolado após anos de combate.",
      options: [
        {
          text: "Aprender técnicas ofensivas",
          effect: { attack: 5, lifesteal: 2 },
          description:
            "O mestre ensina golpes letais e métodos para absorver a força do oponente.",
          effectDisplay:
            "<span class='option-effect option-positive'>+5 ATK</span> <span class='option-effect option-positive'>+2% ROUBO</span>"
        },
        {
          text: "Aprender postura defensiva",
          effect: { defense: 4, health: 15 },
          description:
            "O velho guerreiro mostra como se posicionar para minimizar danos e preservar energia.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4 DEF</span> <span class='option-effect option-positive'>+15 HP</span>"
        }
      ]
    },
    {
      title: "Poço dos Desejos",
      description:
        "Um poço antigo com inscrições prometendo realizar desejos em troca de oferendas.",
      options: [
        {
          text: "Jogar uma moeda e desejar força",
          effect: { attack: 4, mana: 15 },
          description:
            "Uma aura vermelha emerge do poço, fortalecendo seus músculos e sua energia.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4 ATK</span> <span class='option-effect option-positive'>+15 MANA</span>"
        },
        {
          text: "Jogar uma joia e desejar proteção",
          effect: { defense: 5, health: 10 },
          description:
            "Uma luz azul envolve seu corpo, fortalecendo sua pele e revitalizando seus tecidos.",
          effectDisplay:
            "<span class='option-effect option-positive'>+5 DEF</span> <span class='option-effect option-positive'>+10 HP</span>"
        }
      ]
    },
    {
      title: "Construção Alienígena",
      description:
        "Uma estrutura metálica impossível com ângulos que desafiam a geometria conhecida.",
      options: [
        {
          text: "Tocar os símbolos gravados",
          effect: { mana: 50, health: -20 },
          description:
            "Energia desconhecida flui para seu corpo, expandindo sua capacidade mágica mas causando trauma físico.",
          effectDisplay:
            "<span class='option-effect option-positive'>+50 MANA</span> <span class='option-effect option-negative'>-20 HP</span>"
        },
        {
          text: "Estudar o material estranho",
          effect: { attack: 4, defense: 4 },
          description:
            "Você descobre propriedades únicas que pode aplicar ao seu equipamento.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4 ATK</span> <span class='option-effect option-positive'>+4 DEF</span>"
        }
      ]
    },
    {
      title: "Caverna de Cristais",
      description:
        "Uma caverna repleta de cristais gigantes que pulsam com energia arcana.",
      options: [
        {
          text: "Absorver energia dos cristais",
          effect: { mana: 40, defense: -2 },
          description:
            "Os cristais transferem poder mágico para você, mas a energia intensa fragiliza sua proteção.",
          effectDisplay:
            "<span class='option-effect option-positive'>+40 MANA</span> <span class='option-effect option-negative'>-2 DEF</span>"
        },
        {
          text: "Extrair um fragmento cristalino",
          effect: { attack: 5, lifesteal: 2 },
          description:
            "Você incorpora o fragmento à sua arma, tornando-a mais penetrante e capaz de sugar energia.",
          effectDisplay:
            "<span class='option-effect option-positive'>+5 ATK</span> <span class='option-effect option-positive'>+2% ROUBO</span>"
        }
      ]
    },
    {
      title: "Jardim das Estátuas",
      description:
        "Um jardim repleto de estátuas realistas de guerreiros em poses de combate.",
      options: [
        {
          text: "Estudar as posturas de batalha",
          effect: { attack: 3, defense: 3 },
          description:
            "As estátuas revelam técnicas de combate balanceadas, melhorando sua ofensiva e defensiva.",
          effectDisplay:
            "<span class='option-effect option-positive'>+3 ATK</span> <span class='option-effect option-positive'>+3 DEF</span>"
        },
        {
          text: "Procurar por tesouros escondidos",
          effect: { health: -10, mana: 30 },
          description:
            "Você encontra um pergaminho mágico, mas aciona uma armadilha que o fere.",
          effectDisplay:
            "<span class='option-effect option-negative'>-10 HP</span> <span class='option-effect option-positive'>+30 MANA</span>"
        }
      ]
    },
    {
      title: "Mansão Assombrada",
      description:
        "Uma casa antiga onde sombras se movem nas paredes e portas rangem sem vento.",
      options: [
        {
          text: "Comunicar-se com os espíritos",
          effect: { mana: 35, lifesteal: 3 },
          description:
            "Os fantasmas compartilham segredos do além, aumentando seu poder mágico e habilidades de drenagem vital.",
          effectDisplay:
            "<span class='option-effect option-positive'>+35 MANA</span> <span class='option-effect option-positive'>+3% ROUBO</span>"
        },
        {
          text: "Exorcizar a mansão",
          effect: { attack: 5, health: -5 },
          description:
            "O ritual de purificação transfere a força dos espíritos para você, mas o processo é desgastante.",
          effectDisplay:
            "<span class='option-effect option-positive'>+5 ATK</span> <span class='option-effect option-negative'>-5 HP</span>"
        }
      ]
    },
    {
      title: "Vale do Eco",
      description:
        "Um vale onde ecos de batalhas antigas podem ser ouvidos claramente.",
      options: [
        {
          text: "Ouvir os ecos de guerra",
          effect: { attack: 6, defense: -1 },
          description:
            "As técnicas de combate dos guerreiros mortos ressonam em sua mente, ensinando golpes poderosos.",
          effectDisplay:
            "<span class='option-effect option-positive'>+6 ATK</span> <span class='option-effect option-negative'>-1 DEF</span>"
        },
        {
          text: "Meditar em silêncio",
          effect: { defense: 4, health: 15 },
          description:
            "A calmaria entre os ecos revela segredos de sobrevivência e autopreservação.",
          effectDisplay:
            "<span class='option-effect option-positive'>+4 DEF</span> <span class='option-effect option-positive'>+15 HP</span>"
        }
      ]
    }
  ];
  
  // Estado do jogador
  const player = {
    health: 100,
    maxHealth: 100,
    attack: 10,
    defense: 10,
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
  
  // Armazena os bosses derrotados
  let defeatedBosses = [];
  
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
  const skills = [
    {
      name: "Golpe Místico",
      description: "Um ataque poderoso imbuído de energia mágica.",
      manaCost: 20,
      damageMultiplier: 2.5, // Multiplicador de dano em relação ao ataque normal
      cooldown: 15000, // 15 segundos em milissegundos
      icon: "⚡", // Ícone da skill
      color: "#7E57C2" // Cor roxa para a skill
    }
  ];
  
  // Variáveis de controle da skill
  let currentSkill = skills[0]; // Por enquanto, apenas uma skill
  let skillReady = true;
  let skillActive = false;
  let lastSkillTime = 0;
  
  // Referências DOM para a UI da skill
  let skillButtonEl;
  let skillCooldownEl;
  
  // Atualiza as estatísticas na interface
  function updateStats() {
    document.getElementById("health").textContent = player.health;
    document.getElementById("max-health").textContent = player.maxHealth;
    document.getElementById("attack").textContent = player.attack;
    document.getElementById("defense").textContent = player.defense;
    document.getElementById("lifesteal").textContent = player.lifesteal;
    document.getElementById("mana").textContent = player.mana;
    document.getElementById("max-mana").textContent = player.maxMana;
    levelEl.textContent = player.level;
    experienceEl.style.width = `${
      (player.experience / player.nextLevelExp) * 100
    }%`;
  }
  
  // Sistema de experiência e nível
  function gainExperience(amount) {
    player.experience += amount;
  
    // Verificar level up
    if (player.experience >= player.nextLevelExp) {
      levelUp();
    }
  
    updateStats();
  }
  
  // Level up do jogador
  function levelUp() {
    player.level++;
    player.experience -= player.nextLevelExp;
    player.nextLevelExp = Math.floor(player.nextLevelExp * 1.5); // Aumentado de 1.5
  
    // Aumentar estatísticas
    player.maxHealth += 8; // Reduzido de 10
    player.health = player.maxHealth;
    player.attack += 1.2; // Reduzido de 2
    player.defense += 0.75; // Reduzido de 1
    player.maxMana += 4; // Reduzido de 5
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
  function createLevelUpEffect() {
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
      50, // quantidade de partículas
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
  function generateSituation() {
    return situations[Math.floor(Math.random() * situations.length)];
  }
  
  // Gerador de bônus aleatórios
  function generateBonus() {
    return bonuses[Math.floor(Math.random() * bonuses.length)];
  }
  
  // Gera um inimigo aleatório
  function generateEnemy() {
    const enemy = { ...enemies[Math.floor(Math.random() * enemies.length)] };
  
    // Escala de inimigos baseada no nível do jogador
    if (player.level > 1) {
      const scaleFactor = 1 + (player.level - 1) * 0.25;
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
  function generateBoss() {
    const boss = { ...bosses[Math.floor(Math.random() * bosses.length)] };
  
    // Escala o chefe baseado no nível do jogador
    const scaleFactor = 1 + (player.level - 1) * 0.2;
    boss.health = Math.floor(boss.health * scaleFactor);
    boss.maxHealth = boss.health; // Armazena a vida máxima para a barra de vida
    boss.attack = Math.floor(boss.attack * scaleFactor);
    boss.defense = Math.floor(boss.defense * scaleFactor);
    boss.experience = Math.floor(boss.experience * scaleFactor);
  
    return boss;
  }
  
  // Adiciona um cartão à área de cartões
  function addCard(cardData) {
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
  function applyEffects(effects) {
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
  function showDamage(target, amount) {
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
  function showHeal(target, amount) {
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
  function showStatChange(stat, amount) {
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
  function showExperienceGain(amount) {
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
  function createEnemyHealthBar(enemy) {
    // Remove a barra existente, se houver
    const existingBar = document.querySelector(".enemy-health-bar");
    if (existingBar) {
      existingBar.remove();
    }
  
    // Criar a barra de vida
    const healthBar = document.createElement("div");
    healthBar.className = "enemy-health-bar";
  
    // Criar o preenchimento da barra
    const healthFill = document.createElement("div");
    healthFill.className = "enemy-health-fill";
    healthBar.appendChild(healthFill);
  
    // Criar o nome do inimigo
    const nameEl = document.createElement("div");
    nameEl.className = "enemy-name";
    nameEl.textContent = enemy.name;
    healthBar.appendChild(nameEl);
  
    // Adicionar a barra ao inimigo
    enemyEl.appendChild(healthBar);
  
    // Atualizar a barra com o valor atual
    updateEnemyHealthBar(enemy);
  }
  
  // Atualiza a barra de vida do inimigo
  function updateEnemyHealthBar(enemy) {
    const healthBar = document.querySelector(".enemy-health-fill");
    if (!healthBar) return;
  
    // Calcular porcentagem de vida
    const percent = Math.max(
      0,
      Math.min(100, (enemy.health / enemy.maxHealth) * 100)
    );
  
    // Atualizar a largura da barra
    healthBar.style.width = `${percent}%`;
  
    // Mudar a cor baseada na porcentagem de vida
    if (percent > 50) {
      healthBar.style.backgroundColor = "#4CAF50"; // Verde
    } else if (percent > 25) {
      healthBar.style.backgroundColor = "#FFC107"; // Amarelo
    } else {
      healthBar.style.backgroundColor = "#F44336"; // Vermelho
    }
  }
  
  // Inicia o combate com um inimigo
  function startCombat() {
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
  
    
    // Configura a cor do inimigo
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
        description: `${
          enemy.description || "Um poderoso adversário apareceu!"
        } (Vida: ${enemy.health}, Ataque: ${enemy.attack}, Defesa: ${
          enemy.defense
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
  
    function playerAttack() {
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
            description: `Você causou ${playerDamage} de dano ao ${
              enemy.name
            }. Vida restante: ${enemy.health < 0 ? 0 : enemy.health}
                          ${
                            lifeStolen > 0
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
  
    function enemyAttack() {
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
        enemyEl.style.right = `${
          gameAreaEl.offsetWidth - playerPosition.right - 10
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
  
    function bossSpecialAttack(boss) {
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
  
    function endCombat(enemy, isBoss) {
      if (enemy.health <= 0) {
        // Vitória
        killCount++;
  
        // Registra o chefe se for um
        if (isBoss) {
          defeatedBosses.push({
            name: enemy.name,
            level: player.level
          });
        }
  
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
  
        // Esconde o inimigo
        setTimeout(() => {
          enemyEl.style.display = "none";
          enemyEl.style.opacity = "0";
  
          // Remove a barra de vida
          const healthBar = document.querySelector(".enemy-health-bar");
          if (healthBar) {
            healthBar.remove();
          }
  
          // Move para próxima etapa
          inCombat = false;
          moveToNextTile();
        }, 1500);
      } else {
        // Derrota - Adiciona exportação de resultados aqui
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
  
        // Adicionar resumo da jornada
        const journeySummary = createJourneySummary();
        gameOverOverlay.appendChild(journeySummary);
  
        addCard({
          title: "Derrota!",
          description: `Você foi derrotado por ${enemy.name}... Sua jornada chegou ao fim.`
        });
  
        // Botões para reiniciar ou exportar
        setTimeout(() => {
          const buttonContainer = document.createElement("div");
          buttonContainer.className = "game-over-buttons";
  
          // Botão para exportar resultados
          const exportButton = document.createElement("button");
          exportButton.textContent = "Exportar Resultados";
          exportButton.className = "export-button";
          exportButton.addEventListener("click", () => {
            exportResults();
          });
          buttonContainer.appendChild(exportButton);
  
          // Botão para reiniciar
          const restartButton = document.createElement("button");
          restartButton.textContent = "Tentar Novamente";
          restartButton.className = "restart-button";
          restartButton.addEventListener("click", () => {
            resetGame();
            gameOverOverlay.remove();
          });
          buttonContainer.appendChild(restartButton);
  
          gameOverOverlay.appendChild(buttonContainer);
        }, 2000);
  
        // Esconde o inimigo
        enemyEl.style.display = "none";
  
        // Remove a barra de vida
        const healthBar = document.querySelector(".enemy-health-bar");
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
  function resetGame() {
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
  
    // Limpa a lista de chefes derrotados
    defeatedBosses = [];
  
    // Limpa a área de cartões
    cardsArea.innerHTML = "";
  
    // Inicia o jogo novamente
    startGame();
  }
  
  // Cria o resumo da jornada para mostrar ao final
  function createJourneySummary() {
    const summaryContainer = document.createElement("div");
    summaryContainer.className = "journey-summary";
  
    const title = document.createElement("h2");
    title.textContent = "Resumo da Jornada";
    summaryContainer.appendChild(title);
  
    const stats = document.createElement("div");
    stats.className = "journey-stats";
  
    // Estatísticas do jogador
    stats.innerHTML = `
          <div class="stat-row"><span>Nível alcançado:</span> <span>${player.level}</span></div>
          <div class="stat-row"><span>Inimigos derrotados:</span> <span>${killCount}</span></div>
          <div class="stat-row"><span>Eventos encontrados:</span> <span>${eventCounter}</span></div>
          <div class="stat-row"><span>Chefes derrotados:</span> <span>${defeatedBosses.length}</span></div>
      `;
  
    summaryContainer.appendChild(stats);
  
    // Lista de chefes derrotados, se houver
    if (defeatedBosses.length > 0) {
      const bossesTitle = document.createElement("h3");
      bossesTitle.textContent = "Chefes Derrotados:";
      summaryContainer.appendChild(bossesTitle);
  
      const bossList = document.createElement("ul");
      bossList.className = "boss-list";
  
      defeatedBosses.forEach((boss) => {
        const bossItem = document.createElement("li");
        bossItem.innerHTML = `<span>${boss.name}</span> <span>(Nível ${boss.level})</span>`;
        bossList.appendChild(bossItem);
      });
  
      summaryContainer.appendChild(bossList);
    }
  
    return summaryContainer;
  }
  
  // Função para exportar os resultados
  function exportResults() {
    // Criar objeto com os resultados
    const results = {
      playerName: "Herói", // Poderia ser personalizado se o jogo tivesse nome do jogador
      playerLevel: player.level,
      enemiesDefeated: killCount,
      eventsEncountered: eventCounter,
      bossesDefeated: defeatedBosses,
      stats: {
        attack: player.attack,
        defense: player.defense,
        health: player.health,
        maxHealth: player.maxHealth,
        mana: player.mana,
        maxMana: player.maxMana,
        lifesteal: player.lifesteal
      },
      date: new Date().toLocaleString()
    };
  
    // Converter para string JSON
    const jsonResults = JSON.stringify(results, null, 2);
  
    // Criar texto formatado para download
    let formattedResults = `RPG - RESULTADOS DA JORNADA
  ==============================
  Data: ${results.date}
  
  ESTATÍSTICAS DO JOGADOR
  -----------------------
  Nível: ${player.level}
  Inimigos derrotados: ${killCount}
  Eventos encontrados: ${eventCounter}
  Chefes derrotados: ${defeatedBosses.length}
  
  Ataque: ${player.attack}
  Defesa: ${player.defense}
  Vida: ${player.health}/${player.maxHealth}
  Mana: ${player.mana}/${player.maxMana}
  Roubo de Vida: ${player.lifesteal}%
  
  CHEFES DERROTADOS
  -----------------`;
  
    if (defeatedBosses.length > 0) {
      defeatedBosses.forEach((boss) => {
        formattedResults += `\n${boss.name} (Nível ${boss.level})`;
      });
    } else {
      formattedResults += "\nNenhum chefe foi derrotado.";
    }
  
    // Criar um elemento de link para download
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(formattedResults)
    );
    element.setAttribute(
      "download",
      `rpg-results-${new Date().toISOString().split("T")[0]}.txt`
    );
  
    // Ocultá-lo
    element.style.display = "none";
    document.body.appendChild(element);
  
    // Simular clique para iniciar o download
    element.click();
  
    // Limpar o elemento
    document.body.removeChild(element);
  
    // Mostrar mensagem de confirmação
    const confirmMessage = document.createElement("div");
    confirmMessage.className = "export-confirmation";
    confirmMessage.textContent = "Resultados exportados com sucesso!";
    document.querySelector(".game-over-overlay").appendChild(confirmMessage);
  
    // Remover a mensagem após alguns segundos
    setTimeout(() => {
      confirmMessage.remove();
    }, 3000);
  }
  
  // Cria elementos de cenário
  function createSceneryElements() {
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
  function animateScenery() {
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
      if (currentLeft < -80) {
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
  function startMovingForward() {
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
  function moveToNextTile() {
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
  function triggerNarrativeEvent() {
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
  function initSkillSystem() {
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
  function activateSkill() {
    // Verifica se a skill está pronta e se o jogador tem mana suficiente
    if (
      !skillReady ||
      player.mana < currentSkill.manaCost ||
      inCombat === false
    ) {
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
  function showSkillActivationMessage() {
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
  function useSkill(enemy) {
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
    const skillDamage = Math.max(
      1,
      Math.floor(player.attack * currentSkill.damageMultiplier) - enemy.defense
    );
  
    // Aplica dano
    enemy.health -= skillDamage;
  
    // Efeito visual de dano
    showDamage(enemyEl, skillDamage);
  
    // Efeito de impacto
    createSkillImpactEffect(enemyEl, currentSkill.color);
  
    // Adiciona ao log
    addCard({
      title: `${currentSkill.name} usado!`,
      description: `Você usou ${
        currentSkill.name
      } causando ${skillDamage} de dano ao ${enemy.name}! Vida restante: ${
        enemy.health < 0 ? 0 : enemy.health
      }`
    });
  
    // Reseta o estado da skill
    skillActive = false;
  
    // Retorna o dano causado para a função de combate
    return skillDamage;
  }
  
  // Atualiza o cooldown da skill
  function updateSkillCooldown() {
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
  function createSkillEffect(source, target, skill) {
    // Efeito de preparação
    createSkillWindupEffect(source, skill.color);
  
    // Efeito de onda de energia
    setTimeout(() => {
      createSkillWaveEffect(source, target, skill.color);
    }, 300);
  }
  
  // Cria efeito de preparação da skill
  function createSkillWindupEffect(source, color) {
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
  function createSkillWaveEffect(source, target, color) {
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
  function createSkillImpactEffect(target, color) {
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
  
    update(deltaTime) {
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
  function updateParticles() {
    const deltaTime = 0.016; // ~60 FPS
  
    for (let i = particles.length - 1; i >= 0; i--) {
      const isAlive = particles[i].update(deltaTime);
      if (!isAlive) {
        particles.splice(i, 1);
      }
    }
  }
  
  // Cria uma explosão de partículas
  function createParticleExplosion(x, y, count, color, duration) {
    for (let i = 0; i < count && particles.length < MAX_PARTICLES; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      const speedX = Math.cos(angle) * speed;
      const speedY = Math.sin(angle) * speed;
      const size = Math.random() * 8 + 4;
  
      particles.push(
        new Particle(x, y, color, size, speedX, speedY, 0.1, duration)
      );
    }
  }
  
  // Cria partículas de sangue
  function createBloodParticles(target, count) {
    const x = target.offsetLeft + target.offsetWidth / 2;
    const y = target.offsetTop + target.offsetHeight / 2;
  
    for (let i = 0; i < count && particles.length < MAX_PARTICLES; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1;
      const speedX = Math.cos(angle) * speed;
      const speedY = Math.sin(angle) * speed;
      const size = Math.random() * 5 + 2;
  
      particles.push(
        new Particle(x, y, "#FF0000", size, speedX, speedY, 0.2, 0.8)
      );
    }
  }
  
  // Cria partículas de cura
  function createHealingParticles(target) {
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
  function createManaParticles(target) {
    const x = target.offsetLeft + target.offsetWidth / 2;
    const y = target.offsetTop;
  
    for (let i = 0; i < 15 && particles.length < MAX_PARTICLES; i++) {
      const angle = Math.random() * Math.PI - Math.PI / 2;
      const speed = Math.random() * 2 + 1;
      const speedX = Math.cos(angle) * speed;
      const speedY = Math.sin(angle) * speed;
      const size = Math.random() * 6 + 3;
  
      particles.push(
        new Particle(x, y, "#2196F3", size, speedX, speedY, -0.1, 1.2)
      );
    }
  }
  
  // Cria partículas para aumento de estatísticas
  function createStatBoostParticles(target, stat) {
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
  
      particles.push(new Particle(x, y, color, size, speedX, speedY, 0, 1.5));
    }
  }
  
  // Cria partículas para efeito de movimento
  function createMovementParticles() {
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
          new Particle(x, y, "#FFFFFF", size, speedX, speedY, 0, 0.5)
        );
      }
    }, 100);
  }
  
  // Cria efeito de impacto
  function createImpactEffect(target) {
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
  function createWindupEffect(target) {
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
  function createLifestealEffect(player, enemy) {
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
  function createEnemyDeathEffect(enemy) {
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
  function createBossSpecialAttackChargeEffect(boss, color) {
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
  function createBossSpecialAttackEffect(attackName, color) {
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
  function createNarrativeEventEffect() {
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
  function createClickEffect(button) {
    button.classList.add("button-clicked");
  
    setTimeout(() => {
      button.classList.remove("button-clicked");
    }, 100);
  }
  
  // Sistema básico de som
  function playSound(soundName) {
    // Implementação fictícia - em um jogo real, carregaria e tocaria arquivos de som
    console.log(`Playing sound: ${soundName}`);
  }
  
  // Inicia o jogo
  function startGame() {
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
  
    // Adiciona cartão inicial
    addCard({
      title: "A Jornada Começa",
      description: "Você parte em busca de aventuras em um mundo misterioso..."
    });
  
    // Gera a primeira situação
    setTimeout(() => {
      const firstEvent = generateSituation();
      addCard(firstEvent);
    }, 1000);
  }
  
  // Evento de clique do botão de início
  startButton.addEventListener("click", () => {
    startGame();
  });
  
  // Inicializa a interface
  updateStats();
  