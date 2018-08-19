<template>
    <nav>
        <div class="sidebar" :class="{ '--is-open': status }">
            <header class="sidebar-header">
                <h1 class="app-title">Pokedex</h1>
                <button class="sidebar-close-btn btn" @click="hideSidebar">x</button>
            </header>
            <main class="sidebar-content">
                <h3 class="sectiont-title">Filters List</h3>
                <ul class="filters-list">
                </ul>
            </main>
        </div>
    </nav>
</template>

<script>
import Type from '../Type/Type.vue';
export default {
    name: 'Sidebar',
    components: {
        'app-type': Type,
    },
    computed: {
        status () {
            return this.$store.getters['sidebar/status'];
        },
    },
    methods: {
        hideSidebar () {
            this.$store.commit('sidebar/close');
        },
    },
}
</script>

<style lang="scss">
.sidebar {
    background-color: #fff;
    box-shadow: 2px 1px 8px 1px rgba(#000, 0.2);
    font-family: Helvetica, Arial, sans-serif;
    height: 100vh;
    position: fixed;
    top: 0;
    width: 80vw;
    transform: translateX(-10000px);
    transition: transform 0.4s;
    z-index: 999;
    &.--is-open {
        transform: translateX(0);
    }
    .sidebar-header {
        background-color: #e74c3c;
        box-shadow: 0 1px 2px 0 rgba(#000, 0.2);
        border-bottom: 2px solid rgba(#000, 0.05);
        display: flex;
        justify-content: space-between;
        padding: 1.5rem 2.5rem;
        .app-title {
            color: #fff;
            font-size: 2.4rem;
            text-shadow: 0 1px 2px rgba(#000, 0.2);
        }
        .btn {
            color: #fff;
            font-size: 1.8rem;
            outline-color: transparent;
            transition: color 0.35s;
            &:hover,
            &:focus {
                color: rgba(#fff, 0.6);
            }
        }
    }
}
</style>
