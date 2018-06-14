import config from '../configs/api.config';

class PokemonService {
    constructor (store) {
        this.$store = store;
        this.url = `${config.url}/pokemon`;
    }

    list() {
        return fetch(this.url)
            .then(raw => raw.json())
            .then(response => {
                this.$store.commit('registerPokemon', response);
                return response;
            })
            .catch(err => {
                throw err;
            });
    }

    getById(id) {
        return fetch(`${this.url}/${id}`)
            .then(raw => raw.json())
            .then(response => {
                return response;
            })
            .catch(err => {
                throw err;
            });
    }
};

export default PokemonService;
