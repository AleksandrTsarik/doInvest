<template>
  <div class="order">
    <div class="order__wrap">
      <div class="order__title">
        {{ order.title }}
        <span v-if="order.tooltip" class="order__tooltip">?</span>
      </div>
      <div class="order__block">
        <div v-if="order.img" class="order__img">
          <img :src="order.img" :alt="order.alt" />
        </div>
        <div class="order__info">
          <div v-if="order.name" class="order__name">{{ order.name }}</div>
          <div class="order__price">
            <div class="order__price-old">{{ order.priceold }}</div>
            <div class="order__price-new">{{ order.pricenew }}₽</div>
          </div>
          <button class="order__basket"><TheSvg :type="'basket-two'" /></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    order: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.order {
  display: flex;
  flex-direction: column;
  &__title {
    font-size: 20px;
    color: var(--text);
    position: relative;
    margin-bottom: 10px;
  }
  &__tooltip {
    position: absolute;
    top: 50%;
    right: -5px;
    transform: translateY(-50%);
    color: rgb(var(--light));
    background-color: rgba(var(--primary));
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    cursor: pointer;
  }
  &__block {
    background-color: rgba(var(--bg2), 0.2);
    flex-grow: 1;
    border-radius: var(--raduisBig);
  }
  &__info {
    position: relative;
    padding: 15px;
  }
  &__name {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 1em;
  }
  &__price {
    display: flex;
    align-items: center;
    gap: 0.4em;
    font-size: 20px;
  }
  &__price-old {
    text-decoration: line-through;
  }
  &__price-new {
  }
  &__basket {
    position: absolute;
    right: 10px;
    bottom: 10px;
    svg {
      max-width: 80%;
    }
  }
}
</style>
