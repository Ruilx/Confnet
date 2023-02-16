<template>
    <a-card
        :hoverable="true"
        :bordered="true"
        :style="{'margin-bottom': '10px'}"
        :body-style="{padding: '8px'}">
      <span>{{name}}</span> : <span>{{value}}</span>
    </a-card>
</template>

<script>

export default {
  name: "ValueItem",
  props: {
    name: {
      required: true,
      type: String,
    },
    value: {
      required: false,
      type: String,
      default: "",
    }
  },
  data(){
    return{
      drag: false
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.value-item {
  background-color: #3592AE;
  min-height: 30px;
}
</style>