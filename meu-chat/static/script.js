document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const messages = document.getElementById('messages');
    const usernameDisplay = document.getElementById('username-display');

    const nickname = prompt("Digite seu nome:");
    usernameDisplay.textContent = nickname || "Anônimo";

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (input.value && nickname) {
            const messageData = {
                author: nickname,
                content: input.value
            };
            socket.send(messageData);
            addMessage(messageData, true);
            input.value = '';
        }
    });

    socket.on('message', function(msg) {
        // Ignora a mensagem se for a que acabamos de enviar
        if (msg.author !== nickname) {
            addMessage(msg, false);
        }
    });

    function addMessage(msg, isMine = false) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');

        const authorElement = document.createElement('span');
        authorElement.classList.add('author');
        authorElement.textContent = msg.author;
        
        const contentElement = document.createElement('span');
        contentElement.classList.add('content');
        contentElement.textContent = msg.content;

        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const timeElement = document.createElement('span');
        timeElement.classList.add('timestamp');
        timeElement.textContent = timestamp;

        messageElement.appendChild(authorElement);
        messageElement.appendChild(contentElement);
        messageElement.appendChild(timeElement);
        
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight;
    }
});