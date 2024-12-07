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
                <span class="video-icon"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="terminal-top__item"></div>
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
export default {};
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
