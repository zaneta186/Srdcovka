<template>

    <div>

         <v-navigation-drawer app absolute temporary v-model="menu">

            <v-list rounded>
                <v-subheader>MENU</v-subheader>
                    <v-list-item-group v-model="item" color="#ef6f6c">
                            <v-list-item
                            v-for="(item, i) in menuItems"
                            :key="i"
                            >
                            <v-list-item-content>
                                <v-list-item-title>{{item.nazev}}</v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                    </v-list-item-group>
            </v-list>

        </v-navigation-drawer>


        <v-app-bar fixed color="#f7f7f2" elevate-on-scroll>

            <v-app-bar-nav-icon x-large v-on:click="openDrawer"></v-app-bar-nav-icon>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-account</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-hand-heart</v-icon>
            </v-btn>

        </v-app-bar>

    </div>
  
</template>

<script>
export default {

    props: ['menuItems'],

    data(){
        return{
            menu:false,
        }
    },

    methods:{

        openDrawer(){
            this.menu = true;
        },
    }

}
</script>

<style>


</style>