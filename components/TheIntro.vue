<template>
  <div class="intro">
    <h2 class="intro__title title">Моя миссия</h2>
    <div class="intro__wrap">
      <div class="intro__img">
        <img src="/image/intro.jpg" alt="intro" loading="lazy" />
      </div>
      <div class="intro__descriptrion">
        <div class="intro__name">Здравствуйте, меня зовут Данил Олимов</div>
        <div class="intro__text">
          <p>
            Я предприниматель и более 20 лет занимаюсь инвестициями на фондовом рынке и в различные
            проекты.
          </p>
          <p>
            Мой опыт включает работу в крупных банках на ведущих должностях в секторе ценных бумаг,
            где я заработал свой первый миллион долларов в 30 лет. Именно здесь я отработал
            технологию и принципы формирования портфелей с высокой доходностью.
          </p>
          <p>
            Сейчас владею крупным инвестиционным портфелем, жемчужиной которого является завод по
            производству мраморной плитки.
          </p>
          <p>
            Мною накоплены знания и опыт, которыми пришло время делиться с начинающими инвесторами.
            Именно поэтому в 2021 году я  начал развитие образовательного проекта — Школы Инвестиций
            и Финансовой грамотности.
          </p>
          <p>
            И если у вас есть задача развиваться на фондовом рынке или, как минимум, понять принципы
            инвестирования и формирования безопасных и доходных портфелей, то наши программы
            обучения — для вас.
          </p>
        </div>
        <div class="intro__more">
          <NuxtLink class="btn btn-light" to="#">Читать далее</NuxtLink>
          <div class="intro__play relative">
            <span
              class="video-icon video-icon--small"
              @click="
                modalVideoOpen('https://rutube.ru/play/embed/d6b377d1402953bd9831f5fb42fdd8ec/')
              "
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    modalVideoOpen(frameSrc) {
      this.$emit('modal-video-open', { src: frameSrc });
    },
  },
};
</script>
<style lang="scss">
.intro {
  background-color: rgb(var(--light));
  border-radius: var(--raduisBig);
  padding: 80px;
  @media (max-width: 1200px) {
    padding: 35px;
  }
  @media (max-width: 767px) {
    padding: 0;
    background: none;
    border-radius: none;
  }
  &__img {
    border-radius: var(--raduisBig);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__title {
  }
  &__wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
  &__name {
    font-size: 24px;
    font-weight: 400;
    color: var(--text);
    margin-bottom: 24px;
  }
  &__text {
    font-size: 18px;
    p {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &__more {
    margin-top: auto;
    display: flex;
    align-items: center;
    padding-top: 20px;
    a {
      display: inline-block;
      color: inherit;
    }
  }
  &__play {
    margin-left: 75px;
  }
  &__descriptrion {
    display: flex;
    flex-direction: column;
  }
}
</style>
