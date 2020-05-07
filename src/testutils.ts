import Vuex, { Store } from 'vuex';
import Vue from 'vue';
import {
    createLocalVue, shallowMount, VueClass, Wrapper,
} from '@vue/test-utils';
import AppStore from './store/modules/AppStore';
import SetupStore from './store/modules/SetupStore';
import router from './router';

export interface TestVue {
    wrapper: Wrapper<Vue>;
    store: Store<any>;
    vue: typeof Vue;
}

export function testVue(component: VueClass<Vue>): TestVue {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const localStore = new Vuex.Store({
        modules: {
            AppStore,
            SetupStore,
        },
    });

    const wrapper = shallowMount(component, { store: localStore, localVue, router });

    return {
        wrapper,
        store: localStore,
        vue: localVue,
    };
}
