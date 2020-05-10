import { mount, Wrapper } from '@vue/test-utils';
// @ts-ignore
import PlayerListView from './PlayerListView.vue';
import setupVue from '../testutils';
import router from '../router';
import Player from '../Tracker/Game/Player';

describe('PlayerListView', () => {
    let mounted: Wrapper<any>;

    beforeEach(() => {
        const setup = setupVue();
        mounted = mount(PlayerListView, {
            store: setup.store,
            localVue: setup.vue,
            router,
            propsData: {
                player: new Player('playername', { name: 'white', hex: '#fff' }),
            },
        });
    });

    it('renders with different players', () => {
        expect(mounted.text()).toBe('playername');
    });
});
