<template>
  <div class="about">
    <h1>Three JS JavaScript Library has been added to this page</h1>
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
