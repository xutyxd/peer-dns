
import { Socket } from 'socket.io';
import { Peer } from './peer.class';

describe('Peer class', () => {
    describe('Peer instance', () => {
        it('should instance', () => {
            const peer = new Peer({ on: () => 0 } as unknown as Socket);

            expect(peer).toBeInstanceOf(Peer);
        });
    });
});