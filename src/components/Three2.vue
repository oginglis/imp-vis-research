/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-param-reassign */
<template>
    <div id="container">

    </div>
</template>

<script>
import * as Three from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';
// import * as TWEEN from '@tweenjs/tween.js';

export default {
  name: 'Three2',
  props: {
    exploded: Boolean,
    simulating: Boolean,
  },
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      controls: null,
      container: null,
      geo: null,
      top: null,
      topLabel: null,
      bottom: null,
      bottomLabel: null,
      screen: null,
      screenLabel: null,
      right: null,
      rightLabel: null,
      left: null,
      leftLabel: null,
      front: null,
      frontLabel: null,
      labelRenderer: null,

    };
  },
  methods: {
    scaleCanvas() {
      this.camera.aspect(this.container.clientWidth, this.container.clientHeight);
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
      this.labelRenderer.setSize(this.container.clientWidth, this.container.clientHeight);
      this.camera.updateProjectMatrix();
    },
    init() {
      const container = document.getElementById('container');
      this.container = container;
      this.camera = new Three.PerspectiveCamera(70,container.clientWidth / container.clientHeight, 0.25, 20);
      this.camera.position.set(0, 0, 1);
      this.scene = new Three.Scene();
      const sceneObj = this.scene;

      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setClearColor(0x050505);
      this.renderer.setSize(container.clientWidth, container.clientHeight);

      // Change the colour encoding for the renderer
      this.renderer.outputEncoding = Three.sRGBEncoding;

      // Attach renderer to the DOM
      container.appendChild(this.renderer.domElement);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.maxDistance = 1.5;
      this.controls.minDistance = 1.3;
      this.controls.minAzimuthAngle = 3;
      this.controls.maxAzimuthAngle = 2;
      this.controls.target.set(0, 0, 0);
      this.controls.enablePan = false;
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = 0.1;
      this.controls.update();

      // Add a Light - point light required for materials
      const light = new Three.PointLight(0xffffff, 10, 100);
      light.position.set(1, 5, 20);
      this.scene.add(light);
      const light2 = new Three.PointLight(0xffffff, 10, 100);
      light2.position.set(-4, 5, -20);
      this.scene.add(light2);
      const light3 = new Three.PointLight(0xffffff, 10, 100);
      light3.position.set(4, 5, -20);
      this.scene.add(light3);
      // Instantiate a loader
      const loader = new GLTFLoader();

      // Label Renderer

      this.labelRenderer = new CSS2DRenderer();
      this.labelRenderer.setSize(container.clientWidth, container.clientHeight);
      this.labelRenderer.domElement.style.position = 'absolute';
      this.labelRenderer.domElement.style.top = '0px';
      this.labelRenderer.domElement.style.pointerEvents = 'none';
      container.appendChild(this.labelRenderer.domElement);

      const self = this;

      // Load FRONT model
      loader.load(
        // resource URL
        './axis.gltf',
        // called when the resource is loaded
        (gltf) => {
          gltf.scene.scale.set(0.3, 0.3, 0.3);
          // eslint-disable-next-line no-param-reassign
          gltf.scene.position.x = 0.2;
          const text = document.createElement('div');
          text.className = 'label';
          text.style.color = 'rgb(220,220,220)';
          text.style.fontFamily = 'Avenir';
          text.style.backgroundColor = 'rgb(255, 153, 51';
          text.textContent = 'Click for more information';
          text.style.borderRadius = '0';
          text.style.padding = '10px';
          text.style.opacity = '0';

          self.frontLabel = new CSS2DObject(text);
          self.frontLabel.position.z = 0.17;
          self.frontLabel.position.x = 0.1;
          sceneObj.add(gltf.scene);
          sceneObj.add(self.frontLabel);
          self.front = gltf.scene;
        },
        // called while loading is progressing
        (xhr) => {
          console.log(`${xhr.loaded / xhr.total * 100}% loaded`);
        },
        // called when loading has errors
        (error) => {
          console.log(error);
          console.log(`An error happened ${error}`);
        },
      );



    },
    animate() {
      requestAnimationFrame(this.animate);
      this.controls.update();

      this.renderer.render(this.scene, this.camera);
      this.labelRenderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
  created() {
    window.addEventListener('resize', this.scaleCanvas);
  },
  destroyed() {
    window.removeEventListener('resize', this.scaleCanvas);
  },
  watch: {
    exploded(newVal) { // watch it
      if (newVal === true) {
        console.log(this.top);
        this.top.position.y = 0.2;
        this.right.position.x = 0.4;
        this.bottom.position.y = -0.2;
        this.left.position.x = 0;
        this.screen.position.z = 0.2;

        // Reveal all labels
        const allLabels3 = [...document.querySelectorAll('.label')];
        allLabels3.forEach((label) => {
          // eslint-disable-next-line no-param-reassign
          label.style.opacity = '1';
        });
      } else if (newVal === false) {
        this.top.position.y = 0;
        this.top.position.y = 0;
        this.right.position.x = 0.2;
        this.bottom.position.y = 0;
        this.left.position.x = 0.2;
        this.screen.position.z = 0;

        const allLabels4 = [...document.querySelectorAll('.label')];
        allLabels4.forEach((label) => {
          // eslint-disable-next-line no-param-reassign
          label.style.opacity = '0';
        });
      }
    },
    simulating(newVal) { // watch it
      if (newVal === true) {
        // Re-Assemble Geo
        if (this.exploded === false) {
          this.top.position.y = -0.5;
          this.back.position.y = -0.5;
          this.right.position.y = -0.5;
          this.bottom.position.y = -0.5;
          this.left.position.y = -0.5;
          this.screen.position.y = -0.5;
          this.front.position.y = -0.5;
          this.top.position.x = 0.5;
          this.back.position.x = 0.5;
          this.right.position.x = 0.5;
          this.bottom.position.x = 0.5;
          this.left.position.x = 0.5;
          this.screen.position.x = 0.5;
          this.front.position.x = 0.5;

          this.screen.scale.set(0.7, 0.7, 0.7);

          this.front.scale.set(0.7, 0.7, 0.7);
          this.back.scale.set(0.7, 0.7, 0.7);
          this.left.scale.set(0.7, 0.7, 0.7);
          this.right.scale.set(0.7, 0.7, 0.7);
          this.top.scale.set(0.7, 0.7, 0.7);
          this.bottom.scale.set(0.7, 0.7, 0.7);
          this.controls.reset();
          this.controls.enablePan = true;
          this.controls.autoRotate = false;
          this.controls.autoRotateSpeed = 0.1;

          this.screen.rotation.y = Math.atan2(((this.camera.position.x + 0.2) - this.screen.position.x), (this.camera.position.z - this.screen.position.z));
          this.front.rotation.y = Math.atan2(((this.camera.position.x + 0.2) - this.front.position.x), (this.camera.position.z - this.front.position.z));
          this.back.rotation.y = Math.atan2(((this.camera.position.x + 0.2) - this.back.position.x), (this.camera.position.z - this.back.position.z));
          this.left.rotation.y = Math.atan2(((this.camera.position.x + 0.2) - this.left.position.x), (this.camera.position.z - this.left.position.z));
          this.right.rotation.y = Math.atan2(((this.camera.position.x + 0.2) - this.right.position.x), (this.camera.position.z - this.right.position.z));
          this.bottom.rotation.y = Math.atan2(((this.camera.position.x + 0.2) - this.bottom.position.x), (this.camera.position.z - this.bottom.position.z));
          this.top.rotation.y = Math.atan2(((this.camera.position.x + 0.2) - this.top.position.x), (this.camera.position.z - this.top.position.z));

          // Hide all Labels
          const allLabels = [...document.querySelectorAll('.label')];
          allLabels.forEach((label) => {
            // eslint-disable-next-line no-param-reassign
            label.style.opacity = '0';
          });
        }
      } else if (newVal === false) {
        this.screen.scale.set(0.3, 0.3, 0.3);
        this.front.scale.set(0.3, 0.3, 0.3);
        this.back.scale.set(0.3, 0.3, 0.3);
        this.left.scale.set(0.3, 0.3, 0.3);
        this.right.scale.set(0.3, 0.3, 0.3);
        this.top.scale.set(0.3, 0.3, 0.3);
        this.bottom.scale.set(0.3, 0.3, 0.3);
        this.top.position.y = 0;
        this.back.position.y = 0;
        this.right.position.y = 0;
        this.bottom.position.y = 0;
        this.left.position.y = 0;
        this.screen.position.y = 0;
        this.front.position.y = 0;
        this.top.position.x = 0.2;
        this.back.position.x = 0.2;
        this.right.position.x = 0.2;
        this.bottom.position.x = 0.2;
        this.left.position.x = 0.2;
        this.screen.position.x = 0.2;
        this.front.position.x = 0.2;

        this.controls.maxDistance = 1.5;
        this.controls.minDistance = 1.3;
        this.controls.minAzimuthAngle = 3;
        this.controls.maxAzimuthAngle = 2;
        this.controls.target.set(0, 0, 0);
        this.controls.enablePan = false;
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 0.1;
        this.controls.update();

        this.top.position.z = 0;
        this.back.position.z = 0;
        this.right.position.z = 0;
        this.bottom.position.z = 0;
        this.left.position.z = 0;
        this.screen.position.z = 0;
        this.front.position.z = 0;
        // Start Panning
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 0.1;
        this.controls.update();
        this.camera.position.set(0, 0, 1);

        // Reveal all Labels
        const allLabels2 = [...document.querySelectorAll('.label')];
        allLabels2.forEach((label) => {
          // eslint-disable-next-line no-param-reassign
          label.style.opacity = '0';
        });
      }
    },

  },
};
</script>

<style scoped>
 #container{
   height: 80vh;
 }
  .explode-check {
    position: absolute;
    color: white;
    top: 10%;
  }
  .simulate-check {
    position: absolute;
    color: white;
    top: 20%;
  }
</style>
