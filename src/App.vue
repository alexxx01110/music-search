<template>
  <div id="app">
    <page-header></page-header>
    <router-view/>
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageHeader from './components/pageHeader'
import pageFooter from './components/pageFooter'
export default {
  name: 'App',
  components: {
    pageHeader,
    pageFooter
  }

}
</script>

<style lang="scss">
  @import "assets/scss/main.scss";
</style>
