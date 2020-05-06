import Field from '../Field/Field';

class Board {
    private readonly _fields: Array<Field>;

    constructor(fields: Array<Field>) {
        this._fields = fields;
    }

    get fields(): Array<Field> {
        return this._fields;
    }

    addField(field: Field): void {
        this._fields.push(field);
    }
}

export default Board;
