import {
    Module, Mutation, Action, VuexModule,
} from 'vuex-module-decorators';
import App from '../../Tracker/App';

@Module({ namespaced: true, name: 'AppStore' })
class AppStore extends VuexModule {
  private app?: App = undefined

  @Mutation
  public SET_APP(game: App): void {
      this.app = game;
  }

  @Action
  public setApp(app: App): App {
      this.context.commit('SET_APP', app);
      return app;
  }

  get getApp(): App | undefined {
      return this.app;
  }
}

export default AppStore;
