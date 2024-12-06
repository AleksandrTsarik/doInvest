<template>
  <main>
    <section class="section-page checklists">      
      <div class="container">
        <TheBreadCrumbs :breadCrumbs="breadCrumbs" />
        <div class="section-page__title checklists__title title">Чек-листы</div>
        <div class="checklists__top">
          <div class="section-page__subtitle checklists__subtitle subtitle t-24">
            Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. Незаменимый помощник любого дизайнера, вебмастера и проектировщика. ... Текста-рыбы является извест
          </div>
          <div class="checklists__access">
            <div class="checklists__access-title">
              Безлимитный доступ к чек-листам
            </div>
            <div class="checklists__access-btn">
              <UITheButton 
                :class="['btn', 'btn-dark']" 
                :label="'Получить доступ'">
              </UITheButton>
            </div>
          </div>
        </div>  
        
        <div class="checklists__filters">
          <UITheButton
            @click="filterLessons('')"
            :label="'Все уроки'"
            :class="['btn-filter', {active: !filterLessonsTag}]"
          />
          <UITheButton
            @click="filterLessons('No')"
            :label="'Не полученные'"
            :class="['btn-filter', {active: filterLessonsTag === 'No'}]"
          />
          <UITheButton
            @click="filterLessons('My')"
            :label="'Мои'"
            :class="['btn-filter', {active: filterLessonsTag === 'My'}]"
          />
        </div>

        <div class="checklists__catalog">
          <div 
            v-for="(lesson, i) in currentLessons.slice(0,4)"
            :key="i"
            class="checklists__item">
            <div class="lesson-big-item">
              <div class="lesson-big-item__row">
                <div class="lesson-big-item__info">
                  <div class="lesson-big-item__name t-32">{{ lesson.name }}</div>
                  <div class="lesson-big-item__descr t-18">{{ lesson.descr }}</div>

                  <div class="lesson-big-item__info-bottom">
                    <div class="lesson-big-item__info-bottom-left">
                      <div class="lesson-big-item__rating">
                        <TheRating :rate="lesson.rate"/>
                        <span>{{ lesson.rate }}</span>
                      </div>
                      <div class="lesson-big-item__price">
                        <span>Цена: </span>{{ lesson.price ? lesson.price + ' рублей' : 'бесплатно' }}
                      </div>
                    </div>
                    <div class="lesson-big-item__info-bottom-right">
                      <UITheButton 
                        :class="['btn', 'btn-dark']" 
                        :label="'Получить урок'">
                      </UITheButton>
                    </div>  
                  </div>
                </div>

                <div class="lesson-big-item__photo"><img :src="lesson.pic" alt=""></div>
              </div>
            </div>
          </div>
        </div>
        <ThePagination />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      filterLessonsTag: '',
      breadCrumbs: [
        {
          name: 'Чек листы',
          url: '#',
          current: true,
        }
      ],
      lessons: [
        {
          id: 1,
          name: 'Урок №0 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 0,
          rate: 4.5,
          access: true
        },
        {
          id: 2,
          name: 'Урок №1 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 1000,
          rate: 5,
          access: false
        },
        {
          id: 3,
          name: 'Урок №2 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 2000,
          rate: 3,
          access: true
        },
        {
          id: 4,
          name: 'Урок №3 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 500,
          rate: 3.5,
          access: true
        },
        {
          id: 5,
          name: 'Урок №4 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 3000,
          rate: 2.5,
          access: false
        },
        {
          id: 6,
          name: 'Урок №5 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 600,
          rate: 5,
          access: false
        },
        {
          id: 7,
          name: 'Урок №6 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 0,
          rate: 5,
          access: true
        },
        {
          id: 8,
          name: 'Урок №7 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 1000,
          rate: 1.5,
          access: false
        },
        {
          id: 9,
          name: 'Урок №8 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 2000,
          rate: 2.5,
          access: true
        },
        {
          id: 10,
          name: 'Урок №9 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 500,
          rate: 4.5,
          access: true
        },
        {
          id: 11,
          name: 'Урок №10 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 3000,
          rate: 5,
          access: false
        },
        {
          id: 12,
          name: 'Урок №11 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 600,
          rate: 5,
          access: false
        },
        {
          id: 13,
          name: 'Урок №12 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 0,
          rate: 5,
          access: true
        },
        {
          id: 14,
          name: 'Урок №13 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 1000,
          rate: 5,
          access: false
        },
        {
          id: 15,
          name: 'Урок №14 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 2000,
          rate: 5,
          access: true
        },
        {
          id: 16,
          name: 'Урок №15 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 500,
          rate: 5,
          access: true
        },
        {
          id: 17,
          name: 'Урок №16 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 3000,
          rate: 5,
          access: false
        },
        {
          id: 18,
          name: 'Урок №17 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 600,
          rate: 5,
          access: false
        },
        {
          id: 19,
          name: 'Урок №18 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 3000,
          rate: 5,
          access: false
        },
        {
          id: 20,
          name: 'Урок №19 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 600,
          rate: 5,
          access: false
        },
        {
          id: 21,
          name: 'Урок №20 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 500,
          rate: 5,
          access: true
        },
      ],
      currentLessons: [],
    }
  },
  methods: {
    getLessons() {
      this.currentLessons = this.lessons
    },
    filterLessons(tag) {
      this.filterLessonsTag = tag
      if(tag === 'My') {         
        this.currentLessons = this.lessons.filter(item => item.access === true)
      }else if(tag === 'No') {
        this.currentLessons = this.lessons.filter(item => item.access === false)
      }else{
        this.currentLessons = this.lessons
      }
    }
  },
  mounted() {
    this.getLessons()
  }
} 
</script>

<style lang="scss">
.checklists {
  &__top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 15px;

    @media screen and (max-width: 991px) {
      flex-direction: column;
      justify-content: initial;      
      margin-bottom: 20px;
    }
  }
  &__title {
    margin-bottom: 30px;
  }

  &__subtitle {
    flex: 0 0 calc(50% - 15px);
    margin-bottom: 50px;
    max-width: 650px;
    @media screen and (max-width: 991px) {
      margin-bottom: 20px;
    }
  }

  &__access {
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    row-gap: 9px;   

    &-title {
      font-size: 18px;

      @media screen and (max-width: 767px) {
        font-size: 15px;
      }
    }

    .btn {
      @media screen and (max-width: 767px) {
        width: 100%;
        justify-content: center;
      }
    }
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
      white-space: nowrap;
    }
  }

  &__catalog {
    display: flex;
    flex-direction: column;
    row-gap: 35px;
    margin-bottom: 30px;
  }
}
</style>