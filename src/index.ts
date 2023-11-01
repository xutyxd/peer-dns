
import { SocketServer } from './classes/socket-server.class';


class Server {
    public server;
    constructor() {
        this.server = new SocketServer();
    }
}


const server = new Server();

export default { server };

