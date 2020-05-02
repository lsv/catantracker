import Board from "./Board";
import Game from "./Game";
import Field from "./Field";
import Player from "./Player";
import BuyableObject from "./BuyableObject";
import CardType from "./CardType";

class App {
    board: Board;
    game: Game;
    buyableObjects: Array<BuyableObject>

    constructor(board: Board, game: Game, buyableObjects: Array<BuyableObject>) {
        this.board = board;
        this.game = game;
        this.buyableObjects = buyableObjects;
    }

    roll(dicenumber: number, blockedField?: Field): void {
        if (dicenumber === 7) {
            if (!blockedField) {
                throw new Error("The robber needs to move to a field and block it");
            }
            blockedField.setBlocked();
        }

        this.game.nextPlayer(dicenumber);
    }

    buyObject(object: BuyableObject): void {
        if (!this.game.getCurrentPlayer().hasCardsByType(object.cardCosts)) {
            throw new Error('Player does not have the required cards');
        }

        object.cardCosts.forEach((cost: CardType) => {
            this.game.getCurrentPlayer().removeCardByType(cost);
        });
    }

    discardCards(player: Player, cards: Array<CardType>): void {
        cards.forEach((card) => {
            player.removeCardByType(card);
        })
    }

    stealCard(fromPlayer: Player, toPlayer: Player, card: CardType): void {
        fromPlayer.removeCardByType(card);
        toPlayer.addCardByType(card);
    }

    exchangeCards(fromPlayer: Player, toPlayer: Player, fromCards: Array<CardType>, toCards: Array<CardType>): void {
        fromCards.forEach((card) => {
            fromPlayer.removeCardByType(card);
            toPlayer.addCardByType(card);
        });

        toCards.forEach((card) => {
            toPlayer.removeCardByType(card);
            fromPlayer.addCardByType(card);
        });
    }
}

export default App;
