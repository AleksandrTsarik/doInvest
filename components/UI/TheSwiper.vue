<template>
  <Swiper
    class="slider-swiper"
    :modules="modules"
    :loop="options.loop"
    :navigation="options.navigation"
    :slidesPerView="options.slidesPerView"
    :slidesPerGroup="options.slidesPerGroup"
    :centeredSlides="options.centeredSlides"
    :spaceBetween="options.spaceBetween"
    :pagination="options.pagination"
    :breakpoints="options.breakpoints"
    :effect="options.effect"
    :mousewheel="options.mousewheel"
  >
    <SwiperSlide
      v-for="(slide, i) in slider"
      :key="i"
    >
      <div class="slider__wrap">
        <div v-if="slide.head" class="slider__head">{{ slide.head }}</div>
        <div v-if="slide.img" class="slider__img">
          <img :src="slide.img" alt="">
          <span class="video-icon"></span>
        </div>
        <div class="slider__name">{{ slide.name }}</div>
        <div v-if="slide.description" class="slider__description t-24">{{ slide.description }}</div>
      </div>
    </SwiperSlide>
    <SwiperControls />
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Mousewheel, EffectCoverflow, EffectFade } from 'swiper/modules';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    slider: {type: Array, default: [], require: false},
    options: {type: Object, default: {}, require: false}
  },

  setup() {
    return {
      modules: [ Pagination, Navigation, Mousewheel, EffectCoverflow, EffectFade]
    };
  },
}

</script>

<style lang="scss">
.slider-swiper {
  .swiper-wrapper {
    padding-top: 100px;
    @media(max-width: 767px) {
      padding: 20px 0 60px;
    }
  }
  .swiper-button-prev, .swiper-button-next {
    display: block;
    width: 50px;
    height: 50px;
    background-color: rgb(var(--primary));
    border-radius: 5px;
    text-align: center;
    line-height: 50px;
    position: absolute;
    transition: 0.3s;
    top: 50px;
    @media(max-width: 767px) {
      top: auto;
      bottom: 0;
    }
    &:hover {
      @media(min-width: 1023px) {
        background: rgba(var(--primary),  0.5);
      }
    }
    &:active {
      background: rgba(var(--primary),  0.9);
    }
    &::after {
      content: '';
      background-image: url('@/assets/img/slider/arrow.svg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      z-index: 50;
      display: block;
      width: 8px;
      height: 14px;
      position: absolute;
      top: 50%;
      left: 50%;
      
    }
  }
  .swiper-button-prev {
    right: 60px;
    left: auto;
    &::after {
      transform: translate(-50%, -50%);
    }
  }
  .swiper-button-next {
      right: 0;
    &::after {
      transform: translate(-50%, -50%) rotate(180deg);
    }
  } 
  .swiper-pagination {
    display: inline-block;
    width: auto;
    font-size: 30px;
  }
  .slider {
    &__img {
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 15px;
      position: relative;
      @media(max-width: 1023px) {
        max-height: 600px;
      }
      img {
        border-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        // @media(max-width: 1023px) {
        //   object-fit: none;
        // }
      }
    }
    &__name {
      font-size: 32px;
      font-weight: 500;
      line-height: 110%;
    }
    &__description {
      margin-top: 15px;
      
      // font-size: 18px;
      // font-weight: 400;
      // line-height: 135%;
    }
  }
  
}
</style>