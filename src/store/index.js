// ==> Importing dependencies
import Vue from "vue";
import Vuex from "vuex";

// ==> Importing services
import service from "../service/pokemon.service";

// ==> Injecting Vue plugins
Vue.use(Vuex);

// ==> Create new store
const store = new Vuex.Store({
    state: {
        pokemons: []
    },

    mutations: {
        add(state, payload) {
            state.pokemons = payload;
        }
    },

    actions: {
        fetchPokes({ commit }) {
            const pokeServices = new service();
            pokeServices
                .list()
                .then(pokes => {
                    commit("add", pokes);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
});

export default store;
