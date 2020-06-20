<template>
  <v-content>

    <div>

      <hero />
    
      <subject />

      <happiness />

      <czechia />

      <ngos />

    </div>
    
  </v-content>
</template>

<script>
// @ is an alias to /src

import Hero from '@/components/Hero.vue';
import Subject from '@/components/Subject.vue';
import Happiness from '@/components/Happiness.vue';
import Czechia from '@/components/Czechia.vue';
import Ngos from '@/components/Ngos.vue';

export default {
  name: 'Home',
  components: {
    hero: Hero,
    subject: Subject,
    happiness: Happiness,
    czechia: Czechia,
    ngos: Ngos,
  }
}
</script>

<style>



</style>
