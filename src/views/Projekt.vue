<template>

    <v-container>

        <div class="creators__wrapper">

            <div class="creators">

                <h2 class="creators__title">ZA APLIKACÍ STOJÍ</h2>

                <medailonek
                v-for="(osoba,i) in tym"
                :key="i"
                :osoba="osoba" />

            </div>


            <div class="about">

                <div class="about__circle">
                    <div class="about__circle__gradient"></div>
                    <div class="about__circle__fill"></div>
                </div>

                <h1 class="about__title">Kde se vzala <span class="heading__span">SRDCOVKA?</span></h1>

                <p class="about__text">Srdcovka je zkratka pro srdeční záležitost, v případě naší aplikace pro téma, které nás ze své podstaty bytostně zajímá a nikdy nám nebude lhostejné. Jsme přesvědčeny, že každý z nás pro něco hoří, možná jen své téma neumí na první dobrou pojmenovat.</p>

                <div class="about__circle">
                    <div class="about__circle__gradient"></div>
                    <div class="about__circle__fill"></div>
                </div>

                <h2 class="about__title">Pro koho je naše aplikace?</h2>

                <p class="about__text">Pro fyzické osoby, které jsou v principu otevřeny možnosti přispívat na charitu nebo neziskové organizaci, ale chybí jim odhodlání k tomu učinit první krok – k akci zkrátka potřebují impuls z venčí. Také pro neziskové organizace, které o sobě chtějí dát srdcařům vědět.</p>

                <div class="about__circle">
                    <div class="about__circle__gradient"></div>
                    <div class="about__circle__fill"></div>
                </div>

                <h2 class="about__title">Proč je to důležité?</h2>

                <p class="about__text">Pomoc nám musí dávat smysl, abychom v ní vytrvali. Potřebujeme cítit radost z pokroků, ke kterým svými prostředky přispíváme. V České republice jsou ale individuální dárci zcela odkázáni na sebe. Při navigaci v plejádě neziskovek se musí spolehnout na svůj výzkum, přitom jen málokdo cítí dobročinnost jako povinnost tak silně, aby si na tento krok vůbec udělal čas.</p>

                <div class="about__circle">
                    <div class="about__circle__gradient"></div>
                    <div class="about__circle__fill"></div>
                </div>

                <h2 class="about__title">Náš cíl? <span class="heading__span">Odstranit bariéry!</span></h2>

                <p class="about__text">Mezi potenciálním dárcem a skutečnou finanční pomocí stojí celá řada překážek. Neví, jaké organizace na trhu působí nebo které z nich jsou důvěryhodné a transparentní. V neposlední řadě pravděpodobně vůbec nemá vnitřně rozhodnuto, které oblasti patří jeho srdce. Nadšení ho pak může lehce opustit. Naše aplikace nejen promění všechny tyto problémy v zábavu, ale zároveň mu poskytne cenné informace o konkrétní pomoci přímo z první ruky – od organizací, které si sami udržují profily v naší databázi.</p>

            </div>

        </div>

    </v-container>
  
</template>

<script>

import Medailonek from '../components/Medailonek.vue'

export default {

    components: {
        medailonek: Medailonek,
    },

    data() {

        return{

            tym: [
                {name: 'Magdaléna Selingerová', description: 'Je freelance copywriterka, má nohy přirostlé k pedálům kola a je hrdou členkou The Church of Wittertainment. Před Digitální Akademií absolvovala dlouhodobý kurz Web od A do Z. V přemýšlení o kódování jí podle ní překvapivě pomáhá klasické, humanitní vzdělání, zvlášť striktní systém latiny a formální logika.', picture: 'magda.jpg'},
                {name: 'Žaneta Rezková', description: 'Má v hlavě programování a kartografii, v srdci hory a své psy. Ráda si rozšiřuje své znalosti a nepohrdne dobrou kávou. Je absolventkou Geoinformatiky, která ji postrčila k programování, kterému se nepřetržitě už rok věnuje. K tomu se přidaly zkušenosti s automatizovaným testováním, webscrapingem a HTML&CSS.', picture: 'zaneta.jpg'},
                {name: 'Patrik Procházka', description: 'Je frontend developer. Ovládá Vue.js, ReactJs a Javascript. Miluje svou práci a rád předává zkušenosti dál. Má rád dobrou kávu, ale nevyzná se v ní. Stačí mu, když je jí hodně. Srdcovce rozjel backend, který byl pro holky zatím jen černá magická skříňka, a pomáhal odstranit kdejaký bug.', picture: 'patrik.png'},
            ]
        }
    }

}
</script>

<style>

.creators__wrapper {
    display: flex;
    flex-direction: column;
}

.creators {
    order: 1;
}

.creators__title {
        margin: 4rem 0 4rem 0;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        font-size: 2rem;
        color: #00728f;
}

.about {
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: #291F1E;
    }

.about__circle {
        margin-top: 1rem;
        position: relative;
    }

    .about__circle__gradient {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background: linear-gradient(#a3333d, #ef6f6c);
    }


    .about__circle__fill {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background: #f7f7f2;
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        z-index: 1;
    }

    .about__title {
        margin: 2.6rem 0;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        font-size: 2rem;
        color: #ef6f6c;
    }


@media screen and (min-width: 600px) {

    .creators__wrapper {
        flex-direction: row;
        justify-content: flex-start;
    }

    .creators {
        flex-basis: 30%;
        margin-top: 5rem;
        text-align: center;
        color: #291F1E;
        order: 0;
    }

    .creators__title {
        margin: 0 0 3rem 0;
    }

    .about {
        flex-basis: 70%;
    }


    .about__text {
        width: 60%;
    }

}



</style>