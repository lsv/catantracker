import Player from './Player';
import Game from './Game';
import { getOwnedField } from '../Utils';
import { Colors } from '../Colors';

describe('Game', () => {
    const ownedField = getOwnedField();
    const player1 = new Player('player1', Colors[0], [ownedField]);
    const player2 = new Player('player2', Colors[1], []);

    let game: Game;
    beforeEach(() => {
        game = new Game([player1, player2]);
    });

    it('can set name', () => {
        expect(game.name).toBe(undefined);
        game.name = 'NewGame';
        expect(game.name).toBe('NewGame');
    });

    it('can get current player', () => {
        expect(game.getCurrentPlayer().name).toBe('player1');

        game.nextPlayer(1);
        expect(game.getCurrentPlayer().name).toBe('player2');

        game.nextPlayer(3);
        expect(game.getCurrentPlayer().name).toBe('player1');
    });
});
