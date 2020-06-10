<template>
  
  <v-container>
      <div class="happiness">

        <div class="happiness__heading">

            <h2><span class="happiness__heading-stesti">ŠTĚSTÍ</span> si za peníze (ne)koupíš?</h2>
            <p>ZÁLEŽÍ, JAK S NIMI NALOŽÍŠ...</p>
        
        </div>

        <div class="happiness__heading--gradient"></div>

        <div class="happiness__perex">
          <p>Pokud je tvým cílem šťastnější život, víme celkem přesně, co si s penězi počít:</p>
          <div v-on:click="showFirst" v-bind:class="{active: first}">1</div>
          <div v-on:click="showSecond" v-bind:class="{active: second}">2</div>
          <div v-on:click="showThird" v-bind:class="{active: third}">3</div>
        </div>

        <div class="happiness__advice">

            <div class="happiness__advice__item">
                <div class="happiness__advice__item--digit">1</div>
                <p class="happiness__advice__item--text" v-bind:class="{show: first, hide: !first}">První dobrá zpráva je, že od určitého příjmu už se pocit štěstí se vzrůstajícím bohatstvím nezvyšuje. Vyděláváš-li tedy tak akorát a nic extra ti nechybí, honba za dalšími penězi už tě šťastnější prostě neudělá. To je celkem úleva, nemyslíš? Existuje totiž spousta jiných pokladů, za kterými má větší smysl se pachtit. Třeba čas. Na rodinu, na koníčky, na sebe… nebo na <em class="happiness__advice__item--em">pomoc ostatním</em>.</p>
            </div>

            <div class="happiness__advice__item second">
                <div class="happiness__advice__item--digit">2</div>
                <p class="happiness__advice__text--item" v-bind:class="{show: second, hide: !second}">Záleží i na tom, za co peníze utratíš. Nové BMW tvou křivku štěstí vystřelí nahoru jen na zlomek okamžiku. Nic totiž nestárne tak rychle jako nová věc. Prostě si na něj zvykneš a zevšední ti. Lepší strategií je investovat do zážitků. Sklenka červeného, skok padákem, <em class="happiness__advice__item--em">dobrovolnictví</em>? Čím pomíjivější investice, tím intenzivnější prožitek. Určitě podvědomě tušíš, že dovolená je krásná právě kvůli tomu, že nevyhnutelně skončí. K zážitkům se navíc můžeš vracet ve svých vzpomínkách a pocit štěstí si tak zpětně navodit, kdykoliv máš chuť.</p>
            </div>

            <div class="happiness__advice__item third">
                <div class="happiness__advice__item--digit">3</div>
                <p class="happiness__advice__text--item" v-bind:class="{show: third, hide: !third}">A konečně za třetí. Z experimentů jasně vyplývá, že utrácet peníze za někoho jiného tě udělá šťastnějším, než utratit je za sebe. Pravidelná pomoc druhým je zkrátka automat na štěstí, který se ti neomrzí! <em class="happiness__advice__item--em">Pomáhej</em>, buď šťastnější a jestli jsi založením spíš analytik či analytička a potřebuješ důkaz, akademický článek na toto téma najdeš <a href="https://www.researchgate.net/publication/5494996_Spending_Money_on_Others_Promotes_Happiness">zde</a></p>
            </div>
            
        </div>


        <div class="happiness__arrow"></div>




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

.happiness {
        margin: 4rem 0 4rem 0;
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: relative;
}

.happiness__heading {
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
  z-index: 1;
  background-color: #f7f7f2;
}

.happiness__heading-stesti {
  font-weight: 900;
  color: #a3333d;
}

.happiness__heading--gradient {
  position: absolute;
  top: -25px;
  width: 300px;
  height: 300px;
  background: linear-gradient(#a3333d, #ef6f6c);
  border-radius: 50%;
}

.happiness__heading p, .happiness__perex {

  color: #00728f;

}

.happiness__advice, .happiness__perex {
    margin: 0 10% 0 10%;
    color: #291F1E;
    font-size: 110%;
    font-weight: 300;
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

.happiness__arrow {
    width: 0; 
    height: 0; 
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-top: 1.5rem solid #ef6f6c;
    margin: 1.5rem 0;
}

.happiness__perex div {
  display: none;
}

@media (min-width: 600px) {

  .happiness {
        display: grid;
        max-height: 100vh;
        grid-template-columns: 40% 60%;
        grid-template-rows: repeat(4, 25%);
        column-gap: 2rem;
        align-items: center;
        margin: 20rem 0 20rem 0;
  }

  .happiness__heading {
    grid-column: 1;
    grid-row: 1/ span 4;
    width: 350px;
    height: 350px;
    margin:0;
    font-size: 150%;
  }

  .happiness__heading--gradient {
    grid-column: 1;
    grid-row: 1/ span 4;
    width: 400px;
    height: 400px;
    position: static;
    align-self: center;
    transform: translate(-25px, 0);
  }

  .happiness__perex {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    text-align: left;
    font-size: 125%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
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
    grid-row: 2 / span 3;
    text-align: left;
    font-weight: 300;
    font-size: 125%;
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


  .happiness__arrow {
    display: none;
  }
}

</style>