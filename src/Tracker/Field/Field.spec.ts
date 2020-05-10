import Field from './Field';
import brick from '../Cards/Brick';

describe('Field', () => {
    const card = brick;
    let field: Field;

    beforeEach(() => {
        field = new Field(card, 10);
    });

    it('can get card type from a field', () => {
        expect(field.cardtype.name).toBe(brick.name);
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
