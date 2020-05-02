import Player from "./Player";

class Game {
    private readonly _players: Array<Player>;
    private _currentPlayer = 0;

    constructor(players: Array<Player>) {
        this._players = players;
    }

    private get currenctPlayer(): number {
        return this._currentPlayer;
    }

    get players(): Array<Player> {
        return this._players;
    }

    getCurrentPlayer(): Player {
        return this.players[this.currenctPlayer];
    }

    nextPlayer(diceroll: number): void {
        this._currentPlayer++;
        if (this.currenctPlayer > (this.players.length - 1)) {
            this._currentPlayer = 0;
        }

        this.players.forEach((player) => {
            player.ownedFields.forEach((ownedfield) => {
                if (
                    !ownedfield.field.blocked
                    && ownedfield.field.dicenumber === diceroll
                ) {
                    for (let i = 0; i < ownedfield.type.give; i++) {
                        player.addCardByType(ownedfield.field.card);
                    }
                }
            });
        });
    }
}

export default Game;
