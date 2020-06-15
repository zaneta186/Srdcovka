<template>
  <div class="wrapper">
      <circle-with-percent v-bind:id="data.id" />
      <router-link to="/"><cross /></router-link>   

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
            v-for="(answer,id) in data.answers">
              <img src="./../assets/images/logo.png" alt="logo" class="logo">
              <button class="button" >{{answer.name}}</button>
            </div>

          </div>
          </router-link>
      </div>

  </div>
</template>

<script>
import Cross from '../components/Cross.vue'
import CircleWithPercent from '../components/CircleWithPercent.vue'
import Data from './../assets/data/data.js';

export default {

    components:{
        cross: Cross,
        circleWithPercent: CircleWithPercent,
    },

    data(){
        return{
            data: Data[0],
        }
    },

}
</script>

<style>

.wrapper {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
  background-image: linear-gradient(to bottom,#007391, #202E42);
  color: #f4f4efff;
  font-family: Montserrat, sans-serif;
  text-align: left;


}

.cross{
  width: 90px;
  position: absolute;
  right: 60px;
  top: 100px;
}

 
p + p{
  margin-top: 40px;
}

.circle{
  margin: -50px 0 0 10%;
}

.inCircle{
  width: 350px;
  height: 350px;
  border-radius: 100%;
  background-image: linear-gradient(to bottom,#007391, #202E42);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  font-weight: 600;
}

.outCircle{
  width: 400px;
  height: 400px;
  background-image: linear-gradient(to bottom, #ef6f6cff, #a3333dff);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  }

.test{
  margin: -130px 15% 0 22%
}


.question{
  font-size: 24px;
  font-weight: 700;
}

.answers{
  margin-top: 60px;
 
  }

.answer{
    position: relative;
    box-shadow: 5px 5px 4px #2a2f35;
    margin-bottom: 5px;
    
}

a {
    text-decoration: none;
}

.button{
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
  transition: .5s ease;
  backface-visibility: hidden;
  display: flex;
  justify-content: left;
  text-align: left;

}

.button02{
  text-align: center;
  height: 100px;
  width: 250px;
  margin: 30px;

}

.answers02{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.button08{
    padding: 30px;
    text-align: left;
}


.logo{
  width: 80px;
  transition: .5s ease;
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


 @media (max-width: 800px){
  .cross{
    width: 40px;
    position: absolute;
    right: 20px;
    top: 70px;
  }

  .circle{
    margin: 120px 0 0px -20px;

  }

  .inCircle{
    width: 90px;
    height: 90px;
    font-size: 20px;
  }
  .outCircle{
    width: 110px;
    height: 110px;
    font-size: 20px;
  }
      .test{
      margin: 0px 8% 0 5%;
    }
    .wrapper{
      margin-top: -90px;
      margin-left: 0;
      margin-right: 0;
    }

    .question{
        margin-top: -25px;
    }

  .question, .button{
      font-size: 16px;  
    }
  .answers{
    margin-top: 30px;
  }
  p + p{
  margin-top: 10px;
  }
  .button02{
  height: 50px;
  display: flex;
  justify-content: center;
  }

}


</style>
