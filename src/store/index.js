import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const URL_BASE = "https://srdcovka-db.herokuapp.com"

export const Actions = Object.freeze({
  FETCH_ORGANISATIONS: "fetchOrganisations",
  FETCH_SEGMENTS: "fetchSegments",
  FETCH_QUESTIONS: "fetchQuestions",
  PERFORME_NEXT_QUESTION: "performeNextQuestion",
  PERFORM_FILE_UPLOAD: "performFileUpload",
  PERFORM_ADD_ORGANISATION: "performAddOrganisation",
  PERFORM_RESULT_IDS: "performResultIds"
})

export const Mutations = Object.freeze({
  SET_ORGANISATIONS: "setOrganisations",
  SET_SEGMENTS: "setSegments",
  SET_QUESTIONS: "setQuestions",
  SET_SELECTED_ORGANISATION: "setSelectedOrganisation",
  SET_ACTUAL_QUESTION: "setActualQuestion",
  SET_ACTUAL_QUESTION_ID: "setActualQuestionId",
  SET_RESULT: "setResult",
  SET_RESULT_IDS: "setResultIds",
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
  GET_RESULT_IDS: "getResultIds",
  GET_RESULT_PRICE: "getResultPrice",
})

const store = new Vuex.Store({
  state: {
    organisations: [],
    result: [],
    resultPrice: '',
    resultIds: undefined,
    segments: [],
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
    },
    [Getters.GET_RESULT_PRICE](state) {
      return state.resultPrice;
    },
    [Getters.GET_RESULT_IDS](state) {
      return state.resultIds;
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
    [Mutations.SET_RESULT_IDS](state, resultIds) {
      console.log("Nastavuji Result ids na:", resultIds)
      state.resultIds = resultIds
    },
    [Mutations.SET_RESULT_PRICE](state, price) {
      console.log("Nastavuji result prize na:", price)
      state.resultPrice = price
    },
  },
  actions: {
    [Actions.FETCH_ORGANISATIONS]({ commit }) {

      fetch(`${URL_BASE}/organisations?validated=true`)
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
          commit(Mutations.SET_QUESTIONS, completeQuestions)

          commit(Mutations.SET_ACTUAL_QUESTION_ID, completeQuestions[0].id)
          commit(Mutations.SET_ACTUAL_QUESTION, completeQuestions[0].id)
          // commit(Mutations.SET_ACTUAL_QUESTION, 61)
        })
    },

    [Actions.PERFORME_NEXT_QUESTION]({ commit, state }, payload) {
      const indexActualQuestion = state.questions.findIndex(question => question.id === payload)
      commit(Mutations.SET_ACTUAL_QUESTION_ID, state.questions[indexActualQuestion + 1].id)
      commit(Mutations.SET_ACTUAL_QUESTION, state.questions[indexActualQuestion + 1].id)

    },

    async [Actions.PERFORM_FILE_UPLOAD](context, payload) {
      console.log("FILE:", payload)
      const response = await fetch(`${URL_BASE}/upload`, {
        method: 'POST',
        body: payload
      })

      const img = await response.json()

      if (img.length && img[0].id) {
        return img[0].id
      }
    },

    [Actions.PERFORM_ADD_ORGANISATION](context, payload) {

      console.log("Payload:", payload)
      const segmentId = context.state.segments.find(segment => segment.name === payload.segment)
      console.log("Hledám ID segmentu:", segmentId)

      const data = {
        ...payload,
        segment: segmentId.id
      }

      console.log("Snažím se o změnu segmentu na ID:", data);
      fetch(`${URL_BASE}/organisations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(organisation => console.log(organisation));
    },
    [Actions.PERFORM_RESULT_IDS]({ commit, state }) {
      const resultCategories = state.result
      let map = resultCategories.reduce((p, c) => {
        p[c] = (p[c] || 0) + 1;
        return p;
      }, {})

      const resultObject = Object.keys(map).map(item => {
        return {
          category: item,
          count: map[item],
          id: state.segments.find(segment => segment.key === item).id,
          icon: state.segments.find(segment => segment.key === item).icon,
          name: state.segments.find(segment => segment.key === item).name,
          description: state.segments.find(segment => segment.key === item).description
        }
      }).sort((a, b) => b.count - a.count).slice(0, 2)

      commit(Mutations.SET_RESULT_IDS, resultObject)
    },

  }
});

export default store;