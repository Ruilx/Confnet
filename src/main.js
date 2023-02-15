import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

import router from "./router"
import store from "./store"

const app = createApp(App)
app.config.productionTip = false
app.use(Antd)
app.use(store)
app.use(router)

app.mount('#app')
