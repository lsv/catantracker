<template>
    <b-form @submit.prevent="submit">
        <b-form-group label="Name" label-for="name" description="Player name">
            <b-form-input
                id="name"
                v-model="form.name"
                type="text"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Color" label-for="color">
            <b-form-select v-model="form.color" id="color" required>
                <b-form-select-option v-for="color in colors" :key="color.hex" :value="color" v-text="color.name"></b-form-select-option>
            </b-form-select>
        </b-form-group>

        <b-button type="submit" variant="primary">Add player</b-button>
    </b-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Colors } from '../../Tracker/Colors';
import { NewPlayerForm } from '../../interfaces/NewPlayerForm';
import Player from '../../Tracker/Game/Player';
import SetupStore from '../../store/modules/SetupStore';

@Component
export default class AddPlayerForm extends Vue {
    @Prop(Object) setupstore!: SetupStore

    public colors = Colors;

    public form: NewPlayerForm = {
        name: '',
        color: undefined,
    };

    public submit(): void {
        this.setupstore.addPlayer(new Player(this.form.name, this.form.color, []));
        this.form.name = '';
        this.form.color = undefined;
    }
}
</script>
