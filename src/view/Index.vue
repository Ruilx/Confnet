<template>
<div class="row">
  <ContainerItem :items="items"></ContainerItem>
</div>
</template>

<script>
import ContainerItem from "../components/ContainerItem.vue";

export default {
  name: "Index",
  components: {
    ContainerItem,
  },
  data(){
    return {
      drag: false,
      items: [
        {
          name: "ITEM1",
          items: [
            {
              name: "ITEM2",
              items: []
            }
          ]
        },{
          name: "ITEM3",
          items: []
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>