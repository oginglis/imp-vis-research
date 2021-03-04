<template>
  <div class="about">
    <p>
    1) can we add on both animations a vector along z to denote the wmega vector? so that it appears to the left of the wmega symbol
    and 2) and can we do a vector for the velocity of point B too? so that it is also tangent to its circular motion
</p>
    <iframe src="https://player.vimeo.com/video/515639286" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/515639286">Animation</a> from <a href="https://vimeo.com/twinldn">TWIN</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
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
