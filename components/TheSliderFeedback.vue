<template>
  <div class="feedback">
    <div class="feedback__title title">что думают о нас</div>
    <div class="feedback__subtitle t-24">
      Мы даем необходимые занния, подкрепляем их практическим опытом, чтобы люди совершали
      осознанные действия для сохранения и стабильного роста своего капитала.
    </div>
  </div>
  <UITheSwiper
    :slider="feedback"
    :options="optionsSlider"
    :typeSlider="'feedback'"
    class="slider slider--margin"
  />
</template>
<script>
export default {
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
            slidesPerView: 4,
          },
          769: {
            slidesPerView: 2,
          },
        },
      },
      feedback: [
        {
          photo: '/image/slider/item1.jpg',
          alt: 'photo',
          name: 'Антон Заварский',
          video: true,
        },
        {
          photo: '/image/slider/item2.jpg',
          alt: 'photo',
          name: 'Регина Величко',
          video: false,
        },
        {
          photo: '/image/slider/item1.jpg',
          alt: 'photo',
          name: 'Антон Заварский',
          video: true,
        },
        {
          photo: '/image/slider/item2.jpg',
          alt: 'photo',
          name: 'Регина Величко',
          video: false,
        },
        {
          photo: '/image/slider/item1.jpg',
          alt: 'photo',
          name: 'Антон Заварский',
          video: true,
        },
        {
          photo: '/image/slider/item2.jpg',
          alt: 'photo',
          name: 'Регина Величко',
          video: false,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.feedback-slide {
  &__photo {
    border-radius: var(--raduisBig);
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;
    .relative {
      position: absolute;
      right: 50px;
      bottom: 50px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
