<template>

    <v-container>

      <h1 class="result__title">Tvé srdce bije pro...</h1>

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
      return this.segments[1];
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

  }


}
</script>

<style>

.result__title {
        margin: 4rem 0 2rem 0;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        font-size: 2rem;
        color: #a3333d;
    }

.cta {
        color: #00728f !important;
        font-weight: 500;
}

@media screen and (min-width: 600px) {

    .result__title {
        margin: 6rem 0 4rem 0;
        text-align: left;
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        font-size: 4rem;
        color: #a3333d;
    }

    .result__segments {
      display: flex;
      margin-bottom: 20rem;
    }

    .basis {
      flex-basis: 45%;
    }

}


</style>