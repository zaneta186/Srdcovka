<template>
  <div class="test">
    <div class="question">
      <p class="description">{{description}}</p>
      <p>{{question}}</p>
    </div>
    <iframe v-if="url !== ''" class="ytvideo" v-bind:src="url"></iframe>

    <div class="answers">
      <div
        class="answer"
        v-bind:key="index"
        v-for="(answer,index) in answers"
        v-bind:class="{answeroznacene: answer.check}"
        v-on:click="changeResultCategories(answer.category, index)"
      >
        <img
          v-if="answer.check"
          src="./../assets/images/logo.png"
          alt="logo"
          class="logo logooznacene"
        />
        <img src="./../assets/images/logo.png" alt="logo" class="logo" />
        <p>{{answer.name}}</p>
      </div>
    </div>

    <div v-on:click="sendCategoriesAnswer(categoriesAnswer)">
      <next />
    </div>
  </div>
</template>

<script>
import Next from "../components/TestNext.vue";

export default {
  props: ["question", "description", "answers", "url"],

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
      if (this.answers.filter(answer => answer.check).length !== 0) {
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
    },

    changeResultCategories(categories, index) {
      this.categoriesAnswer = categories;
      this.changeStatus(index);
    }
  }
};
</script>

<style>
</style>