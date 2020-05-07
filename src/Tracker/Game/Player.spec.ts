import Player from './Player';
import CardType from '../Objects/CardType';
import { getOwnedField } from '../Utils';
import { Colors } from '../Colors';

describe('Player', () => {
    const newcard = CardType.SHEEP;
    const newfield = getOwnedField(CardType.ORE);
    const ownedFields = [
        getOwnedField(CardType.WHEAT),
    ];
    let player: Player;

    beforeEach(() => {
        player = new Player('name', Colors[0], ownedFields, []);
    });

    it('can get name from player', () => {
        expect(player.name).toBe('name');
    });

    it('can get color from player', () => {
        expect(player.color).toBe(Colors[0]);
    });

    it('can get ownedfields from player', () => {
        expect(player.ownedFields.length).toBe(1);
        expect(player.ownedFields[0].field.dicenumber).toBe(3);
    });

    it('can add and remove ownedfields from player', () => {
        expect(player.ownedFields.length).toBe(1);
        player.addOwnedField(newfield);
        player.addOwnedField(newfield);
        expect(player.ownedFields.length).toBe(3);
        expect(player.ownedFields[1].field.cardtype).toBe(CardType.ORE);
        player.removeOwnedfield(newfield);
        expect(player.ownedFields.length).toBe(2);
        expect(player.ownedFields[0].field.cardtype).toBe(CardType.WHEAT);
    });

    it('can not remove field from player if not exists', () => {
        player.removeOwnedfield(newfield);
        expect(() => {
            player.removeOwnedfield(newfield);
        }).toThrowError();
    });

    it('can add and remove cards by type from player', () => {
        expect(player.cards.length).toBe(0);
        player.addCardByType(newcard);
        player.addCardByType(newcard);
        expect(player.cards.length).toBe(2);
        player.removeCardByType(newcard);
        expect(player.cards.length).toBe(1);
    });

    it('can not remove cards by type from player if the player does not have the card', () => {
        expect(() => {
            player.removeCardByType(CardType.ORE);
        }).toThrowError();
    });
});
