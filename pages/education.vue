<template>
  <main>
    <section class="section-page video-lessons">
      <div class="container">
        <div class="section-page__title video-lessons__title title">начни смотреть видеоуроки по инвестициям</div>
        <div class="video-lessons__top">
          <div class="video-lessons__themes video-lessons-themes">
            <div class="video-lessons-themes__caption" @click="videoSearchDrop = !videoSearchDrop">
              <div class="video-lessons-themes__title">ТЕМЫ УРОКОВ</div>
              <div class="video-lessons-themes__drop">
                <div class="video-lessons-themes__drop-info">Список&nbsp;тем</div>
                <div class="video-lessons-themes__drop-btn">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>

            <div v-if="videoSearchDrop" class="video-lessons-themes__body">
              <div class="video-lessons-themes__search">
                <input v-model="videoSearchField" @input="searchVideoTheme()" type="text" placeholder="Поиск по темам">
                <!-- FIXME прикрутить иконку через компонент TheSvg  -->
                <span class="video-lessons-themes__search--ico"></span>
              </div>
              <ul class="video-lessons-themes__list">
                <li 
                  v-for="(theme, i) in currentVideoThemes" 
                  :key="i"
                  class="video-lessons-themes__item"
                  @click="filterVideoLessons(theme.id)">
                  {{ theme.name }}
                 </li>
              </ul>                
            </div>

          </div>
          <div class="video-lessons__access">
            <div class="video-lessons__access-title">
              Безлимитный доступ к урокам
            </div>
            <div class="video-lessons__access-btn">
              <UITheButton 
                :class="['btn', 'btn-dark']" 
                :label="'Получить доступ'">
              </UITheButton>
            </div>
          </div>
          
        </div>

        <div class="video-lessons__catalog">
          <div 
            v-for="(video, i) in currentVideoLessons.slice(0, 3)"
            :key="i"
            class="video-lessons__item">
            <div class="event-item">
              <div class="event-item__photo">
                <a href="#"><img src="/public/image/event.jpg" alt="" /></a>
              </div>
              <div class="event-item__info">
                <div class="event-item__name event-item__name--full">
                  {{ video.name }}
                </div>
                <div class="event-item__descr event-item__descr--full">
                  {{ video.descr }}
                </div>
                <div class="event-item__bottom">
                  <div class="event-item__bottom-left">
                    <div v-if="video.oldPice" class="event-item__price event-item__price--old">
                      {{ video.oldPice }}
                    </div>
                    <div class="event-item__price">{{ video.price ? video.price : 'БЕСПЛАТНО' }}</div>
                    <div v-if="video.price" class="event-item__price event-item__price--unit">₽</div>
                  </div>
                  <div class="event-item__link">
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
      </div>
    </section>

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
      videoSearchDrop: false,
      videoThemes: [
        {
          id: 1,
          name: 'Что такое инвестиции?'
        },
        {
          id: 2,
          name: 'Как оценивать инвестиции?'
        },
        {
          id: 3,
          name: 'Как оценивать риски?'
        },
        {
          id: 4,
          name: 'Что такое инвестиции?'
        },
        {
          id: 5,
          name: 'Как оценивать инвестиции?'
        },
        {
          id: 6,
          name: 'Как оценивать риски?'
        },
        {
          id: 7,
          name: 'Что такое инвестиции?'
        },
        {
          id: 8,
          name: 'Как оценивать инвестиции?'
        },
        {
          id: 9,
          name: 'Как оценивать риски?'
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
          frame: ''
        },
        {
          id: 2,
          themeId: 1,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 1)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: ''
        },
        {
          id: 3,
          themeId: 1,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 1)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: ''
        },
        {
          id: 4,
          themeId: 2,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 2)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: ''
        },
        {
          id: 5,
          themeId: 2,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 2)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: ''
        },
        {
          id: 6,
          themeId: 2,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 2)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: ''
        },
        {
          id: 7,
          themeId: 3,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 3)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: ''
        },
        {
          id: 8,
          themeId: 3,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 3)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: ''
        },
        {
          id: 9,
          themeId: 3,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 3)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: ''
        }
      ],
      currentVideoLessons: [],
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
    searchVideoTheme() {
      if(this.videoSearchField.length) {
        this.currentVideoThemes = this.videoThemes.filter(item => item.name.toLowerCase().includes(this.videoSearchField.toLowerCase())) 
      }else{
        this.currentVideoThemes = this.videoThemes
      }
    },
    getVideoThemes() {
      this.currentVideoThemes = this.videoThemes
    },
    filterVideoLessons(themeId) {
      this.currentVideoLessons = this.videoLessons.filter(item => item.themeId === themeId)
    },
    getVideoLessons() {
      this.currentVideoLessons = this.videoLessons
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
    this.getVideoThemes()
    this.getVideoLessons()
    this.getTags()
    this.filterMaterials()
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

// .video-lessons {
//   &__top {
//     display: flex;
//     column-gap: 20px;
//     margin-bottom: 40px;
//     @media screen and (max-width: 991px) {
//       flex-direction: column;
//       column-gap: 0;
//       row-gap: 30px;
//     }
//   }

//   &__themes {
//     flex: 0 0 calc(50% - 15px);
//     max-width: calc(50% - 15px); 

//     @media screen and (max-width: 991px) {
//       flex: 0 0 100%;
//       max-width: initial;
//     }
//   }

//   &__catalog {
//     display: flex;
//     column-gap: 15px;    
//     justify-content: space-between;
//     @media screen and (max-width: 991px) {
//       flex-wrap: wrap;
//       row-gap: 15px;
//     }
//   }

//   &__item {
//     flex: 0 0 calc(100%/3 - 15px);
//     max-width: calc(100%/3 - 15px);

//     @media screen and (max-width: 991px) {
//       flex: 0 0 calc(100%/2 - 8px);
//       max-width: calc(100%/2 - 8px);
//     }

//     @media screen and (max-width: 767px) {
//       flex: 0 0 100%;
//       max-width: initial
//     }
//   }

//   &__access {
//     display: flex;
//     flex-direction: column;
//     row-gap: 9px;    

//     @media screen and (max-width: 991px) {
//       flex-direction: row;
//       align-items: flex-end;
//       row-gap: 0;
//       column-gap: 15px;
//     }

//     @media screen and (max-width: 767px) {
//       display: none;
//     }

//     &-title {
//       font-size: 18px;
//     }
//   }
// }

// .video-lessons-themes {
//   background-color: #fff;
//   border-radius: 10px;

//   &__caption {
//     padding: 35px 40px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     @media screen and (max-width: 767px) {
//       padding: 30px 15px;
//     }
//   }

//   &__title {
//     font-size: 32px;
//     color: var(--text);
//     font-weight: 500;  
//     @media screen and (max-width: 767px) {
//       font-size: 24px;
//     }  
//   }

//   &__drop {
//     padding: 12px 0;
//     display: flex;
//     align-items: center;  
//     column-gap: 12px;
//     margin-right: 20px;
//     cursor: pointer;

//     // FIXME поправить семейство шрифотов по макету
//     &-info {
//       font-size: 16px;
//       font-weight: 500;
//       color: #49454F;
//       @media screen and (max-width: 767px) {
//         display: none;
//       }
//     }

//     &-btn {
//       flex: 0 0 21px;
//       display: flex;
//       flex-direction: column;
//       row-gap: 3px;

//       div {
//         height: 2px;
//         background-color: #49454F;
//       }
//     }
//   }

//   &__body {
//     padding-left: 40px;
//     padding-right: 40px;
//     padding-bottom: 35px;
//     @media screen and (max-width: 767px) {
//       padding-left: 15px;
//       padding-right: 15px;
//     }
//   }

//   &__search {
//     margin-top: -18px;
//     position: relative;

//     input {
//       width: 100%;
//       height: 56px;
//       background-color: #EEEEEE;
//       border-radius: 10px;
//       padding-left: 20px;
//       // FIXME поправить семейство шрифотов по макету
//       font-family: 'Montserrat', sans-serif;
//       font-size: 16px;
//       font-weight: 500;
//       color: #49454F;

//       &::placeholder {
//         font-style: 16px;
//         font-weight: 500;
//         color: #49454F;
//       }
//     }
//   }

//   &__list {
//     margin-top: 20px;
//     border-top: solid 1px #3F3F3F;
//   }

//   &__item {
//     padding: 16px 10px;
//     font-size: 20px;
//     color: var(--text);
//     border-bottom: solid 1px #3F3F3F;    
//     @media screen and (max-width: 767px) {
//       font-size: 15px;
//     }

//     &:hover {
//       @media screen and (min-width: 1024px) {
//         text-decoration: underline;
//       }
//     }
//   } 
// }
</style>
