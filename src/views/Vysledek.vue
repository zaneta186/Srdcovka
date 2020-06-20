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

          <resultcard1 class="basis"
          :segment1="segment1"
          :organizaceFiltered1="organizaceFiltered1"
          :avatar="avatar"
          :show1="show1"
          />

          <resultcard2 class="basis"
          :segment2="segment2"
          :organizaceFiltered2="organizaceFiltered2"
          :avatar="avatar"
          :show2="show2"
          />

        </div> 

      

    </v-container>

</template>

<script>

import categoryDescript from './../assets/data/categoryDescript.js';
import organizace from './../assets/data/organizace';
import ResultCard1 from './../components/ResultCard1.vue';
import ResultCard2 from './../components/ResultCard2.vue';

export default {

  components: {
    resultcard1: ResultCard1,
    resultcard2: ResultCard2,
  },

  data(){
    return{
      segments: categoryDescript,
      organizace: organizace,
      avatar: true,
      show1: true,
      show2: true,
    }
  },

  computed:{

    // SEGMENT 1 A SEGMENT 2 POTŘEBUJI NAPOJIT NA VÝSLEDEK TESTU!!!

    segment1(){
      return this.segments[6];
    },

    segment2(){
      return this.segments[4];
    },

    // SEGMENT 1 A SEGMENT 2 POTŘEBUJI NAPOJIT NA VÝSLEDEK TESTU!!!

    organizaceFiltered1(){
      return organizace.filter(object => object.category === this.segment1.name);
    },

    organizaceFiltered2(){
      return organizace.filter(object => object.category === this.segment2.name);
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