<template>
  <v-container>

    <div class="ngos">

      <div class="ngos__heading">

        <h2>Umožni <span class="ngos__heading-neziskovky">NEZISKOVKÁM</span> efektivně plánovat</h2>
        <p>PŘISPÍVEJ PRAVIDELNĚ...</p>
        
      </div>

      <div class="ngos__heading--gradient"></div>

      <div class="ngos__text">

        <p>V případě katastrof dokážeme posílat DMS jen to fičí, koronavirová krize zase ukázala, že pár odhodlaných lidí dokáže za víkend ušít tisíce roušek, které by nesehnala ani vláda. V jednorázové pomoci jsme mistři. Neměli bychom ale zapomínat na její méně nablýskanou sestru – <em class="ngos__text--em">pomoc pravidelnou</em>.</p> 
        <p>I sociálně štědré země nemají kapacity na to, aby plně pokryly <em class="ngos__text--em">péči o všechny</em>. Jsou to neziskovky, které s péčí o potřebné státu pomáhají. Obhajují práva menšin, pomáhají za našimi hranicemi, v péči o pacienty se vzácnými chorobami a v některých případech, jako u nás v péči o umírající, přebírají státní úkol na sebe.</p>
        <p>Ať už si můžeš dovolit přispívat měsíčně dvě stovky nebo dva tisíce, trvalý bankovní příkaz je pro neziskový sektor neocenitelný příslib pravidelných prostředků, díky nimž mohou organizace <em class="ngos__text--em">plánovat do budoucna</em> a být v pomoci efektivnější.</p>
        <p>Žádná organizace si nemůže jít za svou misí, pokud neví, zda bude mít příští měsíc na výplaty. <em class="ngos__text--em">Přispívej proto pravidelně</em>.</p>

      </div>

    </div>
      
  </v-container>
</template>

<script>
export default {

}
</script>

<style>



.ngos {
  margin: 4rem 0 4rem 0;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.ngos__heading {
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

.ngos__heading--gradient {
  position: absolute;
  top: -25px;
  width: 300px;
  height: 300px;
  background: linear-gradient(#a3333d, #ef6f6c);
  border-radius: 50%;
  
}

.ngos__heading p {

  color: #00728f;

}

.ngos__heading-neziskovky {
  font-weight: 900;
  color: #a3333d;
}

.ngos__text {
  color: #291F1E;
  margin: 0 10% 0 10%;
  font-size: 110%;
  font-weight: 300;
}

.ngos__text--em {
    color: #a3333d;
  font-weight: 900;
  font-style: normal;
}

@media (min-width:600px) {
  .ngos {
        display: grid;
        max-height: 100vh;
        grid-template-columns: 40% 60%;
        grid-template-rows: repeat(4, 25%);
        column-gap: 2rem;
        align-items: center;
        margin: 20rem 0 20rem 0;
  }

  .ngos__heading {
    grid-column: 1;
    grid-row: 1/ span 4;
    width: 350px;
    height: 350px;
    margin:0;
    font-size: 150%;
  }

  .ngos__heading--gradient {
    grid-column: 1;
    grid-row: 1/ span 4;
    width: 400px;
    height: 400px;
    position: static;
    align-self: center;
    transform: translate(-25px, 0);
  }

  .ngos__text {
    grid-column: 2;
    grid-row: 1 / span 4;
    text-align: left;
    font-size: 125%;
    font-weight: 300;
  }

  .ngos__arrow {
    display: none;
  }

}


</style>