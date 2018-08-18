const mode = process.env.NODE_ENV || "development";
const config = {
    production: {
        url: "https://gb-pokedex-api.herokuapp.com"
    },
    development: {
        url: "http://0.0.0.0:5000"
    }
};

export default config[mode];
