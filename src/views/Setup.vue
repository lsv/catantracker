<template>
    <b-container>
        <h1>Setup your game</h1>

        <b-row>
            <b-col md="auto">
                <b-tabs fill>
                    <b-tab title="Add buyable objects" active>
                        <add-buyable-objects></add-buyable-objects>
                    </b-tab>

                    <b-tab title="Add players" :disabled="hasNotBuyableObjects()">
                        <add-player-form :setupstore="setupstore"></add-player-form>
                    </b-tab>

                    <b-tab title="Setup board" disabled>
                        body
                    </b-tab>

                    <b-tab title="Set players owned fields" disabled>
                        body
                    </b-tab>
                </b-tabs>
            </b-col>
            <b-col col md="3">
                <b-list-group>
                    <h3>Players</h3>
                    <b-list-group-item v-for="player in setupstore.getPlayers" v-bind:key="player.name">
                        <player-list-view :player="player"></player-list-view>
                    </b-list-group-item>
                </b-list-group>
                <b-list-group>
                    <h3>Buyable objects</h3>
                    <b-list-group-item v-for="object in setupstore.getBuyableObjects" v-bind:key="object.name">
                        <buyable-object-list-view :object="object"></buyable-object-list-view>
                    </b-list-group-item>
                </b-list-group>
            </b-col>
        </b-row>

        <router-view></router-view>
    </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import PlayerListView from '../components/PlayerListView.vue';
import SetupStore from '../store/modules/SetupStore';
import AddPlayerForm from '../components/setup/AddPlayerForm.vue';
import AddBuyableObjects from '../components/setup/AddBuyableObjects.vue';
import BuyableObjectListView from '../components/BuyableObjectListView.vue';

@Component({
    components: {
        AddPlayerForm, PlayerListView, AddBuyableObjects, BuyableObjectListView,
    },
})
export default class Setup extends Vue {
        public setupstore!: SetupStore;

        public hasNotBuyableObjects(): boolean {
            return this.setupstore.getBuyableObjects.length === 0;
        }

        public created(): void {
            this.setupstore = getModule(SetupStore, this.$store);
        }
}
</script>
