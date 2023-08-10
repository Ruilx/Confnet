<template>
    <draggable
        class="container-item"
        tag="div"
        item-key="id"
        :list="items"
        :="options"
    >
        <template #item="{element}">
            <a-card
                v-if="element.type==='container'"
                class="r-draggable-card"
                :title="element.name"
                :bordered="true"
                :hoverable="true"
                :class="element.draggable ? 'r-draggable' : ''"
                size="small"
            >
                <keep-alive>
                    <component :is="subItem" :item="element"/>
                </keep-alive>
            </a-card>
            <CommonValue v-else :item="element" />
        </template>

    </draggable>
</template>

<script>
import {defineComponent, defineAsyncComponent, markRaw} from "vue"
import draggable from "vuedraggable";
import CommonValue from "../values/CommonValue.vue";

export default defineComponent({
    name: "CommonContainer",
    components: {CommonValue, draggable},
    props: {
        items: {required: true, type: Array,}
    },
    data() {
        return {
            dragging: false,
            subItem: {},
            options: {
                animation: 200,
                group: "a1",
                disabled: false,
                ghostClass: "item-ghost",
                draggable: ".r-draggable"
            }
        }
    },
    computed: {},
    created() {
        this.dragging = false
        this.subItem = markRaw(defineAsyncComponent(() => import("../../" + this.item.item.path + ".vue")))
    },
    methods: {

    }
})
</script>

<style scoped lang="less">
.container-item{
    min-height:30px;
    user-select: none;

    .r-draggable-card{
        padding-left: 8px;
        font-family: Consolas, "Microsoft YaHei", monospace;
    }
}

.r-draggable-card {
    margin-bottom: 10px;
}

item-ghost{
    opacity: .5;
}
</style>