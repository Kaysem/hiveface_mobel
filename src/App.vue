<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
    };
  },
  mounted: function () {
  },
  methods: {
  },
  watch: {
  }
};
</script>
<style>
  body,html {
    margin:0;
    padding:0;
    width: 100%;
    height:100%;
    background:#01061e;
    color: #fff !important;
    background-color: #f5f5f5;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    height:100%;
    width:100%;
  }
</style>
