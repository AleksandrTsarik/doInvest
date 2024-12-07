<template>
  <div class="container">
    <TheBreadCrumbs :breadCrumbs="breadCrumbs" />
  </div>
  <section class="section-page">
    <div class="container">
      <div class="order-placed">
        <div class="order-placed__item">
          <h2 class="order-placed__title title">ЗАКАЗ №2122</h2>
          <div class="order-placed__link-text t-20">
            <p>Ссылка на заказ:</p>
            <p>https://doinvest.ru/sdfsd3ff33</p>
          </div>
          <div class="order-placed__link t-18">
            <p>
              Никому не отправляйте ссылку до входа или регистрации.
              <NuxtLink to="#">Почему?</NuxtLink>
            </p>
          </div>
        </div>
        <div class="order-placed__item">
          <div class="ordre-placed-reg">
            <div class="ordre-placed-reg__head t-20">
              Войдите или зарегистрируйтесь, чтобы&nbsp;сохранить доступ в личном кабинете
            </div>
            <div class="ordre-placed-reg__body">
              <div class="ordre-placed-reg__item">
                <p class="t-18">Быстрый вход / Регистрация</p>
                <div class="ordre-placed-reg__id">
                  <TheNetwork :type="'vk-id'" :placeholder="'ВК ID'" />
                  <TheNetwork :type="'ya-id'" :placeholder="'Яндекс ID'" />
                  <TheNetwork :type="'sber-id'" :placeholder="'Сбер ID'" />
                </div>
              </div>
              <div class="ordre-placed-reg__item">
                <p>или</p>
                <div class="ordre-placed-reg__inputs">
                  <UITheInput :type="'text'" :placeholder="'Введите ваш логин'" />
                  <UITheInput :type="'text'" :placeholder="'Введите ваш пароль'" />
                  <UITheButton :label="'Войти'" class="btn-dark modal-reg__login" />
                  <UITheCheckbox
                    :label="`Я соглашаюсь с <a href='/' >политикой конфиденциальности</a>`"
                  />
                </div>
              </div>
            </div>
            <div class="ordre-placed-reg__footer">
              <UITheButton :label="'Регистрация'" class="btn-light" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-page">
    <div class="container order-placed-wrap">
      <TheOffers :offers="offerList" title="ВИДЕОуроки" />
      <ThePagination />
    </div>
  </section>
</template>
<script>
import TheOffers from '~/components/TheOffers.vue';

export default {
  data() {
    return {
      offerList: [
        {
          img: '/image/event.jpg',
          tooltip: 'Доступ открыт',
          title: 'Что такое опцион и почему не нужно его покупать',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
          video: true,
          free: true,
          moreUrl: '#',
        },
        {
          img: '/image/event.jpg',
          title: 'Что такое опцион и почему не нужно его покупать',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sit officiis assumenda pariatur quod, velit illum?',
          video: true,

          priceold: '200',
          pricenew: '150',
          moreUrl: '#',
        },
        {
          img: '/image/event.jpg',
          title: 'Что такое опцион и почему не нужно его покупать',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sit officiis assumenda pariatur quod, velit illum?',
          video: false,
          free: false,
          priceold: '200',
          pricenew: '150',
          moreUrl: '#',
        },
        {
          img: '/image/event.jpg',
          tooltip: 'Доступ открыт',
          title: 'Что такое опцион и почему не нужно его покупать',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
          video: true,
          free: true,
          moreUrl: '#',
        },
        {
          img: '/image/event.jpg',
          title: 'Что такое опцион и почему не нужно его покупать',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sit officiis assumenda pariatur quod, velit illum?',
          video: false,

          priceold: '200',
          pricenew: '150',
          moreUrl: '#',
        },
        {
          img: '/image/event.jpg',
          title: 'Что такое опцион и почему не нужно его покупать',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sit officiis assumenda pariatur quod, velit illum?',
          video: true,
          free: false,
          priceold: '200',
          pricenew: '150',
          moreUrl: '#',
        },
      ],
      breadCrumbs: [
        {
          name: 'Завершение заказа',
          url: '#',
          current: true,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.order-placed-wrap {
  .pagination {
    margin-top: 30px;
  }
}
.order-placed {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
  &__title {
    margin-bottom: 0.5em;
  }
  &__link-text {
    display: flex;
    align-items: center;
    gap: 0.3em;
    @media (max-width: 575px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &__link {
    display: flex;
    align-items: center;
    margin-top: 0.5em;
    flex-wrap: wrap;
    a {
      border-bottom: solid 1px;
    }
  }
}
.ordre-placed-reg {
  background-color: rgb(var(--light));
  border-radius: var(--radiusBig);
  padding: 35px;
  @media (max-width: 767px) {
    padding: 20px;
  }
  &__head {
    max-width: 65%;
    @media (max-width: 1500px) {
      max-width: 100%;
    }
  }
  &__body {
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    gap: 50px;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }
  &__footer {
    margin: 0 auto;
    button {
      margin: 30px auto 0;
      display: block;
      width: 100%;
      max-width: 60%;
      @media (max-width: 767px) {
        max-width: 100%;
        margin-top: 10px;
      }
    }
  }
  &__item {
    p {
      text-align: center;
      margin: 20px 0;
    }
  }
  &__inputs {
    input {
      width: 100%;
    }
    button {
      width: 100%;
      text-align: center;
      justify-content: center;
      margin-bottom: 10px;
    }
    .default-checkbox {
      font-size: 13px;
      gap: 5px;
      a {
        text-decoration: underline;
      }
    }
  }
  &__id {
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      max-width: 44px;
    }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 15px;
    }
  }
}
</style>
