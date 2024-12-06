<template>
  <teleport to="body">
    <div class="modal modal-order">
      <div class="modal__overlay"></div>
      <div class="modal-order__wrap modal__wrap">
        <div class="modal__close" @click="closeModal"></div>
        <div class="modal-order__body">
          <div class="modal-order__list">
            <div class="modal-order__item">
              <OrderTheOrder :order="orderLesson1" />
            </div>
            <!-- <div class="modal-order__item">
              <OrderTheOrder />
            </div> -->
            <div class="modal-order__item">
              <OrderTheOrder :order="orderLesson2" />
            </div>
          </div>
        </div>
        <div class="modal-order__footer">
          <div class="modal-order__buy">
            <UITheButton :label="'Получить'" class="btn-dark" />
          </div>
          <div class="modal-order__reg">
            <div class="modal-order__reg-item">
              <NuxtLink to="/registration">Быстрый вход / Регистрация</NuxtLink><span>или</span>
            </div>
            <div class="modal-order__reg-item">
              <TheNetwork :type="'vk-id'" :placeholder="'ВК ID'" />
              <TheNetwork :type="'ya-id'" :placeholder="'Яндекс ID'" />
              <TheNetwork :type="'sber-id'" :placeholder="'Сбер ID'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
<script>
export default {
  data() {
    return {
      orderLesson1: {
        title: 'КУПИТЬ УРОК',
        img: '/image/material.png',
        alt: '....',
        name: 'Введение в терминал',
        priceold: '200',
        pricenew: '150',
      },
      orderLesson2: {
        title: 'ОФОРМИТЬ ПОДПИСКУ',
        tooltip: true,
        img: '/image/material.png',
        alt: '....',
        name: 'Введение в терминал',
        priceold: '200',
        pricenew: '150',
      },
    };
  },
};
</script>
<style lang="scss">
.modal-order {
  &__wrap {
    padding: 90px 80px;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 50px;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
  &__item {
  }
  &__body {
    flex-grow: 1;
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
  }
  &__reg {
    display: flex;
    align-items: center;
  }
  &__reg-item {
    display: flex;
    align-items: center;
    &:first-child {
      margin-right: 20px;
    }
    &:last-child {
      gap: 15px;
    }
    a {
      display: flex;
      align-items: center;
      white-space: nowrap;
      gap: 5px;
      svg {
        max-width: 24px;
      }
    }
  }
}
</style>
