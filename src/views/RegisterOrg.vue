<template>
  <v-container>
      <div class="registration__org">

        <h1 class="registration__org__title">Aby Vás srdcaři našli</h1>
        <p class="registration__org__subtitle">Po zaregistrování do naší databáze bude Vaše organizace zařazena do výsledků individuálních testů. Zvýšíte tak pravděpodobnost, že se některý ze srdcařů rozhodne pravidelně přispívat právě na Vaši věc.</p>

        <v-form
        ref="form"
        v-model="valid"
        :lazy-validation="lazy">

            <v-text-field
                v-model="name"
                :counter="50"
                :rules="nameRules"
                label="Jméno organizace"
                required></v-text-field>

            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Kontaktní e-mail"
                required></v-text-field>

            <v-text-field
                v-model="link"
                label="Adresa webové stránky organizace"
                required></v-text-field>

            <v-select
                v-model="category"
                :items="items"
                :rules="[v => !!v || 'Musíte vybrat jednu z možností']"
                label="Vyberte neziskový segment, v němž působíte"
                required></v-select>

            <v-textarea
                v-model="description"
                :counter="1000"
                :auto-grow="autoGrow"
                :clearable="clearable"
                label="Reprezentativní popis organizace"
                :outlined="outlined"
                placeholder="Posláním naší neziskovky je..."
                rows="10"></v-textarea>

            <v-textarea
                v-model="concreteHelp01"
                :counter="250"
                :auto-grow="autoGrow"
                :clearable="clearable"
                label="Ilustrační příklad: Specifikujte, prosím, jak konkrétně může Vaše organizace využít měsíční příspěvek v hodnotě maximálně 300 Kč:"
                :outlined="outlined"
                placeholder="Za 300 Kč zajistíme každý měsíc... / Za pravidelných 300 Kč měsíčně si můžeme za rok dovolit..."
                rows="2"></v-textarea>

            <v-textarea
                v-model="concreteHelp02"
                :counter="250"
                :auto-grow="autoGrow"
                :clearable="clearable"
                label="Ilustrační příklad: Specifikujte, prosím, jak konkrétně může Vaše organizace využít měsíční příspěvek v hodnotě maximálně 500 Kč:"
                :outlined="outlined"
                placeholder="Za 500 Kč zajistíme každý měsíc... / Za pravidelných 500 Kč měsíčně si můžeme za rok dovolit..."
                rows="2"></v-textarea>

            <v-textarea
                v-model="concreteHelp03"
                :counter="250"
                :auto-grow="autoGrow"
                :clearable="clearable"
                label="Ilustrační příklad: Specifikujte, prosím, jak konkrétně může Vaše organizace využít měsíční příspěvek v hodnotě maximálně 1000 Kč:"
                :outlined="outlined"
                placeholder="Za částku 1000 Kč zajistíme každý měsíc... / Za pravidelných 1000 Kč měsíčně si můžeme za rok dovolit..."
                rows="2"></v-textarea>

            <v-file-input accept="image/*,.pdf" label="Nahrajte své logo"></v-file-input>

            <v-checkbox
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
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 50 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            category: null,
            items: ['Humanitární a rozvojová pomoc', 'Ochrana a práva zvířat', 'Sociální oblast a zdraví', 'Obhajoba práv lidí', 'Ekologie a ochrana přírody', 'Vzdělávání a osvěta', 'Kultura']
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
    }
}

</style>