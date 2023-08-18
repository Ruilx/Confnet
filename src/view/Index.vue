<template>
    <a-layout-header class="r-header">Header</a-layout-header>
    <a-layout>
        <a-layout-sider>
            <LibraryList :items="library" />
        </a-layout-sider>
        <a-layout-content>
            <h1>SCENE</h1>
            <keep-alive>
                <component :is="subComponent" :item="scene"/>
            </keep-alive>
        </a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
</template>

<script>
import storage from "../storage/index.js";
import LibraryList from "../components/library/LibraryList.vue";
import {defineAsyncComponent, defineComponent, markRaw, ref} from "vue";
import util from "../util/index.js";

export default defineComponent({
    name: "Index",
    components: {
        LibraryList,
    },
    data() {
        return {
            drag: false,
            scene: ref({
                id: 0,
                name: "ROOT CONTAINER",
                draggable: false,
                items: [
                    {
                        id: 1,
                        name: "ITEM1",
                        module: "common/value",
                        draggable: true,
                    },{
                        id: 2,
                        name: "ITEM2",
                        module: "common/value",
                        draggable: true,
                    }
                ]
            }),
            library: [],
            subComponent: "",
        }
    },
    created() {
        storage.items.forEach((e, i) =>{
            let show = e.library.show ?? true
            if (show === true) {
                this.library.push(e)
            }
        });
        let moduleIndex = util.findIndexById(storage.items, storage.scene.root)
        if(moduleIndex < 0){
            throw "Cannot find id:" + storage.scene.root + " in items.";
        }
        let module = storage.items[moduleIndex]
        let componentPath = storage.modules[module.item.module]
        if(typeof componentPath != "string"){
            throw "Cannot find path:" + componentPath + " in modules.";
        }
        console.log("../components/" + componentPath + ".vue")
        this.subComponent = markRaw(defineAsyncComponent(() => {return import(/* @vite-ignore */"../components/" + componentPath + ".vue")}))
    }
})
</script>

<style lang="less" scoped>
.header{
    color: #eee;

}
</style>