<template>
  <div id="canvas"></div>
</template>

<script>
import P5 from 'p5';

export default {
  name: 'Canvas',
  props: {
    onOff: Boolean,
  },
  data() {
    return {

      p5canvas: {
      },
    };
  },
  mounted() {
    const sketch = (p5) => {
      // These are your typical setup() and draw() methods
      /* eslint-disable no-param-reassign */
      let cnv;
      const toggleVibrate = () => {
        if (this.onOff === true) {
          this.onOff = false;
        } else {
          this.onOff = true;
        }
      };
      p5.setup = () => {
        cnv = p5.createCanvas(800, 400);
        this.onOff = false;
        cnv.mouseClicked(toggleVibrate);
      };

      p5.draw = () => {
        p5.background(200);
        if (this.onOff === true) {
          p5.translate(p5.random(-5, 5), p5.random(-5, 5));
        }
        const c = p5.color(255, 204, 0);
        p5.fill(c);
        p5.rect(120, 199, 10, 200);
        const d = p5.color(255, 104, 0);
        p5.fill(d);
        p5.rect(230, 199, 10, 200);
        const e = p5.color(25, 104, 0);
        p5.fill(e);
        p5.rect(130, 199, 100, 10);
      };
    };

    // Attach the canvas to the div
    /* eslint-disable no-new */
    new P5(sketch, 'canvas');
  },
};
</script>

<style></style>
