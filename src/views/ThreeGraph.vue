<template>
  <div class="about">
    <p>This is a 3d interactive version of Monika's animation. The student can interactive with the 3d model on their own. Work in progress.</p>
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
