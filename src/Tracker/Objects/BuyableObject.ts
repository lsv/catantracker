import { CardType } from '../Cards/CardType';

class BuyableObject {
    private readonly _name: string;

    private readonly _cardCosts: Array<CardType>;

    private readonly _track: boolean;

    constructor(name: string, cardCost: Array<CardType>, track: boolean) {
        this._name = name;
        this._cardCosts = cardCost;
        this._track = track;
    }

    get name(): string {
        return this._name;
    }

    get cardCosts(): Array<CardType> {
        return this._cardCosts;
    }

    get track(): boolean {
        return this._track;
    }
}

export default BuyableObject;
