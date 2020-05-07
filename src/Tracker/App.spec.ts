import App from './App';
import Board from './Game/Board';
import Game from './Game/Game';
import BuyableObject from './Objects/BuyableObject';
import Field from './Field/Field';
import Player from './Game/Player';
import CardType from './Objects/CardType';
import { getOwnedField } from './Utils';
import { Colors } from './Colors';

describe('App', () => {
    const field = new Field(
        CardType.WOOD,
        6,
    );
    const buyobject = new BuyableObject('buy', [CardType.WOOD]);
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
                        getOwnedField(CardType.ORE, 8),
                    ],
                ),
                new Player(
                    'player2',
                    Colors[1],
                    [
                        getOwnedField(CardType.WOOD, 6),
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
            CardType.WOOD,
        ]);
        expect(app.game.getCurrentPlayer().cards.length).toBe(0);
    });

    it('can steal card from another player', () => {
        app.roll(6);
        expect(app.game.getCurrentPlayer().cards.length).toBe(1);
        expect(app.game.players[0].cards.length).toBe(0);
        app.stealCard(app.game.getCurrentPlayer(), app.game.players[0], CardType.WOOD);
        expect(app.game.getCurrentPlayer().cards.length).toBe(0);
        expect(app.game.players[0].cards.length).toBe(1);
    });

    it('can exchange cards between players', () => {
        app.roll(6);
        app.roll(8);

        expect(app.game.getCurrentPlayer().cards.length).toBe(1);
        expect(app.game.getCurrentPlayer().cards[0]).toBe(CardType.ORE);

        expect(app.game.players[1].cards.length).toBe(1);
        expect(app.game.players[1].cards[0]).toBe(CardType.WOOD);

        app.exchangeCards(
            app.game.getCurrentPlayer(),
            app.game.players[1],
            [CardType.ORE],
            [CardType.WOOD],
        );

        expect(app.game.getCurrentPlayer().cards.length).toBe(1);
        expect(app.game.getCurrentPlayer().cards[0]).toBe(CardType.WOOD);

        expect(app.game.players[1].cards.length).toBe(1);
        expect(app.game.players[1].cards[0]).toBe(CardType.ORE);
    });

    it('can trade cards', () => {
        app.roll(6);
        app.roll(8);

        expect(app.game.getCurrentPlayer().cards.length).toBe(1);
        expect(app.game.getCurrentPlayer().cards[0]).toBe(CardType.ORE);

        app.tradeCards(app.game.getCurrentPlayer(), [CardType.ORE], [CardType.WOOD]);

        expect(app.game.getCurrentPlayer().cards.length).toBe(1);
        expect(app.game.getCurrentPlayer().cards[0]).toBe(CardType.WOOD);
    });
});
