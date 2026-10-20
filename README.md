# Portfólio & Equipe de Boxe — Robenilson Vieira (`Boxe Team`)

Este repositório contém o portfólio oficial do pugilista olímpico brasileiro **Robenilson Vieira de Jesus** e de sua equipe (**Robenilson Vieira Boxe Team — SSA-BA, Since 2003**), desenvolvido com **React**, **TypeScript**, **Vite**, **Tailwind CSS** e **Framer Motion** seguindo uma **Arquitetura em Camadas**.

---

## Sumário

1. [Visão Geral do Projeto](#1-visão-geral-do-projeto)
2. [Arquitetura em Camadas](#2-arquitetura-em-camadas)
3. [Inventário de Mídia e Imagens (`public/img/`)](#3-inventário-de-mídia-e-imagens-publicimg)
4. [Perfil e Biografia do Atleta (Base Wikipédia)](#4-perfil-e-biografia-do-atleta-base-wikipédia)
5. [Como Executar Localmente](#5-como-executar-localmente)

---

## 1. Visão Geral do Projeto

O portfólio apresenta a carreira de **Robenilson Vieira**, destacando suas três participações olímpicas (**Pequim 2008**, **Londres 2012** e **Rio 2016**), seu quadro de medalhas internacionais (Campeão Mundial Militar, Campeão Sul-Americano e Medalhista Pan-Americano), a identidade visual da sua equipe (**Robenilson Vieira Boxe Team — SSA-BA**) e os canais de contato.

Todas as informações biográficas e históricas estruturadas também estão consolidadas no arquivo [`BANCO_DE_INFORMACOES.md`](./BANCO_DE_INFORMACOES.md).

---

## 2. Arquitetura em Camadas

O código-fonte em `src/` está organizado em camadas desacopladas para facilitar a manutenção, escalabilidade e clareza de responsabilidades:

```text
Site-BoxeTeam-Robenilson/
├── index.html                           # Ponto de entrada HTML e metadados SEO
├── public/img/                          # Ativos visuais estáticos servidos na raiz (/img/*)
├── src/
│   ├── domain/                          # 1. Camada de Domínio (Entidades e Contratos)
│   │   └── types/portfolio.ts           # Interfaces TypeScript do portfólio e cartel olímpico
│   ├── data/                            # 2. Camada de Dados / Infraestrutura (Repositório)
│   │   └── robenilsonPortfolioData.ts   # Base de dados oficial do atleta e da Boxe Team
│   ├── services/                        # 3. Camada de Aplicação / Serviços
│   │   └── portfolioService.ts          # Casos de uso e seletores de dados para a interface
│   ├── hooks/                           # Hooks customizados de comportamento de UI
│   │   ├── useActiveSection.ts          # Observador de seção ativa na navegação
│   │   └── useScrollVisibility.ts       # Visibilidade inteligente do menu durante o scroll
│   ├── components/                      # 4. Camada de Apresentação (Componentes Visuais)
│   │   ├── Navigation.tsx               # Navegação fixa responsiva e links sociais
│   │   ├── Hero.tsx                     # Destaque principal com foto oficial e aros olímpicos
│   │   ├── About.tsx                    # Biografia, citação olímpica e história da equipe
│   │   ├── Skills.tsx                   # Ficha técnica ("Tale of the Tape") e especialidades
│   │   ├── Work.tsx                     # Linha do tempo da trajetória olímpica e títulos
│   │   ├── Education.tsx                # Destaques visuais de medalhas e Boxe Team SSA-BA
│   │   ├── Writing.tsx                  # Cartel olímpico documentado luta a luta
│   │   ├── Speaking.tsx                 # Acervo de mídia, imprensa e referências oficiais
│   │   ├── Contact.tsx                  # Seção de contato, Instagram e rodapé
│   │   └── GrainOverlay.tsx             # Textura cinematográfica sobreposta
│   └── pages/
│       ├── Index.tsx                    # Composição principal da página do portfólio
│       └── NotFound.tsx                 # Página 404
├── BANCO_DE_INFORMACOES.md              # Fonte única de informações biográficas e históricas
└── README.md                            # Documentação principal do projeto
```

---

## 3. Inventário de Mídia e Imagens (`public/img/`)

| Arquivo | Uso no Portfólio | Descrição Visual |
| :--- | :--- | :--- |
| `/img/logo.png` | Navegação, Favicon, Seção Sobre e Equipe | Emblema circular com punho dourado coroado e inscrição **"ROBENILSON VIEIRA - BOXE TEAM - SSA-BA - SINCE 2003"**. |
| `/img/Robenilson.png` | Hero Section, Biografia e Quadro de Medalhas | Recorte em PNG de Robenilson Vieira em posição de guarda com luvas vermelhas e agasalho do Time Brasil (preparação Rio 2016 na Urca). |
| `/img/imagem topo.png` | Seção Sobre (Londres 2012) e Trilogia Olímpica | Recorte em PNG do combate nas quartas de final de Londres 2012 contra o cubano Lázaro Álvarez. |
| `/img/logo_olimpiada.png` | Hero Section | Cinco Aros Olímpicos em contorno branco. |
| `/img/logo_instagram.png` | Seção de Contato | Ícone oficial do Instagram para acesso direto a `@robenilsonvieira`. |

---

## 4. Perfil e Biografia do Atleta (Base Wikipédia)

### Informações Pessoais
* **Nome completo:** Robenilson Vieira de Jesus
* **Data de nascimento:** 24 de setembro de 1987 (39 anos)
* **Local de nascimento:** Boa Vista do Tupim, Bahia, Brasil
* **Sede da Equipe:** Salvador, Bahia (`SSA - BA`) — Desde 2003 (`Since 2003`)
* **Nacionalidade:** Brasileira
* **Compleição Física:**
  * **Altura:** 1,66 m
  * **Categorias de Peso Olímpicas:** Peso Mosca (até 51 kg) / Peso Galo (até 56 kg)

### Quadro de Medalhas em Destaque
| Competição | Edição / Local | Medalha | Categoria |
| :--- | :--- | :---: | :--- |
| **Jogos Pan-Americanos** | Guadalajara 2011 (México) | 🥉 **Bronze** | Peso Galo (até 56 kg) |
| **Jogos Sul-Americanos** | Chile 2013 | 🥇 **Ouro** | Peso Galo (até 56 kg) |
| **Campeonato Mundial Militar** | Rio de Janeiro 2011 (Brasil) | 🥇 **Ouro** | Peso Galo (até 56 kg) |

### Trajetória Olímpica
1. **Jogos Olímpicos de Pequim 2008 (Peso Mosca — até 51 kg):**
   * Estreou vencendo **Anurudha Rathnayake** (Sri Lanka) por **13 a 3**.
   * Nas oitavas de final, enfrentou **Anvar Yunusov** (Tajiquistão), placar **12 a 6**.
2. **Ciclo 2011 (Mundial Militar e Pan de Guadalajara):**
   * Conquistou a medalha de **Ouro no Campeonato Mundial Militar de 2011** no Rio de Janeiro (peso galo).
   * Conquistou a medalha de **Bronze nos Jogos Pan-Americanos de 2011** em Guadalajara, no México (peso galo).
3. **Jogos Olímpicos de Londres 2012 (Peso Galo — até 56 kg):**
   * Na estreia, venceu **Orzubek Shayimov** (Uzbequistão) por **13 a 7**.
   * Nas oitavas de final, derrotou o russo **Sergey Vodopyanov** (campeão mundial amador) por **13 a 11**.
   * Nas quartas de final, lutou contra o cubano **Lázaro Álvarez** (campeão mundial amador e ouro no Pan 2011), placar **16 a 11**, ficando a apenas uma vitória da medalha olímpica.
4. **Jogos Sul-Americanos e Jogos Olímpicos Rio 2016:**
   * Conquistou a medalha de **Ouro nos Jogos Sul-Americanos** na categoria peso galo.
   * Representou o Brasil nos **Jogos Olímpicos Rio 2016**, consolidando sua história como atleta **3x Olímpico** pelo Time Brasil.

---

## 5. Como Executar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Gerar build de produção
npm run build
```
