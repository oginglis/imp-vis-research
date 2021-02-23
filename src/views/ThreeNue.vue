<template>
  <div class="about">
    <p>You can use make CAD models interactive using THREE JS</p>
    <Three3 />
  </div>
</template>

<script>
// @ is an alias to /src
import Three3 from '@/components/Three3.vue';



export default {
  name: 'Three',
  components: {
    Three3,
  },
};
</script>

<style scoped>

.logo {
  width: 10vw;
}
</style>
