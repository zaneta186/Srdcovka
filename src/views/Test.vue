<template>
  <div class="wrapper">
    <circle-with-percent v-bind:id="data[i].id" />
    <router-link to="/">
      <cross />
    </router-link>

    <test-text
      v-if="data[i].type === 'text'"
      v-bind:answers="data[i].answers"
      v-bind:url="data[i].media.url"
      v-bind:question="data[i].question"
      v-bind:description="data[i].description"
      v-on:addPoints="addPoints($event)"
    />

    <test-select
      v-if="data[i].type === 'select'"
      v-bind:answers="data[i].answers"
      v-bind:question="data[i].question"
      v-bind:description="data[i].description"
      v-on:addPoints="addPoints($event)"
    />

    <test-button
      v-if="data[i].type === 'button'"
      v-bind:answers="data[i].answers"
      v-bind:question="data[i].question"
      v-bind:description="data[i].description"
      v-on:addPoints="addPoints($event)"
    />

    <test-slider
      v-if="data[i].type === 'slider'"
      v-bind:question="data[i].question"
      v-on:addPrice="addPrice($event)"
    />
  </div>
</template>

<script>
import Cross from "../components/Cross.vue";
import CircleWithPercent from "../components/CircleWithPercent.vue";
import Data from "./../assets/data/data.js";
import Result from "./../assets/data/result.js";
import TestText from "../components/TestText.vue";
import TestSelect from "../components/TestSelect.vue";
import TestButton from "../components/TestButton.vue";
import TestSlider from "../components/TestSlider.vue";

export default {
  components: {
    cross: Cross,
    circleWithPercent: CircleWithPercent,
    testText: TestText,
    testSelect: TestSelect,
    testButton: TestButton,
    testSlider: TestSlider
  },

  data() {
    return {
      i: 0,
      data: Data,
      result: Result[0]
    };
  },

  methods: {
    addPoints(categoryAnswer) {
      for (const category of categoryAnswer) {
        this.result[category] += 1;
      }
      this.i += 1;
      console.log(this.result);
    },

    addPrice(price) {
      this.result["prispevek"] = price;
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
  background-image: linear-gradient(to bottom, #00728f, #003f4e);
  color: #f7f7f2;
  text-align: left;
}

.cross {
  width: 90px;
  position: absolute;
  right: 60px;
  top: 100px;
}

.description {
  margin-bottom: 60px;
}
/* p + p {
  margin-top: 40px;
} */

.circle {
  margin: -50px 0 0 10%;
}

.inCircle {
  width: 350px;
  height: 350px;
  border-radius: 100%;
  background-image: linear-gradient(to bottom, #00728f, #003f4e);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  font-weight: 600;
}

.outCircle {
  width: 400px;
  height: 400px;
  background-image: linear-gradient(to bottom, #ef6f6c, #a3333d);
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
  font-weight: 300;
}

.answer {
  position: relative;
  padding: 20px 50px;
  font-size: 18px;
  line-height: 1.5;
  border: 1px solid #f7f7f2;
  border-radius: 15px;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
}

.button {
  margin-bottom: 20px;
  /* padding: 10px; */
  line-height: 1.5;
  color: #f7f7f2;
  font-size: 18px;
  display: block;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: left;
  text-align: left;
}

.button02 {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 125px;
  margin: 30px;
}

.answers02 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.logo {
  max-width: 100%;
  max-height: 100%;
  padding: 10px;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.logooznacene {
  opacity: 0.1;
}

.buttonOznaceny {
  background-color: #f7f7f2;
  color: #00728f;
  font-weight: 300;
}

.answeroznacene {
  background-color: #f7f7f2;
  color: #00728f;
  font-weight: 300;
}

.answer:hover {
  background-color: #f7f7f2;
  color: #00728f;
  font-weight: 300;
}

.answer:hover .button {
  color: #00728f;
  font-weight: 300;
}

.ytvideo {
  border: none;
  margin-left: 25%;
  width: 420px;
  height: 345px;
}

.theme--light.v-application {
  background: none;
}

.input-wraper {
  width: 600px;
}

.next {
  display: flex;
  justify-content: center;
  margin-top: 80px;
}

.slider {
  margin-top: 100px;
}

.v-slider__tick-label {
  color: #f7f7f2;
  font-size: 18px;
  font-family: Roboto, sans-serif;
}

.v-slider__tick {
  background-color: rgba(#a3333d, 0.555) !important;
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

  .v-slider__tick-label {
    font-size: 14px;
  }
}
</style>
