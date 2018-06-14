<template>
    <nav>
        <div class="navbar">
            <button class="btn btn-sidebar-toggler">
                <span class="icon"></span>
            </button>
            <router-link :to="{ name: 'home' }">
                <img src="../../../assets/images/brand.png" alt="" class="navbar-brand">
            </router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style lang="scss">
    .navbar {
        align-items: center;
        background-color: #e74c3c;
        box-shadow: 0 4px 6px 0 rgba(#000, .2);
        display: flex;
        padding: 1rem 2.5rem;
        position: fixed;
        width: 100%;
        .btn {
            margin-right: .5rem;
            .icon {
                position: relative;
                &, &::after, &::before {
                    background-color: #fff;
                    display: block;
                    height: .3rem;
                    width: 2.25rem;
                }
                &::before, &::after {
                    content: '';
                    position: absolute;
                }
                &::before {
                    top: -7px;
                }
                &::after {
                    bottom: -7px;
                }
            }
        }
        .navbar-brand {
            max-width: 100%;
            height: 3.5rem;
            width: auto;
        }
    }
</style>
