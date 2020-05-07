<template>
    <span>
        <span v-bind:style="{ backgroundColor: player.color.hex }"></span>
        <span v-text="player.name"></span>
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Player from '../Tracker/Game/Player';

@Component
export default class PlayerListView extends Vue {
    @Prop(Player) player!: Player;
}
</script>

<style scoped>
    span > span:first-child {
        width: 5px;
        height: 5px;
        background-color: #ffffff;
    }
</style>
