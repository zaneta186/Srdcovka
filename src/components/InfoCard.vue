<template>
  <v-dialog v-model="dialog" max-width="600"> 
    <template v-slot:activator="{on, attrs}">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon color="#ef6f6c">mdi-information</v-icon>
      </v-btn>
    </template>

    <v-card class="mx-auto shadow" max-width="600">
      <v-img class="white--text align-end" height="200px" :src="organisation.picture.url">
        <v-card-title class="detail__title">{{organisation.title}}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">{{organisation.segment.name}}</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{organisation.description}}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="#00728f" text :href="organisation.website" target="_blank">Web</v-btn>

        <v-btn color="#a3333d" text :href="organisation.website" target="_blank">Darovat</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    props:["organisation"]
};
</script>

<style>
</style>