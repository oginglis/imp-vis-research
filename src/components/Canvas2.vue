<template>
  <div id="canvas2"></div>
</template>

<script>
import P5 from 'p5';

export default {
  name: 'Canvas2',
  props: {
    posX: Number,
    posY: Number,
  },
  data() {
    return {
    };
  },
  mounted() {
    const sketch2 = (p5) => {
      // These are your typical setup() and draw() methods
      /* eslint-disable no-param-reassign */

      p5.setup = () => {
        p5.createCanvas(800, 400);
        p5.frameRate(60);
      };

      p5.draw = () => {
        p5.background(255, 200, 0);
        p5.noStroke();
        p5.fill('red');
        p5.ellipse(this.posX, this.posY, 100);
      };
    };

    // Attach the canvas to the div
    /* eslint-disable no-new */
    new P5(sketch2, 'canvas2');
  },
};
</script>

<style></style>
