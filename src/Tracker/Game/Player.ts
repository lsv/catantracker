import OwnedField from '../Field/OwnedField';
import CardType from '../Objects/CardType';

class Player {
    private readonly _name: string;

    private readonly _color: string;

    private readonly _cards: Array<CardType> = [];

    private readonly _ownedFields: Array<OwnedField>;

    constructor(
        name: string,
        color: string,
        ownedFields: Array<OwnedField>,
        cards: Array<CardType> = [],
    ) {
        this._name = name;
        this._color = color;
        this._ownedFields = ownedFields;
        this._cards = cards;
    }

    get name(): string {
        return this._name;
    }

    get color(): string {
        return this._color;
    }

    get ownedFields(): Array<OwnedField> {
        return this._ownedFields;
    }

    removeOwnedfield(field: OwnedField): void {
        if (!this.hasOwnedField(field)) {
            throw new Error('Player does not own this field');
        }

        const removeIndex = this.ownedFields.findIndex((element) => field === element);
        this.ownedFields.splice(removeIndex, 1);
    }

    addOwnedField(field: OwnedField): void {
        this._ownedFields.push(field);
    }

    private hasOwnedField(field: OwnedField): boolean {
        const index = this.ownedFields.findIndex((element) => field === element);
        return index > -1;
    }

    get cards(): Array<CardType> {
        return this._cards;
    }

    addCardByType(card: CardType): void {
        this.cards.push(card);
    }

    removeCardByType(cost: CardType): void {
        if (!this.hasCardByType(cost)) {
            throw new Error('Player does not have this type of card');
        }

        const removeIndex = this.cards.findIndex((element) => element === cost);

        this.cards.splice(removeIndex, 1);
    }

    private hasCardByType(cartType: CardType): boolean {
        const index = this.cards.findIndex((element) => element === cartType);

        return index > -1;
    }

    hasCardsByType(cardTypes: Array<CardType>): boolean {
        let hasCards = true;
        cardTypes.forEach((cardType) => {
            if (!this.hasCardByType(cardType)) {
                hasCards = false;
            }
        });

        return hasCards;
    }
}

export default Player;
