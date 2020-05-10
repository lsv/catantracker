import App from './App';
import Board from './Game/Board';
import Game from './Game/Game';
import BuyableObject from './Objects/BuyableObject';
import Field from './Field/Field';
import Player from './Game/Player';
import { getOwnedField } from './Utils';
import { Colors } from './Colors';
import wood from './Cards/Wood';
import ore from './Cards/Ore';

describe('App', () => {
    const field = new Field(
        wood,
        6,
    );
    const buyobject = new BuyableObject('buy', [wood], false);
    let app: App;

    beforeEach(() => {
        app = new App(
            new Board([
                field,
            ]),
            new Game([
                new Player(
                    'player1',
                    Colors[0],
                    [
                        getOwnedField(ore, 8),
                    ],
                ),
                new Player(
                    'player2',
                    Colors[1],
                    [
                        getOwnedField(wood, 6),
                    ],
                ),
            ]),
            [
                buyobject,
            ],
        );
    });

    it('can roll', () => {
        app.roll(2);
        app.roll(6);
        app.roll(7, field);
    });

    it('can not roll 7 without blocked field', () => {
        expect(() => {
            app.roll(7);
        }).toThrowError();
    });

    it('can not buy object', () => {
        expect(() => {
            app.buyObject(buyobject);
        }).toThrowError();
    });

    it('can buy object', () => {
        expect(app.game.getCurrentPlayer().name).toBe('player1');
        app.roll(6);
        expect(app.game.getCurrentPlayer().name).toBe('player2');
        expect(app.game.getCurrentPlayer().cards.length).toBe(1);
        app.buyObject(buyobject);
        expect(app.game.getCurrentPlayer().cards.length).toBe(0);
    });

    it('can discard cards', () => {
        app.roll(6);
        expect(app.game.getCurrentPlayer().cards.length).toBe(1);
        app.discardCards(app.game.getCurrentPlayer(), [
            wood,
        ]);
        expect(app.game.getCurrentPlayer().cards.length).toBe(0);
    });

    it('can steal card from another player', () => {
        app.roll(6);
        expect(app.game.getCurrentPlayer().cards.length).toBe(1);
        expect(app.game.players[0].cards.length).toBe(0);
        app.stealCard(app.game.getCurrentPlayer(), app.game.players[0], wood);
        expect(app.game.getCurrentPlayer().cards.length).toBe(0);
        expect(app.game.players[0].cards.length).toBe(1);
    });

    it('can exchange cards between players', () => {
        app.roll(6);
        app.roll(8);

        expect(app.game.getCurrentPlayer().cards.length).toBe(1);
        expect(app.game.getCurrentPlayer().cards[0]).toBe(ore);

        expect(app.game.players[1].cards.length).toBe(1);
        expect(app.game.players[1].cards[0]).toBe(wood);

        app.exchangeCards(
            app.game.getCurrentPlayer(),
            app.game.players[1],
            [ore],
            [wood],
        );

        expect(app.game.getCurrentPlayer().cards.length).toBe(1);
        expect(app.game.getCurrentPlayer().cards[0]).toBe(wood);

        expect(app.game.players[1].cards.length).toBe(1);
        expect(app.game.players[1].cards[0]).toBe(ore);
    });

    it('can trade cards', () => {
        app.roll(6);
        app.roll(8);

        expect(app.game.getCurrentPlayer().cards.length).toBe(1);
        expect(app.game.getCurrentPlayer().cards[0]).toBe(ore);

        app.tradeCards(app.game.getCurrentPlayer(), [ore], [wood]);

        expect(app.game.getCurrentPlayer().cards.length).toBe(1);
        expect(app.game.getCurrentPlayer().cards[0]).toBe(wood);
    });
});
