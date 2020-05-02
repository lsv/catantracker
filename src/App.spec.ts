import App from "./App";
import Board from "./Board";
import Game from "./Game";
import BuyableObject from "./BuyableObject";
import Field from "./Field";
import Player from "./Player";
import CardType from "./CardType";
import {getOwnedField} from "./Utils";

describe('App', () => {
    const field = new Field(
        CardType.WOOD,
        6
    );
    const buyobject = new BuyableObject('buy', [CardType.WOOD]);

    function createApp(): App {
        return new App(
            new Board([
                field
            ]),
            new Game([
                new Player(
                    'player1',
                    'color1',
                    [
                        getOwnedField(CardType.ORE, 8)
                    ]
                ),
                new Player(
                    'player2',
                    'color2',
                    [
                        getOwnedField(CardType.WOOD, 6)
                    ]
                )
            ]),
            [
                buyobject
            ]
        );
    }

    it('can roll', () => {
        const app = createApp();

        app.roll(2);
        app.roll(6);
        app.roll(7, field);
    });

    it('can not roll 7 without blocked field', () => {
        const app = createApp();

        expect(function() {
            app.roll(7);
        }).toThrowError();
    });

    it('can not buy object', () => {
        const app = createApp();

        expect(function() {
            app.buyObject(buyobject);
        }).toThrowError();
    });

    it('can buy object', () => {
        const app = createApp();
        expect(app.game.getCurrentPlayer().name).toBe('player1');
        app.roll(6);
        expect(app.game.getCurrentPlayer().name).toBe('player2');
        expect(app.game.getCurrentPlayer().cards.length).toBe(1);
        app.buyObject(buyobject);
        expect(app.game.getCurrentPlayer().cards.length).toBe(0);
    });

    it('can discard cards', () => {
        const app = createApp();
        app.roll(6);
        expect(app.game.getCurrentPlayer().cards.length).toBe(1);
        app.discardCards(app.game.getCurrentPlayer(), [
            CardType.WOOD
        ])
        expect(app.game.getCurrentPlayer().cards.length).toBe(0);

    });

    it('can steal card from another player', () => {
        const app = createApp();
        app.roll(6);
        expect(app.game.getCurrentPlayer().cards.length).toBe(1);
        expect(app.game.players[0].cards.length).toBe(0);
        app.stealCard(app.game.getCurrentPlayer(), app.game.players[0], CardType.WOOD);
        expect(app.game.getCurrentPlayer().cards.length).toBe(0);
        expect(app.game.players[0].cards.length).toBe(1);
    });

    it('can exchange cards between players', () => {
        const app = createApp();
        app.roll(6);
        app.roll(8);

        expect(app.game.getCurrentPlayer().cards.length).toBe(1);
        expect(app.game.getCurrentPlayer().cards[0]).toBe(CardType.ORE);

        expect(app.game.players[1].cards.length).toBe(1);
        expect(app.game.players[1].cards[0]).toBe(CardType.WOOD);

        app.exchangeCards(app.game.getCurrentPlayer(), app.game.players[1], [CardType.ORE], [CardType.WOOD]);

        expect(app.game.getCurrentPlayer().cards.length).toBe(1);
        expect(app.game.getCurrentPlayer().cards[0]).toBe(CardType.WOOD);

        expect(app.game.players[1].cards.length).toBe(1);
        expect(app.game.players[1].cards[0]).toBe(CardType.ORE);
    })
});
