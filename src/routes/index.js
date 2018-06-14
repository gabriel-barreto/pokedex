import Vue from 'vue';
import VueRouter from 'vue-router';

// --> Import components
import Home from '../components/Home/Home.vue';
import Pokemon from '../components/Pokemon/Pokemon.vue';

// --> Shared components
import Navbar from '../components/shared/Navbar/Navbar.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '',
            components: {
                default: Home,
                navbar: Navbar,
            },
        },
        {
            name: 'pokemon',
            path: '/pokemon/:id',
            components: {
                default: Pokemon,
                navbar: Navbar,
            },
        }
    ],
});

export default router;
