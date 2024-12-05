<template>
  <form action="">
    <div class="filter-choice__wrap">
      <div class="filter-choice__block">
        <div class="filter-choice__name">Выбор акций</div>
        <div class="filter-choice__list">
          <div class="filter-choice__item" v-for="(item, i) in filterStock" :key="i">
            <UITheCheckbox :label="item.name" />
          </div>
        </div>
      </div>
      <div class="filter-choice__block">
        <div class="filter-choice__name">Выбор акций</div>
        <div class="filter-choice__list">
          <div class="filter-choice__item" v-for="(item, i) in filterTrade" :key="i">
            <UITheCheckbox :label="item.name" />
          </div>
        </div>
      </div>
      <div class="filter-choice__btn" v-if="$route.path !== '/personal-account'">
        <UITheButton :label="'Получать новости'" class="btn-light" :svg="svgEmail" />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      filterStock: [
        {
          name: 'Акция',
        },
        {
          name: 'Акция',
        },
        {
          name: 'Акция',
        },
        {
          name: 'Акция',
        },
        {
          name: 'Акция',
        },
        {
          name: 'Акция',
        },
      ],
      filterTrade: [
        {
          name: 'Отрасль',
        },
        {
          name: 'Отрасль',
        },
        {
          name: 'Отрасль',
        },
        {
          name: 'Отрасль',
        },
        {
          name: 'Отрасль',
        },
        {
          name: 'Отрасль',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.filter-choice {
  &__wrap {
    background-color: #fff;
    border-radius: 10px;
    padding: 65px 50px;
  }
  &__name {
    font-size: 24px;
    font-weight: 400;
    line-height: 110%;
    margin-bottom: 30px;
  }
  &__block {
    margin-bottom: 35px;
  }
  &__list {
    column-count: 3;
  }
  &__item {
    break-inside: avoid;
    margin-bottom: 20px;
  }
  &__btn {
    margin-top: 55px;
    button {
      span {
        margin-bottom: -3px;
        margin-right: 10px;
      }
    }
  }
}
</style>
