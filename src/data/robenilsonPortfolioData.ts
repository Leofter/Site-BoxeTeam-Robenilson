import { PortfolioDatabase } from '@/domain/types/portfolio'

export const robenilsonPortfolioData: PortfolioDatabase = {
  navItems: [
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Ficha & Técnica' },
    { id: 'work', label: 'Trajetória Olímpica' },
    { id: 'education', label: 'Medalhas & Equipe' },
    { id: 'writing', label: 'Cartel Olímpico' },
    { id: 'speaking', label: 'Acervo & Mídia' },
    { id: 'contact', label: 'Contato' },
  ],

  socialLinks: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/robenilsonvieira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    },
    {
      label: 'Wikipédia',
      href: 'https://pt.wikipedia.org/wiki/Robenilson_de_Jesus',
    },
    {
      label: 'Contato',
      href: '#contact',
    },
  ],

  hero: {
    firstName: 'ROBENILSON',
    lastName: 'VIEIRA',
    teamTitle: 'BOXE TEAM',
    olympicEditions: ['Beijing 2008', 'Londres 2012', 'Rio 2016'],
    olympicLogo: '/img/logo_olimpiada.png',
    heroImage: '/img/Robenilson.png',
    teamLogo: '/img/logo.png',
    badgeText: 'SSA - BA • SINCE 2003',
    subtitle:
      'Pugilista Olímpico Brasileiro em três ciclos olímpicos (Pequim 2008, Londres 2012 e Rio 2016). Campeão Mundial Militar, Campeão Sul-Americano e Medalhista nos Jogos Pan-Americanos.',
  },

  about: {
    sectionLabel: 'Sobre Robenilson Vieira',
    firstBlock: {
      id: 'origem-selecao',
      image: '/img/Robenilson.png',
      imageAlt:
        'Robenilson de Jesus durante treino para os Jogos Olímpicos Rio 2016 na base do Time Brasil, na Urca',
      caption:
        'BASE DO TIME BRASIL - URCA, RIO DE JANEIRO / PREPARAÇÃO OLÍMPICA RIO 2016 (FOTO: FERNANDO FRAZÃO / AGÊNCIA BRASIL)',
      paragraphs: [
        'Nascido em 24 de setembro de 1987 em Boa Vista do Tupim, na Bahia, Robenilson Vieira de Jesus construiu uma das trajetórias mais sólidas e vitoriosas do boxe olímpico brasileiro.',
        'Com 1,66m de altura, agilidade de pernas e precisão técnica apurada, destacou-se na Seleção Brasileira Olímpica de Boxe competindo nas categorias Peso Mosca (até 51 kg) e Peso Galo (até 56 kg), representando o Brasil nos maiores palcos do esporte mundial.',
      ],
      containImage: true,
    },
    quote: {
      line1: '"3X ATLETA OLÍMPICO',
      highlight: 'PEQUIM 2008 • LONDRES 2012 • RIO 2016',
      line3: 'MEDALHISTA PAN-AMERICANO,',
      line4: 'CAMPEÃO SUL-AMERICANO & MUNDIAL MILITAR."',
      subtitleTop: 'SELEÇÃO BRASILEIRA DE BOXE — TIME BRASIL',
      subtitleBottom: 'CATEGORIAS PESO MOSCA (51KG) & PESO GALO (56KG)',
    },
    secondBlock: {
      id: 'londres-2012',
      image: '/img/imagem topo.png',
      imageAlt:
        'Robenilson Vieira em combate nos Jogos Olímpicos de Londres 2012 contra o cubano Lázaro Álvarez',
      caption:
        'JOGOS OLÍMPICOS DE LONDRES 2012 — QUARTAS DE FINAL PESO GALO (ATÉ 56 KG)',
      paragraphs: [
        'Nos Jogos Olímpicos de Londres 2012, na categoria peso galo (até 56 kg), Robenilson protagonizou uma campanha memorável: estreou vencendo o uzbeque Orzubek Shayimov por 13 a 7 e, nas oitavas de final, eliminou o russo Sergey Vodopyanov — então campeão mundial amador — por 13 a 11.',
        'Nas quartas de final, travou um grande duelo contra o cubano Lázaro Álvarez (campeão mundial em 2011 e ouro no Pan de Guadalajara), terminando em 16 a 11 e ficando a apenas uma vitória de garantir o pódio olímpico.',
      ],
      containImage: true,
    },
    thirdBlock: {
      id: 'boxe-team',
      image: '/img/logo.png',
      imageAlt: 'Emblema Oficial Robenilson Vieira Boxe Team - SSA-BA Since 2003',
      caption: 'ROBENILSON VIEIRA BOXE TEAM — SALVADOR, BAHIA (SSA-BA) • DESDE 2003',
      paragraphs: [
        'Além do legado nos ringues internacionais — com o Ouro no Campeonato Mundial Militar (Rio 2011), o Ouro nos Jogos Sul-Americanos (Chile 2013) e o Bronze nos Jogos Pan-Americanos (Guadalajara 2011) —, Robenilson lidera a Robenilson Vieira Boxe Team em Salvador, Bahia.',
        'Desde 2003, o projeto transforma vidas por meio da disciplina da nobre arte, aplicando a metodologia da Seleção Brasileira tanto na formação de atletas competitivos quanto no treinamento de boxe para performance e saúde.',
      ],
      containImage: true,
    },
  },

  skills: {
    sectionLabel: 'Ficha Técnica & Especialidades',
    title: 'TALE OF THE TAPE',
    stats: [
      {
        label: 'NOME COMPLETO',
        value: 'Robenilson Vieira de Jesus',
        detail: 'Natural de Boa Vista do Tupim — Bahia, Brasil',
      },
      {
        label: 'NASCIMENTO',
        value: '24 de Setembro de 1987',
        detail: '39 anos • Nacionalidade Brasileira',
      },
      {
        label: 'COMPLEIÇÃO FÍSICA',
        value: '1,66 m • 51 kg / 56 kg',
        detail: 'Categorias Olímpicas: Peso Mosca (51 kg) & Peso Galo (56 kg)',
      },
      {
        label: 'CICLOS OLÍMPICOS',
        value: '3 Jogos Olímpicos',
        detail: 'Beijing 2008 • Londres 2012 • Rio 2016 (Time Brasil)',
      },
      {
        label: 'PRINCIPAIS MEDALHAS',
        value: '2 Ouros & 1 Bronze',
        detail: 'Ouro Mundial Militar • Ouro Sul-Americano • Bronze Pan-Americano',
      },
      {
        label: 'EQUIPE & ACADEMIA',
        value: 'Boxe Team SSA-BA',
        detail: 'Salvador, Bahia — Tradição no Boxe desde 2003',
      },
    ],
    skills: [
      'Boxe Olímpico de Alto Rendimento',
      'Categoria Peso Galo (até 56 kg)',
      'Categoria Peso Mosca (até 51 kg)',
      'Velocidade, Esquiva & Contra-Golpe',
      'Estratégia Tática de Ringue Internacional',
      'Formação de Atletas — Boxe Team SSA-BA',
      'Preparação Física & Condicionamento de Boxe',
      'Mentoria Esportiva & Clínicas Técnicas',
    ],
  },

  work: {
    sectionLabel: 'Carreira & Conquistas',
    titleLine1: 'TRAJETÓRIA',
    titleLine2: 'OLÍMPICA',
    experiences: [
      {
        title: 'Fundador, Atleta & Head Coach',
        organization: 'Robenilson Vieira Boxe Team',
        location: 'Salvador, Bahia (SSA - BA)',
        period: '2003 — Presente',
        description:
          'Liderança técnica e formação esportiva na Bahia. Transmissão da experiência adquirida em três Jogos Olímpicos e dezenas de torneios mundiais para novos pugilistas, atletas de alto rendimento e praticantes da nobre arte.',
        tags: [
          'Head Coach',
          'Boxe Olímpico',
          'Alto Rendimento',
          'Formação de Atletas',
          'SSA-BA',
        ],
      },
      {
        title: 'Atleta Olímpico — Jogos Olímpicos Rio 2016',
        organization: 'Seleção Brasileira de Boxe (Time Brasil / COB)',
        location: 'Rio de Janeiro, Brasil',
        period: '2016',
        description:
          'Terceira participação consecutiva em Jogos Olímpicos de Verão, representando o Brasil em casa nos Jogos Rio 2016 após ciclo de preparação intensiva na base do Time Brasil na Urca.',
        tags: ['Jogos Olímpicos', 'Rio 2016', 'Time Brasil', 'Peso Galo 56kg'],
      },
      {
        title: 'Medalha de Ouro 🥇 — Jogos Sul-Americanos',
        organization: 'Confederação Brasileira de Boxe / Time Brasil',
        location: 'Chile',
        period: '2013',
        description:
          'Conquista da medalha de ouro na categoria Peso Galo (até 56 kg), reafirmando a hegemonia sul-americana no ciclo olímpico rumo ao Rio 2016.',
        tags: ['Medalha de Ouro', 'Jogos Sul-Americanos', 'Peso Galo', 'Campeão'],
      },
      {
        title: 'Atleta Olímpico (Top 5 / Quartas de Final) — Londres 2012',
        organization: 'Seleção Brasileira de Boxe (Time Brasil / COB)',
        location: 'Londres, Reino Unido',
        period: '2012',
        description:
          'Campanha histórica no Peso Galo (até 56 kg). Venceu Orzubek Shayimov (13–7) na estreia e derrotou o campeão mundial amador Sergey Vodopyanov (13–11) nas oitavas de final, chegando às quartas de final contra Lázaro Álvarez (11–16) — a apenas uma luta da medalha olímpica.',
        tags: [
          'Londres 2012',
          'Quartas de Final',
          'Peso Galo 56kg',
          'Vitória sobre Campeão Mundial',
        ],
      },
      {
        title: 'Bronze Pan-Americano 🥉 & Ouro Mundial Militar 🥇',
        organization: 'Seleção Brasileira de Boxe & Equipe Militar do Brasil',
        location: 'Guadalajara, México & Rio de Janeiro, Brasil',
        period: '2011',
        description:
          'Ano consagrador com duas grandes conquistas internacionais na categoria Peso Galo: Campeão Mundial Militar (Medalha de Ouro) nos Jogos Mundiais Militares no Rio de Janeiro e Medalhista de Bronze nos Jogos Pan-Americanos de Guadalajara, no México.',
        tags: [
          'Ouro Mundial Militar',
          'Bronze Pan-Americano',
          'Guadalajara 2011',
          'Rio 2011',
        ],
      },
      {
        title: 'Atleta Olímpico (Oitavas de Final) — Pequim 2008',
        organization: 'Seleção Brasileira de Boxe (Time Brasil / COB)',
        location: 'Pequim, China',
        period: '2008',
        description:
          'Estreia em Jogos Olímpicos competindo na categoria Peso Mosca (até 51 kg). Dominou a primeira luta vencendo Anurudha Rathnayake por expressivos 13 a 3 e avançou até as oitavas de final contra Anvar Yunusov (6–12).',
        tags: ['Pequim 2008', 'Estreia Olímpica', 'Peso Mosca 51kg', 'Oitavas de Final'],
      },
    ],
  },

  education: {
    sectionLabel: 'Conquistas & Legado',
    title: 'MEDALHAS & EQUIPE',
    items: [
      {
        id: 'medalhas-internacionais',
        title: 'Ouro Mundial Militar, Ouro Sul-Americano & Bronze no Pan',
        description:
          'No Peso Galo (até 56 kg), Robenilson subiu ao lugar mais alto do pódio no Campeonato Mundial Militar de 2011 (Rio de Janeiro) e nos Jogos Sul-Americanos de 2013 (Chile), além de conquistar a histórica medalha de Bronze nos Jogos Pan-Americanos de Guadalajara 2011.',
        period: '2011 — 2013 • QUADRO DE MEDALHAS',
        caption: 'CAMPEÃO MUNDIAL MILITAR • CAMPEÃO SUL-AMERICANO • MEDALHISTA PAN-AMERICANO',
        image: '/img/Robenilson.png',
        imageAlt: 'Robenilson Vieira com uniforme do Time Brasil e luvas de boxe',
        containImage: true,
        badge: '🥇 2x OURO • 🥉 1x BRONZE',
      },
      {
        id: 'trilogia-olimpica',
        title: 'Trilogia Olímpica: Beijing 2008 • Londres 2012 • Rio 2016',
        description:
          'Poucos pugilistas na história do Brasil alcançaram a marca de três participações em Jogos Olímpicos. De jovem promessa no Peso Mosca em Pequim 2008 a protagonista nas quartas de final em Londres 2012 e referência veterana no Rio 2016.',
        period: '2008 — 2016 • JOGOS OLÍMPICOS DE VERÃO',
        caption: 'COMITÊ OLÍMPICO DO BRASIL (COB) — TIME BRASIL',
        image: '/img/imagem topo.png',
        imageAlt: 'Combate olímpico de Robenilson Vieira em Londres 2012',
        containImage: true,
        badge: '3X OLÍMPICO',
      },
      {
        id: 'boxe-team-ssa',
        title: 'Robenilson Vieira Boxe Team — Salvador, Bahia',
        description:
          'Fundada em 2003 em Salvador (SSA-BA), a equipe carrega o escudo do punho dourado coroado como símbolo de superação, técnica e respeito. Treinamentos voltados para todas as idades, preparação competitiva e condicionamento físico.',
        period: 'DESDE 2003 • SALVADOR, BAHIA (SSA-BA)',
        caption: 'ROBENILSON VIEIRA BOXE TEAM — SINCE 2003',
        image: '/img/logo.png',
        imageAlt: 'Logo Robenilson Vieira Boxe Team SSA-BA Since 2003',
        containImage: true,
        badge: 'SINCE 2003',
      },
    ],
  },

  writing: {
    sectionLabel: 'Histórico Oficial de Combates',
    title: 'CARTEL OLÍMPICO',
    fights: [
      {
        title: 'vs. Lázaro Álvarez (Cuba — Campeão Mundial Amador & Ouro no Pan)',
        competition: 'Jogos Olímpicos de Londres 2012 • Quartas de Final (Peso Galo 56 kg)',
        year: 'Placar: 11 – 16 (A 1 luta da medalha olímpica) • 2012',
        resultBadge: 'Quartas Olímpicas',
        link: 'https://pt.wikipedia.org/wiki/Robenilson_de_Jesus',
      },
      {
        title: 'Vitória sobre Sergey Vodopyanov (Rússia — Campeão Mundial Amador)',
        competition: 'Jogos Olímpicos de Londres 2012 • Oitavas de Final (Peso Galo 56 kg)',
        year: 'Vitória por 13 – 11 • 2012',
        resultBadge: 'Vitória Histórica',
        link: 'https://pt.wikipedia.org/wiki/Robenilson_de_Jesus',
      },
      {
        title: 'Vitória sobre Orzubek Shayimov (Uzbequistão)',
        competition: 'Jogos Olímpicos de Londres 2012 • 1ª Fase / 16-avos (Peso Galo 56 kg)',
        year: 'Vitória por 13 – 7 • 2012',
        resultBadge: 'Vitória Olímpica',
        link: 'https://pt.wikipedia.org/wiki/Robenilson_de_Jesus',
      },
      {
        title: 'Conquista da Medalha de Ouro — Jogos Sul-Americanos',
        competition: 'Boxe nos Jogos Sul-Americanos no Chile • Categoria Peso Galo (56 kg)',
        year: 'Medalha de Ouro 🥇 • 2013',
        resultBadge: 'Campeão',
        link: 'https://pt.wikipedia.org/wiki/Robenilson_de_Jesus',
      },
      {
        title: 'Conquista da Medalha de Bronze — Jogos Pan-Americanos de Guadalajara',
        competition: 'Jogos Pan-Americanos no México • Categoria Peso Galo (56 kg)',
        year: 'Medalha de Bronze 🥉 • 2011',
        resultBadge: 'Pódio Pan-Americano',
        link: 'https://pt.wikipedia.org/wiki/Robenilson_de_Jesus',
      },
      {
        title: 'Conquista da Medalha de Ouro — Campeonato Mundial Militar',
        competition: 'Jogos Mundiais Militares no Rio de Janeiro • Categoria Peso Galo (56 kg)',
        year: 'Medalha de Ouro 🥇 • 2011',
        resultBadge: 'Campeão Mundial Militar',
        link: 'https://pt.wikipedia.org/wiki/Robenilson_de_Jesus',
      },
      {
        title: 'vs. Anvar Yunusov (Tajiquistão)',
        competition: 'Jogos Olímpicos de Pequim 2008 • Oitavas de Final (Peso Mosca 51 kg)',
        year: 'Placar: 6 – 12 • 2008',
        resultBadge: 'Oitavas Olímpicas',
        link: 'https://pt.wikipedia.org/wiki/Robenilson_de_Jesus',
      },
      {
        title: 'Vitória sobre Anurudha Rathnayake (Sri Lanka)',
        competition: 'Jogos Olímpicos de Pequim 2008 • 1ª Fase / Estreia (Peso Mosca 51 kg)',
        year: 'Vitória por 13 – 3 • 2008',
        resultBadge: 'Vitória Olímpica',
        link: 'https://pt.wikipedia.org/wiki/Robenilson_de_Jesus',
      },
    ],
  },

  speaking: {
    sectionLabel: 'Referências, Imprensa & Registros',
    title: 'ACERVO & MÍDIA',
    references: [
      {
        title: 'Biografia Oficial & Histórico Olímpico — Wikipédia (Robenilson de Jesus)',
        source: 'Enciclopédia Livre • Pugilistas Olímpicos do Brasil',
        year: 'Oficial',
        link: 'https://pt.wikipedia.org/wiki/Robenilson_de_Jesus',
      },
      {
        title: 'Treino da Seleção Brasileira para os Jogos Olímpicos Rio 2016 na Urca',
        source: 'Fernando Frazão / Agência Brasil — Base do Time Brasil (Rio de Janeiro)',
        year: '2016',
        link: 'https://pt.wikipedia.org/wiki/Robenilson_de_Jesus',
      },
      {
        title: 'Robenílson vence Campeão Mundial e faz quartas de final históricas em Londres',
        source: 'Cobertura Jogos Olímpicos de Verão de 2012 — Peso Galo (56 kg)',
        year: '2012',
        link: 'https://pt.wikipedia.org/wiki/Robenilson_de_Jesus',
      },
      {
        title: 'Boxe brasileiro garante 9 vagas e conquista medalha no Pan de Guadalajara',
        source: 'Estadão Esportes — Jogos Pan-Americanos do México',
        year: '2011',
        link: 'https://pt.wikipedia.org/wiki/Robenilson_de_Jesus',
      },
      {
        title: 'Bastidores, Treinos e Equipe — @robenilsonvieira',
        source: 'Perfil Oficial no Instagram • Robenilson Vieira Boxe Team',
        year: 'Atual',
        link: 'https://www.instagram.com/robenilsonvieira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      },
    ],
  },

  contact: {
    sectionLabel: 'Contato & Redes Sociais',
    headline: 'Entre em contato',
    subheadlineLines: [
      'TREINE COM A EXPERIÊNCIA',
      'DE TRÊS CICLOS',
      'OLÍMPICOS',
    ],
    subheadlineCaption:
      'SIGA NO INSTAGRAM PARA NOVIDADES, TREINOS, PARCERIAS E EVENTOS',
    locations: [
      {
        label: 'SALVADOR — BAHIA (SSA-BA) • ROBENILSON VIEIRA BOXE TEAM',
        detail: 'Desde 2003',
        link: 'https://www.instagram.com/robenilsonvieira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      },
      {
        label: 'BOA VISTA DO TUPIM — BAHIA • ORIGEM DO ATLETA',
        detail: 'Wikipédia Oficial',
        link: 'https://pt.wikipedia.org/wiki/Robenilson_de_Jesus',
      },
    ],
    instagramUrl:
      'https://www.instagram.com/robenilsonvieira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    instagramHandle: '@robenilsonvieira',
    instagramIcon: '/img/logo_instagram.png',
    wikipediaUrl: 'https://pt.wikipedia.org/wiki/Robenilson_de_Jesus',
    footerCopyrightName: 'Robenilson Vieira Boxe Team',
    footerLocation: 'Salvador — Bahia, Brasil • Since 2003',
  },
}
