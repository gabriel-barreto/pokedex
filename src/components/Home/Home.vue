<template>
    <section id="home">
        <app-navbar></app-navbar>
        <div class="pokemons-grid">
            <div
                class="pokemon-card"
                v-for="poke of pokemons"
                :key="poke.id"
            >
                <img :src="poke.thumb" :alt="poke.name" class="pokemon-thumb">
                <p class="pokemon-name">{{ poke.name }}</p>
            </div>
        </div>
    </section>
</template>

<script>
    import Navbar from '../shared/Navbar/Navbar.vue';

    export default {
        name: 'Home',
        components: {
            'app-navbar': Navbar,
        },
        data() {
            return {
                pokemons: [
                    {
                        "id":1,
                        "name":"bulbasaur",
                        "thumb":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                    },
                    {
                            "id":2,
                            "name":"ivysaur",
                            "thumb":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
                    },
                    {
                        "id":3,
                        "name":"venusaur",
                        "thumb":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
                    }
                ],
            };
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

