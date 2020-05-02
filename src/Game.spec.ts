import Player from "./Player";
import Game from "./Game";
import {getOwnedField} from "./Utils";

describe('Game', () => {
    const ownedField = getOwnedField();
    const player1 = new Player('player1', 'color1', [ownedField]);
    const player2 = new Player('player2', 'color2', []);
    const game = new Game([player1, player2]);

    it('can get current player', () => {
        expect(game.getCurrentPlayer().name).toBe('player1');

        game.nextPlayer(1);
        expect(game.getCurrentPlayer().name).toBe('player2');

        game.nextPlayer(3);
        expect(game.getCurrentPlayer().name).toBe('player1');
    })
});
