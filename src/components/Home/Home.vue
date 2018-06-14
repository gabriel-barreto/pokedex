<template>
    <section class="root-section" id="home">
        <div class="pokemons-grid">
            <div
                class="pokemon-card"
                v-for="poke of pokemons"
                :key="poke.id"
                @click="go(poke.id)"
            >
                <img :src="poke.thumb" :alt="poke.name" class="pokemon-thumb">
                <p class="pokemon-name">{{ poke.name }}</p>
            </div>
        </div>
    </section>
</template>

<script>
    // --> Service
    import PokemonService from '../../service/pokemon.service.js';

    export default {
        name: 'Home',
        data() {
            return {
                pokemons: [],
            };
        },
        methods: {
            go(id) {
                this.$router.push({ name: 'pokemon', params: { id }});
            }
        },
        mounted() {

            const service = new PokemonService(this.$store);
            service.list()
                .then(response => {
                    this.pokemons = response.content;
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    }
</script>

<style lang="scss">
    .pokemons-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 1rem;
        margin: 0 auto;
        padding: 2rem 0;
        width: 87.5%;
        .pokemon-card {
            border-radius: 4px;
            box-shadow: 0 0 0 0 rgba(#000, .2);
            cursor: pointer;
            padding: 1.5rem 1rem;
            transition: background-color .3s ease-in-out, box-shadow .3s ease-in-out;
            .pokemon-thumb {
                height: auto;
                max-width: 100%;
                width: auto;
            }
            .pokemon-name {
                font-family: Helvetica, Arial, sans-serif;
                font-size: 1.4rem;
                text-align: center;
                text-transform: capitalize;
            }
            &:hover, &:focus {
                background-color: rgba(#ededed, .75);
                box-shadow: 0 2px 4px 0 rgba(#000, .2);
            }
        }
    }
</style>
