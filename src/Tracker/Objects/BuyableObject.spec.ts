import BuyableObject from './BuyableObject';
import brick from '../Cards/Brick';
import ore from '../Cards/Ore';

describe('BuyableObject', () => {
    let object: BuyableObject;

    beforeEach(() => {
        object = new BuyableObject(
            'Test',
            [
                brick,
                ore,
            ],
            false,
        );
    });

    it('can get name from object', () => {
        expect(object.name).toBe('Test');
    });

    it('can get cost from object', () => {
        expect(object.cardCosts.length).toBe(2);
        expect(object.cardCosts[0].name).toBe(brick.name);
    });

    it('can track', () => {
        expect(object.track).toBe(false);
    });
});
