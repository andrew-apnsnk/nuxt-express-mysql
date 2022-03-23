const api = process.env.NODE_ENV === 'production'
    ? 'http://api.production.io'
    : 'http://localhost:3000'

export const state = () => ({
    users: []
})

export const mutations = {
    setUsers(state, users) {
        state.users = users
    }
}

export const actions = {
    async fetch({ commit, state }) {
        const users = await this.$axios.$get(`${api}/api/users`)
        commit('setUsers', users)
    },
    async addUser({ dispatch, state }, user) {
        const res = await this.$axios.post(`${api}/api/users`, user)
        dispatch('fetch')
        return res
    }
}

export const getters = {
    users: state => state.users
}