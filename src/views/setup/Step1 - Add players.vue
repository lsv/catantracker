<template>
    <section>
        <h1>Add players</h1>

        <form @submit.prevent="setPlayer">
            <label>
                <input type="text" v-model="form.name">
            </label>

            <label>
                <select v-model="form.color">
                    <option v-for="c in colors" v-bind:key="c.hex" v-text="c.name" @value="c.name"></option>
                </select>
            </label>

            <button>Add player</button>
        </form>

        <div v-if="setupstore.getPlayers">
            <h3>Added players</h3>
            <ul>
                <li v-for="player in setupstore.getPlayers" v-bind:key="player.name">
                    {{ player.color }}
                    {{ player.name }}
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
import { Color, Colors } from '../../interfaces/Colors';

    @Component
export default class Step1 extends Vue {
        public setupstore!: SetupStore;

    public colors: Array<Color> = Colors;

        public form: NewPlayerForm = {
            name: '',
            color: '',
        };

        public setPlayer(): void {
            this.setupstore.addPlayer(new Player(this.form.name, this.form.color, []));
            this.form.name = '';
            this.form.color = '';
        }

        public created() {
            this.setupstore = getModule(SetupStore, this.$store);
        }
}
</script>
