const mode = process.env.NODE_ENV || 'development';
const config = {
    production: {
        url: 'https://gb-pokedex-api.herokuapp.com'
    },
    development: {
        url: 'https://gb-pokedex-api.herokuapp.com'
    },
};

export default config[mode];
