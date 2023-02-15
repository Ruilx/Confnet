<template>
  <draggable
      class="container-item"
      tag="ul"
      :list="items"
      :group="{name: 'g1'}"
      item-key="name"
      :component-data="{tag: 'div',type: 'transition-group',name: !drag ? 'flip-list' : null}"
      v-bind="dragOptions"
      @start="drag=true"
      @end="drag=false"
  >
    <template #item="{ element }">
      <a-card :title="element.name" :bordered="true" size="small" :head-style="{'background-color': '#666666'}" :body-style="{'background-color': '#222222'}">
        <container-item :items="element.items" />
      </a-card>
    </template>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: "ContainerItem",
  props: {
    items: {
      required: true,
      type: Array
    }
  },
  components:{
    draggable
  },
  data(){
    return {
      drag: false
    }
  },
  methods: {

  },
  computed: {
    dragOptions() {
      return{
        animation: 200,
        group: "a1",
        disabled: false,
        ghostClass: "item-ghost"
      }
    }
  }

}
</script>

<style scoped>
.container-item {
  padding-left: 0;
  background-color: rgba(111, 111, 111, 0.3)
}

.item-ghost{
  opacity: 0.5;
  background-color: #eee;
}
</style>