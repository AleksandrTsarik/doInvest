<template>
  <div class="terminal">
    <div class="terminal__title title">работа с терминалом</div>
    <div class="terminal__wrap">
      <div class="terminal__top terminal-top">
        <div class="terminal-top__item">
          <div class="terminal-top__video">
            <div class="terminal-top__img">
              <img src="/image/expert.jpg" alt="..." />
              <div class="relative">
                <span
                  class="video-icon"
                  @click="
                    modalVideoOpen('https://rutube.ru/play/embed/d6b377d1402953bd9831f5fb42fdd8ec/')
                  "
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div class="terminal-top__item">
          <div class="terminal-top__date">
            <div>18:00 12 декабря 2024 МТС Арена</div>
            <button>
              <svg
                width="28"
                height="30"
                viewBox="0 0 28 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.45333 17.0127L18.56 22.3193M18.5467 7.67935L9.45333 12.986M26 5.66602C26 7.87515 24.2091 9.66602 22 9.66602C19.7909 9.66602 18 7.87515 18 5.66602C18 3.45688 19.7909 1.66602 22 1.66602C24.2091 1.66602 26 3.45688 26 5.66602ZM10 14.9993C10 17.2085 8.20914 18.9993 6 18.9993C3.79086 18.9993 2 17.2085 2 14.9993C2 12.7902 3.79086 10.9993 6 10.9993C8.20914 10.9993 10 12.7902 10 14.9993ZM26 24.3327C26 26.5418 24.2091 28.3327 22 28.3327C19.7909 28.3327 18 26.5418 18 24.3327C18 22.1235 19.7909 20.3327 22 20.3327C24.2091 20.3327 26 22.1235 26 24.3327Z"
                  stroke="#3F3F3F"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div class="terminal-top__description">
            Русский аналог Lorem Ipsum. Прародителем текста-рыбы является известный "Lorem Ipsum" —
            латинский текст, ноги которого растут аж из 45 года до нашей эры. Сервисов по созданию
            случайного текста на основе Lorem Ipsum великое множество
          </div>
        </div>
      </div>
      <div class="terminal__mid terminal-mid">
        <div class="terminal-mid__title t-20">ПОЛНАЯ ВЕРСИЯ</div>
        <div class="terminal-mid__text t-18">
          Русский аналог Lorem Ipsum. Прародителем текста-рыбы является известный "Lorem Ipsum" —
          латинский текст, ноги которого растут аж из 45 года до нашей эры. Сервисов по созданию
          случайного текста на основе Lorem Ipsum великое множество, однако все они имеют один
          существенный недостаток: их "рыба текст" подходит лишь для англоязычных ресурсов/проектов.
          Мы же, фактически, предлагаем Lorem Ipsum на русском языке — вы можете использовать
          полученный здесь контент абсолютно бесплатно и в любых целях, не запрещённых
          законодательством. Однако в случае, если сгенерированный здесь текст используется в
          коммерческом или публичном проекте, ссылка на наш сервис обязательна.
        </div>
      </div>
      <div class="terminal__bottom"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {},
  methods: {
    modalVideoOpen(frameSrc) {
      this.$emit('modal-video-open', { src: frameSrc });
    },
  },
};
</script>
<style lang="scss">
.terminal {
  margin: 0 auto;
  max-width: 1000px;
  &__wrap {
    background-color: rgb(var(--light));
    border-radius: var(--raduisBig);
    padding: 105px 75px;
  }
}
.terminal-top {
}
.terminal-mid {
}
.terminal-bottom {
}
</style>
