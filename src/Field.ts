import CardType from "./CardType";

class Field {

    private readonly _card: CardType;
    private readonly _dicenumber: number;
    private _blocked = false;

    constructor(card: CardType, dicenumber: number) {
        this._card = card;
        this._dicenumber = dicenumber;
    }

    get card(): CardType {
        return this._card;
    }

    get dicenumber(): number {
        return this._dicenumber;
    }

    get blocked(): boolean {
        return this._blocked;
    }

    setBlocked(): void {
        this._blocked = true;
    }

    removeBlocked(): void {
        this._blocked = false;
    }
}

export default Field;
