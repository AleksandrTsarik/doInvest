<template>
  <main>
    <div class="container">
      <TheBreadCrumbs :breadCrumbs="breadCrumbs" />
    </div>
    <div class="personal-account">
      <div class="container">
        <div class="personal-account__top">
          <div class="personal-account__title title">Агрегатор важных новостей</div>
          
        </div>
      </div>

      <section class="section-page">
        <div class="container">
          <div class="personal-account__list">
            <div class="personal-account__item">
              <div class="personal-account__subtitle t-24">Как действующий участник рынка, развиваю сервисы по сбору аналитики. И если у вас есть задача получить ценную и сгруппированную информацию по рынку, то я и моя команда можем быть для вас полезными.</div>

              <TheChoice class="filter-form" />
              <div class="personal-account__choice-item">
                <p @click="openChoceList" :class="{'is-open' : isOpenChoceList}">Выберите пункт</p>
                <div class="personal-account__drop-choice" :class="{'is-open' : isOpenChoceList}">
                  <UITheCheckbox v-for="(item, i) in choiceItem" :key="i" :label="item.name" />
                </div>
              </div>
            </div>
            <div class="personal-account__item">
              <div class="personal-account-tab">
                <UITheTabs :tabs="tabs">
                  <slot />
                  <template  v-slot:content="{ active }">
                    <template v-if="active == 'Все новости'">
                      <div class="news">
                        <div class="news__list">
                          <TheNews  v-for="(item, i) in newsBlock" :key="i" :newsInfo="item" />
                          <ThePagination />
                        </div>
                      </div>
                      
                    </template>
                    <template v-if="active == 'Мои фильтры'">
                      <div class="personal-account-tab__table">
                        <TheFilterTable />
                      </div>
                    </template>
                  </template>
                </UITheTabs>
              </div>
              <div class="personal-account-btn">
                <UITheButton :label="'Настроить фильтры'" class="btn-light" :svg="svgSettings" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section class="section-page">
        <div class="container">
          <TheSlider />
        </div>
      </section>

    </div>
   </main>
</template>

<script>
export default {
  data() {
    return {
      modalVideo :false,
      isOpenChoceList: false,
      choiceItem: [
        {
          id: 0,
          name: 'Пункт 1'
        },
        {
          id: 1,
          name: 'Пункт 2'
        },
        {
          id: 2,
          name: 'Пункт 3'
        },
        {
          id: 3,
          name: 'Пункт 4 удлиненный длиной в две строчки'
        },
        {
          id: 4,
          name: 'Пункт 5'
        },
        {
          id: 5,
          name: 'Пункт 5'
        },
        {
          id: 6,
          name: 'Пункт 5'
        },
        {
          id: 7,
          name: 'Пункт 5'
        },

      ],
      breadCrumbs: [
        {
          name: 'Сервисы',
          url: '#',
          current: false
        },
        {
          name: 'Аналитика',
          url: '#',
          current: false
        },
        {
          name: 'Личный кабинет',
          url: '#',
          current: true
        }
      ],
      tabs: [
        {
          title: 'Все новости',
          name: 'name1',
          content: 'content1',
          value : 'Все новости'
        },
        {
          title: 'Мои фильтры',
          name: 'name2',
          content: 'content2',
          value : 'Мои фильтры'
        }
      ],
      newsBlock: [],
      svgSettings: '<svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="clip1121_548"><rect id="ph:gear-light" width="16.000000" height="16.000000" transform="translate(0.000000 -0.500000)" fill="white" fill-opacity="0"/></clipPath></defs><rect id="ph:gear-light" width="16.000000" height="16.000000" transform="translate(0.000000 -0.500000)" fill="#FFFFFF" fill-opacity="0"/><g clip-path="url(#clip1121_548)"><path id="Vector" d="M8 4.26C7.36 4.26 6.73 4.45 6.2 4.81C5.67 5.16 5.25 5.67 5.01 6.26C4.76 6.85 4.7 7.5 4.82 8.13C4.95 8.75 5.26 9.33 5.71 9.78C6.16 10.23 6.74 10.54 7.36 10.67C7.99 10.79 8.64 10.73 9.23 10.48C9.82 10.24 10.33 9.82 10.68 9.29C11.04 8.76 11.23 8.13 11.23 7.49C11.23 6.64 10.89 5.82 10.28 5.21C9.67 4.6 8.85 4.26 8 4.26ZM8 9.89C7.52 9.89 7.06 9.75 6.67 9.48C6.27 9.22 5.97 8.85 5.79 8.41C5.61 7.97 5.56 7.49 5.65 7.03C5.74 6.56 5.97 6.14 6.3 5.8C6.64 5.47 7.06 5.24 7.53 5.15C7.99 5.06 8.47 5.1 8.91 5.29C9.35 5.47 9.72 5.77 9.98 6.17C10.25 6.56 10.39 7.02 10.39 7.49C10.39 8.13 10.13 8.74 9.69 9.18C9.24 9.63 8.63 9.89 8 9.89ZM14.04 7.69C14.05 7.56 14.05 7.43 14.04 7.29L15.12 5.95C15.16 5.9 15.19 5.84 15.2 5.77C15.22 5.71 15.21 5.64 15.2 5.58C15.03 4.94 14.78 4.33 14.45 3.76C14.41 3.7 14.37 3.65 14.31 3.62C14.26 3.58 14.19 3.56 14.13 3.55L12.41 3.36C12.32 3.26 12.23 3.17 12.13 3.08L11.94 1.36C11.93 1.29 11.91 1.23 11.87 1.17C11.83 1.12 11.78 1.07 11.73 1.04C11.16 0.71 10.55 0.46 9.91 0.29C9.85 0.27 9.78 0.27 9.72 0.29C9.65 0.3 9.59 0.33 9.54 0.37L8.19 1.45C8.06 1.45 7.93 1.45 7.79 1.45L6.45 0.37C6.4 0.33 6.34 0.3 6.27 0.29C6.21 0.27 6.14 0.27 6.08 0.29C5.44 0.46 4.83 0.71 4.26 1.04C4.2 1.08 4.15 1.12 4.12 1.18C4.08 1.23 4.06 1.3 4.05 1.36L3.86 3.08C3.77 3.17 3.67 3.27 3.58 3.36L1.86 3.56C1.8 3.56 1.73 3.59 1.68 3.62C1.62 3.66 1.58 3.71 1.54 3.77C1.21 4.34 0.96 4.95 0.79 5.58C0.78 5.64 0.78 5.71 0.79 5.77C0.8 5.84 0.83 5.9 0.87 5.95L1.95 7.3C1.95 7.43 1.95 7.56 1.95 7.7L0.87 9.05C0.83 9.1 0.8 9.16 0.79 9.22C0.77 9.29 0.78 9.35 0.79 9.42C0.96 10.05 1.21 10.66 1.54 11.23C1.58 11.29 1.62 11.34 1.68 11.37C1.73 11.41 1.8 11.43 1.86 11.44L3.58 11.63C3.67 11.73 3.77 11.82 3.86 11.91L4.06 13.63C4.07 13.69 4.09 13.76 4.12 13.81C4.16 13.87 4.21 13.91 4.27 13.95C4.84 14.28 5.45 14.53 6.08 14.7C6.14 14.71 6.21 14.72 6.28 14.7C6.34 14.69 6.4 14.66 6.45 14.62L7.8 13.54C7.93 13.55 8.06 13.55 8.19 13.54L9.55 14.62C9.62 14.68 9.71 14.72 9.81 14.72C9.85 14.71 9.88 14.71 9.92 14.7C10.55 14.53 11.16 14.28 11.73 13.95C11.79 13.92 11.84 13.87 11.87 13.82C11.91 13.76 11.93 13.7 11.94 13.63L12.13 11.91C12.23 11.82 12.32 11.73 12.41 11.63L14.13 11.44C14.2 11.43 14.26 11.41 14.32 11.37C14.37 11.34 14.42 11.29 14.45 11.23C14.78 10.66 15.03 10.05 15.2 9.42C15.22 9.35 15.22 9.29 15.2 9.22C15.19 9.16 15.16 9.1 15.12 9.05L14.04 7.69ZM13.82 10.62L12.16 10.81C12.06 10.82 11.96 10.87 11.89 10.95C11.75 11.1 11.61 11.25 11.45 11.39C11.37 11.46 11.32 11.56 11.31 11.66L11.12 13.32C10.73 13.53 10.33 13.7 9.9 13.82L8.6 12.78C8.52 12.72 8.43 12.69 8.33 12.69L8.31 12.69C8.1 12.7 7.89 12.7 7.68 12.69C7.58 12.68 7.47 12.71 7.39 12.78L6.09 13.82C5.67 13.7 5.26 13.53 4.87 13.32L4.68 11.66C4.67 11.55 4.62 11.46 4.54 11.39C4.39 11.25 4.24 11.1 4.1 10.95C4.03 10.87 3.93 10.82 3.83 10.81L2.17 10.62C1.96 10.23 1.79 9.82 1.67 9.4L2.71 8.1C2.78 8.02 2.81 7.91 2.8 7.81C2.79 7.6 2.79 7.39 2.8 7.18C2.81 7.08 2.78 6.97 2.71 6.89L1.67 5.59C1.79 5.16 1.96 4.76 2.17 4.37L3.83 4.18C3.94 4.17 4.03 4.12 4.1 4.04C4.24 3.89 4.39 3.74 4.54 3.6C4.62 3.53 4.67 3.43 4.68 3.33L4.87 1.67C5.26 1.46 5.67 1.29 6.09 1.17L7.39 2.21C7.47 2.28 7.58 2.31 7.68 2.3C7.89 2.29 8.1 2.29 8.31 2.3C8.41 2.31 8.52 2.28 8.6 2.21L9.9 1.17C10.32 1.29 10.73 1.46 11.12 1.67L11.31 3.33C11.32 3.44 11.37 3.53 11.45 3.6C11.6 3.74 11.75 3.89 11.89 4.05C11.96 4.12 12.06 4.17 12.16 4.19L13.82 4.37C14.03 4.76 14.2 5.17 14.32 5.59L13.28 6.89C13.21 6.97 13.18 7.08 13.19 7.18C13.2 7.39 13.2 7.6 13.19 7.81C13.18 7.91 13.21 8.02 13.28 8.1L14.32 9.4C14.2 9.82 14.03 10.23 13.82 10.62L13.82 10.62Z" fill="#2B2B2B" fill-opacity="1.000000" fill-rule="nonzero"/></g></svg>'
      
    }
  },
  async mounted() {
    const newsBlocks = []
    newsBlocks.push(
      {
        video: (await import("@/assets/img/news.jpeg")).default,
        title : 'Новость',
        text: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
        url: '#'
      },
      {
        video: (await import("@/assets/img/filter-info.jpeg")).default,
        title : 'Новость',
        text: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
        url: '#'
      },
      {
        video: (await import("@/assets/img/preview.jpeg")).default,
        title : 'Новость',
        text: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст, ноги которого растут аж из 45 года до нашей эры.',
        url: '#'
      },
    )
    this.newsBlock = newsBlocks
	},
  methods: {
    openChoceList() {
      this.isOpenChoceList = !this.isOpenChoceList
    }
  }
}
</script>

<style lang="scss">
.personal-account {
  &__choice-item {
    width: 100%;
    max-width: 350px;
    position: relative;
    margin-top: 30px;
    @media(max-width: 575px) {
      max-width: 100%;
    }
    p {
      display: inline-flex;
      justify-content: space-between;
      background-color: #fff;
      align-items: center;
      border: solid 1px #C9C9C9;
      border-radius: 6px;
      position: relative;
      padding: 15px 15px;
      font-size: 18px;
      width: 100%;
      z-index: 2;
      cursor: pointer;
      &::after {
        content: '';
        width: 0; 
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 10px solid #2B2B2B;
        transition: 0.3s;
      }
      &.is-open {
        &:after {
          transform: rotate(180deg);
        }
      }
    }



  }
  &__drop-choice {
    position: absolute;
    z-index: 0;
    left: 0;
    top: 90%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 0 0 6px 6px;
    opacity: 0;
    height: 0;
    visibility: hidden;
    transition: 0.3s;
    max-height: 250px;
    overflow-y: auto;
    border: solid 1px #C9C9C9;
    @media(max-width: 1273px) {
      position: relative;
      left: auto;
      top: auto;
    }
    label {
      margin-bottom: 10px;
    }
    &.is-open {
      opacity: 1;
      visibility: visible;
      height: auto;
      padding: 20px;
    }
  }
  .filter-form {
    padding-right: 150px;
    padding-top: 40px;
    @media(max-width: 1500px) {
      padding-right: 0;
    }
  }
  &__title {
    max-width: 40%;
    @media(max-width: 1023px) {
      max-width: 100%;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr 60%;
    gap: 10px;
    @media(max-width: 1500px) {
      gap: 20px;
    }
    @media(max-width: 1273px) {
      grid-template-columns: 1fr;
    }
  }
  &__item {
    position: relative;
    overflow: hidden;
    &:first-child {

    }
    &:last-child {
      display: flex;
      justify-content: space-between;
      @media(max-width: 767px) {
        flex-direction: column;
      }
    }
  }
  
}
.personal-account-btn {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media(max-width: 767px) {
    position: relative;
    top: auto;
    right: auto;
    order: 1;
    margin: 0 0 20px;
  }
  @media(max-width: 575px) {
    width: 100%;
    button {
      width: 100%;
      text-align: center;
      display: block;
    }
  }
  svg {
    margin-right: 10px;
  }
}

.personal-account-tab {
  overflow-x: auto;
  overflow-y: hidden;
  @media(max-width: 767px) {
    order: 2;
  }
}


</style>