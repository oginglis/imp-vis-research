<template>
  <div class="hello">
    <h1>Chart Oneeeee</h1>
    <div id="chart"></div>
    <h1>under div</h1>
  </div>
</template>

<script>
import * as d3 from 'd3';
import dataset from '@/assets/linedata.json';

export default {
  name: 'ChartOne',
  props: {
  },
  mounted() {
    console.table(dataset);
    this.init();
  },
  data() {
    return {
      width: 750,
      height: 400,
      margin: {
        top: 50,
        right: 50,
        left: 50,
        bottom: 50,
      },
    };
  },
  methods: {
    init() {
      const svg = d3.select('#chart')
        .append('svg')
        .attr('width', this.width)
        .attr('height', this.height)
        .append('g')
        .style(
          'transform',
          `translate(${this.margin.left}px, ${this.margin.top}px)`,
        );
      d3.scaleLinear()
        .domain([40, 100]);

      console.log(svg);
      // d3.json(dataset[0],
      //   (d) => ({ month: d[0], perc: d[2] }),
      //   (data) => {
      //     const x = d3.scaleTime()
      //       .domain(d3.extent(data, (d) => d[0]))
      //       .range([0, this.width]);
      //     svg.append('g')
      //       .attr('transform', `translate(0,"${this.height}")`)
      //       .call(d3.axisBottom(x));
      //   });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
