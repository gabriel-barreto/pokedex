<template>
    <section class="root-section" id="home">
        <app-breadcrumb />
        <div class="pokemons-grid">
            <div class="pokemon-card" v-for="poke of pokemons" :key="poke.id" @click="go(poke.id)">
                <img :src="poke.thumb" :alt="poke.name" class="pokemon-thumb">
                <p class="pokemon-name">{{ poke.name }}</p>
            </div>
        </div>
    </section>
</template>

<script>
// ==> Components
import Breadcrumb from '../shared/Breadcrumb/Breadcrumb.vue';

export default {
    name: "Home",
    components: {
        "app-breadcrumb": Breadcrumb,
    },
    computed: {
        pokemons () {
            return this.$store.getters["pokemons"];
        },
    },
    methods: {
        go (id) {
            this.$router.push({ name: "pokemon", params: { id } });
        }
    },
    mounted () {
        if (this.$store.getters["pokemons"].length < 1) {
            this.$store.dispatch("fetchPokes");
        }
        if (this.$store.getters['filter'].value) {
            this.$store.commit("breadcrumb/add", { label: this.$store.getters['filter'].value, route: {} });
        }
    },
    beforeUpdate () {
        if (this.$store.getters['filter'].value) {
            this.$store.commit("breadcrumb/remove");
            this.$store.commit("breadcrumb/add", { label: this.$store.getters['filter'].value, route: {} });
        }
    },
    destroyed () {
        if (this.$store.getters['filter'].value) {
            this.$store.commit("breadcrumb/remove");
        }
    }
}
</script>

<style lang="scss">
.pokemons-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
    margin: 0 auto;
    padding: 0 0 2rem 0;
    width: 87.5%;
    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(5, 1fr);
    }
    @media (min-width: 1200px) {
        grid-template-columns: repeat(6, 1fr);
    }
    @media (min-width: 1400px) {
        grid-template-columns: repeat(8, 1fr);
    }
    .pokemon-card {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 4px;
        box-shadow: 0 0 0 0 rgba(#000, 0.2);
        cursor: pointer;
        padding: 1.5rem 1rem;
        transition: background-color 0.3s ease-in-out,
            box-shadow 0.3s ease-in-out;
        .pokemon-thumb {
            height: auto;
            max-width: 100%;
            object-fit: contain;
            width: auto;
        }
        .pokemon-name {
            font-family: Helvetica, Arial, sans-serif;
            font-size: 1.4rem;
            text-align: center;
            text-transform: capitalize;
        }
        &:hover,
        &:focus {
            background-color: rgba(#ededed, 0.75);
            box-shadow: 0 2px 4px 0 rgba(#000, 0.2);
        }
    }
}
</style>
