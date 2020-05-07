import Vuex, { Store } from 'vuex';
import Vue from 'vue';
import {
    createLocalVue, mount, VueClass, Wrapper,
} from '@vue/test-utils';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
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
    localVue.use(BootstrapVue);
    localVue.use(BootstrapVueIcons);

    const localStore = new Vuex.Store({
        modules: {
            AppStore,
            SetupStore,
        },
    });

    const wrapper = mount(component, { store: localStore, localVue, router });

    return {
        wrapper,
        store: localStore,
        vue: localVue,
    };
}
