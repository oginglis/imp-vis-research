<template>
  <div id="canvas3"></div>
</template>

<script>
import P5 from 'p5';
import image from '@/assets/pisa.png';

export default {
  name: 'Canvas3',
  props: {
    posX: Number,
    posY: Number,
  },
  data() {
    return {
      onOff: false,
      image,
    };
  },
  mounted() {
    const sketch3 = (p5) => {
      // These are your typical setup() and draw() methods
      /* eslint-disable no-param-reassign */
      let cnv2;

      p5.preload = () => {
        this.img = p5.loadImage(this.image);
      };
      const toggleVibrate2 = () => {
        if (this.onOff === true) {
          this.onOff = false;
        } else {
          this.onOff = true;
        }
      };
      p5.setup = () => {
        cnv2 = p5.createCanvas(800, 400);
        this.onOff = false;
        cnv2.mouseClicked(toggleVibrate2);
        p5.slider = p5.createSlider(0, 255, 0, p5.sin());
        p5.slider.position(10, 10, 'initial');
        p5.slider.style('width', '80px');
        p5.image(this.img, 500, 5000);
      };

      p5.draw = () => {
        p5.background(200);
        const millisecond = p5.millis();
        if (this.onOff === true) {
          p5.translate(p5.slider.value() * p5.sin(millisecond), 0);
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
    new P5(sketch3, 'canvas3');
  },
};
</script>

<style></style>
