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

    getters: {
        types(state) {
            if (state.pokemons.length > 0) {
                const pokeTypes = new Set([]);
                state.pokemons.map(poke => {
                    poke.types.map(type => {
                        pokeTypes.add(type);
                    });
                });
                return [...pokeTypes];
            }
            return [];
        }
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
