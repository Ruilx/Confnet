<template>
<a-card
    :hoverable="true"
    :bordered="true"
    :body-style="{padding:0}"
    class="library-item"
>
    <p class="r-draggable-value">{{ item.library.name }}</p>
    <p><small>{{ item.library.desc }}</small></p>
</a-card>
</template>

<script>
export default {
    name: "LibraryItem",
    props: {
        item: {
            required: true,
            type: Object,
        }
    },
    data(){
        return {}
    }

}
</script>

<style lang="less" scoped>
.library-item{
    padding: 5px;

    .r-draggable-value{
        font-family: Consolas, "Microsoft YaHei", monospace;
    }
}
</style>