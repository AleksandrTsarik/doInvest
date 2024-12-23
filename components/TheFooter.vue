<template>
  <footer class="footer">
    <button @click="scrollToTop" class="scrollTop">
      <TheSvg :type="'top'" />
      Наверх
    </button>
    <div class="container">
      <div class="footer__inner">
        <h2 class="footer__title">Закрытый клуб инвесторов Insider</h2>
        <div class="footer__subtitle">Присоединяйся к сообществу инвесторов</div>
        <div class="footer__block">
          <div class="footer__item">
            <div v-for="(item, i) in list" :key="i" class="footer__row">{{ item.name }}</div>
            <UITheButton :label="'Узнать подробнее'" class="btn-light" />
          </div>
          <div class="footer__item">
            <div class="footer__link">
              <span v-for="(item, i) in link" :key="i">
                <NuxtLink :to="item.url">
                  {{ item.name }}
                  <svg
                    width="18.000000"
                    height="13.000000"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <path
                      id="Vector"
                      d="M17.7 5.79C17.89 5.98 18 6.22 18 6.48C18 6.74 17.89 6.99 17.7 7.17L11.93 12.7C11.84 12.79 11.72 12.86 11.6 12.92C11.47 12.97 11.34 12.99 11.21 13C11.07 13 10.94 12.97 10.81 12.92C10.68 12.87 10.57 12.8 10.48 12.71C10.38 12.62 10.3 12.51 10.25 12.39C10.2 12.27 10.18 12.14 10.18 12.01C10.18 11.88 10.21 11.75 10.26 11.63C10.31 11.51 10.39 11.41 10.49 11.32L14.51 7.46L1.01 7.46C0.74 7.46 0.48 7.36 0.29 7.17C0.1 6.99 0 6.74 0 6.48C0 6.22 0.1 5.98 0.29 5.79C0.48 5.61 0.74 5.51 1.01 5.51L14.51 5.51L10.49 1.65C10.3 1.47 10.2 1.22 10.2 0.96C10.2 0.71 10.31 0.46 10.5 0.28C10.69 0.1 10.95 0 11.21 0C11.48 -0.01 11.74 0.09 11.93 0.27L17.7 5.79Z"
                      fill="#2B2B2B"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                </NuxtLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: 'Регулярные мастер-классы и мастермайнды.',
        },
        {
          name: 'Лекции приглашенных авторитетных гостей.',
        },
        {
          name: 'Разбор торговых ситуаций и защита инвестиционных идей.',
        },
        {
          name: 'Фильмотека, библиотека и музей ценных бумаг.',
        },
      ],
      link: [
        {
          name: 'Обучение',
          url: '/',
        },
        {
          name: 'Аналитика',
          url: '/',
        },
        {
          name: 'Клуб инвесторов',
          url: '/',
        },
      ],
      scrollpx: 0,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
    handleScroll() {
      this.scrollpx = window.scrollTop;
    },
  },
  mounted() {
    // document.body.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', function () {
      //this.handleScroll();
      // console.log(this.scrollpx);
    });
  },
};
</script>

<style lang="scss">
.scrollTop {
  position: fixed;
  right: 25px;
  bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;

  display: none;
}
.footer {
  position: relative;
  background-color: #fff;
  padding: 85px 0;
  @media (max-width: 767px) {
    padding: 40px 0 55px;
  }
  &__title {
    font-size: 44px;
    font-weight: 400;
    color: #3f3f3f;
    line-height: 100%;
    margin-bottom: 50px;
    text-transform: uppercase;
    @media (max-width: 767px) {
      font-size: 28px;
      margin-bottom: 25px;
    }
  }
  &__subtitle {
    font-size: 32px;
    font-weight: 500;
    line-height: 110%;
    margin-bottom: 10px;
    @media (max-width: 767px) {
      font-size: 22px;
      margin-bottom: 20px;
    }
  }
  &__block {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
    @media (max-width: 767px) {
      margin: 0;
    }
  }
  &__item {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 10px;
    @media (max-width: 767px) {
      flex: 0 0 100%;
      max-width: 100%;
      padding: 0;
    }
  }
  &__row {
    font-size: 18px;
    font-weight: 400;
    color: #000;
    line-height: 135%;
    margin-bottom: 5px;
    @media (max-width: 767px) {
      font-size: 15px;
    }
  }
  &__link {
    display: flex;
    flex-direction: column;
    a {
      font-size: 24px;
      color: #2b2b2b;
      font-weight: 400;
      line-height: 110%;
      margin-bottom: 5px;
      border-bottom: solid 1px;
    }
  }
  .btn {
    margin-top: 45px;
    @media (max-width: 767px) {
      margin-bottom: 20px;
      margin-top: 25px;
      display: block;
      width: 100%;
    }
  }
}
</style>
