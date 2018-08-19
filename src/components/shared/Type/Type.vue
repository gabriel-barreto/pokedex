<template>
    <div :class="{ '--is-active': active }" class="type" :style="typeBg" @click="applyFilter(label)">{{ label }}</div>
</template>

<script>
export default {
    name: 'Type',
    props: {
        label: '',
    },
    computed: {
        typeBg () {
            const color = this.$options.filters.typeColor(this.label);
            return `background-color: ${color};`;
        },
        active () {
            return this.$store.getters['filter'].value == this.label;
        }
    },
    methods: {
        applyFilter (value) {
            this.$store.commit('filter', { field: "types", value });
            if (this.$route.name != 'home') {
                this.$router.push({ name: 'home' });
            }
            if (this.$store.getters['sidebar/status']) {
                this.$store.commit('sidebar/close');
            }
        },
    },
};
</script>

<style lang="scss">
.type {
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgba(#000, 0.2);
    color: #fff;
    cursor: pointer;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    padding: 1rem 1.25rem;
    text-transform: uppercase;
    width: fit-content;
    &.--is-active {
        position: relative;
        & {
            background-color: #ffcb05 !important;
            border: 2px solid #2a75bb;
            border-radius: 4px;
            color: #fff;
        }
        &,
        &::after {
            box-shadow: 2px 3px 6px 0 rgba(#000, 0.25);
            text-shadow: 1px 2px 3px rgba(#000, 0.2);
        }
        &::after {
            background-color: #2a75bb;
            border-radius: 50%;
            color: #fff;
            content: "✔";
            display: block;
            font-size: 1.4rem;
            padding: 0.35rem 0.5rem;
            position: absolute;
            top: -8px;
            right: -11px;
        }
    }
}
</style>
