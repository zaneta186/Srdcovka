<template>
  <v-container>

    <div class="subject main">

      <div class="subject__heading heading">

        <h2>Najdi si své dobročinné <span class="heading__span">TÉMA</span></h2>
        <p>POZNEJ, KAM TĚ SRDCE TÁHNE...</p>
        
      </div>

      <div class="subject__heading--gradient gradient"></div>

      <div class="text">

        <p class="subject__text_intro">Přispívat na něco, čemu nevěříš, je blbost. </p>
        <p>Aby ti pomoc přinášela dobrý pocit, musíš si najít svou oblast, která tě nenechá v klidu. Téma, které tě pokaždé nadzvedne ze židle. Máš na něj jasný názor, dokážeš o něm zapáleně vykládat svým přátelům, a když na to přijde, tak i dědovi s babičkou. Nevnucuješ se, ale v racionální diskuzi dokážeš své „téma“ obhájit a pohotově reagovat na proti-argumenty.</p>

        <p class="subject__text_cta">Že ještě nevíš, které „téma“ je to tvé? Nevadí, proto jsi tady!</p>

      </div>

      <div class="arrow"></div>

    </div>
      
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

.subject__heading--gradient {
  background: linear-gradient(#00728f, #003f4e);
}

.subject__heading p {
  color: #ef6f6c;
}

.subject__text_cta {
  color: #ef6f6c;
  font-weight: 700;
}

.subject__text_intro {
  font-weight: 700;
}


@media (min-width:600px) {

  .subject__heading--gradient::after {
    content: '';
    width: 1px;
    height: 250rem;
    position: absolute;
    background-color: #ef6f6c;
    top: -115%;
  }

}



</style>