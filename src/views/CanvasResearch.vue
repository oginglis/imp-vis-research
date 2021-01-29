<template>
  <div class="about">
    <Canvas/>
  </div>
</template>

<script>
import Canvas from '@/components/Canvas.vue';

export default {
  name: 'Home',
  components: {
    Canvas,
  },
};
</script>

<style scoped>

.logo {
  width: 20vw;
}
</style>
