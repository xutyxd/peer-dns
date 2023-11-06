
import { SocketServer } from './socket-server.class';
describe('SocketServer class', () => {
    describe('SocketServer instance', () => {
        it('should instance', () => {
            const socketServer = new SocketServer();

            socketServer.close();
            expect(socketServer).toBeInstanceOf(SocketServer);
        });
    });
});