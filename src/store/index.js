import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        types: [],
        pokemons: [],
    },

    mutations: {
        registerPokemon(state, payload) {
            console.log(payload);
            state.pokemons = payload.content;
            // const types = new Set();
            // state.pokemons.map(pokemon => {
            //     pokemon.types.map(type => {
            //         types.add(type);
            //     });
            // });
            // state.types = [...types];
        },
    },
});

export default store;
