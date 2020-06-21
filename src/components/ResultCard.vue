<template>
  <div>
    <v-card class="mx-auto basis" color="#f7f7f2">
      <v-card-title>
        <v-icon large left color="#ef6f6c">{{segment.icon}}</v-icon>
        <span class="title font-weight-light" color="#291F1E">{{segment.name}}</span>
      </v-card-title>

      <v-card-text color="#291F1E">{{segment.description}}</v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-card-subtitle class="cta">Za Tvou věc se perou tyto organizace</v-card-subtitle>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-list :avatar="avatar">
            <v-item-group v-model="item" color="#ef6f6c" >
              <div v-for="(item, i) in organizaceFiltered" :key="i">
              <v-list-item>
                <v-list-item-avatar v-if="avatar">
                  <v-img :src="item.logo.url" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <div class="content-wrapper">
                    <div>
                      <h4>{{item.title}}</h4>

                      <div class="caption">{{item.help[price]}}</div>
                    </div>

                    <div class="result__odkazy">
                      <info-card v-bind:organisation="item"/>
                    </div>
                  </div>
                </v-list-item-content>
              </v-list-item>
              </div>
            </v-item-group>
          </v-list>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import { Actions, Mutations } from "./../store";
import InfoCard from './../components/InfoCard.vue'

export default {
  props: ["segment", "avatar", "show"],

  data() {
    return {
      icon: true,
      dialog: false
    };
  },

  components:{
    infoCard: InfoCard,
  },

  computed: {
    organisations() {
      console.log(this.$store.getters.getOrganisations);
      return this.$store.getters.getOrganisations;
    },

    price() {
      let resultPrice = this.$store.getters.getResultPrice;
      if (resultPrice === "300 Kč") {
        return "help300";
      } else if (resultPrice === "500 Kč") {
        return "help500";
      } else if (resultPrice === "800 Kč") {
        return "help800";
      }
    },

    organizaceFiltered() {
      console.log(
        this.organisations.filter(
          organisation => organisation.segment.id === this.segment.id
        )
      );
      return this.organisations.filter(
        organisation => organisation.segment.id === this.segment.id
      );
    }
  }
};
</script>

<style>
.content-wrapper {
  display: flex;
  justify-content: space-between;
}

.result__odkazy {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>