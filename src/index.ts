
import { createServer } from 'node:http';
import { SocketServer } from './classes/socket-server.class';


class Server {
    public server;
    constructor() {

        const server = createServer((request, response) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(`I'm alive`, 'utf-8');
        });

        this.server = new SocketServer(server);

        server.listen(3001);

        setInterval(() => {
            fetch('https://peer-dns.onrender.com')
                .then((response) => response.text())
                .then((value) => console.log('Is alive? ', value))
                .catch((error) => console.log('Error: ', error));
        }, 4000);
    }
}


const server = new Server();

export default { server };

