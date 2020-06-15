<template>
  <v-container>
        <v-card
        class="mx-auto"
        max-width="550">

                    <v-img
                    class="white--text align-end"
                    height="200px"
                    src="./../assets/images/clovekvtisni.jpg"
                    >
                    <v-card-title>{{chosen.title}}</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">{{chosen.category}}</v-card-subtitle>

                    <v-card-text class="text--primary">
                        <div>
                        {{chosen.description}}
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            color="#00728f"
                            text
                        >
                           <a :href="chosen.link">Web</a> 
                        </v-btn>

                        <v-btn
                            color="#a3333d"
                            text
                        >
                            Darovat
                        </v-btn>
                    </v-card-actions>
        </v-card>
  </v-container>
</template>

<script>
export default {

    props:['chosen']

}
</script>

<style>

</style>