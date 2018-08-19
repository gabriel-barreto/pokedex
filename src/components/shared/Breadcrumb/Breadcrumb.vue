<template>
    <div class="breadcrumb-wrapper">
        <ul class="breadcrumb-list">
            <li class="breadcrumb-item">
                <router-link v-for="entry in entries" :key="entry.label" :to="entry.route" class="breadcrumb-link">
                    {{ entry.label }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Breadcrumb",
    computed: {
        entries () {
            return this.$store.getters['breadcrumb/entries'];
        },
    },
}
</script>

<style lang="scss">
.breadcrumb-wrapper {
    padding: 1.5rem 2.5rem;
    background-color: rgba(#ededed, 0.8);
    border-bottom: 1px solid rgba(#000, 0.1);
    box-shadow: 0 1px 2px 0 rgba(#000, 0.15);
    .breadcrumb-list {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        .breadcrumb-item {
            .breadcrumb-link {
                color: rgba(#000, 0.45);
                font-family: Helvetica, Arial, sans-serif;
                font-size: 1.6rem;
                position: relative;
                text-transform: uppercase;
                text-decoration: none;
                padding: 0 0.5rem;
                &::before {
                    content: "/";
                    font-size: 1em;
                    left: -5px;
                    top: 50%;
                    transform: translateY(-50%);
                    position: absolute;
                }
            }
        }
    }
}
</style>
