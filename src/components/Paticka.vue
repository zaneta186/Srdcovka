<template>
  
    <div>
        <v-footer color="#ef6f6c" padless>
            <v-row
                justify="center"
                no-gutters
                >
                <v-btn
                    v-for="(link, index) in menuItems"
                    :key="index"
                    color="#f7f7f2"
                    text
                    rounded
                    class="my-2"
                >
                    {{ link.nazev }}
                </v-btn>
                <v-col
                    class="lighten-2 py-4 text-center white--text"
                    cols="12"
                >
                    {{ new Date().getFullYear() }} — <strong>Srdcovka</strong>
                </v-col>
            </v-row>

        </v-footer>

    </div>

</template>

<script>
export default {

    props: ['menuItems'],


}
</script>

<style>

</style>