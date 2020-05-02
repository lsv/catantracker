import Player from "./Player";
import CardType from "./CardType";
import {getOwnedField} from "./Utils";

describe('Player', () => {
    const newcard = CardType.SHEEP;
    const newfield = getOwnedField(CardType.ORE);
    const ownedFields = [
        getOwnedField(CardType.WHEAT),
    ];

    it('can get name from player', () => {
        const player = new Player('name', 'color', ownedFields, []);

        expect(player.name).toBe('name');
    });

    it('can get color from player', () => {
        const player = new Player('name', 'color', ownedFields, []);

        expect(player.color).toBe('color');
    });

    it('can get ownedfields from player', () => {
        const player = new Player('name', 'color', ownedFields, []);

        expect(player.ownedFields.length).toBe(1);
        expect(player.ownedFields[0].field.dicenumber).toBe(3);
    });

    it('can add and remove ownedfields from player', () => {
        const player = new Player('name', 'color', ownedFields, []);

        expect(player.ownedFields.length).toBe(1);
        player.addOwnedField(newfield);
        player.addOwnedField(newfield);
        expect(player.ownedFields.length).toBe(3);
        expect(player.ownedFields[1].field.card).toBe(CardType.ORE);
        player.removeOwnedfield(newfield);
        expect(player.ownedFields.length).toBe(2);
        expect(player.ownedFields[0].field.card).toBe(CardType.WHEAT);
    });

    it('can not remove field from player if not exists', () => {
        const player = new Player('name', 'color', ownedFields, []);
        player.removeOwnedfield(newfield);
        expect(function() {
            player.removeOwnedfield(newfield);
        }).toThrowError();
    });

    it('can add and remove cards by type from player', () => {
        const player = new Player('name', 'color', ownedFields, []);

        expect(player.cards.length).toBe(0);
        player.addCardByType(newcard);
        player.addCardByType(newcard);
        expect(player.cards.length).toBe(2);
        player.removeCardByType(newcard);
        expect(player.cards.length).toBe(1);
    });

    it('can not remove cards by type from player if the player does not have the card', () => {
        const player = new Player('name', 'color', ownedFields, []);
        expect(function() {
            player.removeCardByType(CardType.ORE);
        }).toThrowError();
    });
});
