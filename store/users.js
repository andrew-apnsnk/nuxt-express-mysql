export const state = () => ({
    users: []
})

export const mutations = {
    setUsers(state, users) {
        state.users = users
    }
}

export const actions = {
    async fetch({ commit }) {
        const users = await this.$axios.$get(
            "http://localhost:3000/api/users"
        )
        commit('setUsers', users)
    },
    async addUser({ dispatch, state }, user) {
        const res = await this.$axios.post("http://localhost:3000/api/users", user)
        dispatch('fetch')
        return res
    }
}

export const getters = {
    users: state => state.users
}