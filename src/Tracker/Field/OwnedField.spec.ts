import CardType from '../Objects/CardType';
import { getOwnedField } from '../Utils';
import OwnedField from './OwnedField';

describe('OwnedField', () => {
    let ownedField: OwnedField;

    beforeEach(() => {
        ownedField = getOwnedField(CardType.BRICK);
    });

    it('can get build type', () => {
        expect(ownedField.buildType.name).toBe('settlement');
    });

    it('can get field', () => {
        expect(ownedField.field.cardtype).toBe(CardType.BRICK);
    });
});
