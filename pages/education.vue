<template>
  <main>
    <section class="section-page materials">
      <div class="container">
        <div class="section-page__title materials__title title">Полезные материалы</div>
        <div class="materials__subtitle t-24">
          Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы).
        </div>

        <div class="materials__filters">
          <UITheButton 
            @click = "filterEvents()"
            :label="'Все'" 
            :class="['btn-filter', {'active' : !currentTag}]" />
          <UITheButton 
            v-for="(tag, i) in tagsEvents" 
            :key="i" 
            @click="filterEvents(tag)"
            :label="tag" 
            :class="['btn-filter', {'active' : currentTag === tag}]" />
        </div>
        <u-i-the-swiper 
          :slider="currentEvents"
          :options="optionsSlider"
          :typeSlider="'events'"
          class="slider"
        ></u-i-the-swiper>
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
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: '',          
          tags: ['Мои', 'Фильмы', 'Книги', 'Ссылки', 'Рекомендации']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Мои', 'Фильмы', 'Книги', 'Ссылки', 'Рекомендации']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Мои', 'Рекомендации']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Ссылки']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Рекомендации']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Мои', 'Фильмы', 'Книги', 'Ссылки', 'Рекомендации']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Мои', 'Фильмы', 'Рекомендации']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Книги', 'Ссылки', 'Рекомендации']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Книги', 'Ссылки']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Рекомендации']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Мои']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Фильмы']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Книги']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Книги']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Рекомендации']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Мои']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Мои', 'Фильмы', 'Книги', 'Ссылки', 'Рекомендации']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Ссылки']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Книги', 'Ссылки']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Фильмы', 'Книги', 'Ссылки', 'Рекомендации']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Книги', 'Ссылки', 'Рекомендации']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Ссылки']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Фильмы']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Фильмы']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Книги', 'Ссылки']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Мои', 'Фильмы', 'Книги']
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Книги']
        },
      ],
      currentEvents: [],
      tagsEvents: [],
      optionsSlider: {
        loop: false,
        slidesPerGroup: 1,
        centeredSlides: false,
        spaceBetween: 10,
        pagination: false,
        navigation: true,
        modules: "modules",
        mousewheel: false,
        grapCursor: true,
        breakpoints: {
          1024: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 1
          }
        },
      },
    }
  },
  methods: {
    getTags() {
      this.events.map(item => {
        item.tags.map(tag => {          
          if(this.tagsEvents.indexOf(tag) === -1) {
            this.tagsEvents.push(tag)
          }
        })
      })
    },
    filterEvents(tag) {
      if(tag) {
        this.currentTag = tag
        this.currentEvents = this.events.filter(event => event.tags.indexOf(tag) !== -1)
      } else {
        this.currentTag = ''
        this.currentEvents = this.events
      }
            
    }
  },
  mounted() {
    this.getTags()
    this.filterEvents()
  }

}
</script>

<style lang="scss">
.materials {
  &__title {
    margin-bottom: 33px
  }

  &__subtitle {
    margin-bottom: 50px
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
</style>