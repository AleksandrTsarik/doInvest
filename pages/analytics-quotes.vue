<template>
  <main>
    <div class="container">
      <TheBreadCrumbs :breadCrumbs="breadCrumbs" />
    </div>
    <div class="analytics-quotes">
      <div class="container">
        <div class="analytics-quotes__top">
          <div class="analytics-quotes__title title">Следите за котировками</div>
          <div class="analytics-quotes__subtitle t-24">Как действующий участник рынка, развиваю сервисы по сбору аналитики. И если у вас есть задача получить ценную и сгруппированную информацию по рынку, то я и моя команда можем быть для вас полезными.</div>
        </div>
      </div>

      <section class="section-page">
        <div class="container">
          <div class="quota">
            <div class="quota__name t-32">Цены на акции</div>
            <TheBlockCurrency />
          </div>
        </div>
      </section>

      <section class="section-page">
        <div class="container">
          <div class="quota">
            <div class="quota__name t-32">Цены на ОФЗ</div>
            <TheBlockCurrency />
          </div>
        </div>
      </section>

      <section class="section-page">
        <div class="container">
          <div class="quota">
            <div class="quota__name t-32">Курсы валют</div>
            <TheBlockCurrency />
          </div>
        </div>
      </section>

      <section class="section-page">
        <div class="container">
          <TheSlider />
        </div>
      </section>

    </div>
   </main>
</template>

<script>
export default {
  data() {
    return {
      modalVideo :false,
      breadCrumbs: [
        {
          name: 'Сервисы',
          url: '#',
          current: false
        },
        {
          name: 'Аналитика',
          url: '#',
          current: false
        },
        {
          name: 'Личный кабинет',
          url: '#',
          current: true
        }
      ],
    }
  }
}
</script>

<style lang="scss">
.analytics-quotes {
  &__subtitle {
    margin-bottom: 60px;
    max-width: 44%;
    @media(max-width: 1023px) {
      max-width: 100%;
    }
  }
}
</style>