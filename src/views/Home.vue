<template>
  <v-content>

      <hero />
      <tema />
    
  </v-content>
</template>

<script>
// @ is an alias to /src

import Hero from '@/components/Hero.vue';
import Tema from '@/components/Tema.vue';

export default {
  name: 'Home',
  components: {
    hero: Hero,
    tema: Tema,
    
  }
}
</script>

<style>

</style>
