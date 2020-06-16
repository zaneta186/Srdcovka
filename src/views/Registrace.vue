<template>
  <div class="wrapper">
      <router-link to="/"><cross /></router-link>   
      <h6>Registrace</h6>
      <div class="registrationForm">
            <v-text-field
                v-model="username"
                color= "#a3333dff" 
                caret-color= "#a3333dff"
                label="Uživatelské jméno"
                :rules="[rulesemail.required]"
                outlined=""
            ></v-text-field>

            <v-text-field
                v-model="email"
                color= "#a3333dff" 
                caret-color= "#a3333dff"
                :rules="[rulesemail.required, rulesemail.email]"
                label="E-mail"
                outlined=""
            ></v-text-field>
       
            <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                color= "#a3333dff" 
                caret-color= "#a3333dff"
                label="Heslo"
                hint="Minimální počet znaků je 8."
                counter
                outlined=""
                @click:append="show1 = !show1"
            ></v-text-field>

            <v-text-field
                v-model="password2"
                :append-icon="show11 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show11 ? 'text' : 'password'"
                name="input-10-1"
                color= "#a3333dff" 
                caret-color= "#a3333dff"
                label="Ověřebá hesla"
                hint="Minimální počet znaků je 8."
                counter
                outlined=""
                @click:append="show11 = !show11"
            ></v-text-field>


           <v-subheader>Kolik chcete zasílat měsíčně Kč?</v-subheader>

            <v-range-slider
                v-model="range"
                :max="max"
                :min="min"
                hide-details
                class="align-center"
            >
            
                <template v-slot:prepend>
                <v-text-field
                    :value="range[0]"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 60px"
                    @change="$set(range, 0, $event)"
                ></v-text-field>
                </template>
                <template v-slot:append>
                <v-text-field
                    :value="range[1]"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 60px"
                    @change="$set(range, 1, $event)"
                ></v-text-field>
                </template>
            </v-range-slider>
            
        </div>
   
            
        <router-link to="/">
            <button class="redButton save">Uložit</button>
        </router-link>

      </div>

</template>

<script>
import Cross from '../components/Cross.vue'


export default {

    components:{
        cross: Cross,
    },

    data () {
      return {
        username: '',
        email: '',
        rulesemail: {
          required: value => !!value || 'Povinné pole.',
          counter: value => value.length <= 20 || 'Maximální počet znaků je 20',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Chybně zadaný e-mail.'
          },
        },
        show1: false,
        show11: false,
        password: '********',
        password2: '********',
        rules: {
          required: value => !!value || 'Povinné pole.',
          min: v => v.length >= 8 || 'Minimální počet znaků je 8',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },

        min: 0,
        max: 1500,
        slider: 50,
        range: [100, 300],
      }
    },
  }
</script>
