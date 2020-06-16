<template>
  <div class="wrapper">
      <circle-with-percent v-bind:id="data.id" />
      <router-link to="/"><cross /></router-link>   

      <div class="test">
          <div class="question">
            <p>{{data.description}}</p>
            <p>{{data.question}}</p>
          </div>  

          <div class="answers"
            v-bind:key="index"
            v-for="(category, index) in getResultCategory"
            >
            <div class="titleCategory">{{category.title}}</div>
            <div class="descriptCategory">{{category.description}}</div>
           </div>


            <div class="registrationWrapper">
                <p class="registrationDescript">Ulož si své výsledky a zjisti, které neziskové organizace se k tobě hodí.</p>
            </div>
            <router-link to="/registrace">
                <button class="redButton">Registrace</button>
            </router-link>
      </div>

  </div>
</template>

<script>
import Cross from '../components/Cross.vue'
import CircleWithPercent from '../components/CircleWithPercent.vue'
import Data from './../assets/data/data.js';
import Result from './../assets/data/result.js'
import CategoryDescript from './../assets/data/categoryDescript.js'
import TitleCategory from './../assets/data/titleCategory.js'

export default {

    components:{
        cross: Cross,
        circleWithPercent: CircleWithPercent,
    },

    data(){
        return{
            data: Data[8],
            result: Result[0],
            categoryDescript: CategoryDescript[0],
            titleCategory: TitleCategory[0]
        }
    },

    computed:{
        getResultCategory(){
            let list = this.result
            let keysSorted = Object.keys(list).sort(function(a,b){return list[b]-list[a]})
            let descriptCategory = this.categoryDescript
            let title = this.titleCategory

            return [{title: title[keysSorted[0]],description: descriptCategory[keysSorted[0]]}, {title: title[keysSorted[1]],description: descriptCategory[keysSorted[1]]}]
        },
        },
    

}
</script>
