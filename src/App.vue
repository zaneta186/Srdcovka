<template>
  <v-app class="app">

    <navigace v-bind:menuItems="menuItems" />


    <router-view></router-view>


    <paticka v-bind:menuItems="menuItems" />

    
  </v-app>
</template>

<script>
import Navigace from './components/Navigace.vue';
import Paticka from './components/Paticka.vue';

export default {
  name: 'App',

  components: {
    navigace: Navigace,
    paticka: Paticka,
  },

  data(){
    return{

            
            menuItems: [
                {nazev: 'O projektu', link: '#'},
                {nazev: 'Organizace v naší databázy', link: '#'},
                {nazev: 'Tvůj profil', link: '#'},
                {nazev: 'Spusť test', link: '/test'},
        ],
    }
  },
};
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  .app  {
    background-color: #f7f7f2 !important;
  }

</style>
