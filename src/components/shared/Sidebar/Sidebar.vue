<template>
    <nav>
        <div class="sidebar">
            <header class="sidebar-header">
                <h1 class="app-title">Pokedex</h1>
                <button class="sidebar-close-btn btn">x</button>
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
        }
    }
</script>

<style lang="scss">
    .sidebar {
        background-color: #fff;
        font-family: Helvetica, Arial, sans-serif;
        height: 100vh;
        position: fixed;
        top: 0;
        width: 80vw;
        z-index: 999;
        .sidebar-header {
            background-color: #e74c3c;
            display: flex;
            justify-content: space-between;
            padding: 1.5rem 2.5rem;
            .app-title {
                color: #fff;
                font-size: 2.8rem;
                text-shadow: 0 1px 2px rgba(#000, .2);
            }
            .btn {
                color: #fff;
                font-size: 1.8rem;
                outline-color: transparent;
                transition: color .35s;
                &:hover, &:focus {
                    color: rgba(#fff, .6);
                }
            }
        }
    }
</style>
