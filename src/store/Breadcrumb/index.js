export default {
    namespaced: true,

    state: {
        entries: [
            {
                route: { name: "home" },
                label: "home"
            }
        ]
    },

    getters: {
        entries: state => state.entries
    },

    mutations: {
        add(state, payload) {
            state.entries.push(payload);
        },
        remove(state) {
            if (state.entries.length > 1) {
                state.entries.pop();
            }
        }
    }
};
