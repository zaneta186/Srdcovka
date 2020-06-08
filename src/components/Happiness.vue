<template>
  
  <v-container>
      <div class="happiness">

        <div class="happiness__heading">

            <h2><span class="subject__heading-tema">ŠTĚSTÍ</span> si za peníze (ne)koupíš?</h2>
            <p>ZÁLEŽÍ, JAK S NIMI NALOŽÍŠ...</p>
        
        </div>

        <div class="happiness__heading--gradient"></div>

        <div class="happiness__perex">Pokud je tvým cílem šťastnější život, víme celkem přesně, co si s penězi počít:</div>

        <div class="happiness__advice">

            <div v-show="advice === 1" class="happiness__advice__item">
                <div class="happiness__advice__item--digit">1</div>
                <p class="happiness__advice__item--text">První dobrá zpráva je, že od určitého příjmu už se pocit štěstí se vzrůstajícím bohatstvím nezvyšuje. Vyděláváš-li tedy tak akorát a nic extra ti nechybí, honba za dalšími penězi už tě šťastnější prostě neudělá. To je celkem úleva, nemyslíš? Existuje totiž spousta jiných pokladů, za kterými má větší smysl se pachtit. Třeba čas. Na rodinu, na koníčky, na sebe… nebo na <em>pomoc ostatním</em>.</p>
            </div>

            <div v-show="advice === 2" class="happiness__advice__item">
                <div class="happiness__advice__item--digit">2</div>
                <p class="happiness__advice__text--item">Záleží i na tom, za co peníze utratíš. Nové BMW tvou křivku štěstí vystřelí nahoru jen na zlomek okamžiku. Nic totiž nestárne tak rychle jako nová věc. Prostě si na něj zvykneš a zevšední ti. Lepší strategií je investovat do zážitků. Sklenka červeného, skok padákem, <em>dobrovolnictví</em>? Čím pomíjivější investice, tím intenzivnější prožitek. Určitě podvědomě tušíš, že dovolená je krásná právě kvůli tomu, že nevyhnutelně skončí. K zážitkům se navíc můžeš vracet ve svých vzpomínkách a pocit štěstí si tak zpětně navodit, kdykoliv máš chuť.</p>
            </div>

            <div v-show="advice === 3" class="happiness__advice__item">
                <div class="happiness__advice__item--digit">3</div>
                <p class="happiness__advice__text--item">A konečně za třetí. Z experimentů jasně vyplývá, že utrácet peníze za někoho jiného tě udělá šťastnějším, než utratit je za sebe. Pravidelná pomoc druhým je zkrátka automat na štěstí, který se ti neomrzí! <em>Pomáhej</em>, buď šťastnější a jestli jsi založením spíš analytik či analytička a potřebuješ důkaz, akademický článek na toto téma najdeš zde</p>
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
            advice: 1,
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
}

.happiness__advice__item {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 1.5rem;
}

@media (min-width: 600px) {

    .happiness {
        display: grid;
        max-height: 100vh;
        grid-template-columns: 60% 40%;
        grid-template-rows: repeat(4, 25%);
        column-gap: 2rem;
        align-items: center;
  }

  .happiness__heading {
    grid-column: 2;
    grid-row: 1/ span 4;
    width: 350px;
    height: 350px;
    margin:0;
    font-size: 150%;
  }

  .happiness__heading--gradient {
    grid-column: 2;
    grid-row: 1/ span 4;
    width: 400px;
    height: 400px;
    position: static;
    align-self: center;
    transform: translate(-25px, 0);
  }

  .happiness__perex {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }

  .happiness__advice {
    grid-column: 1 / span 1;
    grid-row: 2 / span 3;
    font-size: 125%;
  } 


  .happiness__arrow {
    display: none;
  }
}

</style>