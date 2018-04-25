<template>
  <section class="container-main__item panel history-box">
    <h2>User history</h2>
    <ul class="history-box__list">
      <li class="history-box__item"
          v-for="(query, index) of getUserHistory" :key="index">
        <a class="history-box__link" @click="searchFromHistory(query)">{{ query }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'historyBox',
  methods: {
    ...mapActions(['loadUserHistory', 'searchFromHistory'])
  },
  computed: {
    ...mapGetters(['getUserHistory'])
  },
  created () {
    this.loadUserHistory()
  }
}
</script>
