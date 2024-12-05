<template>
  <div class="experts">
    <div class="experts__title title">что думают о нас</div>
    <div class="experts__subtitle t-24">
      Мы даем необходимые занния, подкрепляем их практическим опытом, чтобы люди совершали
      осознанные действия для сохранения и стабильного роста своего капитала.
    </div>
  </div>
  <UITheSwiper
    :slider="experts"
    :options="optionsSlider"
    :typeSlider="'experts'"
    :class="'slider-experts slider-swiper'"
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
          1200: {
            slidesPerView: 3,
          },
          769: {
            slidesPerView: 2,
          },
        },
      },
      experts: [
        {
          photo: '/image/slider/item3.jpg',
          alt: 'photo',
          name: 'Иван Петров',
          position: 'Финансовый аналитик',
          video: true,
        },
        {
          photo: '/image/slider/item4.jpg',
          alt: 'photo',
          name: 'Ольга Андреева',
          position: 'Финансовый аналитик',
          video: false,
        },
        {
          photo: '/image/slider/item3.jpg',
          alt: 'photo',
          name: 'Иван Петров',
          position: 'Финансовый аналитик',
          video: true,
        },
        {
          photo: '/image/slider/item4.jpg',
          alt: 'photo',
          name: 'Ольга Андреева',
          position: 'Финансовый аналитик',
          video: false,
        },
        {
          photo: '/image/slider/item3.jpg',
          alt: 'photo',
          name: 'Иван Петров',
          position: 'Финансовый аналитик',
          video: true,
        },
        {
          photo: '/image/slider/item4.jpg',
          alt: 'photo',
          name: 'Ольга Андреева',
          position: 'Финансовый аналитик',
          video: false,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.expert-slide {
  padding: 10px;
  &__photo {
    border-radius: var(--raduisBig);
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;
    width: 100%;
    .relative {
      position: absolute;
      left: 55px;
      bottom: 55px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__info {
    display: flex;
    justify-content: space-between;
    gap: 5px;
    @media (max-width: 1024px) {
      flex-wrap: wrap;
    }
    .btn {
      font-size: 16px;
      padding: 15px 30px;
      @media (max-width: 1024px) {
        white-space: nowrap;
        width: 100%;
        display: block;
        text-align: center;
      }
    }
  }
  &__info-item {
    @media (max-width: 1024px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  &__name {
    font-weight: 500;
    margin-bottom: 5px;
    @media (max-width: 1500px) {
      font-size: 20px;
    }
  }
  &__position {
    font-size: 16px;
    color: var(--text);
    @media (max-width: 1300px) {
      font-size: 14px;
    }
  }
}
</style>
