<template>
    <draggable
        class="container-item"
        tag="div"
        :list="items"
        item-key="name"
        :="dragOptions"
        @start="drag=true"
        @end="drag=false"
    >
        <template #item="{ element }">
            <a-card
                v-if="element.type==='container'"
                :title="element.name + element.prefix"
                :bordered="true"
                :hoverable="true"
                :body-style="{'padding-left':'10px', 'border-left': '#888 solid 5px'}"
                :head-style="{'border-left': '#888 solid 5px', 'font-size': '80%'}"
                :style="{'margin-bottom': '10px'}"
                size="small">
                <container-item :items="element.items"/>
                <p class="container-suffix">{{ element.suffix }}</p>
            </a-card>
            <value-item v-else :name="element.name" :value="element.value"/>
        </template>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import ValueItem from "./ValueItem.vue"

export default {
    name: "ContainerItem",
    props: {
        items: {
            required: true,
            type: Array
        }
    },
    components: {
        ValueItem,
        draggable
    },
    data() {
        return {
            drag: false,
            dragOptions: {
                animation: 200,
                group: "a1",
                disabled: false,
                ghostClass: "item-ghost"
            }
        }
    },
    methods: {},
    computed: {}

}
</script>

<style scoped>
.container-item {
    padding-left: 0;
    min-height: 30px;
    font-family: Consolas, "Microsoft YaHei", monospace;
}

.container-suffix {
    margin-bottom: 0;
}

.item-ghost {
    opacity: 0.5;
    background-color: #eee;
}
</style>