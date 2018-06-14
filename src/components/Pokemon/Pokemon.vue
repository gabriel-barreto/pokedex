<template>
    <section class="root-section" id="pokemon">
        <div class="pokemon-thumb">
            <img
                :src="pokemon.thumb"
                :alt="pokemon.name"
                class="thumb"></img>
        </div>
        <h2 class="pokemon-name">{{ pokemon.name }}</h2>
        <div class="pokemon-feature-container">
            <h3 class="feature-title">Types</h3>
            <div class="types-container">
                <app-type
                    v-for="type of types"
                    :key="type.label"
                    :color="type.color"
                    :label="type.label"
                ></app-type>
            </div>
        </div>
        <div class="pokemon-feature-container">
            <h3 class="feature-title">Features</h3>
                <p class="pokemon-feature">
                    <span class="feature-icon">
                        <svg>
                            <use xlink:href="#altura" />
                        </svg>
                    </span>
                    {{ (pokemon.height / 10) | replace }} m
                </p>
                <p class="pokemon-feature">
                    <span class="feature-icon">
                        <svg>
                            <use xlink:href="#peso" />
                        </svg>
                    </span>
                    {{ (pokemon.weight / 10) | replace }} Kg
                </p>
        </div>
    </section>
</template>

<script>
    // --> Services
    import PokemonService from '../../service/pokemon.service.js';

    import Type from '../shared/Type/Type.vue';

    export default {
        name: 'Pokemon',
        components: {
            'app-type': Type,
        },
        computed: {
            types() {
                if (this.pokemon.types) {
                    return this.pokemon.types.map((each, index) => {
                        return {
                            label: each,
                            color: `background-color: ${this.colors[index]};`,
                        };
                    });
                }
            },
        },
        data() {
            return {
                pokemon: {
                },
                colors: [
                    "#2ecc71",
                    "#3498db",
                    "#9b59b6",
                    "#e67e22"
                ],
            };
        },
        mounted() {
            const service = new PokemonService(this.$store);
            service.getById(this.$route.params.id)
                .then(response => {
                    this.pokemon = response.content;
                })
                .catch(err => console.log(err.message));
        }
    }
</script>

<style lang="scss">
    $fontFamily: Helvetica, Arial, sans-serif;

    #pokemon {
        .pokemon-thumb {
            display: flex;
            justify-content: center;
            width: 100%;
            .thumb {
                height: 17.5rem;
                width: 17.5rem
            }
        }
        .pokemon-name {
            font-family: $fontFamily;
            font-size: 2rem;
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 2.5rem;
        }
        .pokemon-feature-container {
            padding: 1.5rem 2.5rem;
            .feature-title {
                color: rgba(#000, .4);
                font-family: $fontFamily;
                font-style: normal;
                font-weight: 300;
                font-size: 1.8rem;
                margin-bottom: 1rem;
            }
            .types-container {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                margin-top: 2rem;
                .type {
                    margin: 0 .5rem;
                    &:first-child {
                        margin-left: 0;
                    }
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
            .pokemon-feature {
                align-items: center;
                display: flex;
                font-family: $fontFamily;
                font-size: 1.6rem;
                margin-bottom: 1.5rem;
                .feature-icon {
                    height: 3rem;
                    width: 2.8rem;
                    margin-right: 1rem;
                    svg {
                        height: 100%;
                        width: 100%;
                        fill: rgba(#000, .8);
                    }
                }
            }
        }
    }
</style>
