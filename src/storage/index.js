const storage = {
    scene: {
        root: [1],
    },
    items: [
        {
            id: 1,
            name: "server",
            type: "container",
            item: {
                module: "common/container",
                params: {},
            },
            library: {
                show: false,
            }
        }, {
            id: 2,  // 数据库中的ID...
            name: "listen", // 该卡片名称
            type: "value",  // 该卡片类型
            item: {         // scene上展示的信息
                module: "common/value", // modules中需要载入的组件
                params: {               // 提供的参数
                    title: "A Container",
                },
            },
            library: {  // 库中设置
                "title": "listen", // 标题
                "desc": "This is a listen config", // 解释
                "card-style": {
                    "background-color": "#663399",
                    "color": "#eee"
                },
                "cond": {}
            }
        }
    ],
    modules: {
        "common/container": "common/containers/CommonContainer",
        "common/value": "common/values/CommonValue",
    }
}