<template>
    <section>
        <h1>Add players</h1>

        <form @submit.prevent="setPlayer">
            <label>
                <input type="text" v-model="form.name" required>
            </label>

            <label>
                <select v-model="form.color" required>
                    <option v-for="c in colors" v-bind:key="c.hex" v-text="c.name" @value="c"></option>
                </select>
            </label>

            <button>Add player</button>
        </form>

        <div v-if="setupstore && setupstore.getPlayers" data-testid="playerlist">
            <h3>Added players</h3>
            <ul>
                <li v-for="player in setupstore.getPlayers" v-bind:key="player.name">
                    <player-list-view @player="player"></player-list-view>
                </li>
            </ul>

            <p>
                <router-link to="/setup/step2">Setup board</router-link>
            </p>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import Player from '../../Tracker/Game/Player';
import { NewPlayerForm } from '../../interfaces/NewPlayerForm';
import SetupStore from '../../store/modules/SetupStore';
import { Colors } from '../../Tracker/Colors';
import PlayerListView from '../../components/PlayerListView.vue';

@Component({
    components: { PlayerListView },
})
export default class Step1 extends Vue {
    public setupstore!: SetupStore;

    public colors = Colors;

    public form: NewPlayerForm = {
        name: '',
        color: undefined,
    };

    public setPlayer(): void {
        this.setupstore.addPlayer(new Player(this.form.name, this.form.color, []));
        this.form.name = '';
        this.form.color = undefined;
    }

    public created() {
        this.setupstore = getModule(SetupStore, this.$store);
    }
}
</script>
