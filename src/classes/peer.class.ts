
import { Subject } from "rxjs";
import { Socket } from "socket.io";

export class Peer {

    public on = {
        room: new Subject<{room: string, socket: Socket}>()
    }

    public readonly id: string;
    private room?: string;

    constructor(private socket: Socket) {   
        this.id = socket.id;

        socket.on('query', (room) => {
            console.log('On query: ', room);
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

    public connect(offer?: string) {
        if (!this.room) {
            return;
        }

        this.socket.to(this.room).emit('link', { offer, id: this.id });
    }

    public candidates = {
        export: () => {
            if (!this.room) {
                return;
            }

            this.socket.to(this.room).emit('candidatesExport', { id: this.id });
        },
        import: (candidates: string) => {
            if (!this.room) {
                return;
            }

            this.socket.to(this.room).emit('candidatesImport', { candidates, id: this.id });
        }
    }
}