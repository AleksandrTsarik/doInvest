<template>
  <div class="container">
    <TheBreadCrumbs :breadCrumbs="breadCrumbs" />
  </div>

  <section class="section-page">
    <div class="container">
      <div class="preview">
        <div class="preview__wrap">
          <div class="preview__item">
            <div class="preview__name">Инвестор Данил Олимов</div>
            <h1 class="preview__title">Первые шаги в мир инвестиций</h1>
            <div class="preview__text">
              Я и моя команда запустили программу для начинающих инвесторов, которая даст
              практический навык составления сбалансированного и эффективного портфеля ценных бумаг.
            </div>
          </div>
          <div class="preview__item">
            <div class="preview__iframe iframe">
              <iframe src="" frameborder="0"></iframe>
              <span class="video-icon" @click="modalVideo = true"></span>
            </div>
          </div>
        </div>
        <!-- <div class="preview__wrapper">
            <div class="preview__item">
              <h1 class="preview__title">Сервис аналитики Doinvest</h1>
              <div class="preview__text-block">
                <div class="preview__text t-18">
                  Получайте новости только по интересующим вас акциям
                </div>
                <div class="preview__network">
                  <TheNetwork :type="'vk'" class="link-border" />
                  <TheNetwork :type="'telegram'" class="link-border" />
                  <TheNetwork :type="'youtube'" class="link-border" />
                </div>
              </div>

              <UITheButton :label="'Начать пользоваться'" class="btn-dark" />
            </div>
            <div class="preview__item">
              <div class="preview__iframe iframe">
                <iframe src="" frameborder="0"></iframe>
                <span class="video-icon" @click="modalVideo = true"></span>
              </div>
            </div>
          </div> -->
      </div>
    </div>
    <the-modal-video v-if="modalVideo" @close="closeModal" />
  </section>

  <!-- <section class="section-page">
      <div class="container">
        <TheFilter />
      </div>
    </section> -->

  <section class="section-page video-lessons">
    <div class="container">
      <TheVideo
        :videoLessons="currentVideoLessons.slice(0, 3)"
        :videoThemes="currentVideoThemes"
        @search-video-theme="searchVideoTheme"
        @filter-video-lessons="filterVideoLessons"
        @modal-video-open="modalVideoOpen"
        title="начни смотреть видеоуроки по инвестициям"
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

  <!-- <section class="section-page materials">
    <div class="container">
      <TheMaterials 
        :materials="currentMaterials"  
        :currentTag="currentTag"
        :tagsMaterials="tagsMaterials"
        @filter-materials="filterMaterials"
        @modal-video-open="modalVideoOpen"
      />
    </div>
  </section>   -->

  <section class="section-page">
    <div class="container">
      <TheIntro @modal-video-open="modalVideoOpen" />
    </div>
  </section>

  <section class="section-page">
    <div class="container">
      <TheMentor @modal-video-open="modalVideoOpen" />
    </div>
  </section>

  <section class="section-page">
    <div class="container">
      <TheSliderExperts />
    </div>
  </section>

  <section class="section-page">
    <div class="container">
      <TheSliderFeedback />
    </div>
  </section>

  <section class="section-page">
    <div class="container">
      <the-slider-big />
    </div>
  </section>

  <the-modal-video-item
    v-if="isModalVideoItem"
    @close="closeModalItem"
    :frameSrc="modalVideoItemSrcFrame"
  />
</template>

<script>
import TheModalVideo from '~/components/modal/TheModalVideo.vue';
import TheModalVideoItem from '~/components/modal/TheModalVideoItem.vue';
import TheMentor from '~/components/TheMentor.vue';
import TheSliderBig from '~/components/TheSlider.vue';
export default {
  components: { TheSliderBig, TheModalVideo, TheModalVideoItem },
  data() {
    return {
      modalVideoItemSrcFrame: '',
      isModalVideoItem: false,
      modalVideo: false,
      breadCrumbs: [
        {
          name: 'Уроки',
          url: '#',
          current: true,
        },
      ],
      svgEmail:
        '<svg width="16.000000" height="14.000000" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="clip1160_33"><rect ="solar:letter-linear" width="16.000000" height="13.090909" transform="translate(0.000000 -0.044922)" fill="white" fill-opacity="0"/></clipPath></defs><rect id="solar:letter-linear" width="16.000000" height="13.090909" transform="translate(0.000000 -0.044922)" fill="#FFFFFF" fill-opacity="0"/><g clip-path="url(#clip1160_33)"><path id="Vector" d="M1.57 1.53C2.43 0.68 3.8 0.68 6.54 0.68L9.45 0.68C12.19 0.68 13.56 0.68 14.41 1.53C15.27 2.38 15.27 3.75 15.27 6.5C15.27 9.24 15.27 10.61 14.41 11.46C13.56 12.31 12.19 12.31 9.45 12.31L6.54 12.31C3.8 12.31 2.43 12.31 1.57 11.46C0.72 10.61 0.72 9.24 0.72 6.5C0.72 3.75 0.72 2.38 1.57 1.53Z" stroke="#2B2B2B" stroke-opacity="1.000000" stroke-width="1.000000"/><path id="Vector" d="M3.63 3.58L5.2 4.89C6.54 6.01 7.2 6.56 8 6.56C8.78 6.56 9.45 6.01 10.79 4.89L12.36 " stroke="#2B2B2B" stroke-opacity="1.000000" stroke-width="1.000000" stroke-linecap="round"/></g></svg>',
      // НАЧАЛО Данные блока полезных материалов
      currentTag: '',
      materials: [
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          tags: ['Мои', 'Фильмы', 'Книги', 'Ссылки', 'Рекомендации'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          tags: ['Мои', 'Фильмы', 'Книги', 'Ссылки', 'Рекомендации'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Мои', 'Рекомендации'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Ссылки'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Рекомендации'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Мои', 'Фильмы', 'Книги', 'Ссылки', 'Рекомендации'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Мои', 'Фильмы', 'Рекомендации'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Книги', 'Ссылки', 'Рекомендации'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Книги', 'Ссылки'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Рекомендации'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Мои'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Фильмы'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Книги'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Книги'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Рекомендации'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Мои'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Мои', 'Фильмы', 'Книги', 'Ссылки', 'Рекомендации'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Ссылки'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Книги', 'Ссылки'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Фильмы', 'Книги', 'Ссылки', 'Рекомендации'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Книги', 'Ссылки', 'Рекомендации'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Ссылки'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Фильмы'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Фильмы'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Книги', 'Ссылки'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Мои', 'Фильмы', 'Книги'],
        },
        {
          pic: '/image/event.jpg',
          name: 'Книга про инвестиции',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          tags: ['Книги'],
        },
      ],
      currentMaterials: [],
      tagsMaterials: [],
      // КОНЕЦ Данные блока полезных материалов

      // НАЧАЛО Данные блока событий
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
      // КОНЕЦ Данные блока событий

      // НАЧАЛО Данные блока статей
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
      // КОНЕЦ Данные блока статей

      // НАЧАЛО Данные блока видеоуроков
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
      // КОНЕЦ Данные блока видеоуроков
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
    this.getVideoThemes();
    this.getVideoLessons();
    this.getTags();
    this.filterMaterials();
  },
};
</script>

<style lang="scss">
.preview {
  background-color: #fff;
  border-radius: 20px;
  padding: 105px 80px;
  @media (max-width: 1023px) {
    padding: 50px 35px;
  }
  @media (max-width: 767px) {
    padding: 30px 15px;
  }
  &__wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    align-items: center;
    @media (max-width: 1023px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
  &__iframe {
    background-image: url('/image/banner.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: block;
    width: 100%;
    height: 100%;
    padding-bottom: 50%;
    border-radius: 10px;
    overflow: hidden;
    @media (max-width: 1023px) {
      height: 50vw;
    }
  }
  &__item {
    &:first-child {
      max-width: 70%;
      @media (max-width: 1500px) {
        max-width: 90%;
      }
      @media (max-width: 1023px) {
        max-width: 100%;
      }
    }
  }
  &__name {
    font-size: 24px;
    color: var(--text);
    margin-bottom: 10px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  &__text {
    font-size: 18px;
    color: var(--text);
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
  &__title {
    font-size: 50px;
    font-weight: 400;
    margin-bottom: 40px;
    line-height: 100%;
    @media (max-width: 768px) {
      font-size: 32px;
      margin-bottom: 10px;
    }
  }
}

.analytics {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 15px;
  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
  &__title {
    margin-bottom: 45px;
    max-width: 70%;
    @media (max-width: 767px) {
      max-width: 100%;
    }
  }
  &__right {
    img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__left {
  }
  &__list {
    display: flex;
    margin: 0 -7.5px 0;
    flex-wrap: wrap;
  }
  &__name {
    font-weight: 500;
    margin: 40px 0 15px;
  }
}
</style>
