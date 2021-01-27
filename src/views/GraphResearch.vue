<template>
  <div class="about">
    <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
  </div>
</template>

<script>
// @ is an alias to /src

import { Plotly } from 'vue-plotly';

export default {
  name: 'Graph Research',
  components: {
    Plotly,
  },
  data() {
    return {
      data: [{
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter',
      }],
      layout: {
        title: 'Graph One',
      },
    };
  },
};
</script>
