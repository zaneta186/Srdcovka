<template>
  <v-container>
    <div class="registration__org">
      <h1 class="registration__org__title">Aby Vás srdcaři našli</h1>
      <p class="registration__org__subtitle">
        Po zaregistrování do naší databáze bude Vaše organizace zařazena do výsledků individuálních testů. Zvýšíte tak pravděpodobnost, že se některý ze srdcařů rozhodne pravidelně přispívat právě na Vaši věc.
        <br />
        <br />Vyplněním formuláře se pod svým uživatelským jménem a heslem zaregistrujete do našeho systému, informace o Vaší organizaci tak budete moci kdykoliv aktualizovat.
      </p>

      <v-form ref="form" v-model="valid">
        <v-text-field
          color="#00728f"
          v-model="name"
          :counter="50"
          :rules="nameRules"
          label="Jméno organizace"
          required
        ></v-text-field>

        <v-text-field
          color="#00728f"
          v-model="link"
          label="Adresa webové stránky organizace"
          :rules="[v => !!v || 'Musíte zadat webovou adresu']"
          required
        ></v-text-field>

        <v-select
          color="#00728f"
          v-model="category"
          :items="items"
          :rules="[v => !!v || 'Musíte vybrat jednu z možností']"
          label="Vyberte neziskový segment, v němž působíte"
          required
        ></v-select>

        <v-textarea
          color="#00728f"
          v-model="description"
          :counter="1000"
          :auto-grow="autoGrow"
          :clearable="clearable"
          label="Reprezentativní popis organizace"
          :outlined="outlined"
          placeholder="Posláním naší neziskovky je..."
          rows="10"
        ></v-textarea>

        <v-textarea
          color="#00728f"
          v-model="concreteHelp01"
          :counter="170"
          :auto-grow="autoGrow"
          :clearable="clearable"
          label="Ilustrační příklad: Specifikujte, prosím, jak konkrétně může Vaše organizace využít měsíční příspěvek v hodnotě maximálně 300 Kč:"
          :outlined="outlined"
          placeholder="300 Kč – Zajistíme psí krmivo na týden pro jednoho chráněnce našeho útulku."
          rows="2"
        ></v-textarea>

        <v-textarea
          color="#00728f"
          v-model="concreteHelp02"
          :counter="170"
          :auto-grow="autoGrow"
          :clearable="clearable"
          label="Ilustrační příklad: Specifikujte, prosím, jak konkrétně může Vaše organizace využít měsíční příspěvek v hodnotě maximálně 500 Kč:"
          :outlined="outlined"
          placeholder="500 Kč – Zajistíme umělou výživu na tři dny pro podvyživené dítě."
          rows="2"
        ></v-textarea>

        <v-textarea
          color="#00728f"
          v-model="concreteHelp03"
          :counter="170"
          :auto-grow="autoGrow"
          :clearable="clearable"
          label="Ilustrační příklad: Specifikujte, prosím, jak konkrétně může Vaše organizace využít měsíční příspěvek v hodnotě maximálně 800 Kč:"
          :outlined="outlined"
          placeholder="800 Kč – Nakoupíme tři polohovací polštáře pro pacienty našeho stacionáře."
          rows="2"
        ></v-textarea>

        <v-file-input
          v-model="logo"
          color="#00728f"
          accept="image/*, .pdf"
          label="Nahrajte logo organizace (ve formátu .png, .gif nebo .jpg)"
          @change="uploadLogo($event)"
        ></v-file-input>

        <v-text-field
          color="#00728f"
          v-model="personContact"
          :counter="100"
          :rules="nameRules"
          label="Kontaktní osoba"
          required
        ></v-text-field>

        <v-text-field
          color="#00728f"
          v-model="email"
          :rules="emailRules"
          label="Kontaktní e-mail (uživatelské jméno)"
          required
        ></v-text-field>

        <v-checkbox
          color="#00728f"
          v-model="consent"
          :rules="[v => !!v || 'Abyste mohli pokračovat, udělate prosím souhlas.']"
          label="Souhlasím se sdílením výše uvedených údajů"
          required
        ></v-checkbox>

        <v-btn
          :loading="uploading"
          color="rgb(239, 111, 108)"
          dark
          class="mr-4 mt-5"
          @click="validate"
        >POTVRDIT</v-btn>

        <v-btn text class="mr-4 mt-5" @click="reset">RESET</v-btn>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import { Actions } from "./../store";

export default {
  data() {
    return {
      uploading: false,
      autoGrow: true,
      clearable: true,
      outlined: true,
      valid: false,
      name: "",
      description: "",
      link: "",
      logo: undefined,
      logoId: undefined,
      concreteHelp01: "",
      concreteHelp02: "",
      concreteHelp03: "",
      consent: false,
      email: "",
      category: null,
      personContact: "",
      items: [
        "Humanitární a rozvojová pomoc",
        "Ochrana a práva zvířat",
        "Sociální oblast a zdraví",
        "Obhajoba práv lidí",
        "Ekologie a ochrana přírody",
        "Vzdělávání a osvěta",
        "Kultura"
      ],
      nameRules: [
        v => !!v || "Vyplňte jméno",
        v => (v && v.length <= 50) || "Jméno nesmí přesáhnout délku 50 znaků"
      ],
      emailRules: [
        v => !!v || "Zadejte e-mail",
        v => /.+@.+\..+/.test(v) || "Zadejte platný e-mail"
      ]
    };
  },

  methods: {
    validate() {
      const form = {
        title: this.name,
        segment: this.category,
        description: this.description,
        website: this.link,
        logo: this.logoId,
        help300: this.concreteHelp01,
        help500: this.concreteHelp02,
        help800: this.concreteHelp03,
        contactPerson: this.personContact,
        contactEmail: this.email,
        consent: this.consent
      };

      if (this.$refs.form.validate()) {
        this.$store.dispatch(Actions.PERFORM_ADD_ORGANISATION, form);
        this.$router.push("/dekujeme");
      }
    },
    reset() {
      this.$refs.form.reset();
    },

    async uploadLogo(file) {

      if(this.logo) {
      this.uploading = true;
      const fd = new FormData();
      fd.append("files", file, file.name);
      const tempId = await this.$store.dispatch(Actions.PERFORM_FILE_UPLOAD, fd);
      console.log(tempId)
      this.logoId = tempId
      this.uploading = false;
      }
    }
  }
};
</script>

<style>
.registration__org__title {
  margin: 4rem 0 2rem 0;
  text-align: center;
  font-family: "Poppins", sans-serif;
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
    font-family: "Poppins", sans-serif;
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
    box-shadow: 4px 3px 34px 12px rgba(217, 213, 217, 0.85);
    border-radius: 1%;
  }
}
</style>