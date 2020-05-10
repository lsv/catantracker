<template>
    <span>
        <span v-text="object.name"></span>
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BuyableObject from '../Tracker/Objects/BuyableObject';

@Component
export default class BuyableObjectListView extends Vue {
    @Prop(BuyableObject) object!: BuyableObject;
}
</script>
