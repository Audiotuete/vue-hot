
<template>
  <div id="app">
    <router-view name='navbar'></router-view>
    <router-view></router-view>
    <router-view name='impressum'></router-view>
  </div>
</template>

<script>


export default {

  name: 'app',
  components: {},
  data () {
    return {}
  } 
}

</script>

<style lang="scss">

body {
  background-color: #f7f7f7;
  margin: 0;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  font-family: 'Open Sans';
  font-size: 2rem;

  a {
  color: black;
  cursor: default;
  text-decoration: none;
}
}

iframe {
  position: absolute;
  pointer-events:none;
  width: calc(95% * 1);
  height: calc(97% * 1);
  .ytp-button {
    display: none;
  }



}
</style>
