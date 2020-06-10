<template>
  <v-container>

     <div class="czechia">

      <div class="czechia__heading">

        <h2>Posuň <span class="czechia__heading-cesko">ČESKO</span> do civilizované společnosti</h2>
        <p>NA CHVOST NEPATŘÍME...</p>
        
      </div>

      <div class="czechia__heading--gradient"></div>

      <div class="czechia__text">

        <p>Ve <a href="https://www.cafonline.org/about-us/publications/2019-publications/caf-world-giving-index-10th-edition">světovém indexu dobročinnosti</a> je Česko nejen jednou z nejméně štědrých zemí, ale také tou, kde ochota darovat peníze nebo pomoci cizímu člověku v nouzi stále klesá.</p>
        <p>To se máme ve střední Evropě tak špatně, abychom se řadili po bok africkým státům zmítaným válkami? Možná, že občas zapomínáme, že náš cípek světa je epicentrem blahobytu. A možná, že kdybychom se u nás doma více zajímali o druhé, potkávali bychom v ulicích českých měst šťastnější tváře. Jedna z nich může být i tvoje.</p>

      </div>

      <div class="czechia__arrow"></div>

    </div>



  </v-container>
</template>

<script>
export default {

}
</script>

<style>

.czechia {
  margin: 4rem 0 4rem 0;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.czechia__heading {
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

.czechia__heading--gradient {
  position: absolute;
  top: -25px;
  width: 300px;
  height: 300px;
  background: linear-gradient(#00728f, #003f4e);
  border-radius: 50%;
  
}

.czechia__heading p {

  color: #ef6f6c;

}

.czechia__heading-cesko {
  font-weight: 900;
  color: #a3333d;
}

.czechia__text {
  color: #291F1E;
  margin: 0 10% 0 10%;
  font-size: 110%;
  font-weight: 300;
}

.czechia__arrow {
    width: 0; 
    height: 0; 
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-top: 1.5rem solid #ef6f6c;
    margin: 1.5rem 0;
}

@media (min-width:600px) {
  .czechia {
        display: grid;
        max-height: 100vh;
        grid-template-columns: 40% 60%;
        grid-template-rows: repeat(4, 25%);
        column-gap: 2rem;
        align-items: center;
        margin: 20rem 0 20rem 0;
  }

  .czechia__heading {
    grid-column: 1;
    grid-row: 1/ span 4;
    width: 350px;
    height: 350px;
    margin:0;
    font-size: 150%;
  }

  .czechia__heading--gradient {
    grid-column: 1;
    grid-row: 1/ span 4;
    width: 400px;
    height: 400px;
    position: static;
    align-self: center;
    transform: translate(-25px, 0);
  }

  .czechia__text {
    grid-column: 2;
    grid-row: 1 / span 4;
    text-align: left;
    font-size: 125%;
    font-weight: 300;
  }

  .czechia__arrow {
    display: none;
  }

}

</style>