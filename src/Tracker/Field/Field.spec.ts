import CardType from '../Objects/CardType';
import Field from './Field';

describe('Field', () => {
    const card = CardType.BRICK;
    let field: Field;

    beforeEach(() => {
        field = new Field(card, 10);
    });

    it('can get card type from a field', () => {
        expect(field.cardtype).toBe('Brick');
    });

    it('Can set dice number on a field', () => {
        expect(field.dicenumber).toBe(10);
    });

    it('can set field as blocked', () => {
        expect(field.blocked).toBe(false);
        field.setBlocked();
        expect(field.blocked).toBe(true);
        field.removeBlocked();
        expect(field.blocked).toBe(false);
    });
});
