<template>
  <div>
    <div class="section-page__title title">ЧИТАЙ АЗБУКУ ИНВЕСТОРА</div>
    <div class="section-page__subtitle t-24">
      Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, вставляемый).
    </div>
    <div class="articles__catalog">
      <div 
        v-for="(article, i) in articles"
        :key="i" 
        class="articles__item">
        <div class="article-item">
          <div class="article-item__photo">
            <a href="#"><img src="/public/image/material.png" alt="" /></a>
            <span 
              v-if="article.frame"
              class="video-icon" 
              @click="modalVideoOpen(article.frame)">
            </span>
          </div>
          <div class="article-item__info">
            <div class="article-item__name">
              {{ article.name }}
            </div>
            <div class="article-item__descr">
              {{ article.descr }}
            </div>
            <div class="article-item__bottom">
              <div class="article-item__bottom-left">
                <div v-if="article.oldPice" class="article-item__price article-item__price--old">
                  {{ article.oldPice }}
                </div>
                <div class="article-item__price">{{ article.price ? article.price : 'БЕСПЛАТНО' }}</div>
                <div v-if="article.price" class="article-item__price article-item__price--unit">₽</div>
              </div>
              <div class="article-item__link">
                <a href="#">
                  <span>Смотреть</span>
                  <svg
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
    <div class="section-page__all-link">
      <NuxtLink class="btn" to="#">Открыть все</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: { type: Array, default: [], require: true }
  },
  methods: {
    modalVideoOpen(frameSrc) {
      this.$emit('modal-video-open', {src: frameSrc})
    }
  }
}
</script>

<style lang="scss">
.articles {
  &__catalog {
    display: flex;
    column-gap: 15px;
    row-gap: 15px;
    flex-wrap: wrap;
    justify-content: space-between
  }

  &__item {
    flex: 0 0 calc(50% - 8px);
    max-width: calc(50% - 8px);

    @media screen and (max-width: 1299px) {
      flex: 0 0 100%;
      max-width: 700px;
    }
  }
}
</style>