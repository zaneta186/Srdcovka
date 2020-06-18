<template>
  <div class="test">
      <div class="question">
        <p>{{question}}</p>
      </div>

         <div class="answers">
            <div class="slider">
                <v-card-text>
                    <v-slider
                        color="#f4f4efff"
                        track-fill-color="#ef6f6cff"
                        track-color="#f4f4efff"
                        v-model="prices"
                        :tick-labels="ticksLabels"
                        :max="3"
                        step="1"
                        ticks="always"
                        tick-size="3"
                    ></v-slider>
                </v-card-text>
            </div>
        </div>

        <router-link to="/vysledek">

           <div v-on:click="sendMaxPrice(ticksLabels[prices])">
               <next />
           </div>
        </router-link>
    </div>
</template>

<script>
import Next from '../components/TestNext.vue'

export default {
    props:['question', 'answers'],

    data(){
        return{
            categoriesAnswer: '',
            value: 0,
            prices: 0,
            ticksLabels: [
            '100 Kč',
            '300 Kč',
            '500 Kč',
            '800 Kč',
            ],
        }
    },


    components:{
      next: Next,
    },

    methods:{

        sendMaxPrice(price){
            this.$emit('addPrice', price)
        },
    }
}
</script>
