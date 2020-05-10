import { getModule } from 'vuex-module-decorators';
import { mount, Wrapper } from '@vue/test-utils';
// @ts-ignore
import AddPlayerForm from './AddPlayerForm.vue';
import SetupStore from '../../store/modules/SetupStore';
import { Colors } from '../../Tracker/Colors';
import router from '../../router';
import setupVue from '../../testutils';

describe('AddPlayerForm', () => {
    let module: SetupStore;
    let mounted: Wrapper<any>;

    beforeEach(() => {
        const setup = setupVue();
        module = getModule(SetupStore, setup.store);

        mounted = mount(AddPlayerForm, {
            store: setup.store,
            localVue: setup.vue,
            router,
            propsData: {
                setupstore: module,
            },
        });
    });

    it('can add player', async () => {
        const nameInput = mounted.find('#name');
        nameInput.setValue('name1');

        const colorInput = mounted.find('#color');
        colorInput.setValue(Colors[0]);

        const form = mounted.find('form');
        form.trigger('submit.prevent');
        await mounted.vm.$nextTick();

        expect(module.getPlayers.length).toBe(1);
    });
});
