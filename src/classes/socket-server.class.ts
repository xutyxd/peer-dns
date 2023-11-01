
import { createServer } from 'node:http';
import { Server } from "socket.io";
import { Peer } from './peer.class';

export class SocketServer {

    private io;

    constructor(server = createServer(),
                port: number = 3000) {
        const io = new Server(server);

        io.listen(port);

        io.on('connection', (socket) => {
            const peer = new Peer(socket);
        });

        this.io = io;
    }

    public close() {
        this.io.close();
    }
}