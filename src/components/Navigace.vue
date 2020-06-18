<template>

    <div class="navigace">

         <v-navigation-drawer app absolute temporary v-model="menu">

            <v-list rounded>
                <v-subheader>MENU</v-subheader>
                    <v-list-item-group v-model="item" color="#ef6f6c">
                            <v-list-item
                            v-for="(item, i) in menuItems"
                            :key="i"
                            :to="item.link">
                            <v-list-item-content>
                                <v-list-item-title>{{item.nazev}}</v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                    </v-list-item-group>
            </v-list>

        </v-navigation-drawer>


        <v-app-bar app fixed color="#f7f7f2" elevate-on-scroll>

            <router-link to="/"><v-img src="@/assets/images/logo-srdcovka.svg" max-height="40" max-width="40" contain></v-img></router-link>

            <v-spacer></v-spacer>

            <ul class="bar__menu--desktop">
                <li v-for="(item,i) in menuItems" v-bind:key="i"><router-link class="bar__menu--desktop--link" v-bind:to="`${item.link}`">{{item.nazev}}</router-link></li>
            </ul>
 
            <div class="icons-mobile">
            

            <v-app-bar-nav-icon x-large v-on:click="openDrawer"></v-app-bar-nav-icon>
            </div>
            

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

.bar__menu--desktop {
    display: none;
}


@media (min-width: 600px){

    .icons-mobile {
        display: none;
    }

    .bar__menu--desktop {
        display: block;
    }

    .bar__menu--desktop li {
        display: inline-block;
        text-decoration: none;
        margin-right: 2rem;
        font-weight:500;
        color: #291F1E;
    }

    .bar__menu--desktop--link {
        text-decoration: none;
        color: #00728f !important;
        border: 1px solid transparent;
        padding: 5px;
    }

    .bar__menu--desktop--link:hover {
        border: 1px solid #00728f;
        border-radius: 5px;
        padding: 5px;
    }
}



</style>