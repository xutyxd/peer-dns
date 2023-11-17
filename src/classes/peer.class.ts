
import { Socket } from "socket.io";

export class Peer {

    public readonly id: string;

    constructor(socket: Socket) {   
        this.id = socket.id;

        socket.on('query', (domain) => {
            socket.join(domain); 
            socket.to(domain).emit('link', { id: socket.id, domain });
        });

        socket.on('exit', (domain) => {
            socket.leave(domain);
        });

        const events = ['link', 'candidates'];
 
        events.forEach((event) => {
            socket.on(event, (data) => {
                console.log('Emitting data: ', data);
                socket.to(data.id).emit(event, { ...data, id: this.id })
            });
        });
    }
}