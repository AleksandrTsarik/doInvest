<template>
  <div class="container">
    <TheBreadCrumbs :breadCrumbs="breadCrumbs" />
  </div>
  <section class="section-page">
    <div class="container">
      <div class="order-placed">
        <div class="order-placed__item">
          <h2 class="order-placed__title title">ЗАКАЗ №2122</h2>
          <div class="order-placed__link-text t-24">
            <p>Ссылка на заказ:</p>
            <p>https://doinvest.ru/sdfsd3ff33</p>
          </div>
          <div class="order-placed__link t-20">
            <p>
              Никому не отправляйте ссылку до входа или регистрации.
              <NuxtLink to="#">Почему?</NuxtLink>
            </p>
          </div>
        </div>
        <div class="order-placed__item">
          <div class="ordre-placed-reg">
            <div class="ordre-placed-reg__head">
              Войдите или зарегистрируйтесь, чтобы сохранить доступ в личном кабинете
            </div>
            <div class="ordre-placed-reg__body">
              <div class="ordre-placed-reg__item">
                <p>Быстрый вход / Регистрация</p>
                <TheNetwork :type="'vk-id'" :placeholder="'ВК ID'" />
                <TheNetwork :type="'ya-id'" :placeholder="'Яндекс ID'" />
                <TheNetwork :type="'sber-id'" :placeholder="'Сбер ID'" />
              </div>
              <div class="ordre-placed-reg__item">
                <p>или</p>
                <UITheInput
                  :type="'text'"
                  :placeholder="'Введите ваш логин'"
                  class="modal-reg__input"
                />
                <UITheInput
                  :type="'text'"
                  :placeholder="'Введите ваш пароль'"
                  class="modal-reg__input"
                />
                <UITheButton :label="'Войти'" class="btn-dark modal-reg__login" />
                <UITheCheckbox
                  class="modal-reg__checkbox"
                  :label="`Я соглашаюсь с <a href='/' >политикой конфиденциальности</a>`"
                />
              </div>
            </div>
            <div class="ordre-placed-reg__footer">
              <UITheButton :label="'Регистрация'" class="btn-light modal-reg__registration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-page">
    <div class="container">
      <TheOfferItem :offers="offerList" offerTitle="ВИДЕОуроки" />
    </div>
  </section>
</template>
<script>
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
.order-placed {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  &__title {
    margin-bottom: 0.5em;
  }
  &__link-text {
    display: flex;
    align-items: center;
    gap: 0.3em;
  }
  &__link {
    display: flex;
    align-items: center;
    margin-top: 0.5em;
    a {
      border-bottom: solid 1px;
    }
  }
}
</style>
