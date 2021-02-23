<template>
  <div id="canvas4"></div>
</template>

<script>
import P5 from 'p5';


export default {
  name: 'Canvas4',
  props: {
    mass: Number,
    ballRadius: Number,
  },
  data() {
    return {

    };
  },
  mounted() {
    const sketch3 = (p5) => {
        
        function Pendulum(origin_, r_, ballRad) {
            this.origin = origin_.copy();
            this.position = p5.createVector();
            this.r = r_;
            this.angle = Math.PI/4;

            this.aVelocity = 0.0;
            this.aAcceleration = 0.0;
            this.damping = 0.995;   // Arbitrary damping
            this.ballr = ballRad;      // Arbitrary ball radius

            this.go = function() {
                this.update();
                this.display();
            };

            // Function to update position
            this.update = function() {
                var gravity = 0.4;                                               // Arbitrary constant
                this.aAcceleration = (-1 * gravity / this.r) * p5.sin(this.angle);  // Calculate acceleration (see: http://www.myphysicslab.com/pendulum1.html)
                this.aVelocity += this.aAcceleration;                            // Increment velocity
                this.aVelocity *= this.damping;                                  // Arbitrary damping
                this.angle += this.aVelocity;                                    // Increment angle
            };

            this.display = function() {
                this.position.set(this.r*p5.sin(this.angle), this.r*p5.cos(this.angle), 0);         // Polar to cartesian conversion
                this.position.add(this.origin);                                               // Make sure the position is relative to the pendulum's origin

                p5.stroke(255);
                p5.strokeWeight(2);
                // Draw the arm
                p5.line(this.origin.x, this.origin.y, this.position.x, this.position.y);
                p5.ellipseMode(p5.CENTER);
                p5.fill(127);
                // Draw the ball
                p5.ellipse(this.position.x, this.position.y, this.ballr, this.ballr);
            };
        }
      // These are your typical setup() and draw() methods
      /* eslint-disable no-param-reassign */
      let p;
      

      
      p5.setup = () => {
        p5.createCanvas(800, 400);
        p = new Pendulum(p5.createVector(p5.width/2,0),175, this.ballRadius);
        
      };

      p5.draw = () => {
        p5.background(200);
        p.go();
      };
    };

    // Attach the canvas to the div
    /* eslint-disable no-new */
    new P5(sketch3, 'canvas4');
  },
};
</script>

<style></style>
