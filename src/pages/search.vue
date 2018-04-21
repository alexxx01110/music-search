<template>

  <main class="page-main">

    <div class="page-main__wrapper container-main">
      <search-box></search-box>
      <image-box></image-box>
      <history-box></history-box>
    </div>

  </main>

</template>

<script>
import searchBox from '../components/searchBox'
import imageBox from '../components/imageBox'
import historyBox from '../components/historyBox'

export default {
  name: 'searchPage',
  components: {
    searchBox,
    imageBox,
    historyBox
  }
}
</script>
