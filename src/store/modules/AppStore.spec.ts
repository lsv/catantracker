import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { getModule } from 'vuex-module-decorators';
import AppStore from './AppStore';
import AppTracker from '../../Tracker/App';
import Board from '../../Tracker/Game/Board';
import Game from '../../Tracker/Game/Game';

describe('AppStore', () => {
    let service: AppStore;

    beforeEach(() => {
        const Vue = createLocalVue();
        Vue.use(Vuex);

        const store = new Vuex.Store({
            modules: {
                AppStore,
            },
        });
        service = getModule(AppStore, store);
    });

    const appTracker = new AppTracker(
        new Board([]),
        new Game([], 'NewGame'),
        [],
    );

    it('set app', () => {
        expect(service.getApp).toBe(undefined);
        service.setApp(appTracker);
        expect(service.getApp).toBeInstanceOf(AppTracker);
    });
});
