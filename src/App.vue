<template>
    <div id="app">
        <app-home></app-home>
    </div>
</template>

<script>
    import Home from './components/Home/Home.vue';

    export default {
        name: 'app',
        components: {
            'app-home': Home,
        },
        data() {
            return {};
        },
    }
</script>

<style lang="scss">
    @import './assets/stylesheets/main';
</style>
