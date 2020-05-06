import Board from './Game/Board';
import Game from './Game/Game';
import Field from './Field/Field';
import Player from './Game/Player';
import BuyableObject from './Objects/BuyableObject';
import CardType from './Objects/CardType';

class App {
    board: Board;

    game: Game;

    buyableObjects: Array<BuyableObject>

    constructor(board: Board, game: Game, buyableObjects: Array<BuyableObject>) {
        this.board = board;
        this.game = game;
        this.buyableObjects = buyableObjects;
    }

    private hasPlayer(player: Player): boolean {
        const players = this.game.players.filter(((p) => p === player));
        return players.length === 1;
    }

    public roll(dicenumber: number, blockedField?: Field): void {
        if (dicenumber === 7) {
            if (!blockedField) {
                throw new Error('The robber needs to move to a field and block it');
            }
            blockedField.setBlocked();
        }

        this.game.nextPlayer(dicenumber);
    }

    public buyObject(object: BuyableObject): void {
        if (!this.game.getCurrentPlayer().hasCardsByType(object.cardCosts)) {
            throw new Error('Player does not have the required cards');
        }

        object.cardCosts.forEach((cost: CardType) => {
            this.game.getCurrentPlayer().removeCardByType(cost);
        });
    }

    public discardCards(player: Player, cards: Array<CardType>): void {
        this.hasPlayer(player);

        cards.forEach((card) => {
            player.removeCardByType(card);
        });
    }

    public tradeCards(
        player: Player,
        sellCards: Array<CardType>,
        recieveCards: Array<CardType>,
    ): void {
        this.hasPlayer(player);

        sellCards.forEach((card) => {
            player.removeCardByType(card);
        });

        recieveCards.forEach((card) => {
            player.addCardByType(card);
        });
    }

    public stealCard(fromPlayer: Player, toPlayer: Player, card: CardType): void {
        this.hasPlayer(fromPlayer);
        this.hasPlayer(toPlayer);

        fromPlayer.removeCardByType(card);
        toPlayer.addCardByType(card);
    }

    public exchangeCards(
        fromPlayer: Player,
        toPlayer: Player,
        fromCards: Array<CardType>,
        toCards: Array<CardType>,
    ): void {
        this.hasPlayer(fromPlayer);
        this.hasPlayer(toPlayer);

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
