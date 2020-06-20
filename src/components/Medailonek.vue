<template>
  <v-container>

      <div class="medailonek">

          <div class="picture">

              <img :src="require(`./../assets/images/${osoba.picture}`)" alt="osoba.name">

          </div>

        <h4 class="name">{{osoba.name}}</h4>

        <p class="description">{{osoba.description}}</p>

      </div>

  </v-container>
</template>

<script>
export default {

    props: ['osoba'],

}
</script>

<style>

    .medailonek {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        box-shadow: -1px 2px 19px -4px rgba(41,31,30,0.2);
        border-radius: 0.5rem;
        margin-bottom: 4rem;
        z-index: 2;
        text-align: center;
    }

    .name {
        margin-bottom: 1rem;
        color: #00728f;
    }

    .picture {
        width: 8rem;
        border-radius: 50%;
    }

    .picture img {
        width: 100%;
        border-radius: 50%;
    }

    .description {
        font-size: 0.8rem;
    }

    

</style>