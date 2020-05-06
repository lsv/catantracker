import CardType from './CardType';

class BuyableObject {
    private readonly _name: string;

    private readonly _cardCosts: Array<CardType>;

    constructor(name: string, cardCost: Array<CardType>) {
        this._name = name;
        this._cardCosts = cardCost;
    }

    get name(): string {
        return this._name;
    }

    get cardCosts(): Array<CardType> {
        return this._cardCosts;
    }
}

export default BuyableObject;
