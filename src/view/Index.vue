<template>
    <a-layout-header class="r-header">Header</a-layout-header>
    <a-layout>
        <a-layout-sider>
            <ItemList :items="items"></ItemList>
        </a-layout-sider>
        <a-layout-content>
            <ContainerItem :items="scene"></ContainerItem>
        </a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
</template>

<script>
import ContainerItem from "../components/ContainerItem.vue";
import ItemList from "../components/ItemList.vue";

export default {
    name: "Index",
    components: {
        ItemList,
        ContainerItem,
    },
    data() {
        return {
            drag: false,
            scene: [
                {
                    name: "server",
                    type: "container",
                    prefix: " {",
                    suffix: "}",
                    canDrag: false,
                    items: [],
                }
            ],
            items: [
                {
                    name: "listen",
                    type: "value",
                    value: "80 default_server",
                    suffix: ";",
                    canDrag: true,
                }, {
                    name: "listen6",
                    type: "value",
                    value: "[::]:80 default_server",
                    suffix: ";",
                    canDrag: true,
                }, {
                    name: "root",
                    type: "value",
                    value: "/usr/share/html/public",
                    suffix: ";"
                }, {
                    name: "index",
                    type: "value",
                    value: "index.php index.html index.htm",
                    suffix: ";"
                }, {
                    name: "server_name",
                    type: "value",
                    value: "_",
                    suffix: ";"
                }, {
                    name: "access_log",
                    type: "value",
                    value: "/var/log/nginx/access.log",
                    suffix: ";"
                }, {
                    name: "error_log",
                    type: "value",
                    value: "/var/log/nginx/error.log",
                    suffix: ";"
                }, {
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
                }, {
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
    }
}
</script>

<style lang="less" scoped>
.header{
    color: #eee;

}
</style>