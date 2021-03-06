// ==> Importing dependencies
import Vue from "vue";
import Vuex from "vuex";

// ==> Importing services
import service from "../service/pokemon.service";

// ==> Injecting Vue plugins
Vue.use(Vuex);

// ==> Importing modules
import breadcrumb from "./Breadcrumb";
import sidebar from "./Sidebar";

// ==> Create new store
const store = new Vuex.Store({
    state: {
        filter: {
            field: "types",
            value: ""
        },
        pokemons: []
    },

    getters: {
        pokemons(state) {
            if (state.filter.field && state.filter.value) {
                return state.pokemons.filter(each =>
                    each[state.filter.field].includes(state.filter.value)
                );
            }
            return state.pokemons;
        },
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
        },
        filter: state => state.filter
    },

    mutations: {
        add(state, payload) {
            state.pokemons = payload;
        },
        filter(state, payload) {
            state.filter = payload;
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
    },

    modules: {
        breadcrumb,
        sidebar
    }
});

export default store;
