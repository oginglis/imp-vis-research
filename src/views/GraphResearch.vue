<template>
  <div class="about">
    <Plotly :data="data5" :layout="layout5" :display-mode-bar="false"></Plotly>
    <Plotly :data="data1" :layout="layout1" :display-mode-bar="false"></Plotly>
    <input type="range" min="0" max="100" step="1"  >
    <input type="number" v-model="value"/>
    <Plotly :data="data2" :layout="layout2" :display-mode-bar="false"></Plotly>
    <input type="range" min="0" max="100" step="1"  >
    <input type="number" v-model="value"/>
    <Plotly class="last" :data="data6" :layout="layout6" :display-mode-bar="false"></Plotly>
  </div>
</template>

<script>
// @ is an alias to /src

import { Plotly } from 'vue-plotly';
import ribbon from '@/assets/ribbon.json';

export default {
  name: 'GraphResearch',
  components: {
    Plotly,
  },
  mounted() {
    const a = [];
    const b = [];
    const c = [];
    let i;
    let e;
    let f;
    let g;

    for (i = 0; i < 50; i += 1) {
      e = Math.random();
      a.push(e);

      f = Math.random();
      b.push(f);

      g = Math.random();
      c.push(g);
    }
    // Plotting the mesh
    this.data6 = [
      {
        opacity: 0.8,
        color: 'rgb(300,100,200)',
        type: 'mesh3d',
        x: a,
        y: b,
        z: c,
      },
    ];
    const trace1 = {
      x: ribbon.data[0].x,
      y: ribbon.data[0].y,
      z: ribbon.data[0].z,
      name: '',
      colorscale: ribbon.data[0].colorscale,
      type: 'surface',
      showscale: false,
    };
    const trace2 = {
      x: ribbon.data[1].x,
      y: ribbon.data[1].y,
      z: ribbon.data[1].z,
      name: '',
      colorscale: ribbon.data[1].colorscale,
      type: 'surface',
      showscale: false,
    };
    const trace3 = {
      x: ribbon.data[2].x,
      y: ribbon.data[2].y,
      z: ribbon.data[2].z,
      colorscale: ribbon.data[2].colorscale,
      type: 'surface',
      showscale: false,
    };
    const trace4 = {
      x: ribbon.data[3].x,
      y: ribbon.data[3].y,
      z: ribbon.data[3].z,
      colorscale: ribbon.data[3].colorscale,
      type: 'surface',
      showscale: false,
    };
    const trace5 = {
      x: ribbon.data[4].x,
      y: ribbon.data[4].y,
      z: ribbon.data[4].z,
      colorscale: ribbon.data[4].colorscale,
      type: 'surface',
      showscale: false,
    };
    const trace6 = {
      x: ribbon.data[5].x,
      y: ribbon.data[5].y,
      z: ribbon.data[5].z,
      colorscale: ribbon.data[5].colorscale,
      type: 'surface',
      showscale: false,
    };
    const trace7 = {
      x: ribbon.data[6].x,
      y: ribbon.data[6].y,
      z: ribbon.data[6].z,
      name: '',
      colorscale: ribbon.data[6].colorscale,
      type: 'surface',
      showscale: false,
    };
    this.data5 = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];
    this.layout5 = {
      title: 'Ollie 3D Chart Example',
      showlegend: false,
      width: 800,
      height: 800,
      scene: {
        xaxis: { title: 'Transformation Team' },
        yaxis: { title: 'Ollie' },
        zaxis: { title: 'Hywel' },
      },
    };
  },
  data() {
    return {
      data6: [],
      data5: [],
      layout5: {},
      value: 50,
      data1: [{
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter',
      }],
      layout1: {
        title: 'Ollie Simple Graph One',
      },
      data2: [{
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'bar',
      }],
      layout2: {
        title: 'Ollie Simple Graph Two',
      },
      data3: [{
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'pie',
      }],
      layout3: {
        title: 'Graph Three',
      },
      data4: [{
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'pie',
      }],
      layout4: {
        title: 'Graph Four',
      },
    };
  },
};
</script>

<style scoped>
.last {
  width: 100vw;
  height: 800px;
}
</style>
