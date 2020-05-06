import Board from './Board';
import Field from '../Field/Field';
import CardType from '../Objects/CardType';

describe('Board', () => {
    const buildtype = new Board([
        new Field(CardType.ORE, 3),
    ]);

    it('can get fields', () => {
        expect(buildtype.fields.length).toBe(1);
    });

    it('can add field', () => {
        buildtype.addField(new Field(CardType.WOOD, 4));
        expect(buildtype.fields.length).toBe(2);
    });
});
