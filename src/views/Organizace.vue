<template>
  <v-container>
    <h1 class="organisations__title">Naši neziskoví partneři</h1>

    <div class="organisations__desktop">
      <div class="organisations__list">
        <v-list :two-line="twoLine" :avatar="avatar">
          <v-subheader>
            <v-btn to="/registrace-organizace" color="#ef6f6c" dark rounded>
              <v-icon>mdi-plus</v-icon>Přidej svou organizaci
            </v-btn>
          </v-subheader>

          <v-list-item-group v-model="item" color="#ef6f6c">
            <v-list-item
              v-for="(item, i) in organisations"
              :key="i"
              @click="chooseOrganisation(item.id)"
            >
              <v-list-item-avatar v-if="item.logo">
                <v-img :src="item.logo.url" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-if="twoLine || threeLine" v-html="item.segment.name"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>

      <div class="organisations__detail">
        <orgcard :chosenId="selectedOrganisation" />
      </div>
    </div>

    <div class="organisations__mobile">
      <v-btn large to="/registrace-organizace" color="#00728f" dark rounded small class="addOrg">
        <v-icon>mdi-plus</v-icon>Přidej svou organizaci
      </v-btn>

      <orgcardmobile v-for="(item, i) in organisations" :key="i" :organizace="item" />
    </div>
  </v-container>
</template>

<script>
import OrgCard from "./../components/OrgCard.vue";
import organizace from "./../assets/data/organizace.js";
import OrgCardMobile from "./../components/OrgCardMobile.vue";
import { Mutations } from "./../store";

export default {
  components: {
    orgcard: OrgCard,
    orgcardmobile: OrgCardMobile
  },

  methods: {
    chooseOrganisation(id) {
      this.$store.commit(Mutations.SET_SELECTED_ORGANISATION, id);
    }
  },

  computed: {
    organisations() {
      return this.$store.getters.getOrganisations;
    },

    selectedOrganisation() {
      return this.$store.getters.getSelectedOrganisationId;
    }

    // organizaceSorted(){
    //     return this.organizace.sort((a,b) => {
    //         let x = a.title.toLowerCase();
    //         let y = b.title.toLowerCase();
    //         if (x < y) {
    //             return -1;
    //             }
    //         if (x > y) {
    //             return 1;}
    //         return 0;
    //     });
    // }
  },

  data() {
    return {
      twoLine: true,
      avatar: true,
      indexOrg: 0,
      organizace: organizace
    };
  }
};
</script>

<style>

.organisations__desktop {
  display: none;
}

.organisations__title {
  margin: 4rem 0 2rem 0;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-size: 2rem;
  color: #a3333d;
}

@media screen and (min-width: 600px) {
  .organisations__mobile {
    display: none;
  }

  .organisations__title {
    margin: 6rem 0 4rem 0;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-size: 4rem;
    color: #a3333d;
  }

  .organisations__desktop {
    display: flex;
  }

  .organisations__list {
    margin: 0 0 4rem 0;
    flex-basis: 30%;
  }

  .organisations__detail {
    flex-basis: 70%;
  }
}
</style>
