<template>
  <div class="feedback-item">
    <div class="feedback-item__title title">Отзывы</div>
    <div class="feedback-item__more">
      <p>Чтобы оставить отзыв, надо посмотреть урок</p>
      <UITheButton :label="'Оставить отзыв'" class="btn-light" />
    </div>
  </div>
  <UITheSwiper
    :slider="feedback"
    :options="optionsSlider"
    :typeSlider="'feedback-item'"
    :class="'slider-feedback-item slider-swiper'"
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
        autoHeight: true,
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
          photo: '/image/slide.png',
          alt: 'photo',
          name: 'sr InvestirX',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
          url: '#',
        },
        {
          photo: '/image/slide.png',
          alt: 'photo',
          name: 'sr InvestirX',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae sed laboriosam in sit, et doloribus ea provident incidunt impedit quos.',
          url: '#',
        },
        {
          photo: '/image/slide.png',
          alt: 'photo',
          name: 'sr InvestirX',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae sed laboriosam in sit, et doloribus ea provident incidunt impedit quos.',
          url: '#',
        },
        {
          photo: '/image/slide.png',
          alt: 'photo',
          name: 'sr InvestirX',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
          url: '#',
        },
        {
          photo: '/image/slide.png',
          alt: 'photo',
          name: 'sr InvestirX',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae sed laboriosam in sit, et doloribus ea provident incidunt impedit quos.',
          url: '#',
        },
        {
          photo: '/image/slide.png',
          alt: 'photo',
          name: 'sr InvestirX',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
          url: '#',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.slider-feedback-item {
  .swiper-slide {
    height: auto;
  }
  .swiper-wrapper {
    align-items: stretch;
    height: auto !important;
  }
}
.feedback-item-slide {
  height: 100%;
  &__wrap {
    background-color: #fff;
    border-radius: var(--radius);
    padding: 25px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  &__head {
    display: flex;
    align-items: flex-end;
    gap: 24px;
    margin-bottom: 16px;
  }
  &__body {
    flex-grow: 1;
  }
  &__footer {
    padding-top: 20px;
    a {
      border-bottom: solid 1px rgb(var(--primary));
      transition: 0.3s;
      &:hover {
        @media (min-width: 1024px) {
          border-color: transparent;
          color: rgb(var(--primary));
        }
      }
    }
  }
  &__photo {
  }
  &__name {
    font-weight: 600;
  }
  &__text {
  }
}
.feedback-item {
  &__title {
  }
  &__more {
    display: flex;
    align-items: flex-end;
    gap: 35px;
    @media (max-width: 767px) {
      flex-wrap: wrap;
      gap: 10px;
    }
    p {
    }
    a {
    }
  }
}
</style>
