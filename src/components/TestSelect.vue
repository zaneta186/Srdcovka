<template>
  <div class="test">
    <div class="question">
      <p class="description">{{actualQuestion.description}}</p>
      <p>{{actualQuestion.question}}</p>
    </div>

    <div class="answers answers02">
      <div
        class="answer"
        v-bind:key="index"
        v-for="(answer, index) in actualQuestion.answers"
        v-bind:class="{answeroznacene: answer.check}"
        v-on:click="zmenStatus(index)"
      >
      

        <img
          v-if="answer.check"
          src="./../assets/images/logo.png"
          alt="logo"
          class="logo logooznacene"
        />
        <img src="./../assets/images/logo.png" alt="logo" class="logo" />
        <button
          class="button02"
          v-bind:class="{buttonOznaceny: answer.check}"
        >{{answer.answer}}</button>
      </div>
    </div>

    <div v-on:click="sendCategories">
      <next />
    </div>
  </div>
</template>

<script>
import Next from "../components/TestNext.vue";
export default {
  props: ["actualQuestion"],
  data() {
    return {
      categoriesAnswer: ""
    };
  },

  components: {
    next: Next
  },

  methods: {
    sendCategories() {
      const trueCount = this.actualQuestion.answers.reduce((acumulator, answer) => answer.check ? acumulator+1 : acumulator,0)
      const categoryAnswer = [];
      const trueAnswers = this.actualQuestion.answers.filter(answer => answer.check)
      if (trueCount < 6 && trueCount !== 0) {
        for (let answer of trueAnswers) {
          categoryAnswer.push(answer.category);         
        }
        console.log(categoryAnswer);
        this.$emit("addPoints", categoryAnswer);
      }
    },

    zmenStatus(index) {
      let checked = this.actualQuestion.answers.filter(answer => answer.check).length;
      if (checked < 5 || this.actualQuestion.answers[index].check === true) {
        this.actualQuestion.answers[index].check = !this.actualQuestion.answers[index].check;
      }
    }
  }
};
</script>

<style scoped>
</style>
