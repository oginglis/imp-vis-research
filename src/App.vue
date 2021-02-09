<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Lottie Animations</router-link> |
      <router-link to="/CanvasResearch">Canvas Research</router-link> |
      <router-link to="/GraphResearch">Plotly Research</router-link> |
      <router-link to="/ThreeResearch">Three Research</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #003F7A;
}
</style>
