# 💬 Chat em Tempo Real com WebSockets

Uma aplicação de chat simples que demonstra a comunicação em tempo real entre múltiplos clientes usando Node.js e Socket.io.

![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

---

## 🎯 Sobre o Projeto

O objetivo deste projeto foi explorar a tecnologia de WebSockets para criar uma aplicação onde as mensagens são enviadas e recebidas instantaneamente por todos os usuários conectados, sem a necessidade de recarregar a página.

## ✨ Funcionalidades

* **Conexão Múltipla:** Vários usuários podem se conectar ao chat simultaneamente.
* **Mensagens Instantâneas:** As mensagens enviadas por um usuário são vistas por todos os outros em tempo real.
* **Identificação de Usuário:** (Opcional) Usuários podem definir um "apelido" ao entrar no chat.

## 💻 Tecnologias Utilizadas

* **Node.js (com Express):** Servidor back-end para gerenciar as conexões.
* **Socket.io:** Biblioteca para habilitar a comunicação WebSocket bidirecional.
* **HTML5 / CSS3:** Estrutura e estilo da interface do chat.
* **JavaScript (Front-end):** Para lidar com a conexão do socket no lado do cliente e manipulação do DOM.

## 🚀 Rodando o Projeto

```bash
# 1. Clonar o repositório
git clone [https://github.com/raaulrodrigues/Atividade-Chat-em-Tempo-Real.git](https://github.com/raaulrodrigues/Atividade-Chat-em-Tempo-Real.git)

# 2. Acessar a pasta do projeto
cd Atividade-Chat-em-Tempo-Real

# 3. Instalar as dependências do servidor
npm install

# 4. Iniciar o servidor
npm start
# ou
node index.js

# 5. Abrir o arquivo index.html no navegador (em várias abas)
