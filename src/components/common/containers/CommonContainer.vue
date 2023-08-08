<template>
    <draggable
        class="container-item"
        tag="div"
        item-key="id"
        :list="items"
        :="options"
    >
        <template #item="{e, i}">
            <a-card
                v-if="e.type==='container'"
                class="r-draggable-card"
                :title="e.name"
                :bordered="true"
                :hoverable="true"
                :class="e.draggable ? 'r-draggable' : ''"
                size="small"
            >
                <keep-alive>
                    <component :is="subItem" :item="e"/>
                </keep-alive>
            </a-card>
        </template>

    </draggable>
</template>

<script>
import {defineComponent} from "vue"
import draggable from "vuedraggable";

export default defineComponent({
    name: "CommonContainer",
    components: {draggable},
    props: {
        items: {required: true, type: Array,}
    },
    data() {
        return {
            dragging: false,
        }
    },
    computed: {},
    created() {
        self.dragging = false,
    },
    methods: {

    }
})
</script>

<style scoped lang="less">
.r-draggable-card {
    margin-bottom: 10px;
}
</style>