import Field from "./Field";

class Board {
    private readonly _fields: Array<Field>;

    constructor(fields: Array<Field>) {
        this._fields = fields;
    }

    get fields(): Array<Field> {
        return this._fields;
    }
}

export default Board;
