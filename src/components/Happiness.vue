<template>
  
  <v-container>
      <div class="happiness main">

        <div class="happiness__heading heading">

            <h2><span class="heading__span">ŠTĚSTÍ</span> si za peníze (ne)koupíš?</h2>
            <p class="heading__subtitle">ZÁLEŽÍ, JAK S NIMI NALOŽÍŠ</p>
        
        </div>

        <div class="happiness__heading--gradient gradient"></div>

        <div class="happiness__perex">
          <p class="happiness__perex--intro">Pokud je tvým cílem šťastnější život, víme celkem přesně, co si s penězi počít:</p>
          <div @click="showFirst" :class="{active: first}">1</div>
          <div @click="showSecond" :class="{active: second}">2</div>
          <div @click="showThird" :class="{active: third}">3</div>
        </div>

        <div class="happiness__advice">

            <div class="happiness__advice__item">
                <div class="happiness__advice__item--digit">1</div>
                <div class="happiness__advice__item--wrapper">
                <p class="happiness__advice__item--text" v-bind:class="{show: first, hide: !first}">První dobrá zpráva je, že od určitého příjmu už se pocit štěstí se vzrůstajícím bohatstvím nezvyšuje. Vyděláváš-li tedy tak akorát, honba za dalšími penězi už tě šťastnější prostě neudělá. To je celkem úleva, nemyslíš? Existuje spousta jiných pokladů, za kterými má větší smysl se pachtit. Třeba čas! Na rodinu, na koníčky, na sebe… nebo na <em class="happiness__advice__item--em">pomoc ostatním</em>.</p>
                </div>
            </div>

            <div class="happiness__advice__item second">
                <div class="happiness__advice__item--digit">2</div>
                <div class="happiness__advice__item--wrapper">
                <p class="happiness__advice__text--item" v-bind:class="{show: second, hide: !second}">Záleží také na tom, za co peníze utratíš. Nové auto tvou křivku štěstí vystřelí nahoru jen na zlomek okamžiku. Nic totiž nestárne tak rychle jako nová věc. Lepší strategií je investovat do zážitků. Sklenka červeného, skok padákem, <em class="happiness__advice__item--em">dobrovolnictví</em>? Čím pomíjivější investice, tím intenzivnější prožitek. Dovolená je nakonec krásná právě kvůli tomu, že nevyhnutelně skončí. K zážitkům se navíc můžeš vracet ve svých vzpomínkách a pocit štěstí si tak zpětně navodit.</p>
                </div>
            </div>

            <div class="happiness__advice__item third">
                <div class="happiness__advice__item--digit">3</div>
                <div class="happiness__advice__item--wrapper">
                <p class="happiness__advice__text--item" :class="{show: third, hide: !third}">A konečně za třetí. Z experimentů jasně vyplývá, že utrácet peníze za někoho jiného tě udělá šťastnějším, než utratit je za sebe. Pravidelná pomoc druhým je zkrátka automat na štěstí! <em class="happiness__advice__item--em">Pomáhej</em>, buď šťastnější a jestli jsi založením spíš analytik či analytička, akademický článek na toto téma najdeš <a class="link" href="https://www.researchgate.net/publication/5494996_Spending_Money_on_Others_Promotes_Happiness" target="_blank">zde</a></p>
                </div>
            </div>
            
        </div>


        <div class="arrow"></div>




      </div>
  </v-container>
</template>

<script>
export default {

    data(){
        return{
          first: true,
          second: false,
          third: false, 
        }
    },

    methods: {

      showFirst() {

          this.first = true;
          this.third = false;
          this.second = false;

      },

      showSecond() {

          this.first = false;
          this.third = false;
          this.second = true;

      },

      showThird() {

          this.first = false;
          this.third = true;
          this.second = false;

      }

    }

}
</script>

<style>

.happiness__heading--gradient {
  background: linear-gradient(#a3333d, #ef6f6c);
}

.happiness__heading p, .happiness__perex {
  color: #00728f;
}

.happiness__advice__item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.happiness__advice__item--em {
  color: #a3333d;
  font-weight: 900;
  font-style: normal;
}

.happiness__advice__item--digit {
    padding: 2rem;
    width: 4rem;
    height: 4rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: linear-gradient(#00728f, #003f4e);
    margin: 1em 0 1em 0;
    color: whitesmoke;
    font-weight: 900;
}


.happiness__perex div {
  display: none;
}

@media (min-width: 600px) {


  .happiness__perex {
    grid-column: 2 / span 1;
    grid-row: 1 / span 2;
    text-align: left;
    font-size: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 10% 0 10%;
  }

  .happiness__perex--intro {
    flex-basis: 100%;
  }

  .happiness__perex div {
    padding: 2rem;
    width: 4rem;
    height: 4rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: linear-gradient(#00728f, #003f4e);
    margin: 1em 0 1em 0;
    color: whitesmoke;
    font-weight: 900;
  }

  .happiness__perex div:hover {
    cursor: pointer;
    background: linear-gradient(#003f4e,#00728f);
  }

  .happiness__advice {
    grid-column: 2 / span 1;
    grid-row: 3 / span 2;
    text-align: left;
    font-weight: 300;
    font-size: 100%;
    margin: 0 10% 0 10%;
  } 

  .active {
    border: 5px solid #ef6f6c;
  }

  .hide {
    display: none;
  }

  .show {
    display: block;
  }

  .happiness__advice__item--digit {
    display: none;
  }

}

</style>