<template>
  <section class="container-main__item panel item-box">
    <h2>Result Box</h2>
    <div class="item-box__container">
      <p class="image-box__picture">
        <img class="image-box__image"
             :src="getSelectedTrack.artwork_url | imageSize('500x500')"
             alt="Description">
      </p>
      <div class="image-box__player"></div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'itemBox',
  computed: {
    ...mapGetters(['getSelectedTrack'])
  }
}
</script>
