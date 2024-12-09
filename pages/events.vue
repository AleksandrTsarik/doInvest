<template>
  <div>
    <section class="section-page events">
      <div class="container">
        <div class="section-page__title title">СОБЫТИЯ</div>
        <div class="section-page__subtitle t-24">
          Русский аналог Lorem Ipsum. Прародителем текста-рыбы является . Сервисов по созданию
          случайного текста на
        </div>
        <TheCalendar @output-selected-date="setSelectedDate" />

        <div v-if="currentEvents.length">
          <TheEventsList
            :events="currentEvents.slice(0, 6)"
            :filterAccessTag="filterAccessTag"
            @filter-items-access="setSelectedFilterTag"
            @modal-video-open="modalVideoOpen"
          />

          <ThePagination />
        </div>

        <div v-else style="font-size: 24px; color: #ff0000; opacity: 0.7; font-weight: 500">
          На данную дату мероприятий не зарегистрированно
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadCrumbs: [
        {
          name: 'Рекомендации',
          url: '#',
          current: true,
        },
      ],
      activeDate: '',
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
          date: '24.08.2023',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false,
        },
        {
          pic: '/image/event.jpg',
          name: 'Мастер-класс совместно с Тинькофф',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          date: '24.09.2023',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true,
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '24.10.2023',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false,
        },
        {
          pic: '/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: '',
          date: '24.11.2023',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true,
        },
        {
          pic: '/image/event.jpg',
          name: 'Мастер-класс совместно с Тинькофф',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '24.12.2023',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true,
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          date: '24.01.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false,
        },
        {
          pic: '/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '24.03.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false,
        },
        {
          pic: '/image/event.jpg',
          name: 'Мастер-класс совместно с Тинькофф',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          date: '24.04.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true,
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '24.06.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false,
        },
        {
          pic: '/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '24.07.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true,
        },
        {
          pic: '/image/event.jpg',
          name: 'Мастер-класс совместно с Тинькофф',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '24.08.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true,
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '24.10.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false,
        },
        {
          pic: '/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '24.11.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false,
        },
        {
          pic: '/image/event.jpg',
          name: 'Мастер-класс совместно с Тинькофф',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '08.12.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true,
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '08.12.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false,
        },
        {
          pic: '/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '08.12.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true,
        },
        {
          pic: '/image/event.jpg',
          name: 'Мастер-класс совместно с Тинькофф',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '08.12.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true,
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '08.12.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false,
        },
        {
          pic: '/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '08.12.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false,
        },
        {
          pic: '/image/event.jpg',
          name: 'Мастер-класс совместно с Тинькофф',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '08.12.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true,
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '08.12.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false,
        },
        {
          pic: '/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '08.12.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true,
        },
        {
          pic: '/image/event.jpg',
          name: 'Мастер-класс совместно с Тинькофф',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '08.12.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true,
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '09.12.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false,
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '09.12.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true,
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '09.12.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false,
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '09.12.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true,
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '09.12.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: false,
        },
        {
          pic: '/image/event.jpg',
          name: 'Встреча в Терра',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          date: '09.12.2024',
          dateTime: '18:00',
          place: 'МТС Арена',
          placeUrl: '#',
          access: true,
        },
      ],
      currentEvents: [],
      currentEventsWidthDate: [],
    };
  },
  methods: {
    modalVideoOpen(value) {
      if (value) {
        this.isModalVideoItem = true;
        this.modalVideoItemSrcFrame = value.src;
      }
    },
    closeModalItem() {
      this.isModalVideoItem = false;
    },
    getCurrentDate() {
      let currentDate = new Date();
      // Устанавливаем активную дату как сегодня и форматируем месяц с днём
      let parseDay =
        currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : currentDate.getDate();
      let parseMonth =
        currentDate.getMonth() < 9 ? `0${currentDate.getMonth() + 1}` : currentDate.getMonth() + 1;
      this.activeDate = `${parseDay}.${parseMonth}.${currentDate.getFullYear()}`;
    },
    getEvents() {
      this.currentEvents = this.events.filter((item) => item.date === this.activeDate);
    },
    setSelectedDate(value) {
      this.activeDate = value;
      this.filterEvents(this.activeDate, this.filterAccessTag);
    },
    setSelectedFilterTag(value) {
      this.filterAccessTag = value;
      this.filterEvents(this.activeDate, this.filterAccessTag);
    },
    filterEvents(date, tag) {
      if (tag === 'My') {
        this.currentEvents = this.events.filter(
          (item) => item.access === true && item.date === date
        );
      } else if (tag === 'No') {
        this.currentEvents = this.events.filter(
          (item) => item.access === false && item.date === date
        );
      } else {
        this.currentEvents = this.events.filter((item) => item.date === date);
      }
    },
  },
  mounted() {
    this.getCurrentDate();
    this.getEvents();
  },
};
</script>
<style lang="scss"></style>
