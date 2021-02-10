<template>
  <div class="about">
    <p>This is a 3d interactive version of Monika's animation. The student can interactive with the 3d model on their own. Work in progress.</p>
    <three-2 />

  </div>
</template>

<script>
// @ is an alias to /src

import Three2 from '@/components/Three2.vue';


export default {
  name: 'Three',
  components: {

    Three2
  },
};
</script>

<style scoped>

.logo {
  width: 10vw;
}
</style>
