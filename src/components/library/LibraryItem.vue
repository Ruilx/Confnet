<template>
<a-card
    :hoverable="true"
    :bordered="true"
    size="small"
    :style="cardStyle"
    class="library-item"
    :class="item.library.class"
>
    <div class="r-draggable-value">
        <p>{{ item.library.title }}</p>
        <small>{{ item.library.desc }}</small>
    </div>
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
        return {
            cardStyle: {
                padding: 0,
            }
        }
    },
    created() {
        Object.keys(this.item.library.cardStyle).forEach((e) => {
            this.cardStyle[e] = this.item.library.cardStyle[e]
        })
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