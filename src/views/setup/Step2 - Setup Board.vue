<template>
    <section>
        <h3>Added players</h3>
        <ul>
            <li
                v-for="player in setupstore.getPlayers"
                v-bind:key="player.name"
            >
                {{ player.color }}
                {{ player.name }}
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import SetupStore from '../../store/modules/SetupStore';

    @Component
export default class Step1 extends Vue {
        public setupstore!: SetupStore;

        public created() {
            this.setupstore = getModule(SetupStore, this.$store);
        }
}
</script>
