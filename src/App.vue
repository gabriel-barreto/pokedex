<template>
    <div id="app">
        <app-sidebar></app-sidebar>
        <router-view name="navbar"></router-view>
        <router-view name="default"></router-view>
    </div>
</template>

<script>
    import Sidebar from './components/shared/Sidebar/Sidebar.vue';

    export default {
        name: 'app',
        components: {
            'app-sidebar': Sidebar,
        },
        data() {
            return {};
        },
    }
</script>

<style lang="scss">
    @import './assets/stylesheets/main';
</style>
