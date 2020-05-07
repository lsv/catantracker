import { shallowMount, VueClass, Wrapper } from '@vue/test-utils';
// @ts-ignore
import PlayerListView from './PlayerListView.vue';
import Player from '../Tracker/Game/Player';
import { Colors } from '../Tracker/Colors';

function getMountedComponent(component: VueClass<any>, propsData: any): Wrapper<any> {
    return shallowMount(component, {
        propsData,
    });
}

describe('PlayerListView', () => {
    it('renders with different players', () => {
        const wrapper: Wrapper<any> = getMountedComponent(PlayerListView, {
            player: new Player('playername', Colors[0], [], []),
        });
        expect(wrapper.text()).toBe('playername');
    });
});
