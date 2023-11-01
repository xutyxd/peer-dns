
import { Socket } from "socket.io";

export class Peer {

    public readonly id: string;

    constructor(socket: Socket) {   
        this.id = socket.id;

        socket.on('query', (room) => {
            socket.join(room);
            socket.to(room).emit('link', { id: socket.id });
        });

        const events = ['link', 'candidates'];

        events.forEach((event) => {
            socket.on(event, (data) => {
                socket.to(data.id).emit(event, { ...data, id: this.id })
            });
        });
    }
}