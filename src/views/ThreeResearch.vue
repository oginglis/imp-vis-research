<template>
  <div class="about">

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
