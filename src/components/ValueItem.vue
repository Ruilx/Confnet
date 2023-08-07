<template>
    <a-card
        :hoverable="true"
        :bordered="true"
        :body-style="{padding: 0}"
        class="value-item"
    >
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

<style scoped lang="less">
.value-item {
    padding: 5px 8px;
    font-family: Consolas, "Microsoft YaHei", monospace;
    font-size: 80%;
    border-left: 5px solid #888;
    margin-bottom: 8px;
}
</style>