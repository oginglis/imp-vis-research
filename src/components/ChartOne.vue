<template>
  <div class="hello">
    <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
  </div>
</template>

<script>
import { Plotly } from 'vue-plotly';

export default {
  name: 'ChartOne',
  components: {
    Plotly,
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      data: [{
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter',
      }],
      layout: {
        title: 'My graph',
      },
    };
  },
  methods: {
    init() {

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
