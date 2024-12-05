<template>
  <main>

    <section class="section-page">
      <div class="container">
        <div class="section-page__title articles__title title">ЧИТАЙ АЗБУКУ ИНВЕСТОРА</div>
        <div class="articles__subtitle t-24">
          Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, вставляемый).
        </div>
        <div class="articles__catalog">
          <div 
            v-for="(artice, i) in articles"
            :key="i" 
            class="articles__item">
            <div class="article-item">
              <div class="article-item__photo">
                <a href="#"><img src="/public/image/material.png" alt="" /></a>
              </div>
              <div class="article-item__info">
                <div class="article-item__name">
                  {{ artice.name }}
                </div>
                <div class="article-item__descr">
                  {{ artice.descr }}
                </div>
                <div class="article-item__bottom">
                  <div class="article-item__bottom-left">
                    <div v-if="artice.oldPice" class="article-item__price article-item__price--old">
                      {{ artice.oldPice }}
                    </div>
                    <div class="article-item__price">{{ artice.price ? artice.price : 'БЕСПЛАТНО' }}</div>
                    <div v-if="artice.price" class="article-item__price article-item__price--unit">₽</div>
                  </div>
                  <div class="article-item__link">
                    <a href="#">
                      <span>Смотреть</span>
                      <svg
                        width="18"
                        height="13"
                        viewBox="0 0 18 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.7015 5.79768C17.8926 5.98078 18 6.22909 18 6.488C18 6.74691 17.8926 6.99522 17.7015 7.17833L11.9346 12.7019C11.8405 12.7952 11.728 12.8696 11.6037 12.9207C11.4793 12.9719 11.3455 12.9988 11.2101 13C11.0748 13.0011 10.9406 12.9764 10.8153 12.9273C10.69 12.8782 10.5762 12.8057 10.4804 12.714C10.3847 12.6223 10.309 12.5133 10.2578 12.3933C10.2065 12.2733 10.1807 12.1447 10.1819 12.0151C10.1831 11.8855 10.2112 11.7573 10.2646 11.6382C10.318 11.5191 10.3957 11.4113 10.4931 11.3213L14.5199 7.46442L1.01944 7.46442C0.749067 7.46442 0.489767 7.36155 0.298586 7.17843C0.107405 6.99532 0 6.74696 0 6.488C0 6.22904 0.107405 5.98069 0.298586 5.79757C0.489767 5.61446 0.749067 5.51159 1.01944 5.51159L14.5199 5.51159L10.4931 1.65474C10.3074 1.47059 10.2046 1.22395 10.2069 0.967933C10.2093 0.71192 10.3165 0.467022 10.5055 0.285987C10.6945 0.104951 10.9502 0.00226212 11.2175 3.71933e-05C11.4848 -0.00218773 11.7423 0.0962296 11.9346 0.274092L17.7015 5.79768Z"
                          fill="#3AAA35"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
        <div class="section-page__all-link">
          <NuxtLink class="btn" to="#">Открыть все</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section-page">
      <div class="container">
        <div class="section-page__title materials__title title">СОБЫТИЯ</div>
        <div class="materials__subtitle t-24">
          Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный
          текст-заполнитель, вставляемый в макет страницы).
        </div>
        <u-i-the-swiper
          :slider="events"
          :options="optionsSlider"
          :typeSlider="'events'"
          class="slider slider--margin"
        ></u-i-the-swiper>
        <div class="section-page__all-link">
          <NuxtLink class="btn" to="#">Открыть все события</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section-page materials">
      <div class="container">
        <div class="section-page__title materials__title title">Полезные материалы</div>
        <div class="materials__subtitle t-24">
          Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный
          текст-заполнитель, вставляемый в макет страницы).
        </div>

        <div class="materials__filters">
          <UITheButton
            @click="filterMaterials()"
            :label="'Все'"
            :class="['btn-filter', { active: !currentTag }]"
          />
          <UITheButton
            v-for="(tag, i) in tagsMaterials"
            :key="i"
            @click="filterMaterials(tag)"
            :label="tag"
            :class="['btn-filter', { active: currentTag === tag }]"
          />
        </div>
        <u-i-the-swiper
          :slider="currentMaterials"
          :options="optionsSlider"
          :typeSlider="'events'"
          class="slider"
        ></u-i-the-swiper>
        <div class="section-page__all-link">
          <NuxtLink class="btn" to="#">Открыть все материалы</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      currentTag: '',
      articles: [
        {
          pic: '/public/image/event.jpg',
          name: 'Заголовок',
          descr: 'Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель)',
          price: 0,
          frame: ''
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Заголовок',
          descr: 'Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель)',
          price: 150,
          oldPice: 200,
          frame: '',
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Заголовок',
          descr: 'Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель)',
          price: 0,
          frame: ''
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Заголовок',
          descr: 'Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель)',
          price: 150,
          oldPice: 200,
          frame: '',
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Заголовок',
          descr: 'Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель)',
          price: 0,
          frame: ''
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Заголовок',
          descr: 'Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель)',
          price: 150,
          oldPice: 200,
          frame: '',
        }        
      ],
      events: [
        {
          pic: '/public/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: '',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Мастер-класс совместно с Тинькофф',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: '',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Мастер-класс совместно с Тинькофф',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
        },
      ],
      materials: [
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: '',
          tags: ['Мои', 'Фильмы', 'Книги', 'Ссылки', 'Рекомендации'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Мои', 'Фильмы', 'Книги', 'Ссылки', 'Рекомендации'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Мои', 'Рекомендации'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Ссылки'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Рекомендации'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Мои', 'Фильмы', 'Книги', 'Ссылки', 'Рекомендации'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Мои', 'Фильмы', 'Рекомендации'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Книги', 'Ссылки', 'Рекомендации'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Книги', 'Ссылки'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Рекомендации'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Мои'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Фильмы'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Книги'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Книги'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Рекомендации'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Мои'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Мои', 'Фильмы', 'Книги', 'Ссылки', 'Рекомендации'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Ссылки'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Книги', 'Ссылки'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Фильмы', 'Книги', 'Ссылки', 'Рекомендации'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Книги', 'Ссылки', 'Рекомендации'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Ссылки'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Фильмы'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Фильмы'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Книги', 'Ссылки'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Мои', 'Фильмы', 'Книги'],
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Книги'],
        },
      ],
      currentMaterials: [],
      tagsMaterials: [],
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
    getTags() {
      this.materials.map((item) => {
        item.tags.map((tag) => {
          if (this.tagsMaterials.indexOf(tag) === -1) {
            this.tagsMaterials.push(tag);
          }
        });
      });
    },
    filterMaterials(tag) {
      if (tag) {
        this.currentTag = tag;
        this.currentMaterials = this.materials.filter((item) => item.tags.indexOf(tag) !== -1);
      } else {
        this.currentTag = '';
        this.currentMaterials = this.materials;
      }
    },
  },
  mounted() {
    this.getTags();
    this.filterMaterials();
  },
};
</script>

<style lang="scss">
.materials {
  &__title {
    margin-bottom: 33px;
  }

  &__subtitle {
    margin-bottom: 50px;
  }

  &__filters {
    display: flex;
    flex-wrap: wrap;
    padding-right: 135px;
    align-items: center;
    column-gap: 15px;
    row-gap: 15px;
    margin-bottom: 24px;

    @media screen and (max-width: 1023px) {
      margin-bottom: 20px;
    }

    @media screen and (max-width: 767px) {
      position: relative;
      flex-wrap: nowrap;
      overflow: auto;
    }
  }

  &__catalog {
    display: flex;
    column-gap: 15px;
    row-gap: 15px;
    flex-wrap: wrap;
    justify-content: space-between
  }

  &__item {
    &--col-2 {
      flex: 0 0 calc(50% - 8px);
      max-width: calc(50% - 8px);

      @media screen and (max-width: 1299px) {
        flex: 0 0 100%;
        max-width: 700px;
      }
    }
  }
}

.articles {
  &__title {
    margin-bottom: 33px;
  }

  &__subtitle {
    margin-bottom: 50px;
  }

  &__filters {
    display: flex;
    flex-wrap: wrap;
    padding-right: 135px;
    align-items: center;
    column-gap: 15px;
    row-gap: 15px;
    margin-bottom: 24px;

    @media screen and (max-width: 1023px) {
      margin-bottom: 20px;
    }

    @media screen and (max-width: 767px) {
      position: relative;
      flex-wrap: nowrap;
      overflow: auto;
    }
  }

  &__catalog {
    display: flex;
    column-gap: 15px;
    row-gap: 15px;
    flex-wrap: wrap;
    justify-content: space-between
  }

  &__item {
    flex: 0 0 calc(50% - 8px);
    max-width: calc(50% - 8px);

    @media screen and (max-width: 1299px) {
      flex: 0 0 100%;
      max-width: 700px;
    }
  }
}

.slider--margin {
  margin-top: 25px;
}
</style>
