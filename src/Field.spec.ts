import CardType from "./CardType";
import Field from "./Field";

describe('Field', () => {
    const card = CardType.BRICK;

    it('can get card type from a field', () => {
        const field = new Field(card, 10);
        expect(field.card).toBe('Brick');
    })

    it('Can set dice number on a field', () => {
        const field = new Field(card, 10);
        expect(field.dicenumber).toBe(10);
    });

    it('can set field as blocked', () => {
        const field = new Field(card, 10);
        expect(field.blocked).toBe(false);
        field.setBlocked();
        expect(field.blocked).toBe(true);
        field.removeBlocked();
        expect(field.blocked).toBe(false);
    });

});
