
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
  background-color: #fff;
  margin: 0;
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
