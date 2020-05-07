import { getModule } from 'vuex-module-decorators';
// @ts-ignore
import AddPlayerForm from './AddPlayerForm.vue';
import SetupStore from '../../store/modules/SetupStore';
import { testVue, TestVue } from '../../testutils';
import { Colors } from '../../Tracker/Colors';

describe('AddPlayerForm', () => {
    let testvue: TestVue;
    let module: SetupStore;

    beforeEach(() => {
        testvue = testVue(AddPlayerForm);
        module = getModule(SetupStore, testvue.store);
    });

    it('can add player', async () => {
        const { wrapper } = testvue;

        const nameInput = wrapper.find('#name');
        nameInput.setValue('name1');

        const colorInput = wrapper.find('#color');
        colorInput.setValue(Colors[0]);

        const form = wrapper.find('form');
        form.trigger('submit.prevent');
        await wrapper.vm.$nextTick();

        expect(module.getPlayers.length).toBe(1);
    });
});
