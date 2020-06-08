<template>
  <v-content>

      <hero />
    
      <subject />

      <happiness />
    
  </v-content>
</template>

<script>
// @ is an alias to /src

import Hero from '@/components/Hero.vue';
import Subject from '@/components/Subject.vue';
import Happiness from '@/components/Happiness.vue';

export default {
  name: 'Home',
  components: {
    hero: Hero,
    subject: Subject,
    happiness: Happiness,
  }
}
</script>

<style>

</style>
