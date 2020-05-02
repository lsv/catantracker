import CardType from "./CardType";
import {getOwnedField} from "./Utils";

describe('OwnedField', () => {
    const ownedField = getOwnedField(CardType.BRICK);

    it('can get build type', () => {
        expect(ownedField.type.name).toBe('settlement');
    });

    it('can get field', () => {
        expect(ownedField.field.card).toBe(CardType.BRICK);
    });
});
