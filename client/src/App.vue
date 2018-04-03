<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>

import Header from './components/header/index'
import Footer from './components/footer/index'
export default {
  components:{
    'app-header' : Header,
    'app-footer' : Footer,
  },
  name: 'App'
}
</script>

<style>

</style>
