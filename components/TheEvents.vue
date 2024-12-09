<template>
  <div>
    <div class="section-page__title title">СОБЫТИЯ</div>
    <div class="section-page__subtitle t-24">
      Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель,
      вставляемый в макет страницы).
    </div>
    <u-i-the-swiper
      :slider="events"
      :options="optionsSlider"
      :typeSlider="'events'"
      class="slider"
      @modal-video-open="modalVideoOpen"
    ></u-i-the-swiper>
    <div class="section-page__all-link">
      <NuxtLink class="btn" to="#">Открыть все события</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    events: { type: Array, default: [], require: true },
  },
  data() {
    return {
      optionsSlider: {
        loop: false,
        slidesPerGroup: 1,
        centeredSlides: false,
        spaceBetween: 10,
        pagination: false,
        navigation: true,
        modules: 'modules',
        mousewheel: false,
        grapCursor: true,
        breakpoints: {
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },
    };
  },
  methods: {
    modalVideoOpen(value) {
      this.$emit('modal-video-open', { src: value.src });
    },
  },
};
</script>
<style lang="scss" scoped>
.slider {
  & + .section-page__all-link {
    @media screen and (max-width: 767px) {
      margin-top: -30px;
    }
  }
}
</style>
