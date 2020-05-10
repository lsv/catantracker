import { getOwnedField } from '../Utils';
import OwnedField from './OwnedField';
import brick from '../Cards/Brick';

describe('OwnedField', () => {
    let ownedField: OwnedField;
    const card = brick;

    beforeEach(() => {
        ownedField = getOwnedField(card);
    });

    it('can get build type', () => {
        expect(ownedField.buildType.name).toBe('settlement');
    });

    it('can get field', () => {
        expect(ownedField.field.cardtype.name).toBe(card.name);
    });
});
