<template>
  <div class="about">
    <p>This is the 3d component from Matt Eaton's project. This will be altered shortly.</p>
    <ThreeTest />
  </div>
</template>

<script>
// @ is an alias to /src
import ThreeTest from '@/components/Three.vue';



export default {
  name: 'Three',
  components: {
    ThreeTest,
  },
};
</script>

<style scoped>

.logo {
  width: 10vw;
}
</style>
