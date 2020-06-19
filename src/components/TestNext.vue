<template>
  <div class="next">
    <div @mouseover="upHere = true" @mouseleave="upHere = false">
      <span v-show="!upHere">
        <v-icon color="#f4f4efff" size="100px">mdi-arrow-right-drop-circle-outline</v-icon>
      </span>
      <span v-show="upHere">
        <v-icon color="#f4f4efff" size="100px">mdi-arrow-right-drop-circle</v-icon>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upHere: false
    };
  },

  methods: {
    mouseOver() {
      this.active = !this.active;
    }
  }
};
</script>
