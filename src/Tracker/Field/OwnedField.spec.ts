import CardType from '../Objects/CardType';
import { getOwnedField } from '../Utils';

describe('OwnedField', () => {
    const ownedField = getOwnedField(CardType.BRICK);

    it('can get build type', () => {
        expect(ownedField.buildType.name).toBe('settlement');
    });

    it('can get field', () => {
        expect(ownedField.field.cardtype).toBe(CardType.BRICK);
    });
});
