<template>
  <div class="offer">
    <div class="offer__list">
      <div class="offer__item" v-for="(offer, i) in offers" :key="i">
        <div class="offer__photo">
          <img :src="offer.img" :alt="offer.item" />
          <span class="offer__tooltip" v-if="offer.tooltip">{{ offer.tooltip }}</span>
          <div v-if="offer.video" class="relative">
            <span class="video-icon video-icon--small"></span>
          </div>
        </div>
        <div class="offer__info">
          <div v-if="offer.date" class="offer__date">{{ offer.date }}</div>
          <div class="offer__title">{{ offer.title }}</div>
          <div class="offer__text">{{ offer.text }}</div>
          <div class="offer__buy">
            <div v-if="offer.free" class="offer__free">Бесплатно</div>
            <div v-else class="offer__price">
              <div class="offer__price-old">{{ offer.priceold }}</div>
              <div class="offer__price-new">{{ offer.pricenew }} ₽</div>
            </div>
            <NuxtLink class="offer__more" :to="offer.moreUrl"
              >СМОТРЕТЬ<svg
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7015 5.79768C17.8926 5.98078 18 6.22909 18 6.488C18 6.74691 17.8926 6.99522 17.7015 7.17833L11.9346 12.7019C11.8405 12.7952 11.728 12.8696 11.6037 12.9207C11.4793 12.9719 11.3455 12.9988 11.2101 13C11.0748 13.0011 10.9406 12.9764 10.8153 12.9273C10.69 12.8782 10.5762 12.8057 10.4804 12.714C10.3847 12.6223 10.309 12.5133 10.2578 12.3933C10.2065 12.2733 10.1807 12.1447 10.1819 12.0151C10.1831 11.8855 10.2112 11.7573 10.2646 11.6382C10.318 11.5191 10.3957 11.4113 10.4931 11.3213L14.5199 7.46442L1.01944 7.46442C0.749067 7.46442 0.489767 7.36155 0.298586 7.17843C0.107405 6.99532 0 6.74696 0 6.488C0 6.22904 0.107405 5.98069 0.298586 5.79757C0.489767 5.61446 0.749067 5.51159 1.01944 5.51159L14.5199 5.51159L10.4931 1.65474C10.3074 1.47059 10.2046 1.22395 10.2069 0.967933C10.2093 0.71192 10.3165 0.467022 10.5055 0.285987C10.6945 0.104951 10.9502 0.00226212 11.2175 3.71933e-05C11.4848 -0.00218773 11.7423 0.0962296 11.9346 0.274092L17.7015 5.79768Z"
                  fill="#3AAA35"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    offers: {
      type: Object,
      default: {},
    },
  },
};
</script>
<style lang="scss">
.offer {
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
  }
  &__item {
    border-radius: var(--raduisBig);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  &__photo {
    position: relative;
    .relative {
      position: absolute;
      right: 35px;
      bottom: 35px;
    }
  }
  &__tooltip {
    background-color: rgb(var(--primary));
    color: rgb(var(--light));
    font-size: 16px;
    font-weight: 400;
    padding: 5px;
    border-radius: var(--radius);
    position: absolute;
    right: 15px;
    top: 15px;
  }
  &__info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: rgb(var(--light));
    flex-grow: 1;
  }
  &__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 100%;
    margin-bottom: 5px;
  }
  &__text {
    font-size: 16px;
    font-weight: 400;
    flex-grow: 1;
    margin-bottom: 15px;
  }

  &__price {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  &__price-old {
    text-decoration: line-through;
  }
  &__price-new {
  }
  &__buy {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
  }
  &__more {
    color: rgb(var(--primary));
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    border-bottom: solid 1px rgb(var(--primary));
    svg {
      width: 1em;
      margin-left: 0.3em;
    }
  }
}
</style>
