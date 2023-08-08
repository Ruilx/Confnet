<template>
    <draggable
        class="item-list"
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
                :class="element.canDrag ? 'r-draggable' : ''"
                size="small">
                <item-list :items="element.items"/>
                <p class="container-suffix">{{ element.suffix }}</p>
            </a-card>
            <value-item v-else :item="element"/>
        </template>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import ValueItem from "./ValueItem.vue"

export default {
    name: "ItemList",
    props: {
        items: {
            required: true,
            type: Array
        }
    },
    components: {
        draggable,
        ValueItem,
    },
    data() {
        return {
            drag: false,
            dragOptions: {
                animation: 200,
                group: {
                    name: "a1",
                    pull: 'clone',
                    put: false,
                },
                disabled: false,
                ghostClass: "item-ghost",
                draggable: '.r-draggable',
            }

        }
    },
    methods: {},
    computed: {},
}
</script>


<!--


<script>
import draggable from 'vuedraggable'
import ValueItem from "./ValueItem.vue"

export default {
    name: "ItemList",
    props: {
        items: {
            required: true,
            type: Array
        }
    },
    components: [
        draggable,
        ValueItem,
    ],
    data() {
        return {
            drag: false,
            dragOptions: {
                animation: 200,
                group: {
                    name: "g1",
                    pull: true,
                    put: false,
                },
                disabled: false,
                ghostClass: "item-ghost",
                draggable: '.r-draggable',
            }

        }
    },
    methods: {},
    computed: {},
}
</script>

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
                ghostClass: "item-ghost",
                draggable: '.r-draggable',
            }
        }
    },
    methods: {},
    computed: {}

}
</script>

<style scoped>
.container-item {
    padding-left: 8px;
    min-height: 30px;
    font-family: Consolas, "Microsoft YaHei", monospace;
    user-select: none;
}

.container-suffix {
    margin-bottom: 0;
}

.item-ghost {
    opacity: 0.5;
    background-color: #eee;
}
</style>

-->




<style scoped>
.item-list{
    padding: 8px;
}
.item-ghost {
    opacity: 0.5;
    background-color: #eee;
}

</style>