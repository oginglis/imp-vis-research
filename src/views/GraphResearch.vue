<template>
  <div class="about">
    <Plotly :data="data1" :layout="layout1" :display-mode-bar="false"></Plotly>
    <input type="range" min="0" max="100" step="1"  >
    <input type="number" v-model="value"/>
    <Plotly :data="data2" :layout="layout2" :display-mode-bar="false"></Plotly>
    <input type="range" min="0" max="100" step="1"  >
    <input type="number" v-model="value"/>
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
      value: 50,
      data1: [{
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter',
      }],
      layout1: {
        title: 'Graph One',
      },
      data2: [{
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'bar',
      }],
      layout2: {
        title: 'Graph Two',
      },
    };
  },
};
</script>
