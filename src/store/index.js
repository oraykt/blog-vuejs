import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    entries: []
  },
  getters: {
    getEntries: (state, getters) => {
      return state.entries
    },
    filteredResults: (state) => (term) => {
      return state.entries.filter(entry => ~entry.title.toLowerCase().indexOf(term.toLowerCase()))
    }
  },
  mutations: {
    setEntries (state, payload) {
      state.entries = payload.entries
    }
  },
  actions: {
    fetchEntries (context) {
      db.ref('entries').on('value', snapshot => {
        context.commit('setEntries', {entries: snapshot.val()})
      })
    }
  }
})
