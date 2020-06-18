<template>
  <v-container>
      <div class="registration__org">

        <h1 class="registration__org__title">Aby Vás srdcaři našli</h1>
        <p class="registration__org__subtitle">Po zaregistrování do naší databáze bude Vaše organizace zařazena do výsledků individuálních testů. Zvýšíte tak pravděpodobnost, že se některý ze srdcařů rozhodne pravidelně přispívat právě na Vaši věc.<br><br>Vyplněním formuláře se pod svým uživatelským jménem a heslem zaregistrujete do našeho systému, informace o Vaší organizaci tak budete moci kdykoliv aktualizovat.</p>

        <v-form
        ref="form"
        v-model="valid"
        :lazy-validation="lazy">

            <v-text-field
                color="#00728f"
                v-model="name"
                :counter="50"
                :rules="nameRules"
                label="Jméno organizace"
                required></v-text-field>

            <v-text-field
                color="#00728f"
                v-model="link"
                label="Adresa webové stránky organizace"
                required></v-text-field>

            <v-select
                color="#00728f"
                v-model="category"
                :items="items"
                :rules="[v => !!v || 'Musíte vybrat jednu z možností']"
                label="Vyberte neziskový segment, v němž působíte"
                required></v-select>

            <v-textarea
                color="#00728f"
                v-model="description"
                :counter="1000"
                :auto-grow="autoGrow"
                :clearable="clearable"
                label="Reprezentativní popis organizace"
                :outlined="outlined"
                placeholder="Posláním naší neziskovky je..."
                rows="10"></v-textarea>

            <v-textarea
                color="#00728f"
                v-model="concreteHelp01"
                :counter="170"
                :auto-grow="autoGrow"
                :clearable="clearable"
                label="Ilustrační příklad: Specifikujte, prosím, jak konkrétně může Vaše organizace využít měsíční příspěvek v hodnotě maximálně 300 Kč:"
                :outlined="outlined"
                placeholder="300 Kč – Zajistíme psí krmivo na týden pro jednoho chráněnce našeho útulku."
                rows="2"></v-textarea>

            <v-textarea
                color="#00728f"
                v-model="concreteHelp02"
                :counter="170"
                :auto-grow="autoGrow"
                :clearable="clearable"
                label="Ilustrační příklad: Specifikujte, prosím, jak konkrétně může Vaše organizace využít měsíční příspěvek v hodnotě maximálně 500 Kč:"
                :outlined="outlined"
                placeholder="500 Kč – Zajistíme umělou výživu na tři dny pro podvyživené dítě."
                rows="2"></v-textarea>

            <v-textarea
                color="#00728f"
                v-model="concreteHelp03"
                :counter="170"
                :auto-grow="autoGrow"
                :clearable="clearable"
                label="Ilustrační příklad: Specifikujte, prosím, jak konkrétně může Vaše organizace využít měsíční příspěvek v hodnotě maximálně 1000 Kč:"
                :outlined="outlined"
                placeholder="1000 Kč – Nakoupíme tři polohovací polštáře pro pacienty našeho stacionáře."
                rows="2"></v-textarea>

            <v-file-input color="#00728f" accept="image/*,.pdf" label="Nahrajte své logo"></v-file-input>

            <v-text-field
                color="#00728f"
                v-model="email"
                :rules="emailRules"
                label="Kontaktní e-mail (uživatelské jméno)"
                required></v-text-field>

            <v-text-field
                color="#00728f"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :passwordRules="[passwordRules.required, passwordRules.min]"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-2"
                label="Zadejte nové heslo"
                hint="Heslo musí mít alespoň 8 znaků"
                value=""
                class="input-group--focused"
                @click:append="show2 = !show2"
          ></v-text-field>

            <v-checkbox
                color="#00728f"
                v-model="consent"
                :rules="[v => !!v || 'Abyste mohli pokračovat, udělate prosím souhlas.']"
                label="Souhlasím se sdílením výše uvedených údajů"
                required></v-checkbox>

            <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate">
                POTVRDIT
            </v-btn>

            <v-btn
                color="error"
                class="mr-4"
                @click="reset">
                RESET
            </v-btn>

            
        </v-form>

    </div>
  </v-container>
</template>

<script>
export default {

    data(){
        return{
            autoGrow: true,
            clearable: true,
            outlined: true,
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Vyplňte jméno',
                v => (v && v.length <= 10) || 'Jméno nesmí přesáhnout délku 50 znaků',
            ],
            email: '',
            emailRules: [
                v => !!v || 'Zadejte e-mail',
                v => /.+@.+\..+/.test(v) || 'Zadejte platný e-mail',
            ],
            category: null,
            items: ['Humanitární a rozvojová pomoc', 'Ochrana a práva zvířat', 'Sociální oblast a zdraví', 'Obhajoba práv lidí', 'Ekologie a ochrana přírody', 'Vzdělávání a osvěta', 'Kultura'],
            showPassword: false,
            passwordRules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered don\'t match'),
            },
        }
    },

    methods: {
    validate () {
        this.$refs.form.validate()
      },
    reset () {
        this.$refs.form.reset()
      },
    }

}
</script>

<style>

.registration__org__title {
    margin: 4rem 0 2rem 0;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    font-size: 2rem;
    color: #a3333d;
}

.registration__org__subtitle {
    text-align: center;
    font-weight: 400;
    color: #00728f;
}

@media screen and (min-width: 600px) {

    .registration__org__title {
        margin: 6rem 0 2rem 0;
        text-align: left;
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        font-size: 4rem;
        color: #a3333d;
    }

    .registration__org__subtitle {
        text-align: left;
    }

    .registration__org {
        margin: 0 auto 4rem auto;
        padding: 0 2rem 2rem 2rem;
        width: 80%;
        box-shadow: 4px 3px 34px 12px rgba(217,213,217,0.85);
        border-radius: 1%;
    }
}

</style>