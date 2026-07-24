# 🔰 Site  PET Computação USP São Carlos

> Projeto desenvolvido como critério de avaliação para o processo seletivo do **USPCodeLab (ICMC - USP São Carlos)**.

---

## 📌 Sobre o Projeto

O objetivo deste projeto é reformular e modernizar o site do **PET Computação** (Programa de Educação Tutorial da USP São Carlos). A plataforma centraliza informações institucionais do grupo, frentes de atuação, membros/equipe, perguntas frequentes e links úteis indispensáveis para a vida acadêmica dos ingressantes do ICMC.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias fundamentais da Web, priorizando desempenho, leveza e manipulação dinâmica de dados via arquivos JSON localizados na pasta `data/`:

- **HTML5:** Estruturação semântica de todas as páginas (`index`, `equipe`, `faq`, `links-uteis`).
- **CSS3:** Estilização moderna, esquema de cores temático (tons de verde PET) e layout totalmente responsivo.
- **JavaScript (Vanilla):** Manipulação da DOM e consumo assíncrono dos arquivos `.json` para renderização dinâmica dos conteúdos.
- **JSON:** Armazenamento estruturado de dados (membros da equipe, projetos, frentes de atuação e FAQs).

---

## 📂 Estrutura de Pastas e Arquivos

```text
CODELAB-PROJECT/
├── data/
│   ├── assets/             # Logos, ícones e fotos da equipe
│   ├── atividades.json     # Informações das frentes de atuação
│   ├── membros.json        # Dados do tutor e integrantes do PET
│   └── PET.json            # Textos institucionais e sobre o grupo
├── pages/
│   ├── equipe/             # Página da equipe
│   ├── faq/                # Perguntas frequentes
│   ├── index/              # Componentes de estilos/scripts da Home
│   └── links-uteis/        # Central de links para graduandos
├── index.html              # Página inicial (Home)
└── README.md               # Documentação do repositório
```
## ✨ Funcionalidades

- **Página Inicial:** Apresentação institucional do PET Computação e navegação interativa por frentes de atuação (Codifique, Codifikids, Overclock, Social, Pesquisa e Cartilha).
- **Membros & Equipe:** Exibição dinâmica dos integrantes e orientação do tutor responsável, consumidos via `membros.json`.
- **Dúvidas Frequentes (FAQ):** Respostas para as principais perguntas sobre o grupo.
- **Central de Links Úteis:** Acesso rápido ao JupiterWeb, RunCodes, Overleaf, Codeforces, Folki e canais de aviso do PET.

---

## 👥 Integrantes / Colaboradores

Projeto idealizado e codificado por:

- **Pedro Sarni**
- **Gustavo Fantato**
- **Thales Gontijo**

---

## 🔧 Como Executar o Projeto Localmente

Como o projeto utiliza chamadas para arquivos JSON locais (`.json`), é recomendável executá-lo através de um servidor local para evitar bloqueios de políticas de CORS no navegador.

### Opção 1: VS Code (Live Server)
1. Abra a pasta do projeto no **Visual Studio Code**.
2. Certifique-se de ter a extensão **Live Server** instalada.
3. Clique com o botão direito no arquivo `index.html` e selecione **Open with Live Server**.

---
