<template>

  <main class="page-main">

    <div class="page-main__wrapper container-main">
      <search-box></search-box>
      <item-box></item-box>
      <history-box></history-box>
    </div>

  </main>

</template>

<script>
import searchBox from '../components/searchBox'
import itemBox from '../components/itemBox'
import historyBox from '../components/historyBox'

export default {
  name: 'searchPage',
  components: {
    searchBox,
    itemBox,
    historyBox
  }
}
</script>
