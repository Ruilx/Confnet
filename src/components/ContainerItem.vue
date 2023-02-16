<template>
  <draggable
      class="container-item"
      tag="div"
      :list="items"
      :group="{name: 'g1'}"
      item-key="name"
      :component-data="{tag: 'div',type: 'transition-group',name: !drag ? 'flip-list' : null}"
      v-bind="dragOptions"
      @start="drag=true"
      @end="drag=false"
  >
    <template #item="{ element }">
      <a-card
          v-if="element.type==='container'"
          :title="element.name + element.prefix"
          :bordered="true"
          :hoverable="true"
          :body-style="{'padding-left':'10px', 'border-left': '#888 solid 5px'}"
          :head-style="{'border-left': '#888 solid 5px'}"
          :style="{'margin-bottom': '10px'}"
          size="small">
        <container-item :items="element.items" />
        <p class="container-suffix">{{element.suffix}}</p>
      </a-card>
      <value-item v-else :name="element.name" :value="element.value" />
    </template>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import ValueItem from "./ValueItem.vue"

export default {
  name: "ContainerItem",
  props: {
    items: {
      required: true,
      type: Array
    }
  },
  components:{
    ValueItem,
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
  #background-color: rgba(111, 111, 111, 0.3);
  min-height: 30px;
}

.container-suffix{
  margin-bottom: 0;
}

.item-ghost{
  opacity: 0.5;
  background-color: #eee;
}
</style>