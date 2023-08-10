<template>
    <a-layout-header class="r-header">Header</a-layout-header>
    <a-layout>
        <a-layout-sider>
            <LibraryList :items="library" />
        </a-layout-sider>
        <a-layout-content>
            <keep-alive>
                <component :is="subItem" ></component>
            </keep-alive>
        </a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
</template>

<script>
import storage from "../storage/index.js";
import LibraryList from "../components/library/LibraryList.vue";
import {defineAsyncComponent, defineComponent, markRaw} from "vue";
import util from "../util/index.js";

export default defineComponent({
    name: "Index",
    components: {
        LibraryList,
    },
    data() {
        return {
            drag: false,
            scene: [],
            library: [],
            subItem: "",
        }
    },
    created() {
        storage.items.forEach((e, i) =>{
            let show = e.library.show ?? true
            if (show === true) {
                this.library.push(e)
            }
        });
        // let module = util.findById(storage.scene.root, storage.items)
        // if(typeof module != "object"){
        //     throw "Cannot find id:" + storage.scene.root + " in items.";
        // }
        // let componentPath = storage.modules[module.item.module]
        // if(typeof componentPath != "string"){
        //     throw "Cannot find path:" + componentPath + " in modules.";
        // }
        let componentPath = "DemoWidget"
        this.subItem = markRaw(defineAsyncComponent(() => {import("../components/" + componentPath + ".vue")}))
    }
})
</script>

<style lang="less" scoped>
.header{
    color: #eee;

}
</style>