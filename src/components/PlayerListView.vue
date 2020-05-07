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
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background-color: #000;
        margin-right: 0.5em;
    }
</style>
