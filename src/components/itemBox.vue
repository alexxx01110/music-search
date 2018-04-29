<template>
  <section class="container-main__item panel item-box">
    <div class="item-box__header">
      <h2>Result Box</h2>
      <div class="item-box__checkbox-group">
        <div class="item-box__checkbox checkbox-box">
          <input type="checkbox"
                 name="sequential-playback"
                 class="visually-hidden"
                 id="sequential-playback">
          <label for="sequential-playback">
            <span class="checkbox-box__indicator"></span>
            Sequential playback
          </label>
        </div>
      </div>
    </div>
    <transition name="bounce">

      <div v-if="getSelectedTrack" class="item-box__container">

        <transition name="fade-out" mode="out-in">

          <div class="item-box__wrapper" :key="showed">

            <p class="item-box__picture">

              <img class="item-box__image"
                   :src="getSelectedTrack.artwork_url | imageSize('500x500')"
                   alt="Description">

            </p>

            <div class="item-box__player">
              <audio ref="audio"
                     @ended="nextTrack"
                     controls
                     autoplay>
                <source :src="getSelectedTrack.stream_url_secret" type="audio/mpeg">
                Your browser does not support the audio element.
              </audio>
            </div>

          </div>

        </transition>

      </div>

    </transition>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
  methods: {
    ...mapActions(['toNextTrack']),
    nextTrack () {
      this.toNextTrack()
    }
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
