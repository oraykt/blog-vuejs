import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    appName: 'VueBlog'
  },
  getters: {
    seperatedAppName: (state) => {
      return state.appName.replace(/([a-z](?=[A-Z]))/g, '$1 ')
    }
  },
  mutations: {
    changeAppName (state, payload) {
      state.appName = payload.appName
    }
  },
  actions: {
    changeAppNameAsync (context) {
      const things = [
        'AlphaBlog',
        'BetaBlog',
        'BlueSelection',
        'AdventureTime',
        'VueBlog'
      ]
      const choosen = things[Math.floor(Math.random() * things.length)]
      // changeAppName => mutations.changeAppName(...payload)
      context.commit('changeAppName', {appName: choosen})
    }
  }
})
