const storage = {
    scene: {
        root: [1],
    },
    library: [
        {
            id: 1,
            name: "server",
            type: "container",
            item: {
                path: "components/nginx/containers/ServerContainer",
                params: {},
            },
            library: {
                show: false,
            }
        }, {
            id: 2,
            name: "listen",
            type: "value",
            item: {
                path: "components/nginx/values/DoubleValueItem",
                params: {
                    name: "listen",
                    value1type: "int",
                    value2type: "str",
                },
            },
            library: {
                "name": "listen",
                "body-style": {
                    "background-color": "#663399",
                    "color": "#eee"
                },
                "tips": "This is a listen config",
                "cond": {}
            }
        }
    ],
}