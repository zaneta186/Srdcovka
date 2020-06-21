<template>
  <div class="test">
    <div class="question">
      <p class="question-description">{{actualQuestion.description}}</p>
      <p>{{actualQuestion.question}}</p>
    </div>

    <div class="answers answers02">
      <div
        class="answer"
        v-bind:key="index"
        v-for="(answer, index) in actualQuestion.answers"
        v-bind:class="{answeroznacene: answer.check}"
        v-on:click="changeStatus(answer.id)"
      >


        <img
          v-if="answer.check"
          src="./../assets/images/logo.png"
          alt="logo"
          class="logo logooznacene"
        />
        <img src="./../assets/images/logo.png" alt="logo" class="logo" />
        <button
          class="button button02"
          v-bind:class="{buttonOznaceny: answer.check}"
        >{{answer.answer}}</button>

      </div>
    </div>

    <div v-on:click="sendCategoriesAnswer()">
      <next />
    </div>
  </div>
</template>

<script>
import Next from "../components/TestNext.vue";
export default {
  props: ["actualQuestion"],

  components: {
    next: Next
  },

  methods: {
    sendCategoriesAnswer() {
      const selectedAnswer = this.actualQuestion.answers.find(answer => answer.check)
      if (selectedAnswer) {
        this.$emit("addPoints", selectedAnswer.category);
      }
    },

    changeStatus(id) {
      const curr = this.actualQuestion.answers.find(answer => answer.id === id)
      if (curr.check === true) {
        curr.check = !curr.check;
      } else {
        for (let answer of this.actualQuestion.answers) {
          answer.check = false;
        }
        curr.check = !curr.check;
      }
    }
  }
};
</script>
