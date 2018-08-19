<template>
    <section class="root-section" id="pokemon">
        <div class="pokemon-thumb">
            <img :src="pokemon.thumb" :alt="pokemon.name" class="thumb" />
        </div>
        <h2 class="pokemon-name">{{ pokemon.name }}</h2>
        <div class="pokemon-feature-container">
            <h3 class="feature-title">Types</h3>
            <div class="types-container">
                <app-type v-for="type of pokemon.types" :key="type" :label="type"></app-type>
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
// ==> Services
import PokemonService from '../../service/pokemon.service';

// ===> Components
import Type from '../shared/Type/Type.vue';

export default {
    name: 'Pokemon',
    components: {
        'app-type': Type,
    },
    data () {
        return {
            pokemon: {},
        };
    },
    beforeMount () {
        const service = new PokemonService;
        service.get(this.$route.params.id)
            .then(poke => this.pokemon = poke)
            .catch(err => console.log(err));
    },
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
            width: 17.5rem;
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
            color: rgba(#000, 0.4);
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
                margin: 0 0.5rem;
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
            &:first-of-type {
                margin-top: 2rem;
            }
            .feature-icon {
                height: 2.4rem;
                width: 2.6rem;
                margin-right: 1rem;
                svg {
                    height: 100%;
                    width: 100%;
                    fill: rgba(#000, 0.8);
                }
            }
        }
    }
}
</style>
