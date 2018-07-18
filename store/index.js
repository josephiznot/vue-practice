import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0
    },
    mutations: {
      increment(state, payload) {
        state.counter += payload.number;
      }
    },
    actions: {
      getState({ commit }) {
        return commit("increment", this.state.counter);
      },
      nuxtServerInit({ dispatch }) {
        dispatch("getState");
      }
    }
  });
};

export default createStore;
