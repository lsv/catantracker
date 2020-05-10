import Board from './Board';
import Field from '../Field/Field';
import ore from '../Cards/Ore';
import wood from '../Cards/Wood';

describe('Board', () => {
    let buildtype: Board;

    beforeEach(() => {
        buildtype = new Board([
            new Field(ore, 3),
        ]);
    });

    it('can get fields', () => {
        expect(buildtype.fields.length).toBe(1);
    });

    it('can add field', () => {
        buildtype.addField(new Field(wood, 4));
        expect(buildtype.fields.length).toBe(2);
    });
});
