import Player from './Player';

class Game {
    private readonly _players: Array<Player>;

    private _currentPlayer = 0;

    private _name?: string;

    constructor(players: Array<Player>, name?: string) {
        this._players = players;
        this._name = name;
    }

    get name(): string | undefined {
        return this._name;
    }

    set name(name: string | undefined) {
        this._name = name;
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
        this._currentPlayer += 1;
        if (this.currenctPlayer > (this.players.length - 1)) {
            this._currentPlayer = 0;
        }

        this.players.forEach((player) => {
            player.ownedFields.forEach((ownedfield) => {
                if (
                    !ownedfield.field.blocked
                    && ownedfield.field.dicenumber === diceroll
                ) {
                    for (let i = 0; i < ownedfield.buildType.give; i += 1) {
                        player.addCardByType(ownedfield.field.cardtype);
                    }
                }
            });
        });
    }
}

export default Game;
