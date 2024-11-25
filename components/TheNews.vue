<template>
  <div class="news__item">
    <div class="news__descr">
      <div class="news__title t-32">{{ newsInfo.title }}</div>
      <div class="news__text t-18">{{ newsInfo.text }}</div>
    </div>
      <div v-if="newsInfo.img" class="news__img">
        <img :src="newsInfo.img" alt="...">
      </div>
      <div v-if="newsInfo.video" class="news__iframe iframe">
        <iframe src="" frameborder="0"></iframe>
        <span class="video-icon"></span>
      </div>
  </div>
</template>

<script>
export default {
props: {
  newsInfo: {
    type: Object,
    default: {}
  }
}
}
</script>

<style lang="scss">
.news {
  &__iframe {
    background-image: url('@/assets/img/news.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 7px;
    padding-bottom: 45%;
    overflow: hidden;
    width: 100%;
    background-size: cover;
  }
  &__item {
    background-color: #fff;
    border-radius: 7px;
    margin-bottom: 20px;
    padding: 30px;
  }
  &__title {
    margin-bottom: 10px;
    font-weight: 500;
  }
  &__text {
    margin-bottom: 15px;
  }
}
</style>