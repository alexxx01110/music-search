<template>
  <section class="container-main__item panel item-box">
    <h2>Result Box</h2>
    <!--<transition name="item-box__container">-->

      <div v-if="getSelectedTrack" class="item-box__container">

        <transition name="fade-out" mode="out-in">

          <div class="item-box__wrapper" :key="showed">

            <p class="image-box__picture">

              <img class="image-box__image"
                   :src="getSelectedTrack.artwork_url | imageSize('500x500')"
                   alt="Description">

            </p>

            <div class="image-box__player">
              <audio ref="audio" controls>
                <source :src="getSelectedTrack.stream_url_secret" type="audio/mpeg">
                Your browser does not support the audio element.
              </audio>
            </div>

          </div>

        </transition>

      </div>

    <!--</transition>-->
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      transitionName: 'item-box__container--fade-in',
      showed: true
    }
  },
  name: 'itemBox',
  computed: {
    ...mapGetters(['getSelectedTrack'])
  },
  watch: {
    getSelectedTrack: function () {
      this.showed = !this.showed
      // this.transitionName = 'item-box__container--fade-out'
      // this.transitionName = 'item-box__container--fade-in'
      if (this.$refs.audio) {
        this.$refs.audio.load()
        // this.$refs.audio.play()
      }
    }
  }
}
</script>
