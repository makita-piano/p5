<template>
  <div id="app">
  </div>
</template>

<script>
import RotateBox from "../components/RotateBox";

export default {
  name: "index",
  components: {
    RotateBox
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#defaultCanvas0 {
  margin: auto;
  width: 100% !important;
  max-width: 320px !important;
}

main {
  display: flex;
}

#canvas {
  margin: auto;
  width: 100% !important;
  max-width: 320px !important;
}
</style>