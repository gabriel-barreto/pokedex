import Vue from 'vue'
import App from './App.vue'

// --> Import modules
import store from './store';
import router from './routes';
import filter from './filters';

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
})
