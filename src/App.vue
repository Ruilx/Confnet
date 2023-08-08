<template>
<div id="app-container">
  <router-view></router-view>
</div>
</template>

<script setup>
import {watch, computed} from "vue"
import $store from "./store/index"
import $router from "./router/index"

const token = computed(() => {
  return "" //$store.state.session.token
})

watch(token, (newValue, oldValue) => {
  if (newValue > 0){
    $router.push("/").catch(err => {})
  }else{
    $router.push("/login").catch(err => {})
  }
})
</script>

<style>
#app-container{
  width: 100%;
  height: 100%;
  text-align: left;
}

body{
  background-color: #eeeeee;
}
</style>
