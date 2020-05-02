import Field from "./Field";
import BuildType from "./BuildType";

class OwnedField {
    _field: Field;
    _type: BuildType;

    constructor(field: Field, type: BuildType) {
        this._field = field;
        this._type = type;
    }

    get type(): BuildType {
        return this._type;
    }

    get field(): Field {
        return this._field;
    }

}

export default OwnedField;
