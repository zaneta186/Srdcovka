<template>
  <v-container>

    <div class="subject">

      <div class="subject__heading">

        <h2>Najdi si své dobročinné <span class="subject__heading-tema">TÉMA</span></h2>
        <p>POZNEJ, KAM TĚ SRDCE TÁHNE...</p>
        
      </div>

      <div class="subject__heading--gradient"></div>

      <div class="subject__text">

        <p>Přispívat na něco, čemu nevěříš, je blbost. </p>
        <p>Aby ti pomoc přinášela dobrý pocit, musíš si najít svou oblast, která tě nenechá v klidu, téma, které tě pokaždé nadzvedne ze židle. Máš na něj jasný názor, dokážeš o něm zapáleně vykládat svým přátelům, a když na to přijde, tak i dědovi s babičkou. Nevnucuješ se, ale v racionální diskuzi dokážeš své „téma“ obhájit a pohotově reagovat na proti-argumenty.</p>

        <p class="subject__text_cta">Že ještě nevíš, které „téma“ je to tvé? Nevadí, proto jsi tady!</p>

      </div>

      <div class="subject__arrow"></div>

    </div>
      
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

.subject {
  margin: 4rem 0 4rem 0;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.subject__heading {
  color: #291F1E;
  margin-bottom: 3rem;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: 'Poppins', sans-serif;
  z-index: 2;
  background-color: #f7f7f2;
}

.subject__heading--gradient {
  position: absolute;
  top: -25px;
  width: 300px;
  height: 300px;
  background: linear-gradient(#00728f, #003f4e);
  border-radius: 50%;
  
}

.subject__heading p, .subject__text_cta {

  color: #ef6f6c;

}

.subject__heading-tema {
  font-weight: 900;
  color: #a3333d;
}

.subject__text {
  color: #291F1E;
  margin: 0 10% 0 10%;
  font-size: 110%;
  font-weight: 300;
}

.subject__arrow {
    width: 0; 
    height: 0; 
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-top: 1.5rem solid #ef6f6c;
    margin: 1.5rem 0;
}

@media (min-width:600px) {

  .subject {
        display: grid;
        max-height: 100vh;
        grid-template-columns: 40% 60%;
        grid-template-rows: repeat(4, 25%);
        column-gap: 2rem;
        align-items: center;
        margin: 20rem 0 20rem 0;
  }

  .subject__heading {
    grid-column: 1;
    grid-row: 1/ span 4;
    width: 350px;
    height: 350px;
    margin:0;
    font-size: 150%;
  }

  .subject__heading--gradient {
    grid-column: 1;
    grid-row: 1/ span 4;
    width: 400px;
    height: 400px;
    position: static;
    align-self: center;
    transform: translate(-25px, 0);
    z-index: 1;
  }

  .subject__heading--gradient::after {
    content: '';
    width: 1px;
    height: 250rem;
    position: absolute;
    background-color: #ef6f6c;
    top: -115%;
}

  .subject__text {
    grid-column: 2;
    grid-row: 1 / span 4;
    text-align: left;
    font-size: 125%;
    font-weight: 300;
  }

  .subject__arrow {
    display: none;
  }
}



</style>