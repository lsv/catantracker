import sheep from './Sheep';
import brick from './Brick';
import ore from './Ore';
import wheat from './Wheat';
import wood from './Wood';
import { CardType } from './CardType';

const CardTypes: Array<CardType> = [
    sheep, brick, ore, wheat, wood,
];

export default CardTypes;

export function findCardByName(name: string): CardType {
    const filtered = CardTypes.filter((c) => c.name === name);

    if (filtered.length === 1) {
        return filtered[0];
    }

    throw Error('Card not found');
}
