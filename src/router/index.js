import { createWebHashHistory , createRouter } from 'vue-router';
import routes from './router';

export default createRouter({
    history: createWebHashHistory(),
    routes,
});