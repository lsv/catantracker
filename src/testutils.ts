import Vuex, { Store } from 'vuex';
import { VueConstructor } from 'vue';
import { createLocalVue } from '@vue/test-utils';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import AppStore from './store/modules/AppStore';
import SetupStore from './store/modules/SetupStore';

interface MyVue {
    vue: VueConstructor;
    store: Store<any>;
}

export default function setupVue(): MyVue {
    const vue = createLocalVue();
    vue.use(Vuex);
    vue.use(BootstrapVue);
    vue.use(BootstrapVueIcons);

    const store = new Vuex.Store({
        modules: {
            AppStore,
            SetupStore,
        },
    });

    return {
        vue,
        store,
    };
}
