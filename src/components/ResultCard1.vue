<template>
  <div>
    <v-card class="mx-auto basis" color="#f7f7f2">
      <v-card-title>
        <v-icon large left color="#ef6f6c">{{segment1.icon}}</v-icon>
        <span class="title font-weight-light" color="#291F1E">{{segment1.name}}</span>
      </v-card-title>

      <v-card-text color="#291F1E">{{segment1.description}}</v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-card-subtitle class="cta">Za Tvou věc se perou tyto organizace</v-card-subtitle>
        <v-btn icon @click="show1 = !show1">
          <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show1">
          <v-divider></v-divider>

          <v-list :avatar="avatar">
            <v-item-group v-model="item" color="#ef6f6c">
              <v-list-item v-for="(item, i) in organizaceFiltered1" :key="i">
                <v-list-item-avatar v-if="avatar">
                  <v-img :src="require(`./../assets/images/${item.avatar}`)" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <div class="content-wrapper">
                    <div>

                      <h4>{{item.title}}</h4>
                      <div class="caption">{{item.help1}}</div>

                    </div>

                    <div class="result__odkazy">
                      <v-btn icon> <v-icon color="#ef6f6c">mdi-information</v-icon></v-btn>
                      <v-btn icon :href="item.link" target="_blank"> <v-icon color="#a3333d">mdi-web</v-icon></v-btn>
                    </div>

                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-item-group>
          </v-list>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["segment1", "organizaceFiltered1", "avatar", "show1"],

  data(){
    return{
      icon: true,
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