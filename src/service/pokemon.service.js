import config from "../configs/api.config";

class PokemonService {
    constructor(store) {
        this.$store = store;
        this.url = `${config.url}/pokemons`;
    }

    _handle(req) {
        req.then(raw => raw.json())
            .then(response => response.content)
            .catch(err => {
                throw err;
            });
    }

    list() {
        return this._handle(fetch(this.url));
    }

    get(id) {
        return this._handle(fetch(`${this.url}/${id}`));
    }
}

export default PokemonService;
