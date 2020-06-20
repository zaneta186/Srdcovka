<template>
  <div class="test">
    <div class="question">
      <p class="description">{{description}}</p>
      <p>{{question}}</p>
    </div>

    <div class="answers answers02">
      <div
        class="answer"
        v-bind:key="index"
        v-for="(answer, index) in answers"
        v-bind:class="{answeroznacene: answer.check}"
        v-on:click="changeStatus(index)"
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
        >{{answer.name}}</button>
      </div>
    </div>

    <div v-on:click="sendCategoriesAnswer(answers.filter(answer => answer.check))">
      <next />
    </div>
  </div>
</template>

<script>
import Next from "../components/TestNext.vue";
export default {
  props: ["question", "description", "answers"],
  data() {
    return {
      categoriesAnswer: ""
    };
  },

  components: {
    next: Next
  },

  methods: {
    sendCategoriesAnswer(categoryAnswer) {
      if (categoryAnswer.length !== 0) {
        this.$emit("addPoints", categoryAnswer);
      }
    },

    changeStatus(index) {
      if (this.answers[index].check === true) {
        this.answers[index].check = !this.answers[index].check;
      } else {
        for (let answer of this.answers) {
          answer.check = false;
        }
        this.answers[index].check = !this.answers[index].check;
      }
    }
  }
};
</script>

<style scoped>
</style>
