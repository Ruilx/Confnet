<template>
    <a-card
        :hoverable="true"
        :bordered="true"
        :body-style="{padding: 0}"
        :class="item.draggable ? 'r-draggable': ''"
        class="value-item"
    >
        <span class="r-draggable-value">{{ item.name }}</span>
    </a-card>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
    name: "CommonValue",
    props: {
        item: {
            required: true,
            type: Object,
        }
    },
    data() {
        return {}
    },
    computed: {}
})
</script>

<style scoped lang="less">
.value-item {
    padding: 5px 8px;

    .r-draggable-value{
        font-family: Consolas, "Microsoft YaHei", monospace;
    }
}
</style>