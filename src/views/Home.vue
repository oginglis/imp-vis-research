<template>
  <div class="home">
    <HelloWorld msg="Interactive Visualisations Research"/>
    
    <button style="height: 30px; margin: 5px;" v-on:click="counter = 0">THROW BALL</button>
    <button style="height: 30px; margin: 5px;" v-on:click="counter = 1">DROP BALL</button>
    <button style="height: 30px; margin: 5px;" v-on:click="counter = 2">BOUNCE BALL</button>


      <vLottiePlayer key="throw" v-if="counter === 0" :animationData="animationJSON1" @animControl: :width="600"  :loop="true"/>

      <vLottiePlayer key="drop" v-else-if="counter === 1" :animationData="animationJSON2" @animControl: :width="600"  :loop="true"/>

      <vLottiePlayer key="bounce" v-else-if="counter === 2" :animationData="animationJSON3" @animControl: :width="600"  :loop="true" :controls="true"/>
      <p class="cavet">The buttons above toggle between different canvas animations exported from After Effects. A program called Lottie changes the video animations into cavnas/svg animations. This webplayer allows you to access information like frame number / animation progress, which in turn can be linked to sliders and graphs.</p>
      <vLottiePlayer key="idris" :animationData="idris" @animControl: :width="6400"  :loop="true"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import firstanimation from '@/assets/firstanimation.json';
import secondanimation from '@/assets/DropBall.json';
import thirdanimation from '@/assets/BounceBall.json';
import idrisanimation from '@/assets/idris.json';
import VueLottiePlayer from "vue-lottie-player";


export default {
  name: 'Home',
  components: {
    HelloWorld,
    vLottiePlayer: VueLottiePlayer,
  },
  data(){
    return {
      animationJSON1: firstanimation,
      animationJSON2: secondanimation,
      animationJSON3: thirdanimation,
      idris: idrisanimation,
      counter: 0,
    }
  }
};
</script>

<style scoped>

.logo {
  width: 10vw;
}

.cavet{
  margin: 60 auto;
}

</style>
