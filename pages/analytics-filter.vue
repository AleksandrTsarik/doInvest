<template>
  <div class="container">
    <TheBreadCrumbs :breadCrumbs="breadCrumbs" />
  </div>

  <section class="section-page">
    <div class="container">
      <div class="filter-page-filter">
        <div class="filter-page-filter__title title">Настройка фильтров новостей</div>
        <TheFilterTable />
      </div>
    </div>
  </section>

  <section class="section-page">
    <div class="container">
      <div class="filter-page-list">
        <div class="filter-page-list__title title">
          Настройка списка наблюдений<TheSvg :type="'settings'" />
        </div>
      </div>
      <div
        class="filter-page-list__add t-24"
        :class="{ 'is-open': isOpenStock }"
        @click="openStock"
      >
        <span class="span-circle"></span>Добавить акцию
        <div class="filter-page-list__drop" :class="{ 'is-open': isOpenStock }">
          <UITheCheckbox
            v-for="(item, i) in filterCheckbox"
            :key="i"
            :label="item.name"
            @input="changeFilterItem()"
          />
        </div>
      </div>
      <div class="filter-page-list__block" v-if="filterItem.length">
        <div v-for="(item, i) in filterItem" :key="i" class="filter-page-list__item">
          <button>
            {{ item.name }} <span @click="deleteFilterItem(index)" class="span-circle"></span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="section-page">
    <div class="container">
      <TheSlider />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      modalVideo: false,
      isOpenStock: false,
      breadCrumbs: [
        {
          name: 'Сервисы',
          url: '#',
          current: false,
        },
        {
          name: 'Аналитика',
          url: '#',
          current: false,
        },
        {
          name: 'Личный кабинет',
          url: '#',
          current: false,
        },
        {
          name: 'Фильтры',
          url: '#',
          current: true,
        },
      ],
      filterItem: [
        {
          id: 0,
          name: 'Акция',
        },
        {
          id: 1,
          name: 'Акция',
        },
        {
          id: 2,
          name: 'Акция',
        },
        {
          id: 3,
          name: 'Акция',
        },
        {
          id: 4,
          name: 'Акция',
        },
        {
          id: 5,
          name: 'Акция',
        },
        {
          id: 6,
          name: 'Акция',
        },
      ],
      filterCheckbox: [
        {
          id: 0,
          name: 'Акция',
        },
        {
          id: 1,
          name: 'Акция',
        },
        {
          id: 2,
          name: 'Акция',
        },
        {
          id: 3,
          name: 'Акция',
        },
        {
          id: 4,
          name: 'Акция',
        },
        {
          id: 5,
          name: 'Акция',
        },
        {
          id: 6,
          name: 'Акция',
        },
      ],
    };
  },
  methods: {
    deleteFilterItem(item) {
      this.filterItem.splice(item, 1);
    },
    openStock() {
      this.isOpenStock = !this.isOpenStock;
    },
    changeFilterItem(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="scss">
.filter-page-list {
  &__title {
    svg {
      margin-left: 10px;
    }
  }
  &__add {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    position: relative;
    cursor: pointer;
    span {
      margin-right: 10px;
      transition: 0.3s;
    }
    &.is-open .span-circle {
      transform: rotate(45deg);
    }
  }
  &__block {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    margin-bottom: 10px;
    margin-right: 10px;
    button {
      font-size: 16px;
      display: flex;
      align-items: center;
      border: solid 1px #c9c9c9;
      border-radius: 30px;
      padding: 13px 25px;
      white-space: nowrap;
      background-color: #fff;
      cursor: default;
    }
    .span-circle {
      width: 20px;
      height: 20px;
      margin-left: 10px;
      transform: rotate(45deg);
      &:hover {
        @media (min-width: 1023px) {
          transform: rotate(-45deg);
        }
      }
    }
  }
  &__drop {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;

    height: 0;
    opacity: 0;
    visibility: hidden;
    padding: 0;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 5;

    box-shadow: 0 0 5px rgba(#000, 0.2);
    .default-checkbox {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      column-gap: 2px;
    }
    &.is-open {
      padding: 20px;
      height: auto;
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>
