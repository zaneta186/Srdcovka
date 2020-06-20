<template>

    <v-container>

        <div class="hero">
            
            <h1 class="hero__title">Nech se vést <br><span class="heart">SRDCEM</span></h1>

            <div class="hero__message">

                <p>Zjisti, na čem ti doopravdy záleží</p>
                <p>Pomáhej tam, kde to má smysl</p>
                <p>Zlepši životy kolem sebe, a tím ten svůj</p>

            </div>
            

            <div class="hero__button">
            <v-hover value open-delay="200">
                <v-btn x-large color="#00728f" dark ripple to="/test">SPUSŤ TEST</v-btn>
            </v-hover>
            </div>

            <div class="hero__readmore">
                <p>Nebo si nejdřív přečti víc</p>
                <div class="hero__arrow"></div>
            </div>

            <div class="hero__needle">
                <img class="hero__needle--circle" src="./../assets/images/srdcovka-kolo.svg" alt="srdcovka strelka">
                <img class="hero__needle--needle" src="./../assets/images/srdcovka-strelka-only.svg" alt="srdcovka strelka">
            </div>
        

        </div>
    </v-container>

  
</template>

<script>
export default {

    data(){

    },

    mounted: {


    }


}
</script>

<style>


.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1;
    margin-bottom: 4rem;
}

.hero__title {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    font-size: 2em;
    z-index: 1;
    color: #ef6f6c;
    order: -5;
    margin: 0;
}

.heart{
    font-weight: 900;
    color: #a3333d;
}

.hero__needle {
    margin-top: 1rem;
    width: 70%;
    position:relative;
    order: -4;
}

.hero__needle--circle {
    width: 100%;
    height: auto;
}

.hero__needle--needle {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    z-index: 1;
}

.hero__message {
    margin-top: 1rem;
    color: #291F1E;
    text-align: center;
    line-height: 1;
    font-weight: 300;
    order: -3;
}

.hero__button {
    order: -2;
}


.hero__readmore {
    margin-top: 1rem;
    order: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.hero__arrow {
    width: 0; 
    height: 0; 
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-top: 1.5rem solid #ef6f6c;
    margin: 1.5rem 0;
}


@media (min-width:600px) {

    .hero {
        display: grid;
        max-height: 100vh;
        grid-template-columns: 40% 60%;
        grid-template-rows: 35% 25% 10% 25%;
        column-gap: 2rem;
        /* margin-top: 3rem; */
    }

    .hero__title {
        font-size: 4em;
        text-align: left;
        margin: 0;
    }

    .hero__needle {
        grid-column: 2;
        grid-row: 1/span 3;
        width: 100%;
        margin-top: 8rem;
    }

    .hero__message {
        grid-row: 2;
        text-align: left;
        font-size: 150%;
    }

    .hero__button {
        grid-row: 3;
        justify-self: start;
    }

    .hero__readmore {
        grid-row: 4;
        justify-self: start;
       
    }

    .hero__arrow {
        display: none;
    }

    .hero__needle--needle:hover {
        -webkit-transform: rotate(720deg);
        -webkit-transition: 2s;
    }





}

</style>