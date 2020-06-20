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
        >{{answer.name}}</button>
      </div>
    </div>

    <div v-on:click="sendCategories(answers.filter(answer => answer.check))">
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
    sendCategories(answers) {
      const categoryAnswer = [];
      if (answers.length < 6 && answers.length !== 0) {
        for (let answer of answers) {
          let listcategories = answer.category;
          for (let category of listcategories) {
            categoryAnswer.push(category);
          }
        }
        console.log(categoryAnswer);
        this.$emit("addPoints", categoryAnswer);
      }
    },

    zmenStatus(index) {
      let checked = this.answers.filter(answer => answer.check === true).length;
      if (checked < 5 || this.answers[index].check === true) {
        this.answers[index].check = !this.answers[index].check;
      }
    }
  }
};
</script>

<style scoped>
</style>
