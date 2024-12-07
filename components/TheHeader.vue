<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo header__left">
          <TheNetwork :type="'logo'" />
        </div>
        <div class="header__mid">
          <div @click="openBurger" :class="['burger-menu', { 'is-open': isOpenMenu }]">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav :class="['header-menu', { 'is-open': isOpenMenu }]">
            <ul class="header-menu__list">
              <li v-for="(item, i) in menu" :key="i">
                <NuxtLink :to="item.url">{{ item.name }}</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <div class="header__right header-user header-user__block">
          <div class="header-user__row">
            <TheSvg :type="'star'" />
            <p>Новичок</p>
            <span class="header-user__tooltip">?</span>
          </div>
          <div class="header-user__row">
            <p>Баллы:</p>
            <span class="header-user__count color-primary">4 567</span>
          </div>
          <div class="header-user__row">
            <p class="header-user__row-name">andrew...</p>
            <div class="header-user__logo">
              <img src="/public/image/user-ico.png" alt="user-ico" />
            </div>
          </div>
          <div class="header-user__row header-burger">
            <button class="burger" @click="openMenu">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div :class="['header-drop-menu', { 'is-open': isActive }]">
              <div class="header-drop-menu__close" @click="openMenu"></div>
              <!-- <TheNetwork
                :type="'logo'"
                class="header-drop-menu__logo"
                @click="modalQuestion = true"
              /> -->
              <ul class="header-drop-menu__list menu-drop-list">
                <li v-for="(item, i) in dropMenu" :key="i">
                  <NuxtLink v-if="item.url" :to="item.url" class="header-drop-menu__item">
                    <p>
                      {{ item.name }}
                      <span class="header-drop-menu__count" v-if="item.count">{{
                        item.count
                      }}</span>
                    </p>
                  </NuxtLink>
                  <p v-else>{{ item.name }}</p>
                </li>
              </ul>
              <ul class="header-drop-menu__list-second menu-drop-list">
                <li>
                  <NuxtLink to="#">
                    Уведомления<span class="header-drop-menu__tooltip"></span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="#">Выход</NuxtLink>
                </li>
              </ul>
              <ul class="menu-drop-list">
                <!-- Удалить -->

                <br />
                <li><b>PAGES Удалить</b></li>
                <li><NuxtLink to="/education">education</NuxtLink></li>
                <li><NuxtLink to="/personal-account">personal-account</NuxtLink></li>
                <li><NuxtLink to="/analytics-filter">analytics-filter</NuxtLink></li>
                <li><NuxtLink to="/registration">Reg</NuxtLink></li>
                <li><NuxtLink to="/basket">Basket</NuxtLink></li>
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
import TheModalQuestion from './modal/TheModalQuestion.vue';
import TheNetwork from './TheNetwork.vue';
export default {
  components: { TheNetwork, TheModalQuestion },
  data() {
    return {
      modalQuestion: false,
      isActive: false,
      isOpenMenu: false,
      menu: [
        {
          name: 'Видеоуроки',
          url: '#',
        },
        {
          name: 'Азбука инвестора',
          url: '#',
        },
        {
          name: 'Клуб  инвесторов',
          url: '#',
        },
        {
          name: 'События',
          url: '#',
        },
        {
          name: 'Аналитика',
          url: '#',
        },
        // {
        //   name: 'Еще...',
        //   url: '#',
        // },
      ],
      dropMenu: [
        {
          name: 'Anrew23@gmail.com',
          url: '#',
        },
        {
          name: 'Новичок',
          url: '#',
          count: '4569 / 5000 баллов',
        },
        {
          name: 'Мои уроки',
          url: '#',
        },
        {
          name: 'Мои главы азбуки',
          url: '#',
        },
        {
          name: 'Моё полезное',
          url: '#',
        },
        {
          name: 'Мои события',
          url: '#',
        },
      ],
    };
  },
  methods: {
    closeModal() {
      this.modalQuestion = false;
    },
    openMenu() {
      this.isActive = !this.isActive;
    },
    openBurger() {
      this.isOpenMenu = !this.isOpenMenu;
    },
  },
};
</script>

<style lang="scss">
.burger-menu {
  flex-direction: column;
  justify-content: space-between;
  width: 35px;
  height: 20px;
  cursor: pointer;
  display: none;
  @media (max-width: 1400px) {
    display: flex;
  }
  span {
    display: block;
    background-color: rgb(var(--primary));
    width: 100%;
    height: 3px;
    border-radius: 50px;
  }
}
.menu-drop-list {
  display: flex;
  flex-direction: column;
  li {
    margin-bottom: 10px;
    a {
      font-size: 15px;
      color: var(--text);
      transition: 0.3s;
      position: relative;
      &:hover {
        @media (min-width: 1023px) {
          color: rgb(var(--primary));
        }
      }
    }
  }
}
.header {
  &__logo {
    a {
      flex: 0 0 150px;
      width: 150px;
      @media (max-width: 575px) {
        flex: 0 0 90px;
        width: 90px;
      }
    }
    svg {
      display: block;
      width: 100%;
    }
  }
  &__inner {
    display: grid;
    grid-template-columns: 150px auto auto;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
    @media (max-width: 1400px) {
      grid-template-columns: 150px auto auto;
      justify-content: normal;
    }
    @media (max-width: 575px) {
      grid-template-columns: 90px auto auto;
    }
  }
  &__mid {
    display: flex;
    align-items: center;
    position: relative;
  }
  &__right {
    margin-left: auto;
  }
}
.header-menu {
  @media (max-width: 1400px) {
    position: absolute;
    left: 0;
    top: 100%;
    box-shadow: var(--shadow);
    background-color: var(--bg);
    z-index: 50;
    border-radius: var(--raduisBig);
    overflow: hidden;
    visibility: hidden;
    pointer-events: none;
    height: 0;
    padding: 0;
    transform: translateY(-50px);
    transition: 0.3s;
    @media (max-width: 575px) {
      left: 50%;
      transform: translate(-50px, -50%);
    }
    &.is-open {
      pointer-events: all;
      height: auto;
      visibility: visible;
      transform: translateY(0);
      padding: 35px 30px;
      @media (max-width: 575px) {
        transform: translate(-50%, 0);
      }
    }
  }
  &__list {
    display: flex;
    align-items: center;
    gap: 25px;
    @media (max-width: 1400px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
    li {
      white-space: nowrap;
      a {
        color: var(--text);
        display: inline-block;
        transition: 0.3s;
        position: relative;
        &::after {
          content: '';
          background-color: rgb(var(--primary));
          height: 1px;
          width: 0%;
          transition: 0.5s;
          transform: translateX(-50%);
          display: block;
          position: absolute;
          left: 50%;
          //left: 0%;
        }
        &:hover {
          @media (min-width: 1400px) {
            color: rgb(var(--primary));
            &::after,
            &::before {
              width: 100%;
              //left: 50%;
            }
          }
          @media (min-width: 1024px) {
            color: rgb(var(--primary));
          }
        }
      }
    }
  }
}
.header-user {
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    gap: 5px;
  }
  &__block {
  }
  &__row {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    &:nth-child(1) {
      @media (max-width: 768px) {
        display: none;
      }
    }
    &:nth-child(2) {
      @media (max-width: 768px) {
        display: none;
      }
    }
    svg {
      margin-right: 0.3em;
    }
  }
  &__row-name {
    @media (max-width: 575px) {
      display: none;
    }
  }
  &__count {
    white-space: nowrap;
    margin-left: 0.3em;
    font-weight: 700;
  }
  &__logo {
    border-radius: 50%;
    overflow: hidden;
    width: 40px;
    flex: 0 0 40px;
    height: 40px;
    margin-left: 15px;
  }
  &__tooltip {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.7em;
    width: 18px;
    height: 18px;
    border: solid 1px rgb(var(--primary));
    color: rgb(var(--primary));
    background-color: rgba(var(--primary), 0.1);
    position: absolute;
    top: -9px;
    right: -18px;
    z-index: 10;
    cursor: pointer;
  }
}
.header-burger {
  position: relative;
}
.header-drop-menu {
  position: absolute;
  right: 0;
  top: 100%;
  box-shadow: var(--shadow);
  background-color: var(--bg);
  z-index: 50;
  padding: 0;
  border-radius: var(--raduisBig);
  overflow: hidden;

  visibility: hidden;
  pointer-events: none;
  height: 0;
  transform: translateY(-50px);
  transition: 0.3s;
  &.is-open {
    pointer-events: all;
    height: auto;
    visibility: visible;
    transform: translateY(0);
    padding: 35px 30px;
  }
  &__list {
    li {
      margin-bottom: 10px;
      &:nth-child(1) {
        font-size: 24px;
        margin-bottom: 10px;
      }
      &:nth-child(2) {
        font-size: 24px;
        margin-bottom: 10px;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &__list-second {
    margin-top: 20px;
  }
  &__item {
    // position: relative;
    // color: var(--text);
    // font-size: 18px;
    // transition: 0.3s;
    // &:hover {
    //   @media (min-width: 1023px) {
    //     color: rgb(var(--primary));
    //   }
    // }
  }
  &__count {
    color: rgb(var(--primary));
    font-size: 10px;
    display: block;
  }
  &__tooltip {
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    top: -0;
    right: -6px;
    background-color: rgb(var(--red));
  }
}
</style>
