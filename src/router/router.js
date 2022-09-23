export default [
        { 
            path: '/', 
            component: ()=> import('../WorkOutApp.vue'),
            children: [
                {
                    path: '',
                    component: ()=> import('../pages/index/index.vue'),
                }
            ],
        },
        { 
            path: '/log', 
            component: ()=> import('../WorkOutApp.vue'),
            children: [
                {
                    path: '',
                    component: ()=> import('../pages/Log/Log.vue'),
                }
            ],
        },
        {
            path: '/stopwatch', 
            component: ()=> import('../WorkOutApp.vue'),
            children: [
                {
                    path: '',
                    component: ()=> import('../pages/Timer/Timer.vue'),
                }
            ],
        },
        { 
            path: '/weight', 
            component: ()=> import('../WorkOutApp.vue'),
            children: [
                {
                    path: '',
                    component: ()=> import('../pages/Wight/Wight.vue'),
                }
            ],
        },
]