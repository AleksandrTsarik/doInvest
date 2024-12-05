<template>
  <div class="mentor">
    <div class="mentor__wrap">
      <div class="mentor__head mentor-head">
        <div class="mentor-head__row">
          <h2 class="mentor__title title">ЛИЧНОЕ НАСТАВНИЧЕСТВО</h2>
          <div class="relative">
            <span class="video-icon"></span>
          </div>
        </div>
        <div class="mentor-head__row">
          <div class="mentor__text">
            Мы вместе разберем ваши цели и мотивацию, сильные и слабые стороны, возможности и
            ограничения. И вместе составим план действий.
          </div>
        </div>
        <div class="mentor-head__row">
          <p></p>
          <div class="mentor-head__more">
            <NuxtLink class="btn btn-light" to="#">Экспресс-тест в Telegram</NuxtLink>
            <UITheButton :label="'Записаться на консультацию'" class="btn-dark" />
          </div>
        </div>
      </div>
      <div class="mentor__body"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.mentor {
  &__wrap {
  }
  &__head {
  }
  &__title {
  }
  &__text {
  }
}
.mentor-head {
  &__row {
    display: flex;
    align-items: center;
  }
}
</style>
