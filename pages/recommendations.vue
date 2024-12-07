<template>
  <main>
    <section class="section-page events">
      <div class="container">
        <TheBreadCrumbs :breadCrumbs="breadCrumbs" />   
        <TheRecommendations 
          :events="currentEvents.slice(0,6)"
          :filterAccessTag="filterAccessTag"
          @filter-items-access="filterEvents"
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
          name: 'Рекомендации',
          url: '#',
          current: true,
        }
      ],
      isModalVideoItem: false,
      modalVideoItemSrcFrame: '',
      filterAccessTag: '',      
      events: [
        {
          pic: '/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false
        },
        {
          pic: '/image/event.jpg',
          name: 'Мастер-класс совместно с Тинькофф',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false
        },
        {
          pic: '/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: '',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true
        },
        {
          pic: '/image/event.jpg',
          name: 'Мастер-класс совместно с Тинькофф',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false
        },
        {
          pic: '/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false
        },
        {
          pic: '/image/event.jpg',
          name: 'Мастер-класс совместно с Тинькофф',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false
        },
        {
          pic: '/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true
        },
        {
          pic: '/image/event.jpg',
          name: 'Мастер-класс совместно с Тинькофф',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false
        },
        {
          pic: '/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false
        },
        {
          pic: '/image/event.jpg',
          name: 'Мастер-класс совместно с Тинькофф',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false
        },
        {
          pic: '/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true
        },
        {
          pic: '/image/event.jpg',
          name: 'Мастер-класс совместно с Тинькофф',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false
        },
        {
          pic: '/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false
        },
        {
          pic: '/image/event.jpg',
          name: 'Мастер-класс совместно с Тинькофф',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false
        },
        {
          pic: '/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true
        },
        {
          pic: '/image/event.jpg',
          name: 'Мастер-класс совместно с Тинькофф',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false
        },
      ],
      currentEvents: []
    };
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
    getEvents() {
      this.currentEvents = this.events
    },
    filterEvents(value) {
      this.filterAccessTag = value
      if(value === 'My') {         
        this.currentEvents = this.events.filter(item => item.access === true)
      }else if(value === 'No') {
        this.currentEvents = this.events.filter(item => item.access === false)
      }else{
        this.currentEvents = this.events
      }
    }
  },
  mounted() {    
    this.getEvents()
  },
};
</script>

<style lang="scss">

.events {
  .pagination {
    margin-top: 30px;
  }
}
</style>