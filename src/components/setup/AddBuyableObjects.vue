<template>
    <b-form @submit.prevent="submit">
        {{ form.cardtypes }}

        <b-button type="button" variant="info" @click="setDefaults">Set default cards</b-button>

        <b-form-group label="Name" label-for="name" description="fx. Resource card">
            <b-form-input
                id="name"
                v-model="form.name"
                type="text"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group label="How much does this card cost">
            <b-row class="align-items-center" v-for="(item, index) in form.cardtypes" :key="index">
                <b-col><b-form-input type="text" v-model.number="form.cardtypes[index]" :id="index" required min="0" max="5" /></b-col>
                <b-col v-text="index" />
            </b-row>
        </b-form-group>

        <b-button type="submit" variant="primary">Add buyable</b-button>
    </b-form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import SetupStore from '../../store/modules/SetupStore';
import CardTypes, { findCardByName } from '../../Tracker/Cards/CardTypes';
import BuyableObject from '../../Tracker/Objects/BuyableObject';
import DefaultBuyableObjects from '../../Tracker/DefaultBuyableObjects';
import { CardType } from '../../Tracker/Cards/CardType';

interface Form {
    name: string;
    cardtypes: {[key: string]: number};
}

@Component
export default class AddBuyableObjects extends Vue {
    public setupstore!: SetupStore;

    public form: Form = {
        name: '',
        cardtypes: {},
    }

    submit(): void {
        const cards: Array<CardType> = [];
        Object.keys(this.form.cardtypes).forEach((key) => {
            const type = findCardByName(key);
            const number = this.form.cardtypes[key];
            for (let i = 0; i < number; i += 1) {
                cards.push(type);
            }
        });
        this.setupstore.addBuyableObject(new BuyableObject(this.form.name, cards, true));
    }

    setDefaults(): void {
        DefaultBuyableObjects.forEach((card) => {
            const buy = new BuyableObject(card.name, card.cost, card.track);
            for (let i = 0; i < card.number; i += 1) {
                this.setupstore.addBuyableObject(buy);
            }
        });
    }

    setupForm() {
        this.form.name = '';
        CardTypes.forEach((type) => {
            this.form.cardtypes[type.name] = 0;
        });
    }

    created(): void {
        this.setupstore = getModule(SetupStore, this.$store);
        this.setupForm();
    }
}
</script>
