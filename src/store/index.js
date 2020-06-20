import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const URL_BASE = "https://srdcovka-db.herokuapp.com"

export const Actions = Object.freeze({
  FETCH_ORGANISATIONS: "fetchOrganisations",
  FETCH_SEGMENTS: "fetchSegments",
  FETCH_QUESTIONS: "fetchQuestions",
  PERFORME_NEXT_QUESTION: "performeNextQuestion"
})

export const Mutations = Object.freeze({
  SET_ORGANISATIONS: "setOrganisations",
  SET_SEGMENTS: "setSegments",
  SET_QUESTIONS: "setQuestions",
  SET_SELECTED_ORGANISATION: "setSelectedOrganisation",
  SET_ACTUAL_QUESTION: "setActualQuestion",
  SET_ACTUAL_QUESTION_ID: "setActualQuestionId",
  SET_RESULT: "setResult",
  SET_RESULT_PRICE: "setResultPrice",

})

export const Getters = Object.freeze({
  GET_ORGANISATIONS: "getOrganisations",
  GET_ORGANISATION_BY_ID: "getOrganisationById",
  GET_SEGMENTS: "getSegments",
  GET_QUESTIONS: "getQuestions",
  GET_SELECTED_ORGANISATION_ID: "getSelectedOrganisationId",
  GET_ACTUAL_QUESTION: "getActualQuestion",
  GET_ACTUAL_QUESTION_ID: "getActualQuestionId",
})

const store = new Vuex.Store({
  state: {
    organisations: [],
    result: [],
    resultPrice: '',
    segmets: [],
    questions: [],
    selectedOrganisation: undefined,
    actualQuestion: undefined,
    actualQuestionId: undefined,
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
    },
    [Getters.GET_ACTUAL_QUESTION](state) {
      return state.actualQuestion;
    },
    [Getters.GET_ACTUAL_QUESTION_ID](state) {
      return state.actualQuestionId;
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
    [Mutations.SET_ACTUAL_QUESTION](state, actualQuestionId) {
      state.actualQuestion = state.questions.find(question => question.id === actualQuestionId);
    },
    [Mutations.SET_ACTUAL_QUESTION_ID](state, actualQuestionId) {
      state.actualQuestionId = actualQuestionId;
    },
    [Mutations.SET_RESULT](state, result) {
      state.result.push(result)
    },
    [Mutations.SET_RESULT_PRICE](state, price) {
      state.resultPrice = price
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
          const sortedQuestions = questions.sort((a, b) => a.id - b.id)
          console.log(sortedQuestions)
          const completeQuestions = sortedQuestions.map(question => {
            return {
              ...question,
              answers: question.answers.map(answer => {
                return {
                  ...answer,
                  check: false,
                }
              })
            }

          })
          console.log(completeQuestions)
          commit(Mutations.SET_QUESTIONS, completeQuestions)

          commit(Mutations.SET_ACTUAL_QUESTION_ID, completeQuestions[0].id)
          // commit(Mutations.SET_ACTUAL_QUESTION, completeQuestions[0].id)
          commit(Mutations.SET_ACTUAL_QUESTION, 61)
        })
    },

    [Actions.PERFORME_NEXT_QUESTION]({commit, state}, payload){
      const indexActualQuestion = state.questions.findIndex(question => question.id === payload )
      commit(Mutations.SET_ACTUAL_QUESTION_ID, state.questions[indexActualQuestion+1].id)
      commit(Mutations.SET_ACTUAL_QUESTION, state.questions[indexActualQuestion+1].id)

    },
  }
});

export default store;