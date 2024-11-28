<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo header__left">
          <TheNetwork :type="'logo'" />
        </div>
        <div class="header__right">
          <div class="header__item header__item--mobile">
            <UITheButton
              :label="'Связаться'"
              class="btn-dark"
              @click="modalQuestion = true"
            />
          </div>
          <div class="header__item header__item-network">
            <TheNetwork :type="'vk'" class="link-border" />
            <TheNetwork :type="'telegram'" class="link-border" />
            <TheNetwork :type="'youtube'" class="link-border" />
          </div>
          <div class="header__item">
            <div class="header__user">
              <svg
                width="40.000000"
                height="40.000000"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <clipPath id="clip1161_966">
                    <rect
                      id="user"
                      width="40.000000"
                      height="40.000000"
                      fill="white"
                      fill-opacity="0"
                    />
                  </clipPath>
                </defs>
                <rect
                  id="user"
                  width="40.000000"
                  height="40.000000"
                  fill="#FFFFFF"
                  fill-opacity="0"
                />
                <g clip-path="url(#clip1161_966)">
                  <path
                    id="Vector"
                    d="M20 20C21.98 20 23.89 19.2 25.3 17.8C26.7 16.39 27.5 14.48 27.5 12.5C27.5 10.51 26.7 8.6 25.3 7.19C23.89 5.79 21.98 5 20 5C18.01 5 16.1 5.79 14.69 7.19C13.29 8.6 12.5 10.51 12.5 12.5C12.5 14.48 13.29 16.39 14.69 17.8C16.1 19.2 18.01 20 20 20ZM20 22.5C17.34 22.5 14.8 21.44 12.92 19.57C11.05 17.69 10 15.15 10 12.5C10 9.84 11.05 7.3 12.92 5.42C14.8 3.55 17.34 2.5 20 2.5C22.65 2.5 25.19 3.55 27.07 5.42C28.94 7.3 30 9.84 30 12.5C30 15.15 28.94 17.69 27.07 19.57C25.19 21.44 22.65 22.5 20 22.5ZM32.5 35L32.5 31.25C32.5 30.25 32.1 29.3 31.4 28.59C30.69 27.89 29.74 27.5 28.75 27.5L11.25 27.5C10.25 27.5 9.3 27.89 8.59 28.59C7.89 29.3 7.5 30.25 7.5 31.25L7.5 35C7.5 35.33 7.36 35.65 7.13 35.88C6.89 36.11 6.58 36.25 6.25 36.25C5.91 36.25 5.6 36.11 5.36 35.88C5.13 35.65 5 35.33 5 35L5 31.25C5 29.59 5.65 28 6.83 26.83C8 25.65 9.59 25 11.25 25L28.75 25C30.4 25 31.99 25.65 33.16 26.83C34.34 28 35 29.59 35 31.25L35 35C35 35.33 34.86 35.65 34.63 35.88C34.39 36.11 34.08 36.25 33.75 36.25C33.41 36.25 33.1 36.11 32.86 35.88C32.63 35.65 32.5 35.33 32.5 35Z"
                    fill="#2B2B2B"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </g>
              </svg>
            </div>
            <button class="burger" @click="openMenu">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div :class="['header__menu', { 'is-open': isActive }]">
              <div class="header__menu-close" @click="openMenu"></div>
              <TheNetwork :type="'logo'" class="header__menu-logo" />
              <ul class="header__menu-list">
                <li><NuxtLink to="/personal-account">Аналитика, личный кабинет</NuxtLink></li>
                <li><NuxtLink to="/analytics-filter">Аналитика, фильтры</NuxtLink></li>
                <li><NuxtLink to="/analytics-quotes">Аналитика, котировки</NuxtLink></li>
                <li><NuxtLink to="/">Уроки</NuxtLink></li>
                <li><NuxtLink to="/">Клуб инвесторов</NuxtLink></li>
                <li>
                  <NuxtLink to="/">Третий пункт <span></span> </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <the-modal-question v-if="modalQuestion" @close="closeModal" />
  </div>
</template>

<script>
import TheModalQuestion from "./modal/TheModalQuestion.vue";
import TheNetwork from "./TheNetwork.vue";
export default {
  components: { TheNetwork, TheModalQuestion },
  data() {
    return {
      modalQuestion: false,
      isActive: false,
    };
  },
  methods: {
    closeModal() {
      this.modalQuestion = false;
    },
    openMenu: function () {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss">

.header {
  //background-color: $primary;
  .link-border {
    @media (max-width: 767px) {
      width: 30px;
      height: 30px;
      svg {
        max-width: 55%;
      }
    }
  }
  &__logo svg {
    @media (max-width: 767px) {
      max-width: 90%;
    }
    @media (max-width: 575px) {
      max-width: 60%;
    }
  }
  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    justify-content: space-between;
    padding: 30px 0;
    @media (max-width: 767px) {
      grid-template-columns: 100px 1fr;
    }
  }
  // &__inner {
  //   // display: flex;
  //   // justify-content: space-between;
  //   // padding: 30px 0;
  //   display: grid;
  //   grid-template-columns: 1fr 1.5fr;
  //   justify-content: space-between;
  //   padding: 30px 0;
  // }
  &__right {
    display: flex;
    align-items: center;
    margin-left: auto;
    @media (max-width: 767px) {
      width: 100%;
      margin-left: 0;
      // justify-content: space-evenly
    }
    // @media(max-width: 575px) {
    //   justify-content: space-between;
    // }
  }
  &__item {
    position: relative;
    &--mobile {
      @media (max-width: 767px) {
        display: none;
      }
    }
    &:nth-child(1) {
      margin-right: 40px;
      @media (max-width: 575px) {
        margin-right: auto;
      }
    }
    &:nth-child(2) {
      @media (max-width: 767px) {
        margin-left: auto;
      }
      a + a {
        margin-left: 10px;
      }
      white-space: nowrap;
    }
    &:nth-child(3) {
      margin-left: 80px;
      display: flex;
      align-items: center;
      @media (max-width: 767px) {
        margin-left: 10px;
      }
      // @media(max-width: 575px) {
      //   margin-left: auto;
      // }
    }
  }
  &__user {
    cursor: pointer;
    @media (max-width: 767px) {
      margin-right: 10px;
      svg {
        max-width: 30px;
        flex: 0 0 30px;
        width: 30px;
      }
    }
  }
  &__menu {
    position: relative;
    border-radius: 10px;
    padding: 60px 50px;
    box-shadow: 0 0 4px rgba(#333, 0.5);
    width: 450px;
    position: absolute;
    right: 0;
    top: 110%;
    background-color: #f7f7f8;
    z-index: 10;
    display: none;
    @media (max-width: 767px) {
      padding: 50px 40px;
      width: 320px;
    }
    &.is-open {
      display: block;
    }
  }
  &__menu-close {
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 40px;
    right: 40px;
    cursor: pointer;
    &::after,
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: #3f3f3f;
      position: absolute;
      left: 0;
      top: 8px;
    }
    &::after {
      transform: rotate(45deg);
    }
    &::before {
      transform: rotate(-45deg);
    }
  }
  &__menu-logo {
    margin-bottom: 40px;
    svg {
      max-width: 100px;
    }
  }
  &__menu-list {
    li {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      a {
        display: flex;
        align-items: center;
        color: #3f3f3f;
        &:hover {
          @media(min-width: 1023px) {
            text-decoration: underline;
          }
        }
      }
    }
    span {
      display: block;
      width: 12px;
      height: 12px;
      border-bottom: solid 1px;
      border-right: solid 1px;
      transform: rotate(45deg);
      margin-bottom: 5px;
      margin-left: 10px;
    }
  }
}
</style>
