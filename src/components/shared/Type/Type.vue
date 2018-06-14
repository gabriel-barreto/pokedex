<template>
    <div
        class="type"
        :style="color"
    >{{ label }}</div>
</template>

<script>
    export default {
        name: 'Type',
        props: {
            color: '',
            label: '',
        },
    };
</script>

<style lang="scss">
    .type {
        border-radius: 2px;
        box-shadow: 0 2px 4px 0 rgba(#000, .2);
        color: #fff;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        letter-spacing: .1rem;
        padding: .75rem 1rem;
        text-transform: uppercase;
    }
</style>
