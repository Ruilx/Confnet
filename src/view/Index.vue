<template>
    <a-layout-header class="r-header">Header</a-layout-header>
    <a-layout>
        <a-layout-sider>
        </a-layout-sider>
        <a-layout-content>
            <CommonContainer items="" />
        </a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
</template>

<script>
import ContainerItem from "../components/ContainerItem.vue";
import ItemList from "../components/ItemList.vue";
import CommonContainer from "../components/common/containers/CommonContainer.vue";
import storage from "../storage/index.js";

export default {
    name: "Index",
    components: {
        CommonContainer,
        ItemList,
        ContainerItem,
    },
    data() {
        return {
            drag: false,
            scene: [],
            library: [],
        }
    },
    created() {

    }
}
</script>

<style lang="less" scoped>
.header{
    color: #eee;

}
</style>