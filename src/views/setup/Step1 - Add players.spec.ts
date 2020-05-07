import { getModule } from 'vuex-module-decorators';
// @ts-ignore
import Step1 from './Step1 - Add players.vue';
import SetupStore from '../../store/modules/SetupStore';
import { testVue, TestVue } from '../../testutils';
import { Colors } from '../../Tracker/Colors';

describe('Step 1', () => {
    let testvue: TestVue;
    let module: SetupStore;

    beforeEach(() => {
        testvue = testVue(Step1);
        module = getModule(SetupStore, testvue.store);
    });

    it('can add player', async () => {
        const { wrapper } = testvue;

        const nameInput = wrapper.find('input');
        nameInput.setValue('name1');
        const colorInput = wrapper.find('select');
        colorInput.setValue(Colors[0]);

        const form = wrapper.find('form');
        form.trigger('submit.prevent');
        await wrapper.vm.$nextTick();

        expect(wrapper.findAll('li').length).toBe(1);
        expect(module.getPlayers.length).toBe(1);
    });
});
