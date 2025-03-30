# CineFlex - Sistema de Reservas de Cinema

O CineFlex é um sistema completo para reserva de assentos em cinemas, desenvolvido com React. Permite aos usuários navegar por filmes, selecionar sessões e reservar assentos de forma intuitiva.

## Acesso ao Projeto
[Clique aqui para acessar o deploy](https://cine-flex-chi.vercel.app/)

## Funcionalidades Principais

- **Seleção de Filmes**
  - Listagem completa dos filmes em cartaz
  - Navegação para escolha de sessões

- **Reserva de Assentos**
  - Mapa interativo da sala de cinema
  - Seleção múltipla de assentos
  - Formulário de dados do comprador

- **Confirmação**
  - Tela de resumo com detalhes da reserva
  - Visualização dos assentos selecionados

## Tecnologias Utilizadas

- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat-square)
  Biblioteca principal para construção da UI
- ![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=react-router&logoColor=white&style=flat-square)
  Gerenciamento de navegação entre telas
- ![Styled Components](https://img.shields.io/badge/-Styled--Components-DB7093?logo=styled-components&logoColor=white&style=flat-square)
  Estilização CSS-in-JS
- ![Axios](https://img.shields.io/badge/-Axios-5A29E4?logo=axios&logoColor=white&style=flat-square)
  Cliente HTTP para consumo da API
- ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat-square)
  Build tool e servidor de desenvolvimento

  ## Estrutura do Projeto

```
cineflex/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Cineflex.jsx        # Barra superior de navegação
│   │   ├── EscolherAssento.jsx # Tela de seleção de assentos
│   │   ├── EscolherSessao.jsx  # Tela de seleção de sessões
│   │   └── Sucesso.jsx         # Tela de confirmação
│   ├── App.jsx                 # Configuração de rotas
│   ├── main.jsx                # Ponto de entrada
│   └── reset.css               # Reset CSS
├── index.html
└── package.json
```

## Como Executar o Projeto

0. **Pré-requisitos:**
   Certifique-se de ter o [Node.js](https://nodejs.org) instalado em sua máquina.

1. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/seu-usuario/cineflex.git
   cd cineflex
   ```

2. **Instalar as Dependências:**
   ```bash
   npm install 
   npm i styled-components
   npm i react-router-dom localforage match-sorter sort-by
   npm i axios
   ```

3. **Executar o Projeto:**
   ```bash
   npm run dev
   ```

4. **Abrir no Navegador:**
   Acesse `http://localhost:5173` para visualizar o projeto.

