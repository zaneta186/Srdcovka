import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const URL_BASE = "https://srdcovka-db.herokuapp.com"

export const Actions = Object.freeze({
  FETCH_ORGANISATIONS: "fetchOrganisations",
  FETCH_SEGMENTS: "fetchSegments",
  FETCH_QUESTIONS: "fetchQuestions",
})

export const Mutations = Object.freeze({
  SET_ORGANISATIONS: "setOrganisations",
  SET_SEGMENTS: "setSegments",
  SET_QUESTIONS: "setQuestions",
  SET_SELECTED_ORGANISATION: "setSelectedOrganisation"
})

export const Getters = Object.freeze({
  GET_ORGANISATIONS: "getOrganisations",
  GET_ORGANISATION_BY_ID: "getOrganisationById",
  GET_SEGMENTS: "getSegments",
  GET_QUESTIONS: "getQuestions",
  GET_SELECTED_ORGANISATION_ID: "getSelectedOrganisationId"
})

const store = new Vuex.Store({
  state: {
    organisations: [],
    result: undefined,
    segmets: [],
    questions: [],
    selectedOrganisation: undefined,
  },
  getters: {
    [Getters.GET_ORGANISATIONS](state) {
      return state.organisations;
    },
    [Getters.GET_SEGMENTS](state) {
      return state.segments;
    },
    [Getters.GET_QUESTIONS](state) {
      return state.questions;
    },
    [Getters.GET_SELECTED_ORGANISATION_ID](state) {
      return state.selectedOrganisation;
    }
  },
  mutations: {
    [Mutations.SET_ORGANISATIONS](state, organisations) {
      state.organisations = organisations;
    },
    [Mutations.SET_SEGMENTS](state, segments) {
      state.segments = segments;
    },
    [Mutations.SET_QUESTIONS](state, questions) {
      state.questions = questions;
    },
    [Mutations.SET_SELECTED_ORGANISATION](state, selectedOrganisationId) {
      state.selectedOrganisation = state.organisations.find(org => org.id === selectedOrganisationId);
    },

  },
  actions: {
    [Actions.FETCH_ORGANISATIONS]({ commit }) {

      fetch(`${URL_BASE}/organisations`)
        .then(response => response.json())
        .then(organisations => {
          const sortedOrganisations = organisations.sort((a, b) => {
            let x = a.title.toLowerCase();
            let y = b.title.toLowerCase();
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          });
          commit(Mutations.SET_ORGANISATIONS, sortedOrganisations)
          commit(Mutations.SET_SELECTED_ORGANISATION, 8)
        })
    },

    [Actions.FETCH_SEGMENTS]({ commit }) {

      fetch(`${URL_BASE}/segments`)
        .then(response => response.json())
        .then(segments => {
          commit(Mutations.SET_SEGMENTS, segments)
        })
    },

    [Actions.FETCH_QUESTIONS]({ commit }) {

      fetch(`${URL_BASE}/questions`)
        .then(response => response.json())
        .then(questions => {
          commit(Mutations.SET_QUESTIONS, questions)
        })
    },

  }
});

export default store;