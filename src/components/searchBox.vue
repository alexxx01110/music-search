<template>

  <section class="container-main__item panel search-box">
    <h2>Search form</h2>
    <p class="search-box__description">Please select s search option:</p>
    <form class="search-box__form">
      <p class="search-box__checkbox-group">
        <label class="search-box__checkbox">
          <input class="visually-hidden"
                 type="checkbox"
                 name="by_album">
          <span class="search-box__checkbox-indicator"></span>
          By Album number
        </label>
        <label class="search-box__checkbox">
          <input class="visually-hidden"
                 type="checkbox"
                 name="by_photo">
          <span class="search-box__checkbox-indicator"></span>
          By Album ID
        </label>
      </p>
      <div class="search-box__wrapper">
        <p class="search-box__input-group">
          <label class="visually-hidden" for="photo-id">Type Album ID</label>
          <input id="photo-id"
                 type="text"
                 name="photo_id"
                 placeholder="1">
        </p>
        <button class="button" type="submit">Go</button>
      </div>
    </form>
    <div class="search-box__result result">

      <div class="result__header">

      </div>

      <ul class="result__list result__list--tile">

        <li class="result__item">

          <a href="#" class="result__link">
            <div class="result__picture">
              <img class="result__image" src="http://placehold.it/600/8e973b" alt="Result image">
            </div>
            <div class="result__text">
              <h3>Album Title</h3>
              <p>Album Description</p>
            </div>
          </a>

        </li>

      </ul>

      <div class="result__footer">

        <div class="result__controls">

          <a class="link link--arrowed" href="#">Next
            <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <g fill="none" stroke="#FF4F7B" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
              </g>
            </svg>
          </a>

        </div>

        <div class="result__view-toggle view-toggle">

          <a class="view-toggle__link" href="#">
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

          <a class="view-toggle__link  view-toggle__link--active link" href="#">
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
export default {
  name: 'searchBox'
}
</script>
