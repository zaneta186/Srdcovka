<template>
  <v-container>

    <div class="exitus">
      <h1 class="exitus__heading">Vaše údaje byly úspěšně odeslány</h1>
      <p>Pokud bude vše v pořádku, pošleme Vám autorizační e-mail a Váš profil zveřejníme co nevidět. Bude-li nám něco chybět, obrátíme se na kontaktní osobu uvedenou ve formuláři.</p>
      <div class="exitus__button">
            <v-hover value open-delay="200">
                <v-btn color="rgb(239, 111, 108)" dark ripple to="/">ZPĚT NA ÚVODNÍ STRÁNKU</v-btn>
            </v-hover>
            </div>
    </div>


  </v-container>
</template>

<script>
export default {

}
</script>

<style>

.exitus__heading {
        margin-bottom: 4rem;
        font-family: "Poppins", sans-serif;
        font-weight: 200;
        font-size: 2rem;
        color: #00728f;
    }

.exitus {
  margin: 8rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.exitus__button {
        margin-top: 2rem;
        margin-bottom: 10rem;
    }

@media screen and (min-width:600px) {

    .exitus {
        margin: 10rem 15rem;
        padding: 5rem 5rem;
        box-shadow: -1px 2px 19px -4px rgba(41,31,30,0.2);
    }

    .exitus__button {
        margin-top: 2rem;
        margin-bottom: 0;
    }

    

}


</style>