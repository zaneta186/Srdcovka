<template>

    <v-container>
      <div class="result__header">

        <div class="result__header--text">
          <h1 class="result__title">Víme, pro co bije Tvoje <span class="heading__span">srdce</span>!</h1>
          <h2 class="result__subtitle">Seznam se se dvěma dobročinnými oblastmi, na kterých Ti skutečně záleží. V seznamu pod každou z nich najdeš organizace, které se v Tvém tématu aktivně angažují, a ilustrační příklady toho, jak by využili Tvou pravidelnou pomoc.</h2>
          <v-icon class="result__chevron" color="#ef6f6c" x-large>mdi-chevron-triple-down</v-icon>
        </div>

        <div class="result__header--circle">
          <img class="result__circle" src="./../assets/images/srdcovka-kolo.svg" alt="srdcovka strelka">
          
          <img class="result__needle" src="./../assets/images/srdcovka-strelka-only.svg" alt="srdcovka strelka">
        </div>

      </div>

        <div class="result__segments">

          <resultcard class="basis"
          v-bind:key="index"
          v-for="(sgm, index) in resultSegments"
          :segment="sgm"
          :show="show"
          :avatar="avatar"
          />

        </div> 

      

    </v-container>

</template>

<script>

import categoryDescript from './../assets/data/categoryDescript.js';
import organizace from './../assets/data/organizace';
import ResultCard from './../components/ResultCard.vue';
import {Actions, Mutations} from './../store'

export default {

  components: {
    resultcard: ResultCard,
  },

  data(){
    return{
      avatar: true,
      show: true,
    }
  },

  mounted(){
    this.$store.dispatch(Actions.PERFORM_RESULT_IDS)
   
  },

  computed:{
    segments(){
      return this.$store.getters.getSegments
    },    
    
    organisations(){
      return this.$store.getters.getOrganisations
    },

    resultSegments(){
      return this.$store.getters.getResultIds
    },

    resultPrice(){
      return this.$store.getters.getResultPrice
    },

 
    organizaceFiltered(){
      console.log(this.organisations.filter(organisation => organisation.segment === this.resultSegments[0].category))
      return this.organisations.filter(organisation => organisation.segment === this.resultSegments[0].category);
    },

  },


}
</script>

<style>

.result__title {
        margin: 5rem 0 4rem 0;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        font-size: 3rem;
        color: #a3333d;
}

.result__subtitle {
      margin-bottom: 5rem;
      text-align: center;
      font-weight: 300;
      font-size: 1.4rem;
      color: #00728f;
      line-height: 1.5;
    }

.result__chevron {
  margin-bottom: 4rem;
}

.cta {
        color: #00728f !important;
        font-weight: 500;
}

.result__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 1;
}

.result__header--circle {
  display: none;  
}


@media screen and (min-width: 600px) {

    .result__title {
        margin: 0 0 1rem 0;
        text-align: left;
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        font-size: 4rem;
        color: #a3333d;
        line-height: 1;
    }

    .result__subtitle {
      margin: 0 10rem 2rem 0;
      text-align: left;
      font-weight: 300;
      font-size: 1.5rem;
      color: #00728f;
      line-height: 1.5;
    }

    .result__segments {
      display: flex;
      margin-bottom: 20rem;
    }

    .result__header {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      text-align: left;
      position: relative;
      margin: 6rem 0 5rem 0;
    }

    .result__header--text {
      flex-basis: 50%;
    }

    .result__header--circle {
      display: block;
      flex-basis: 50%;
      position: relative;
    }

    .basis {
      flex-basis: 45%;
    }

    .result__circle {
      width: 100%;
      height: auto;
    }

    .result__needle{
      width: 100%;
      height: auto;
      position: absolute;
      left: 0;
      
    }

    .result__needle:hover {
        -webkit-transform: rotate(315deg);
        -webkit-transition: 1.5s;
    }

}


</style>