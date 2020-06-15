<template>
  <div class="wrapper">
      <circle-with-percent v-bind:id="data.id" />
      <router-link to="/"><cross /></router-link>   

      <div class="test">
          <div class="question">
            <p>{{data.description}}</p>
            <p>{{data.question}}</p>
          </div>  

        <router-link to="/test06">
          <div class="answers">
            <div 
            class="answer"
            v-bind:key="id"
            v-for="(answer,id) in data.answers">
              <img src="./../assets/images/logo.png" alt="logo" class="logo">
              <button class="button button08" >{{answer.name}}</button>
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
            data: Data[4],
        }
    },

}
</script>

<style>

</style>
