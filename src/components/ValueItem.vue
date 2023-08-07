<template>
    <a-card
        :hoverable="true"
        :bordered="true"
        :body-style="{padding: 0}"
        :class="item.canDrag ? 'r-draggable' : ''"
        class="value-item"
    >
        <span>{{ item.name }}</span> : <span>{{ item.value }}</span>
    </a-card>
</template>

<script>

export default {
    name: "ValueItem",
    props: {
        item: {
            required: true,
            type: Object,
        }
    },
    data() {
        return {
            drag: false
        }
    },
    computed: {}
}
</script>

<style scoped lang="less">
.value-item {
    padding: 5px 8px;
    font-family: Consolas, "Microsoft YaHei", monospace;
    font-size: 80%;
    border-left: 5px solid #888;
    margin-bottom: 8px;
}
</style>