<template>
    <b-container>
        <h1>Setup your game</h1>

        <b-row>
            <b-col md="auto">
                <div role="tablist">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-1 variant="info">
                                Add players
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-1">
                            <b-card-body>
                                <add-player-form></add-player-form>
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-2 variant="info" disabled>
                                Add buyable objects
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-2">
                            <b-card-body>
                                body
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-3 variant="info" disabled>
                                Setup board
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-3">
                            <b-card-body>
                                body
                            </b-card-body>
                        </b-collapse>
                    </b-card>

                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                            <b-button block href="#" v-b-toggle.accordion-4 variant="info" disabled>
                                Set players owned fields
                            </b-button>
                        </b-card-header>
                        <b-collapse id="accordion-4">
                            <b-card-body>
                                body
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </div>
            </b-col>
            <b-col col md="3">
                <b-list-group>
                    <b-list-group-item v-for="player in setupstore.getPlayers" v-bind:key="player.name">
                        <player-list-view :player="player"></player-list-view>
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

@Component({
    components: { AddPlayerForm, PlayerListView },
})
export default class Setup extends Vue {
    public setupstore!: SetupStore;

    public created() {
        this.setupstore = getModule(SetupStore, this.$store);
    }
}
</script>
