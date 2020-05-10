import { CardType } from './Cards/CardType';
import OwnedField from './Field/OwnedField';
import Field from './Field/Field';
import BuildType from './Objects/BuildType';
import ore from './Cards/Ore';

export function getOwnedField(type: CardType = ore, dice = 3): OwnedField {
    return new OwnedField(
        new Field(type, dice),
        new BuildType('settlement', 1),
    );
}

export function f(): string {
    return 'Just so there are more exports';
}
