<template>
  <v-container>
        <v-card
        class="mx-auto"
        max-width="600">

                    <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="require(`./../assets/images/${organizace.picture}`)"
                    >
                    <v-card-title class="detail__title">{{organizace.title}}</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">{{organizace.category}}</v-card-subtitle>

                    <v-card-text class="text--primary">
                        <div>
                        {{organizace.description}}
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            color="#00728f"
                            text
                            :href="organizace.link"
                        >
                           Web 
                        </v-btn>

                        <v-btn
                            color="#a3333d"
                            text
                            :href="organizace.link"
                        >
                            Darovat
                        </v-btn>
                    </v-card-actions>
        </v-card>
  </v-container>
</template>

<script>
export default {

    props:['organizace'],

}
</script>

<style>

.detail__title {
    font-size: 1.2rem !important;
}

</style>