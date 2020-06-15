<template>
  <div class="wrapper">
      <circle-with-percent v-bind:id="data.id" />

      <router-link to="/"><cross /></router-link>   

      <div class="test">
          <div class="question">
            <p>{{data.description}}</p>
            <p>{{data.question}}</p>
          </div>  
          
          <router-link to="/test05">
            <div class="answers answers02">
              <div class="answer" 
                v-bind:key="index"
                v-for="(answer, index) in data.answers"
                v-on:click="pridejBod(answer.name)"                >
                  <img src="./../assets/images/logo.png" alt="logo" class="logo">
                  <button 
                  class="button button02 button04">
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
import Result from './../assets/data/result.js'

export default {

    components:{
        cross: Cross,
        circleWithPercent: CircleWithPercent,
    },

    data(){
        return{
            data: Data[3],
            result: Result[0],
        }
    },

    methods:{
        pridejBod(answer){
            const indexAns = this.data.answers.findIndex(ans => ans.name === answer )
            const arrayKategorieAns = this.data.answers[indexAns]['kategorie']
            for (const kategorieAnswer of arrayKategorieAns){
                this.result[kategorieAnswer] += 1
            }
            console.log(this.result)
        },
    },

}
</script>

<style scoped>
  .button02{
    width: 220px;
  }
</style>
