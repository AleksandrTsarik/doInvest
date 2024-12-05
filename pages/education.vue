<template>
  <main>
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
    flex-wrap: wrap;
  }
}
.slider--margin {
  margin-top: 25px;
}
</style>
