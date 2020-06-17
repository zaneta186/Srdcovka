<template>
  
  <v-card
              class="mx-auto basis"
              color="#f7f7f2"
              >

                <v-card-title>
                  <v-icon
                    large
                    left
                    color="#ef6f6c"
                  >
                    {{segment2.icon}}
                  </v-icon>
                  <span class="title font-weight-light" color="#291F1E">{{segment2.name}}</span>
                  
                </v-card-title>

                <v-card-text color="#291F1E">
                  {{segment2.description}}
                </v-card-text>

                <v-card-actions>

                  <v-spacer></v-spacer>
                    <v-card-subtitle class="cta">Za Tvou věc se perou tyto organizace</v-card-subtitle>
                  <v-btn
                    icon
                    @click="show2 = !show2"
                  >
                    <v-icon>{{ show2 ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show2">
                      <v-divider></v-divider>

                      <v-list
                          :avatar="avatar">

                            <v-item-group v-model="item" color="#ef6f6c">

                                  <v-list-item v-for="(item, i) in organizaceFiltered2" :key="i" :href="item.link">

                                      <v-list-item-avatar v-if="avatar">
                                          
                                          <v-img :src="require(`./../assets/images/${item.avatar}`)" />

                                      </v-list-item-avatar>

                                      <v-list-item-content>
                                      <v-list-item-title v-html="item.title"></v-list-item-title>
                                      </v-list-item-content>

                                  </v-list-item>

                            </v-item-group>

                      </v-list>

                    </div>
                </v-expand-transition>
                
            </v-card>
</template>

<script>
export default {

    props: ['segment2', 'organizaceFiltered2', 'avatar', 'show2'],

}
</script>

<style>

</style>