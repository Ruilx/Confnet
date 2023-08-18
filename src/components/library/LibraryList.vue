<template>
<div class="-row">
    <div class="-col-24">
        <draggable
            class="library-list"
            tag="div"
            :list="items"
            item-key="id"
            :="options"
        >
            <template #item="{element}">
                <LibraryItem :item="element" />
            </template>

            <template #header>
                <h1>Library Items</h1>
            </template>
        </draggable>
    </div>
</div>
</template>

<script>
import draggable from "vuedraggable";
import LibraryItem from "./LibraryItem.vue";
export default {
    name: "LibraryList",
    components: {LibraryItem, draggable},
    props: {
        items: {required: true, type: Array,}
    },
    data(){
        return {
            options: {
                animation: 200,
                group: {
                    name: "a1",
                    pull: "clone",
                    put: false,
                },
                disabled: false,
                ghostClass: "item-ghost",
                sort: false,
            }
        }
    },
    mounted(){
    }
}
</script>

<style scoped>
.library-list{
    height: 100%;
    padding: 8px;
    user-select: none;
    background-color: #FFF;
}

.item-ghost{
    opacity: .5;
}
</style>