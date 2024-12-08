<template>
  <div class="container">
    <TheBreadCrumbs :breadCrumbs="breadCrumbs" />
  </div>
  <section class="section-page">
    <div class="container">
      <TheTerminal @modal-video-open="modalVideoOpen" />
    </div>
  </section>

  <section class="section-page">
    <div class="container">
      <TheSliderFeedBackItem />
    </div>
  </section>

  <section class="section-page">
    <div class="container">
      <TheOffers
        :offers="offerList"
        title="К ЭТОМУ ВИДЕОУРОКУ РЕКОМЕНДУЮ"
        @modal-video-open="modalVideoOpen"
      />
    </div>
  </section>

  <section class="section-page video-lessons">
    <div class="container">
      <TheVideo
        :videoLessons="currentVideoLessons.slice(0, 3)"
        :videoThemes="currentVideoThemes"
        @search-video-theme="searchVideoTheme"
        @filter-video-lessons="filterVideoLessons"
        @modal-video-open="modalVideoOpen"
        title="другие ВИДЕОуроки"
      />
      <div class="section-page__all-link">
        <NuxtLink class="btn" to="#">Показать другие уроки</NuxtLink>
      </div>
    </div>
  </section>

  <section class="section-page">
    <div class="container">
      <TheArticles :articles="articles" @modal-video-open="modalVideoOpen" />
    </div>
  </section>

  <section class="section-page">
    <div class="container">
      <TheEvents :events="events" @modal-video-open="modalVideoOpen" />
    </div>
  </section>

  <section class="section-page">
    <div class="container">
      <TheMentor @modal-video-open="modalVideoOpen" />
    </div>
  </section>

  <ModalTheModalVideoItem
    v-if="isModalVideoItem"
    @close="closeModalItem"
    :frameSrc="modalVideoItemSrcFrame"
  />
</template>
<script>
export default {
  data() {
    return {
      modalVideoItemSrcFrame: '',
      isModalVideoItem: false,
      modalVideo: false,
      offerList: [
        {
          img: '/image/event.jpg',
          tooltip: 'Доступ открыт',
          title: 'Что такое опцион и почему не нужно его покупать',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          free: true,
          moreUrl: '#',
        },
        {
          img: '/image/event.jpg',
          title: 'Что такое опцион и почему не нужно его покупать',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sit officiis assumenda pariatur quod, velit illum?',
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',

          priceold: '200',
          pricenew: '150',
          moreUrl: '#',
        },
        {
          img: '/image/event.jpg',
          title: 'Что такое опцион и почему не нужно его покупать',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sit officiis assumenda pariatur quod, velit illum?',
          frame: '',
          free: false,
          priceold: '200',
          pricenew: '150',
          moreUrl: '#',
        },
      ],
      breadCrumbs: [
        {
          name: 'Видеоуроки',
          url: '#',
          current: false,
        },
        {
          name: 'Работа с терминалом',
          url: '#',
          current: true,
        },
      ],
      events: [
        {
          pic: '/public/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
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
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Семинар. Инвестиции в ...',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
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
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
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
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          date: '28 августа 2023 18:00',
          place: 'МТС Арена',
          placeUrl: '#',
        },
      ],
      articles: [
        {
          pic: '/public/image/event.jpg',
          name: 'Заголовок',
          descr:
            'Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель)',
          price: 0,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Заголовок',
          descr:
            'Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель)',
          price: 150,
          oldPice: 200,
          frame: '',
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Заголовок',
          descr:
            'Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель)',
          price: 0,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Заголовок',
          descr:
            'Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель)',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Заголовок',
          descr:
            'Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель)',
          price: 0,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
        },
        {
          pic: '/public/image/event.jpg',
          name: 'Заголовок',
          descr:
            'Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель)',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
        },
      ],
      videoSearchDrop: false,
      videoThemes: [
        {
          id: 1,
          name: 'Что такое инвестиции?',
        },
        {
          id: 2,
          name: 'Как оценивать инвестиции?',
        },
        {
          id: 3,
          name: 'Как оценивать риски?',
        },
        {
          id: 4,
          name: 'Что такое инвестиции?',
        },
        {
          id: 5,
          name: 'Как оценивать инвестиции?',
        },
        {
          id: 6,
          name: 'Как оценивать риски?',
        },
        {
          id: 7,
          name: 'Что такое инвестиции?',
        },
        {
          id: 8,
          name: 'Как оценивать инвестиции?',
        },
        {
          id: 9,
          name: 'Как оценивать риски?',
        },
        {
          id: 10,
          name: 'Что такое инвестиции?',
        },
        {
          id: 11,
          name: 'Как оценивать инвестиции?',
        },
        {
          id: 12,
          name: 'Как оценивать риски?',
        },
        {
          id: 13,
          name: 'Что такое инвестиции?',
        },
        {
          id: 14,
          name: 'Как оценивать инвестиции?',
        },
        {
          id: 15,
          name: 'Как оценивать риски?',
        },
        {
          id: 16,
          name: 'Что такое инвестиции?',
        },
        {
          id: 17,
          name: 'Как оценивать инвестиции?',
        },
        {
          id: 18,
          name: 'Как оценивать риски?',
        },
      ],
      videoSearchField: '',
      currentVideoThemes: [],
      videoLessons: [
        {
          id: 1,
          themeId: 1,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 1)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          access: true,
        },
        {
          id: 2,
          themeId: 1,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 1)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          access: false,
        },
        {
          id: 3,
          themeId: 1,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 1)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          access: true,
        },
        {
          id: 4,
          themeId: 2,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 2)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          access: true,
        },
        {
          id: 5,
          themeId: 2,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 2)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          access: true,
        },
        {
          id: 6,
          themeId: 2,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 2)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          access: true,
        },
        {
          id: 7,
          themeId: 3,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 3)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          access: true,
        },
        {
          id: 8,
          themeId: 3,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 3)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          access: true,
        },
        {
          id: 9,
          themeId: 3,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 3)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          access: true,
        },
      ],
      currentVideoLessons: [],
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
    closeModal() {
      this.modalVideo = false;
    },
    searchVideoTheme(value) {
      if (value) {
        this.currentVideoThemes = this.videoThemes.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        );
      } else {
        this.currentVideoThemes = this.videoThemes;
      }
    },
    getVideoThemes() {
      this.currentVideoThemes = this.videoThemes;
    },
    filterVideoLessons(value) {
      let themeId = value;
      this.currentVideoLessons = this.videoLessons.filter((item) => item.themeId === themeId);
    },
    getVideoLessons() {
      this.currentVideoLessons = this.videoLessons;
    },
    // getTags() {
    //   this.materials.map((item) => {
    //     item.tags.map((tag) => {
    //       if (this.tagsMaterials.indexOf(tag) === -1) {
    //         this.tagsMaterials.push(tag);
    //       }
    //     });
    //   });
    // },
    // filterMaterials(tag) {
    //   if (tag) {
    //     this.currentTag = tag;
    //     this.currentMaterials = this.materials.filter((item) => item.tags.indexOf(tag) !== -1);
    //   } else {
    //     this.currentTag = '';
    //     this.currentMaterials = this.materials;
    //   }
    // },
  },
  mounted() {
    this.getVideoThemes();
    this.getVideoLessons();
    // this.getTags();
    // this.filterMaterials();
  },
};
</script>
<style lang="scss"></style>
