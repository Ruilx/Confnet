<template>
<draggable
  class="container-item"
  tag="ul"
  :list="items"
  :group="{name: 'g1'}"
  item-key="name"
  :component-data="{
    tag: 'ul',
    type: 'transition-group',
    name: !drag ? 'flip-list' : null
  }"
  v-bind="dragOptions"
  @start="drag=true"
  @end="drag=false"
  >
  <template #item="{ element }">
    <li>
      <p>{{element.name}}</p>
      <container-item :items="element.items" />
    </li>
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
        ghostClass: "ghost"
      }
    }
  }

}
</script>

<style scoped>
.container-item {
  min-height: 50px;
  outline: 1px dashed;
}

.ghost{
  opacity: 0.5;
  background: #c8ebfb;
}
</style>