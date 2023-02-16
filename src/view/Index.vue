<template>
<div class="row">
  <div class="-col-24">
    <ContainerItem :items="items"></ContainerItem>
  </div>
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
          name: "server",
          type: "container",
          prefix: " {",
          suffix: "}",
          items: [
            {
              name: "listen",
              type: "value",
              value: "80 default_server",
              suffix: ";"
            },{
              name: "listen",
              type: "value",
              value: "[::]:80 default_server",
              suffix: ";"
            },{
              name: "root",
              type: "value",
              value: "/usr/share/html/public",
              suffix: ";"
            },{
              name: "index",
              type: "value",
              value: "index.php index.html index.htm",
              suffix: ";"
            },{
              name: "server_name",
              type: "value",
              value: "_",
              suffix: ";"
            },{
              name: "access_log",
              type: "value",
              value: "/var/log/nginx/access.log",
              suffix: ";"
            },{
              name: "error_log",
              type: "value",
              value: "/var/log/nginx/error.log",
              suffix: ";"
            },{
              name: "location /",
              type: "container",
              prefix: " {",
              suffix: "}",
              items: [
                {
                  name: "try_files",
                  type: "value",
                  value: "$uri $uri/ =404",
                  suffix: ";"
                }
              ]
            },{
              name: "if ( !-e $request_filename )",
              type: "container",
              prefix: " {",
              suffix: "}",
              items: [
                {
                  name: "rewrite",
                  type: "value",
                  value: "^/(.*) /index.php/$1 last",
                  suffix: ";"
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>