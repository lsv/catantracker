import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { getModule } from 'vuex-module-decorators';
import SetupStore from './SetupStore';
import AppStore from './AppStore';
import Player from '../../Tracker/Game/Player';
import Field from '../../Tracker/Field/Field';
import OwnedField from '../../Tracker/Field/OwnedField';
import BuildType from '../../Tracker/Objects/BuildType';
import App from '../../Tracker/App';
import { Colors } from '../../Tracker/Colors';
import Wood from '../../Tracker/Cards/Wood';
import Ore from '../../Tracker/Cards/Ore';

describe('SetupStore', () => {
    let service: SetupStore;
    let appservice: AppStore;

    beforeEach(() => {
        const Vue = createLocalVue();
        Vue.use(Vuex);

        const store = new Vuex.Store({
            modules: {
                SetupStore,
                AppStore,
            },
        });
        service = getModule(SetupStore, store);
        service.reset();
        appservice = getModule(AppStore, store);
    });

    it('can add player', () => {
        service.addPlayer(new Player('name', Colors[0], []));

        expect(service.getPlayers.length).toBe(1);
        expect(service.getPlayers[0].name).toBe('name');
    });

    it('can add field', () => {
        service.addField(new Field(Wood, 3));
        expect(service.getFields.length).toBe(1);
        expect(service.getFields[0].cardtype).toBe(Wood);
    });

    it('can add owned field', () => {
        const p1 = new Player('name1', Colors[0], []);
        const p2 = new Player('name2', Colors[1], []);
        const ownedfield1 = new OwnedField(
            new Field(Wood, 3),
            new BuildType('settlement', 1),
        );
        const ownedfield2 = new OwnedField(
            new Field(Ore, 3),
            new BuildType('settlement', 1),
        );

        service.addPlayer(p1);
        service.addPlayer(p2);

        const p1s = service.getPlayers[0];
        const p2s = service.getPlayers[1];

        expect(p1s.name).toBe('name1');
        expect(p2s.name).toBe('name2');

        service.addOwnedFieldToPlayer({ player: p1, field: ownedfield1 });
        expect(p1s.ownedFields.length).toBe(1);
        expect(p1s.ownedFields[0].field.cardtype.name).toBe(Wood.name);

        service.addOwnedFieldToPlayer({ player: p2, field: ownedfield2 });
        expect(p2s.ownedFields.length).toBe(1);
        expect(service.getPlayers[1].ownedFields[0].field.cardtype.name).toBe(Ore.name);
    });

    it('can start game', () => {
        service.startGame();
        appservice.setApp(service.app);
        expect(service.getGameStarted).toBe(true);
        expect(appservice.getApp).toBeInstanceOf(App);
    });
});
