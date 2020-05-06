import Field from './Field';
import BuildType from '../Objects/BuildType';

class OwnedField {
    _field: Field;

    _buildType: BuildType;

    constructor(field: Field, type: BuildType) {
        this._field = field;
        this._buildType = type;
    }

    get buildType(): BuildType {
        return this._buildType;
    }

    get field(): Field {
        return this._field;
    }
}

export default OwnedField;
