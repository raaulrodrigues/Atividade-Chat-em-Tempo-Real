from flask import Flask, render_template
from flask_socketio import SocketIO, send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('message')
def handle_message(msg):
    # Vamos enviar um objeto (dicionário) em vez de só texto
    # para podermos mandar o nome do usuário e a mensagem separados.
    print('Mensagem recebida: ' + str(msg))
    send(msg, broadcast=True)

if __name__ == '__main__':
    socketio.run(app)