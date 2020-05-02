import Board from "./Board";
import Field from "./Field";
import CardType from "./CardType";

describe('Board', () => {
    const buildtype = new Board([
        new Field(CardType.ORE, 3),
    ]);

    it('can get fields', () => {
        expect(buildtype.fields.length).toBe(1);
    })

});
