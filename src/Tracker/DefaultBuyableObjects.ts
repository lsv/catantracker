import Sheep from './Cards/Sheep';
import Ore from './Cards/Ore';
import Wheat from './Cards/Wheat';
import Brick from './Cards/Brick';
import Wood from './Cards/Wood';
import { CardType } from './Cards/CardType';

interface DefaultBuyableObject {
    name: string;
    number: number;
    cost: Array<CardType>;
    track: boolean;
}

const DefaultBuyableObjects: Array<DefaultBuyableObject> = [
    {
        name: 'Knight',
        number: 14,
        cost: [Sheep, Ore, Wheat],
        track: true,
    },
    {
        name: 'Progress card',
        number: 6,
        cost: [Sheep, Ore, Wheat],
        track: true,
    },
    {
        name: 'Monopoly',
        number: 2,
        cost: [Sheep, Ore, Wheat],
        track: true,
    },
    {
        name: 'Road building',
        number: 2,
        cost: [Sheep, Ore, Wheat],
        track: false,
    },
    {
        name: 'Year of plenty',
        number: 2,
        cost: [Sheep, Ore, Wheat],
        track: true,
    },
    {
        name: 'Victory point',
        number: 5,
        cost: [Sheep, Ore, Wheat],
        track: true,
    },
    {
        name: 'Road',
        number: 30,
        cost: [Brick, Wood],
        track: false,
    },
    {
        name: 'Settlement',
        number: 30,
        cost: [Brick, Wood, Wheat, Sheep],
        track: false,
    },
    {
        name: 'City',
        number: 30,
        cost: [Wheat, Wheat, Ore, Ore, Ore],
        track: false,
    },
];

export default DefaultBuyableObjects;
