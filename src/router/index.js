import {
    createRouter,
    createWebHashHistory,
} from "vue-router"

const routes = [
    {
        path: "/",
        meta: {
            title: "Blank"
        },
        component: () => import("../view/Index.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

const WhiteList = []

router.beforeEach((to, from, next) => {
    if(to.meta){
        document.title = to.meta.title
    }
    const token = ""
    if(token.length > 0 || WhiteList.indexOf(to.path) !== -1){
        next()
    }else{
        // next("/login")
        next()
    }
})

export default router