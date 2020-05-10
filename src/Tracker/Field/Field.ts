import { CardType } from '../Cards/CardType';

class Field {
    private readonly _cardtype: CardType;

    private readonly _dicenumber: number;

    private _blocked = false;

    constructor(cardType: CardType, dicenumber: number) {
        this._cardtype = cardType;
        this._dicenumber = dicenumber;
    }

    get cardtype(): CardType {
        return this._cardtype;
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
