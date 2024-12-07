<template>
  <main>
    <section class="section-page checklists">      
      <div class="container">
        <TheBreadCrumbs :breadCrumbs="breadCrumbs" />   
        <TheChecklists 
          :lessons = "currentLessons.slice(0,4)"
          :filterAccessTag="filterAccessTag"
          @filter-items-access="filterLessons"
          @modal-video-open="modalVideoOpen"
        />    
        <ThePagination />
      </div>
    </section>
  </main>

  <the-modal-video-item 
    v-if="isModalVideoItem" 
    @close="closeModalItem" 
    :frameSrc="modalVideoItemSrcFrame"
  />   
</template>

<script>
import TheModalVideoItem from '~/components/modal/TheModalVideoItem.vue';

export default {
  components: { TheModalVideoItem },
  data() {
    return {
      breadCrumbs: [
        {
          name: 'Чек листы',
          url: '#',
          current: true,
        }
      ],
      filterAccessTag: '',
      modalVideoItemSrcFrame: '',
      isModalVideoItem: false,
      lessons: [
        {
          id: 1,
          name: 'Урок №0 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 0,
          rate: 4.5,
          access: true,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
        {
          id: 2,
          name: 'Урок №1 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 1000,
          rate: 5,
          access: false,
          frame: '',
        },
        {
          id: 3,
          name: 'Урок №2 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 2000,
          rate: 3,
          access: true,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
        {
          id: 4,
          name: 'Урок №3 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 500,
          rate: 3.5,
          access: true,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
        {
          id: 5,
          name: 'Урок №4 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 3000,
          rate: 2.5,
          access: false,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
        {
          id: 6,
          name: 'Урок №5 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 600,
          rate: 5,
          access: false,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
        {
          id: 7,
          name: 'Урок №6 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 0,
          rate: 5,
          access: true,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
        {
          id: 8,
          name: 'Урок №7 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 1000,
          rate: 1.5,
          access: false,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
        {
          id: 9,
          name: 'Урок №8 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 2000,
          rate: 2.5,
          access: true,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
        {
          id: 10,
          name: 'Урок №9 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 500,
          rate: 4.5,
          access: true,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
        {
          id: 11,
          name: 'Урок №10 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 3000,
          rate: 5,
          access: false,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
        {
          id: 12,
          name: 'Урок №11 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 600,
          rate: 5,
          access: false,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
        {
          id: 13,
          name: 'Урок №12 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 0,
          rate: 5,
          access: true,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
        {
          id: 14,
          name: 'Урок №13 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 1000,
          rate: 5,
          access: false,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
        {
          id: 15,
          name: 'Урок №14 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 2000,
          rate: 5,
          access: true,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
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
          access: false,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
        {
          id: 18,
          name: 'Урок №17 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 600,
          rate: 5,
          access: false,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
        {
          id: 19,
          name: 'Урок №18 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 3000,
          rate: 5,
          access: false,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
        {
          id: 20,
          name: 'Урок №19 (не доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 600,
          rate: 5,
          access: false,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
        {
          id: 21,
          name: 'Урок №20 (доступен)',
          descr: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
          pic: '/image/lesson.png',
          price: 500,
          rate: 5,
          access: true,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
      ],
      currentLessons: [],
    }
  },
  methods: {
    modalVideoOpen(value) {
      if(value) {
        this.isModalVideoItem = true;
        this.modalVideoItemSrcFrame = value.src
      }
    },
    closeModalItem() {
      this.isModalVideoItem = false;
    }, 
    getLessons() {
      this.currentLessons = this.lessons
    },
    filterLessons(value) {
      this.filterAccessTag = value
      if(value === 'My') {         
        this.currentLessons = this.lessons.filter(item => item.access === true)
      }else if(value === 'No') {
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