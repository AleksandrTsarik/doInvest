<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo header__left">
          <TheNetwork :type="'logo'" />
        </div>
        <nav class="header-menu header__mid">
          <ul class="header-menu__list">
            <li v-for="(item, i) in menu" :key="i">
              <NuxtLink :to="item.url">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        </nav>
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
            <p>andrew...</p>
            <div class="header-user__logo">
              <img src="/public/image/user-ico.png" alt="user-ico">
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
              <ul class="header-drop-menu__list">
                <li v-for="(item, i) in dropMenu" :key="i">
                  <NuxtLink v-if="item.url" :to="item.url" class="header-drop-menu__item">
                    <p>
                      {{ item.name }} 
                      <p class="header-drop-menu__count" v-if="item.count">{{ item.count }}</p>
                      <span v-if="item.tooltip" class="header-drop-menu__tooltip">{{ item.tooltip }}</span>
                    </p>
                  </NuxtLink>
                  <p v-else>{{ item.name }}</p>
                </li>

                <!-- Удалить -->
                <hr />
                <br />
                <li><b>PAGES</b></li>
                <hr />
                <li><NuxtLink to="/education">education</NuxtLink></li>
                <li><NuxtLink to="/personal-account">personal-account</NuxtLink></li>
                <li><NuxtLink to="/analytics-filter">analytics-filter</NuxtLink></li>
                
                <br />
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
        {
          name: 'Еще...',
          url: '#',
        },
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
        {
          name: 'Мои события',
          url: '#',
          tooltip: ' ',
        },
        {
          name: 'Выход',
          url: '#',
        },
      ],
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
    grid-template-columns: 150px auto auto;
    gap: 70px;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
  }
}
.header-menu {
  &__list {
    display: flex;
    align-items: center;
    gap: 25px;
    li {
      white-space: nowrap;
      a {
        color: var(--text);
        display: inline-block;
        transition: 0.3s;
        position: relative;
        &::after {
          content: "";
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
          @media(min-width: 1023px) {
            color: rgb(var(--primary));
            &::after, &::before {
              width: 100%;
              //left: 50%;
            }
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
  &__block {}
  &__row {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
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
  &__item {
    position: relative;
    color: var(--text);
    font-size: 18px;
    transition: 0.3s;
    &:hover {
      @media(min-width: 1023px) {
        color: rgb(var(--primary));
      }
    }
  }
  &__count {
    color: rgb(var(--primary));
    font-size: 10px;
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
