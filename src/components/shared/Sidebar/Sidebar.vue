<template>
    <nav>
        <div class="sidebar" :class="{ '--is-open': status }">
            <header class="sidebar-header">
                <h1 class="app-title">Pokedex</h1>
                <button class="sidebar-close-btn btn" @click="hideSidebar">x</button>
            </header>
            <main class="sidebar-content">
                <h3 class="section-title">Filters List</h3>
                <ul class="filters-list">
                    <li class="filter-item" v-for="type in types" :key="type">
                        <app-type :label="type" />
                    </li>
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
        types () {
            return this.$store.getters['types'];
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
            font-weight: bold;
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
    .sidebar-content {
        padding: 1.5rem 2.5rem 6.25rem 2.5rem;
        height: 100%;
        overflow-y: scroll;
        .section-title {
            color: rgba(#000, 0.25);
            font-family: Helvetica, Arial, sans-serif;
            font-size: 2rem;
        }
        .filters-list {
            margin: 1rem 0;
            .filter-item {
                margin: 1rem 0;
                &:first-child {
                    margin-top: 0;
                }
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>
