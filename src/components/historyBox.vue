<template>
  <section class="container-main__item panel history-box">
    <h2>User history</h2>

    <transition-group class="history-box__list" name="list-complete" tag="ul">

      <li class="history-box__item"
          v-for="(query, index) of getUserHistory"
          :key="index + query">
          <a class="history-box__link" @click="searchFromHistory(query)">{{ query }}</a>
      </li>

    </transition-group>

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
