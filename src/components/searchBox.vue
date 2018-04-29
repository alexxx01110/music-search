<template>

  <section class="container-main__item panel search-box">
    <h2>Search form</h2>
    <p class="search-box__description">Please, type a search query:</p>
    <form class="search-box__form"
          @submit.prevent="search(query)">
      <!--<p class="search-box__checkbox-group">-->
        <!--<label class="search-box__checkbox">-->
          <!--<input class="visually-hidden"-->
                 <!--type="checkbox"-->
                 <!--name="by_album">-->
          <!--<span class="search-box__checkbox-indicator"></span>-->
          <!--By Album number-->
        <!--</label>-->
        <!--<label class="search-box__checkbox">-->
          <!--<input class="visually-hidden"-->
                 <!--type="checkbox"-->
                 <!--name="by_photo">-->
          <!--<span class="search-box__checkbox-indicator"></span>-->
          <!--By Album ID-->
        <!--</label>-->
      <!--</p>-->
      <div class="search-box__wrapper">
        <p class="search-box__input-group">
          <label class="visually-hidden" for="photo-id">Type Album ID</label>
          <input id="photo-id"
                 type="text"
                 name="photo_id"
                 required
                 v-model="query">
        </p>
        <button class="button" type="submit">Go</button>
      </div>
    </form>
    <div class="search-box__result result">

      <div class="result__header">

      </div>

      <ul class="result__list"
          :class="{'result__list--tile': getViewMode === 'tile'}"
          v-if="getAllTracks">

        <li class="result__item"
            v-for="item of getPaginatedTracks"
            :key="item.id"
            :class="{'result__item--active': getSelectedTrack ? getSelectedTrack.id === item.id : false}">

          <a class="result__link"
             @click="fetchSelectedTrack(item)">
            <div class="result__picture">
              <img class="result__image"
                   :src="item.artwork_url | imageSize('500x500')"
                   :alt="item.title">
            </div>
            <div class="result__text">
              <h3>{{item.title}}</h3>
              <p>{{item.description | truncate(80)}}</p>
            </div>
          </a>

        </li>

      </ul>

      <div v-if="getAllTracks" class="result__footer">

        <div class="result__controls controls">

          <button class="controls__element controls__element--prev button-arrow"
                  @click="prevPage()"
                  :disabled="getPageNumber === 0">
            <svg class="button-arrow__icon button-arrow__icon--left" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <g fill="none" stroke="#FF4F7B" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                <circle class="button-arrow__outline" cx="16" cy="16" r="15.12"></circle>
                <path class="button-arrow__image" d="M16 10l-6 6 6 6m8 -6l-14 0"></path>
              </g>
            </svg>
            Prev
          </button>

          <button class="controls__element controls__element--prev button-arrow"
                  @click="nextPage()"
                  :disabled="!willPaginate">
            Next
            <svg class="button-arrow__icon button-arrow__icon--right" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <g fill="none" stroke="#FF4F7B" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                <circle class="button-arrow__outline" cx="16" cy="16" r="15.12"></circle>
                <path class="button-arrow__image" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
              </g>
            </svg>
          </button>

        </div>

        <p class="result__counter">Page <span>{{getPageNumber + 1}}</span> of <span>{{getPageCount}}</span></p>

        <div class="result__view-toggle view-toggle">

          <a class="view-toggle__link"
             :class="{'view-toggle__link--active': getViewMode === 'list'}"
             @click="changeViewMode('list')">
            <svg class="view-toggle__icon view-toggle__icon--list" xmlns="http://www.w3.org/2000/svg"  width="32" height="32" viewBox="0 0 509069 509069">
              <g fill="none" stroke="#FF4F7B" stroke-width="21658.1" stroke-linejoin="round" stroke-miterlimit="10">
                <rect class="view-toggle__icon--rectangle" stroke-width="41658.1" x="5829" y="5828" width="497411" height="497411" rx="22911" ry="22666"/>
                <rect x="176582" y="369943" width="270902" height="77720" rx="9438" ry="22912"/>
                <rect x="176582" y="214502" width="270902" height="77720" rx="9438" ry="22912"/>
                <rect x="176582" y="59061" width="270903" height="77720" rx="9438" ry="22912"/>
                <rect x="58685" y="59061" width="76771" height="77720" rx="2675" ry="22912"/>
                <rect x="58685" y="215301" width="76771" height="77720" rx="2675" ry="22912"/>
                <rect x="58685" y="369698" width="76771" height="77720" rx="2675" ry="22912"/>
              </g>
            </svg>
          </a>

          <a class="view-toggle__link"
             :class="{'view-toggle__link--active': getViewMode === 'tile'}"
             @click="changeViewMode('tile')">
            <svg class="view-toggle__icon view-toggle__icon--tile" xmlns="http://www.w3.org/2000/svg"  width="32" height="32" viewBox="0 0 91350 91350">
              <g fill="none" stroke="#FF4F7B" stroke-width="4091.97" stroke-linejoin="round" stroke-miterlimit="10">
                <rect class="view-toggle__icon--rectangle" stroke-width="8091.97" x="1046" y="1046" width="89258" height="89258" rx="4111" ry="4067"/>
                <rect x="10898" y="51987" width="27893" height="27893" rx="3795" ry="4111"/>
                <rect x="10898" y="10147" width="27893" height="27893" rx="3795" ry="4111"/>
                <rect x="52738" y="51987" width="27893" height="27893" rx="3795" ry="4111"/>
                <rect x="52738" y="10147" width="27893" height="27893" rx="3795" ry="4111"/>
              </g>
            </svg>
          </a>
        </div>

      </div>
    </div>
  </section>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'searchBox',
  data () {
    return {
      query: null
    }
  },
  mounted () {
    this.setItemsPerPage(6)
    this.setPageNumber(0)
  },
  methods: {
    ...mapActions(['searchRequest', 'changeViewMode', 'loadViewMode', 'fetchSelectedTrack', 'setItemsPerPage', 'setPageNumber', 'nextPage', 'prevPage']),
    search (query) {
      this.setPageNumber(0)
      this.searchRequest(query)
    }
  },
  computed: {
    ...mapGetters(['getAllTracks', 'getPaginatedTracks', 'getPageCount', 'getViewMode', 'getQueryFromHistory', 'getSelectedTrack', 'getPageNumber', 'willPaginate'])
  },
  watch: {
    getQueryFromHistory: function (query) {
      this.setPageNumber(0)
      if (this.query !== query) {
        this.query = query
      }
    }
  },
  created () {
    this.loadViewMode()
  }
}
</script>
