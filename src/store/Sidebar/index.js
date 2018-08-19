export default {
    namespaced: true,
    mutations: {
        open: state => (state.isOpen = true),
        close: state => (state.isOpen = false)
    },
    getters: {
        status: state => state.isOpen
    },
    state: {
        isOpen: false
    }
};
