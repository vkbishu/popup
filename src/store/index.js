import Vue from 'vue'
import Vuex from 'vuex'
import tags from "./tags"
import actions from "./actions"
import https from "./https-request"
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        sideBarComponent: 'ActionSideBar',
        mainComponent: 'ActionsMain',
        defaultSideBar: 'ActionSideBar'
    },
    mutations: {
      setSideBar(state, component){
        state.sideBarComponent = component;
      },
      setMain(state, component){
        state.mainComponent = component;
      },
      resetSideBar(state){
        state.sideBarComponent = state.defaultSideBar;
        state.mainComponent = 'ActionsMain';
      }
    },
    modules: {
      tags,
      actions,
      https
    },
    strict: debug
})