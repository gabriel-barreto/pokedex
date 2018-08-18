import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        pokemons: []
    },

    mutations: {
        add(state, payload) {
            state.pokemons = payload.content;
        }
    }
});

export default store;
