import {reactive} from "vue"
import util from "../util/index.js";

export default {
    namespaced: true,

    status: {
        name: "",

        library: [],
        scene: reactive([]),
    },

    mutations: {
        libraryInitMut(status){

        }

    },

    actions: {
        libraryInit(context){
            context.commit("libraryInitMut")
        }
    }
}