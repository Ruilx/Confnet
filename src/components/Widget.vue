<template>
<component :is="subComponent" v-model:item="item" />
</template>

<script>
import {defineAsyncComponent, defineComponent, markRaw} from "vue";
import storage from "../storage/index.js";

export default defineComponent({
    name: "Widget",
    props: {
        item: {type: Object, required: true},
    },
    data(){
        return{
            subComponent: "",
        }
    },
    created(){
        if(typeof this.item.module === "undefined"){
            throw "module is undefined"
        }
        let modulePath = storage.modules[this.item.module]
        if(typeof modulePath === "undefined"){
            throw "module is not configured: " + this.item.module
        }

        this.subComponent = markRaw(defineAsyncComponent(() => {return import("./" + modulePath + ".vue")}))
    }
})
</script>

<style scoped>

</style>