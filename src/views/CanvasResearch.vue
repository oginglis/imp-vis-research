<template>
  <div class="about">
    <p>These are two interactive canvas components. With more development, you can add and load SVG images to interact with. The below canvas elements are written in P5.</p>
    <Canvas3 />
    <p>Slide slider to right to increase osicillation velocity</p>
    <Canvas2 :posX="posX" :posY="posY"/>
    <p>Slide sliders to right transform in X and Y axis</p>
    <h3> x:{{posX}}  <input type="range" min="0" max="400" v-model="posX"/></h3>
    <h3>y:{{posY}}   <input type="range" min="0" max="400" v-model="posY"/></h3>
  </div>
</template>

<script>

import Canvas2 from '@/components/Canvas2.vue';
import Canvas3 from '@/components/Canvas3.vue';

export default {
  name: 'Home',
  data() {
    return {
      posX: 150,
      posY: 150,
      onOff: true,
    };
  },
  components: {
    Canvas2,
    Canvas3,
  },
};
</script>

<style scoped>

.logo {
  width: 20vw;
}
</style>
