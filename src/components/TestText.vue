<template>
  <div class="test">
    <div class="question">
      <p class="question-description">{{actualQuestion.description}}</p>
      <p>{{actualQuestion.question}}</p>
    </div>
    <iframe v-if="actualQuestion.media && actualQuestion.media.type === 'video'" class="ytvideo" v-bind:src="actualQuestion.media.url"></iframe>
    <v-img v-if="actualQuestion.media && actualQuestion.media.type === 'image'"  v-bind:src="actualQuestion.media.url"></v-img>

    <div class="answers">
      <div
        class="answer"
        v-bind:key="answer.id"
        v-for="(answer) in actualQuestion.answers"
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
        <p>{{answer.answer}}</p>
      </div>
    </div>

    <div v-on:click="sendCategoriesAnswer">
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
    },
  }
};
</script>

<style>
</style>