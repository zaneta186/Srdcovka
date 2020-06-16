<template>
  <div class="wrapper">
    <circle-with-percent v-bind:id="data.id" />
    <router-link to="/">
      <cross />
    </router-link>

    <div class="test">
      <div class="question">
        <p>{{data.description}}</p>
        <p>{{data.question}}</p>
      </div>

      <router-link to="/test02">
        <div class="answers">
          <div
            class="answer"
            v-bind:key="id"
            v-for="(answer,id) in data.answers"
            v-on:click="pridejBod(answer.name)"
          >
            <img src="./../assets/images/logo.png" alt="logo" class="logo" />
            <button class="button">{{answer.name}}</button>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Cross from "../components/Cross.vue";
import CircleWithPercent from "../components/CircleWithPercent.vue";
import Data from "./../assets/data/data.js";
import Result from "./../assets/data/result.js";

export default {
  components: {
    cross: Cross,
    circleWithPercent: CircleWithPercent
  },

  data() {
    return {
      data: Data[0],
      result: Result[0]
    };
  },

  methods: {
    pridejBod(answer) {
      const indexAns = this.data.answers.findIndex(ans => ans.name === answer);
      const arrayKategorieAns = this.data.answers[indexAns]["kategorie"];
      for (const kategorieAnswer of arrayKategorieAns) {
        this.result[kategorieAnswer] += 1;
      }
      console.log(this.result);
    }
  }
};
</script>

<style>
.wrapper {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
  background-image: linear-gradient(to bottom, #007391, #202e42);
  color: #f4f4efff;
  text-align: left;
}

.cross {
  width: 90px;
  position: absolute;
  right: 60px;
  top: 100px;
}

p + p {
  margin-top: 40px;
}

.circle {
  margin: -50px 0 0 10%;
}

.inCircle {
  width: 350px;
  height: 350px;
  border-radius: 100%;
  background-image: linear-gradient(to bottom, #007391, #202e42);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  font-weight: 600;
}

.outCircle {
  width: 400px;
  height: 400px;
  background-image: linear-gradient(to bottom, #ef6f6cff, #a3333dff);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.test {
  margin: -130px 15% 0 22%;
}

.question {
  font-size: 24px;
  font-weight: 700;
  font-family: Poppins, sans-serif;
}

.answers {
  margin-top: 60px;
  font-family: Roboto, sans-serif;
}

.answer {
  position: relative;
  box-shadow: 5px 5px 4px #2a2f35;
  margin-bottom: 5px;
}

a {
  text-decoration: none;
}

.button {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #00749100;
  line-height: 1.5;
  color: #f4f4efff;
  font-size: 18px;
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
  display: flex;
  justify-content: left;
  text-align: left;
}

.button02 {
  text-align: center;
  height: 100px;
  width: 250px;
  margin: 30px;
}

.answers02 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.button08 {
  padding: 30px;
  text-align: left;
}

.buttonOznaceny {
  opacity: 0.3;
}

.logo {
  width: 80px;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.answer:hover .button {
  opacity: 0.3;
}

.answer:hover .logo {
  opacity: 1;
}

.answer:active .logo {
  width: 10%;
}

.ytvideo {
  border: none;
  margin-left: 25%;
  width: 420px;
  height: 345px;
}

.titleCategory,
.descriptCategory {
  color: #f4f4efff;
  font-family: Roboto, sans-serif;
  margin-bottom: 5px;
  font-size: 18px;
}

.titleCategory {
  font-weight: 600;
}

.registrationDescript {
  color: #ef6f6cff;
  font-family: Roboto, sans-serif;
  margin-bottom: 5px;
  font-size: 24px;
  font-weight: 600;
  margin-top: 80px;
}

.redButton {
  background-color: #a3333dff;
  color: #f4f4efff;
  padding: 20px;
  border-radius: 10%;
  font-family: Roboto, sans-serif;
  margin-bottom: 5px;
  font-size: 28px;
  font-weight: 600;
  margin-top: 40px;
  margin-left: 40%;
}

.save {
  margin-left: 50%;
}

h6 {
  font-size: 50px;
  text-align: center;
  margin-left: 100px;
  color: #f4f4efff;
  font-family: Roboto, sans-serif;
  margin-top: 130px;
}

.registrationWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.theme--light.v-application {
  background: none;
}

.input-wraper {
  width: 600px;
}

.registrationForm {
  margin: 30px 25% 0 32%;
}

@media (max-width: 800px) {
  .cross {
    width: 40px;
    position: absolute;
    right: 20px;
    top: 70px;
  }

  .circle {
    margin: 120px 0 0px -20px;
  }

  .inCircle {
    width: 90px;
    height: 90px;
    font-size: 20px;
  }
  .outCircle {
    width: 110px;
    height: 110px;
    font-size: 20px;
  }
  .test {
    margin: 0px 8% 0 5%;
  }
  .wrapper {
    margin-top: -90px;
    margin-left: 0;
    margin-right: 0;
  }

  .question {
    margin-top: -25px;
  }

  .question,
  .button {
    font-size: 16px;
  }
  .answers {
    margin-top: 30px;
  }
  p + p {
    margin-top: 10px;
  }
  .button02 {
    height: 50px;
    display: flex;
    justify-content: center;
  }

  .ytvideo {
    width: 220px;
    height: 145px;
  }
}
</style>
