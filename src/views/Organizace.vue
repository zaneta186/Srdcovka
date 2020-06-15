<template>
  <v-container>

    <h1 class="organisations__title">Naši neziskoví partneři</h1>

    <div class="organisations">

        <div class="organisations__list">

            <v-list
            :two-line="twoLine"
            :avatar="avatar"
            >

                <v-list-item-group v-model="item" color="#ef6f6c">
                
                    <v-list-item
                    v-for="(item, i) in organizace"
                    :key="i"
                    @click="showDetail(i)"
                    >

                        <v-list-item-avatar v-if="avatar">
                            <v-icon>mdi-hand</v-icon>
                        <!-- <v-img :src="require(`./../assets/images/${item.avatar}.jpg`)"></v-img> -->
                        </v-list-item-avatar>

                        <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle v-if="twoLine || threeLine" v-html="item.category"></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                </v-list-item-group>

            </v-list>
        </div>

        <div class="organisations__detail">

            <orgcard 
            :chosen="chosen"
            
            />

        </div>

    </div>

  </v-container>
</template>

<script>

import OrgCard from './../components/OrgCard.vue';

export default {

    components: {
        orgcard: OrgCard,
    },

    methods:{
        showDetail(i){
            this.indexOrg = i;
        }
    },

    computed: {

        chosen(){
            return this.organizace[this.indexOrg];
        }

    },

    data(){
        return{

            twoLine: true,
            avatar: true,
            indexOrg: 0,

            organizace: [

                {id: 1, title: 'Člověk v tísni', category: 'Humanitární a rozvojová pomoc', description: 'Člověk v tísni poskytuje okamžitou humanitární pomoc lidem v nouzi při přírodních katastrofách nebo ve válečných krizích. Zároveň se zaměřuje na dlouhodobou pomoc lidem žijícím v chudobě a špatných životních podmínkách. V zemích Afriky, Asie a Evropy realizuje rozvojové programy, které se snaží zlepšit přístup obyvatel ke vzdělání, zdravotní péči, dostupnost pitné vody, dodržování hygieny, rozvoj místních zdrojů obživy i zapojení lidí do procesů ovlivňujících dění v jejich zemi. Za dvacet pět let činnosti realizovala společnost Člověk v tísni humanitární a rozvojovou pomoc ve více než 40 zemích.', avatar: 'org_logo_01', link: 'https://www.clovekvtisni.cz/', picture: './../assets/images/clovekvtisni.jpg'},
                {id: 2, title: 'Lékaři bez hranic', category: 'Humanitární a rozvojová pomoc', description: 'Lékaři bez hranic / Médecins Sans Frontières jsou nezávislá mezinárodní humanitární organizace, která poskytuje rychlou a profesionální zdravotnickou pomoc lidem postiženým válkami, epidemiemi a přírodními katastrofami či lidem vyloučeným ze zdravotní péče. Naši spolupracovníci působí ve více než 70 zemích světa. Poskytují v nich primární a sekundární zdravotní péči, operují raněné, léčí podvyživené děti a pacienty postižené infekčními či opomíjenými nemocemi, provádějí očkovací kampaně, zajišťují mateřskou a porodní péči, přinášejí psychologickou pomoc obětem násilí nebo školí místní personál.', avatar: 'org_logo_02', link: 'https://www.lekari-bez-hranic.cz/', picture: './../assets/images/lekaribezhranic.jpg'},
                {id: 3, title: 'Člověk v tísni', category: 'Humanitární a rozvojová pomoc', description: 'Člověk v tísni poskytuje okamžitou humanitární pomoc lidem v nouzi při přírodních katastrofách nebo ve válečných krizích. Zároveň se zaměřuje na dlouhodobou pomoc lidem žijícím v chudobě a špatných životních podmínkách. V zemích Afriky, Asie a Evropy realizuje rozvojové programy, které se snaží zlepšit přístup obyvatel ke vzdělání, zdravotní péči, dostupnost pitné vody, dodržování hygieny, rozvoj místních zdrojů obživy i zapojení lidí do procesů ovlivňujících dění v jejich zemi. Za dvacet pět let činnosti realizovala společnost Člověk v tísni humanitární a rozvojovou pomoc ve více než 40 zemích.', avatar: 'org_logo_01', link: 'https://www.clovekvtisni.cz/', picture: './../assets/images/clovekvtisni.jpg'},
                {id: 4, title: 'Člověk v tísni', category: 'Humanitární a rozvojová pomoc', description: 'Člověk v tísni poskytuje okamžitou humanitární pomoc lidem v nouzi při přírodních katastrofách nebo ve válečných krizích. Zároveň se zaměřuje na dlouhodobou pomoc lidem žijícím v chudobě a špatných životních podmínkách. V zemích Afriky, Asie a Evropy realizuje rozvojové programy, které se snaží zlepšit přístup obyvatel ke vzdělání, zdravotní péči, dostupnost pitné vody, dodržování hygieny, rozvoj místních zdrojů obživy i zapojení lidí do procesů ovlivňujících dění v jejich zemi. Za dvacet pět let činnosti realizovala společnost Člověk v tísni humanitární a rozvojovou pomoc ve více než 40 zemích.', avatar: 'org_logo_01', link: 'https://www.clovekvtisni.cz/', picture: './../assets/images/clovekvtisni.jpg'},
                {id: 5, title: 'Člověk v tísni', category: 'Humanitární a rozvojová pomoc', description: 'Člověk v tísni poskytuje okamžitou humanitární pomoc lidem v nouzi při přírodních katastrofách nebo ve válečných krizích. Zároveň se zaměřuje na dlouhodobou pomoc lidem žijícím v chudobě a špatných životních podmínkách. V zemích Afriky, Asie a Evropy realizuje rozvojové programy, které se snaží zlepšit přístup obyvatel ke vzdělání, zdravotní péči, dostupnost pitné vody, dodržování hygieny, rozvoj místních zdrojů obživy i zapojení lidí do procesů ovlivňujících dění v jejich zemi. Za dvacet pět let činnosti realizovala společnost Člověk v tísni humanitární a rozvojovou pomoc ve více než 40 zemích.', avatar: 'org_logo_01', link: 'https://www.clovekvtisni.cz/', picture: './../assets/images/clovekvtisni.jpg'},
                {id: 6, title: 'Člověk v tísni', category: 'Humanitární a rozvojová pomoc', description: 'Člověk v tísni poskytuje okamžitou humanitární pomoc lidem v nouzi při přírodních katastrofách nebo ve válečných krizích. Zároveň se zaměřuje na dlouhodobou pomoc lidem žijícím v chudobě a špatných životních podmínkách. V zemích Afriky, Asie a Evropy realizuje rozvojové programy, které se snaží zlepšit přístup obyvatel ke vzdělání, zdravotní péči, dostupnost pitné vody, dodržování hygieny, rozvoj místních zdrojů obživy i zapojení lidí do procesů ovlivňujících dění v jejich zemi. Za dvacet pět let činnosti realizovala společnost Člověk v tísni humanitární a rozvojovou pomoc ve více než 40 zemích.', avatar: 'org_logo_01', link: 'https://www.clovekvtisni.cz/', picture: './../assets/images/clovekvtisni.jpg'},
                {id: 7, title: 'Člověk v tísni', category: 'Humanitární a rozvojová pomoc', description: 'Člověk v tísni poskytuje okamžitou humanitární pomoc lidem v nouzi při přírodních katastrofách nebo ve válečných krizích. Zároveň se zaměřuje na dlouhodobou pomoc lidem žijícím v chudobě a špatných životních podmínkách. V zemích Afriky, Asie a Evropy realizuje rozvojové programy, které se snaží zlepšit přístup obyvatel ke vzdělání, zdravotní péči, dostupnost pitné vody, dodržování hygieny, rozvoj místních zdrojů obživy i zapojení lidí do procesů ovlivňujících dění v jejich zemi. Za dvacet pět let činnosti realizovala společnost Člověk v tísni humanitární a rozvojovou pomoc ve více než 40 zemích.', avatar: 'org_logo_01', link: 'https://www.clovekvtisni.cz/', picture: './../assets/images/clovekvtisni.jpg'},
                {id: 8, title: 'Člověk v tísni', category: 'Humanitární a rozvojová pomoc', description: 'Člověk v tísni poskytuje okamžitou humanitární pomoc lidem v nouzi při přírodních katastrofách nebo ve válečných krizích. Zároveň se zaměřuje na dlouhodobou pomoc lidem žijícím v chudobě a špatných životních podmínkách. V zemích Afriky, Asie a Evropy realizuje rozvojové programy, které se snaží zlepšit přístup obyvatel ke vzdělání, zdravotní péči, dostupnost pitné vody, dodržování hygieny, rozvoj místních zdrojů obživy i zapojení lidí do procesů ovlivňujících dění v jejich zemi. Za dvacet pět let činnosti realizovala společnost Člověk v tísni humanitární a rozvojovou pomoc ve více než 40 zemích.', avatar: 'org_logo_01', link: 'https://www.clovekvtisni.cz/', picture: './../assets/images/clovekvtisni.jpg'},
                {id: 9, title: 'Člověk v tísni', category: 'Humanitární a rozvojová pomoc', description: 'Člověk v tísni poskytuje okamžitou humanitární pomoc lidem v nouzi při přírodních katastrofách nebo ve válečných krizích. Zároveň se zaměřuje na dlouhodobou pomoc lidem žijícím v chudobě a špatných životních podmínkách. V zemích Afriky, Asie a Evropy realizuje rozvojové programy, které se snaží zlepšit přístup obyvatel ke vzdělání, zdravotní péči, dostupnost pitné vody, dodržování hygieny, rozvoj místních zdrojů obživy i zapojení lidí do procesů ovlivňujících dění v jejich zemi. Za dvacet pět let činnosti realizovala společnost Člověk v tísni humanitární a rozvojovou pomoc ve více než 40 zemích.', avatar: 'org_logo_01', link: 'https://www.clovekvtisni.cz/', picture: './../assets/images/clovekvtisni.jpg'},
                {id: 10, title: 'Člověk v tísni', category: 'Humanitární a rozvojová pomoc', description: 'Člověk v tísni poskytuje okamžitou humanitární pomoc lidem v nouzi při přírodních katastrofách nebo ve válečných krizích. Zároveň se zaměřuje na dlouhodobou pomoc lidem žijícím v chudobě a špatných životních podmínkách. V zemích Afriky, Asie a Evropy realizuje rozvojové programy, které se snaží zlepšit přístup obyvatel ke vzdělání, zdravotní péči, dostupnost pitné vody, dodržování hygieny, rozvoj místních zdrojů obživy i zapojení lidí do procesů ovlivňujících dění v jejich zemi. Za dvacet pět let činnosti realizovala společnost Člověk v tísni humanitární a rozvojovou pomoc ve více než 40 zemích.', avatar: 'org_logo_01', link: 'https://www.clovekvtisni.cz/', picture: './../assets/images/clovekvtisni.jpg'},

            ]
        }
    }

}
</script>

<style>

    .organisations__title {
        margin: 8rem 0 4rem 0;
        text-align: left;
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        font-size: 2em;
    }

    .organisations {
        display: flex;
    }

    .organisations__list {
        margin: 0 0 4rem 0;
        flex-basis: 30%;
    }

    .organisations__detail {
        flex-basis: 70%;
    }

</style>