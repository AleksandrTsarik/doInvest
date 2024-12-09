<template>
  <div>
    <div class="section-page__title title">{{ title }}</div>
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
            <input
              v-model="videoSearchField"
              @input="searchVideoTheme"
              type="text"
              placeholder="Поиск по темам"
            />
            <!-- FIXME прикрутить иконку через компонент TheSvg  -->
            <span class="video-lessons-themes__search--ico"></span>
          </div>

          <ul class="video-lessons-themes__list">
            <perfect-scrollbar :options="{ suppressScrollX: true, wheelSpeed: 0.15 }">
              <li
                v-for="(theme, i) in videoThemes"
                :key="i"
                class="video-lessons-themes__item"
                @click="filterVideoLessons(theme.id)"
              >
                {{ theme.name }}
              </li>
            </perfect-scrollbar>
          </ul>
        </div>
      </div>
      <div class="video-lessons__access">
        <div class="video-lessons__access-title">Безлимитный доступ к урокам</div>
        <div class="video-lessons__access-btn">
          <UITheButton :class="['btn', 'btn-dark']" :label="'Получить доступ'"> </UITheButton>
        </div>
      </div>
    </div>

    <div class="video-lessons__catalog">
      <div v-for="(video, i) in videoLessons" :key="i" class="video-lessons__item">
        <div class="event-item">
          <div class="event-item__photo">
            <a href="#"><img src="/public/image/event.jpg" alt="" /></a>
            <span v-if="video.frame" class="video-icon" @click="modalVideoOpen(video.frame)">
            </span>
            <span v-if="video.access" class="event-item__access-shield"> Доступ открыт </span>
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
</template>
<script>
// import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

export default {
  props: {
    videoLessons: { type: Array, default: [], require: true },
    videoThemes: { type: Array, default: [], require: true },
    title: { type: String, default: '' },
  },
  data() {
    return {
      videoSearchField: '',
      videoSearchDrop: false,
    };
  },
  methods: {
    searchVideoTheme() {
      this.$emit('search-video-theme', this.videoSearchField);
    },
    filterVideoLessons(themeId) {
      this.$emit('filter-video-lessons', themeId);
    },
    modalVideoOpen(frameSrc) {
      this.$emit('modal-video-open', { src: frameSrc });
    },
    // scrollOffBody() {},
  },
};
</script>

<style lang="scss">
.video-lessons {
  &__top {
    display: flex;
    column-gap: 20px;
    margin-bottom: 40px;
    @media screen and (max-width: 991px) {
      flex-direction: column;
      column-gap: 0;
      row-gap: 30px;
    }
  }

  &__themes {
    flex: 0 0 calc(50% - 15px);
    max-width: calc(50% - 15px);

    @media screen and (max-width: 991px) {
      flex: 0 0 100%;
      max-width: initial;
    }
  }

  &__catalog {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__item {
    // flex: 0 0 calc(100% / 3 - 15px);
    // max-width: calc(100% / 3 - 15px);

    // @media screen and (max-width: 991px) {
    //   flex: 0 0 calc(100% / 2 - 8px);
    //   max-width: calc(100% / 2 - 8px);
    // }

    // @media screen and (max-width: 767px) {
    //   flex: 0 0 100%;
    //   max-width: initial;
    // }
  }

  &__access {
    display: flex;
    flex-direction: column;
    row-gap: 9px;

    @media screen and (max-width: 991px) {
      flex-direction: row;
      align-items: flex-end;
      row-gap: 0;
      column-gap: 15px;
    }

    @media screen and (max-width: 767px) {
      display: none;
    }

    &-title {
      font-size: 18px;
    }
  }
}

.video-lessons-themes {
  background-color: #fff;
  border-radius: 10px;

  &__caption {
    padding: 35px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
      padding: 30px 15px;
    }
  }

  &__title {
    font-size: 32px;
    color: var(--text);
    font-weight: 500;
    @media screen and (max-width: 767px) {
      font-size: 24px;
    }
  }

  &__drop {
    padding: 12px 0;
    display: flex;
    align-items: center;
    column-gap: 12px;
    margin-right: 20px;
    cursor: pointer;

    // FIXME поправить семейство шрифотов по макету
    &-info {
      font-size: 16px;
      font-weight: 500;
      color: #49454f;
      @media screen and (max-width: 767px) {
        display: none;
      }
    }

    &-btn {
      flex: 0 0 21px;
      display: flex;
      flex-direction: column;
      row-gap: 3px;

      div {
        height: 2px;
        background-color: #49454f;
      }
    }
  }

  &__body {
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 35px;
    @media screen and (max-width: 767px) {
      padding-left: 15px;
      padding-right: 15px;
    }

    .ps {
      height: 360px;
      width: 100%;
      overflow-x: hidden;

      &__rail-y {
        background: transparent !important;
        opacity: 1 !important;
      }

      &__thumb-y {
        background-color: rgb(var(--primary)) !important;

        &:hover {
          background-color: rgb(var(--primary));
        }
      }
    }
  }

  &__search {
    margin-top: -18px;
    position: relative;

    input {
      width: 100%;
      height: 56px;
      background-color: #eeeeee;
      border-radius: 10px;
      padding-left: 20px;
      // FIXME поправить семейство шрифотов по макету
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      font-weight: 500;
      color: #49454f;

      &::placeholder {
        font-style: 16px;
        font-weight: 500;
        color: #49454f;
      }
    }
  }

  &__list {
    margin-right: -40px;
    margin-top: 20px;

    @media screen and (max-width: 767px) {
      margin-right: -15px;
    }
  }

  &__item {
    padding: 16px 10px;
    font-size: 20px;
    color: var(--text);
    border-bottom: solid 1px #3f3f3f;
    margin-right: 40px;
    @media screen and (max-width: 767px) {
      font-size: 15px;
      margin-right: 15px;
    }

    &:first-child {
      border-top: solid 1px #3f3f3f;
    }

    &:hover {
      @media screen and (min-width: 1024px) {
        text-decoration: underline;
      }
    }
  }
}
</style>
