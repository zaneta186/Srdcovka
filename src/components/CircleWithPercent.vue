<template>
  <div>
    <div class="circle">
      <div class="outCircle">
        <div class="inCircle">{{Math.round((indexQuestion)/questions.length*100)}} %</div>
      </div>
    </div>
  </div>
</template>


<script>
import { Mutations, Actions } from "./../store";

export default {
  props: ["actualQuestion", "questions"],

  computed: {

    indexQuestion() {
      const index = this.questions.findIndex(
        question => question.id === this.actualQuestion.id
      );
      if (index === this.questions.length-1) {
        return this.questions.length;
      } else {
        return index;
      }
    },

  }
};
</script>
