<template>
  <main>
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
                практический навык составления сбалансированного и эффективного портфеля ценных
                бумаг.
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

    <section class="section-page">
      <div class="container">
        <TheIntro />
      </div>
    </section>

    <section class="section-page">
      <div class="container">
        <TheMentor />
      </div>
    </section>

    <section class="section-page">
      <div class="container">
        <the-slider-big />
      </div>
    </section>
    <!-- <section class="section-page">
      <div class="container">
        <div class="analytics">
          <div class="analytics__left">
            <div class="analytics__title title">Получайте аналитику удобным способом</div>
            <div class="analytics__list">
              <NuxtLink to="/" class="analytics-item">
                <div class="analytics-item__inner">
                  <div class="analytics-item__name t-24">E-mail</div>
                  <div class="analytics-item__ico"><TheSvg :type="'email'" /></div>
                </div>
              </NuxtLink>
              <NuxtLink to="/" class="analytics-item">
                <div class="analytics-item__inner">
                  <div class="analytics-item__name t-24">Телеграм</div>
                  <div class="analytics-item__ico"><TheSvg :type="'telegram'" /></div>
                </div>
              </NuxtLink>
              <NuxtLink to="/" class="analytics-item">
                <div class="analytics-item__inner">
                  <div class="analytics-item__name t-24">WhatsApp</div>
                  <div class="analytics-item__ico"><TheSvg :type="'whatsapp'" /></div>
                </div>
              </NuxtLink>
              <NuxtLink to="/" class="analytics-item">
                <div class="analytics-item__inner">
                  <div class="analytics-item__name t-24">Viber</div>
                  <div class="analytics-item__ico"><TheSvg :type="'viber'" /></div>
                </div>
              </NuxtLink>
            </div>
            <div class="analytics__name t-32">Дополнительные форматы</div>
            <div class="analytics__list">
              <NuxtLink to="/" class="analytics-item">
                <div class="analytics-item__inner">
                  <div class="analytics-item__name t-24">RSS</div>
                  <div class="analytics-item__ico"><TheSvg :type="'rss'" /></div>
                </div>
              </NuxtLink>
              <NuxtLink to="/" class="analytics-item">
                <div class="analytics-item__inner">
                  <div class="analytics-item__name t-24">PDF</div>
                  <div class="analytics-item__ico"><TheSvg :type="'pdf'" /></div>
                </div>
              </NuxtLink>
              <NuxtLink to="/" class="analytics-item">
                <div class="analytics-item__inner">
                  <div class="analytics-item__name t-24">JSON</div>
                  <div class="analytics-item__ico"><TheSvg :type="'json'" /></div>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div class="analytics__right">
            <img src="@/assets/img/analytics.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section> -->
  </main>
</template>

<script>
import TheModalVideo from '~/components/modal/TheModalVideo.vue';
import TheMentor from '~/components/TheMentor.vue';
import TheSliderBig from '~/components/TheSlider.vue';
export default {
  components: { TheSliderBig, TheModalVideo },
  data() {
    return {
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
    };
  },

  methods: {
    closeModal() {
      this.modalVideo = false;
    },
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
