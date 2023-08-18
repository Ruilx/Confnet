<template>
    <a-card
        class="container-item"
        :title="item.name"
        :bordered="true"
        :hoverable="true"
        :class="item.draggable ? 'r-draggable' : ''"
        size="small"
    >
        <draggable
            class="container-item"
            tag="div"
            item-key="id"
            :list="item.items"
            :="options"
        >
            <template #item="{ element, index }">
                <keep-alive>
                    <Widget :item="element"/>
                </keep-alive>
            </template>

        </draggable>
    </a-card>

</template>

<script>
import {defineComponent} from "vue"
import draggable from "vuedraggable";
import Widget from "../../Widget.vue";

export default defineComponent({
    name: "CommonContainer",
    components: {Widget, draggable},
    props: {
        item: {required: true, type: Object,}
    },
    data() {
        return {
            options: {
                animation: 200,
                group: "a1",
                disabled: false,
                ghostClass: "item-ghost",
                draggable: ".r-draggable"
            }
        }
    },
})
</script>

<style scoped lang="less">
.container-item{
    min-height:30px;
    user-select: none;
}
</style>