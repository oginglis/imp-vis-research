<template>
  <div class="about">
    <Canvas3 />
    <input type="button" value="Click to Oscillate">
    <Canvas :onOff="onOff"/>
    <h3> x:{{posX}}  <input type="range" min="0" max="400" v-model="posX"/></h3>
    <h3>y:{{posY}}   <input type="range" min="0" max="400" v-model="posY"/></h3>
    <Canvas2 :posX="posX" :posY="posY"/>
  </div>
</template>

<script>
import Canvas from '@/components/Canvas.vue';
import Canvas2 from '@/components/Canvas2.vue';
import Canvas3 from '@/components/Canvas3.vue';

export default {
  name: 'Home',
  data() {
    return {
      posX: 150,
      posY: 150,
      onOff: false,
    };
  },
  components: {
    Canvas,
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
