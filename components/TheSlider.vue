<template>
  <div class="slider-block">
    <div class="slider-block-top">
      <div class="slider-block-top__item">
        <div class="slider-block__title title">Подпишитесь на полезный контент</div>
      </div>
      <div class="slider-block-top__item">
        <div class="slider-block-top__item-inner">
          <div class="slider-block-top__item-input">
            <UITheInput :type="'text'" :placeholder="'Введите ваш Emal'" />
          </div>
          <div class="slider-block-top__item-btn">
            <UITheButton :label="'Подписаться'" class="btn-dark" />
          </div>
          <div class="slider-block-top__item-network">
            <TheNetwork :type="'vk'" class="link-border" />
            <TheNetwork :type="'telegram'" class="link-border" />
            <TheNetwork :type="'youtube'" class="link-border" />
          </div>
        </div>

        <div class="slider-block-top__item-check">
          <UITheCheckbox :label="`Я соглашаюсь с <a href='/' >политикой конфиденциальности</a>`" />
        </div>
      </div>
    </div>
    <div class="slider-block-body">
      <div v-if="windowWidth > 1023 && card.length < 5">
        <div class="slider-desktop slider">
          <div class="slider-desktop__item" v-for="(slide, i) in card" :key="i">
            <div class="slider-desktop__wrap slider__wrap">
              <div class="slider-desktop__img slider__img">
                <img :src="slide.img" alt="..." loading="lazy" />
                <span class="video-icon"></span>
              </div>
              <div class="slider-desktop__text slider__description t-24">
                {{ slide.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <u-i-the-swiper :slider="card" :options="optionsSlider" class="slider"></u-i-the-swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: [],
      windowWidth: 0,
      optionsSlider: {
        loop: false,
        slidesPerGroup: 1,
        centeredSlides: false,
        spaceBetween: 10,
        pagination: false,
        navigation: true,
        modules: 'modules',
        mousewheel: false,
        // touchRatio: 1,
        // touchAngle: 45,
        grapCursor: true,
        breakpoints: {
          1024: {
            slidesPerView: 3,
          },
          769: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },
    };
  },
  async mounted() {
    const cards = [];
    cards.push(
      {
        img: (await import('@/assets/img/slider/item1.jpeg')).default,
        //name: 'Иван Петров',
        description: 'Заголовок shorts',
      },
      {
        img: (await import('@/assets/img/slider/item2.jpeg')).default,
        description: 'Заголовок shorts',
      },
      {
        img: (await import('@/assets/img/slider/item3.jpeg')).default,
        description: 'Заголовок shorts',
      },
      {
        img: (await import('@/assets/img/slider/item4.jpeg')).default,
        description: 'Заголовок shorts',
      }
    );
    this.card = cards;

    const onWindowWidth = () => {
      this.windowWidth = window.innerWidth;
    };
    onWindowWidth();
    window.addEventListener('resize', onWindowWidth);
    console.log(this.windowWidth);
  },
};
</script>

<style lang="scss">
.slider {
  .video-icon {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.slider-desktop {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  &__img {
    position: relative;
  }
  img {
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__text {
    margin-top: 15px;
  }
}
.slider-block-top {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 20px;
  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
  &__item {
    .default-checkbox__container {
      margin-top: 2px;
    }
    .default-checkbox__text a {
      color: #2b2b2b;
      border-bottom: solid 1px #2b2b2b;
      display: inline;
    }
  }
  &__item-inner {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 10px;
    margin-bottom: 10px;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      margin: 0 auto;
      text-align: center;
    }
    .block-input {
      margin-bottom: 0;
      input {
        height: 50px;
      }
    }
    .btn {
      height: 50px;
      @media (max-width: 767px) {
        display: block;
        margin: 0 auto;
      }
      @media (max-width: 575px) {
        width: 100%;
        display: block;
      }
    }
  }
  &__item-network {
    white-space: nowrap;
    a + a {
      margin-left: 10px;
    }
  }
}
</style>
