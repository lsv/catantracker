import { getModule } from 'vuex-module-decorators';
import SetupStore from '../../store/modules/SetupStore';
import setupVue from '../../testutils';

describe('Add buyable objects', () => {
    let module: SetupStore;
    // let mounted: Wrapper<any>;

    beforeEach(() => {
        const setup = setupVue();
        module = getModule(SetupStore, setup.store);

        // mounted = mount(AddBuyableObjects, {
        //     store: setup.store,
        //     localVue: setup.vue,
        //     router,
        //     propsData: {
        //         setupstore: module,
        //     },
        // });
    });

    it('can add card', async () => {
        // @todo
        // const nameInput = mounted.find('#name');
        // nameInput.setValue('card1');
        //
        // const cardInput = mounted.find('#tags');
        // cardInput.setValue([Ore.name, Wood.name]);
        //
        // const form = mounted.find('form');
        // form.trigger('submit.prevent');
        // await mounted.vm.$nextTick();

        expect(module.getBuyableObjects.length).toBe(0);
    });
});
