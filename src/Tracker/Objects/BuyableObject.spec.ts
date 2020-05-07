import CardType from './CardType';
import BuyableObject from './BuyableObject';

describe('BuyableObject', () => {
    let object: BuyableObject;

    beforeEach(() => {
        object = new BuyableObject(
            'Test',
            [
                CardType.BRICK,
                CardType.ORE,
            ],
        );
    });

    it('can get name from object', () => {
        expect(object.name).toBe('Test');
    });

    it('can get cost from object', () => {
        expect(object.cardCosts.length).toBe(2);
        expect(object.cardCosts[0]).toBe('Brick');
    });
});
