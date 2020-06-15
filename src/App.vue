<template>
  <v-app class="app">

    <navigace :menuItems="menuItems" />


    <router-view></router-view>


    <paticka :menuItems="menuItems" />

    
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
                {nazev: 'Organizace v naší databázy', link: '/organizace'},
                {nazev: 'Tvůj profil', link: '/profil'},
                {nazev: 'Spusť test', link: '/test'},
        ],
    }
  },
};
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.app  {
  background: linear-gradient(#f7f7f2, #f8f8ed)  !important;

    /* ZkOuška, jak by vypadalo pozadí s větší hloubkou/strukturou */

    /* background-image: url("assets/images/wall02.jpg") !important;
    background-repeat: no-repeat !important;
    background-attachment: fixed !important; */
}

.main {
  margin: 4rem 0 4rem 0;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.heading {
  color: #291F1E;
  margin-bottom: 3rem;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: 'Poppins', sans-serif;
  z-index: 2;
  background-color: #f7f7f2;
}

.gradient {
  position: absolute;
  top: -25px;
  width: 300px;
  height: 300px;
  border-radius: 50%;  
}

.heading__span {
  font-weight: 900;
  color: #a3333d;
}

.arrow {
  width: 0; 
  height: 0; 
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  border-top: 1.5rem solid #ef6f6c;
  margin: 1.5rem 0;
}

.text {
  color: #291F1E;
  margin: 0 10% 0 10%;
  font-size: 110%;
  font-weight: 300;
}

@media (min-width:600px) {

  .main {
    display: grid;
    max-height: 100vh;
    grid-template-columns: 40% 60%;
    grid-template-rows: repeat(4, 25%);
    column-gap: 2rem;
    align-items: center;
    margin: 20rem 0 20rem 0;
  }

  .heading {
    grid-column: 1;
    grid-row: 1/ span 4;
    width: 350px;
    height: 350px;
    margin:0;
    font-size: 150%;
  }

  .gradient {
    grid-column: 1;
    grid-row: 1/ span 4;
    width: 400px;
    height: 400px;
    position: static;
    align-self: center;
    transform: translate(-25px, 0);
    z-index: 1;
  }

  .arrow {
    display: none;
  }

  .text {
    grid-column: 2;
    grid-row: 1 / span 4;
    text-align: left;
    font-size: 125%;
    font-weight: 300;
  }

  
}

</style>
