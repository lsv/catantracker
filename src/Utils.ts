import CardType from "./CardType";
import OwnedField from "./OwnedField";
import Field from "./Field";
import BuildType from "./BuildType";

export function getOwnedField(type: CardType = CardType.ORE, dice = 3): OwnedField {
    return new OwnedField(
        new Field(type, dice),
        new BuildType('settlement', 1)
    );
}
