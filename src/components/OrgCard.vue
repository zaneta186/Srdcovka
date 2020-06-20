<template>
  <v-container class="sticky">
    <div>
      <v-card v-if="chosen" class="mx-auto" max-width="600">
        <!-- <v-img
          class="white--text align-end"
          height="200px"
          :src="require(`./../assets/images/${chosen.picture}`)"
        >-->
        <v-card-title class="detail__title">{{chosen.title}}</v-card-title>
        <!-- </v-img> -->

        <v-card-subtitle class="pb-0">{{chosen.segment.name}}</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{chosen.description}}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="#00728f" text :href="chosen.website">Web</v-btn>

          <v-btn color="#a3333d" text :href="chosen.website">Darovat</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ["chosenId"],
  computed: {
    chosen() {
      return this.$store.getters.getSelectedOrganisationId;
    }
  }
};
</script>

<style>
.sticky {
  position: sticky;
  top: 60px;
}

.action__link {
  text-decoration: none;
  color: #a3333d !important;
}

.detail__title {
  font-size: 2em !important;
}
</style>