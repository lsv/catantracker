import CardType from './Objects/CardType';
import OwnedField from './Field/OwnedField';
import Field from './Field/Field';
import BuildType from './Objects/BuildType';

export function getOwnedField(type: CardType = CardType.ORE, dice = 3): OwnedField {
    return new OwnedField(
        new Field(type, dice),
        new BuildType('settlement', 1),
    );
}

export function f(): string {
    return 'Just so there are more exports';
}
