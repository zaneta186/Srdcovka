<template>
  <div class="wrapper">
      <circle-with-percent v-bind:id="data.id" />

      <router-link to="/"><cross /></router-link>   

      <div class="test">
          <div class="question">
            <p>{{data.description}}</p>
            <p>{{data.question}}</p>
          </div>  
          
          <router-link to="/test03">
            <div class="answers answers02">
              <div class="answer" 
                v-bind:key="index"
                v-for="(answer, index) in data.answers"
                v-bind:class="{logooznacene: answer.check}" 
                v-on:click="zmenStatus(index)"
                >
                  <img src="./../assets/images/logo.png" alt="logo" class="logo">
                  <button 
                  class="button button02">
                  {{answer.name}}</button>
              </div>
            </div>
          </router-link>

        </div>
    </div>

</template>

<script>
import Cross from '../components/Cross.vue'
import CircleWithPercent from '../components/CircleWithPercent.vue'
import Data from './../assets/data/data.js';

export default {
    components:{
        cross: Cross,
        circleWithPercent: CircleWithPercent,
    },

    data(){
        return{
            data: Data[1],
            continueToTest03: false,
        }
    },

    methods:{
         zmenStatus(index){
            let checked = this.data.answers.filter(answer => answer.check === true).length
            if (checked < 5 || this.data.answers[index].check === true){
             this.data.answers[index].check = !this.data.answers[index].check;}
            if (checked === 5){
              this.continueToTest03 = true
            }
      
        },
    }
}
</script>

<style scoped>
  .logooznacene{
    background-color: aquamarine;
    opacity: 1
  }


</style>
