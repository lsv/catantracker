import {
    Module, Mutation, Action, VuexModule,
} from 'vuex-module-decorators';
import App from '../../Tracker/App';
import Board from '../../Tracker/Game/Board';
import Player from '../../Tracker/Game/Player';
import GameObject from '../../Tracker/Game/Game';
import BuyableObject from '../../Tracker/Objects/BuyableObject';
import Field from '../../Tracker/Field/Field';
import OwnedField from '../../Tracker/Field/OwnedField';

interface AddOwnedFieldPayload {
  player: Player;
  field: OwnedField;
}

@Module({ namespaced: true, name: 'SetupStore' })
class SetupStore extends VuexModule {
  public gameStarted = false

  private board: Board = new Board([])

  private players: Array<Player> = []

  private buyableObjects: Array<BuyableObject> = []

  @Mutation
  private ADD_PLAYER(player: Player): void {
      this.players.push(player);
  }

  @Mutation
  private ADD_FIELD(field: Field): void {
      this.board.addField(field);
  }

  @Mutation
  private ADD_OWNED_FIELD(payload: AddOwnedFieldPayload): void {
      const stateplayer = this.players.findIndex((p) => p === payload.player);
      this.players[stateplayer].addOwnedField(payload.field);
  }

  @Mutation
  private START_GAME(): void {
      this.gameStarted = true;
  }

  @Mutation
  private RESET(): void {
      this.gameStarted = false;
      this.board = new Board([]);
      this.players = [];
      this.buyableObjects = [];
  }

  @Action
  public addPlayer(player: Player): void {
      this.context.commit('ADD_PLAYER', player);
  }

  @Action
  public addField(field: Field): void {
      this.context.commit('ADD_FIELD', field);
  }

  @Action
  public addOwnedFieldToPlayer(payload: AddOwnedFieldPayload): void {
      this.context.commit('ADD_OWNED_FIELD', payload);
  }

  @Action
  public startGame(): void {
      this.context.commit('START_GAME');
  }

  @Action
  reset(): void {
      this.context.commit('RESET');
  }

  get getPlayers(): Array<Player> {
      return this.players;
  }

  get getFields(): Array<Field> {
      return this.board.fields;
  }

  get getGameStarted(): boolean {
      return this.gameStarted;
  }

  get app(): App {
      return new App(
          this.board,
          new GameObject(this.players),
          this.buyableObjects,
      );
  }
}

export default SetupStore;
