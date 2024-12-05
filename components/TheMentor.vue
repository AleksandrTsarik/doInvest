<template>
  <div class="mentor">
    <div class="mentor__wrap">
      <div class="mentor__head mentor-head">
        <div class="mentor-head__row">
          <h2 class="mentor__title title">ЛИЧНОЕ НАСТАВНИЧЕСТВО</h2>
          <div class="relative">
            <span class="video-icon video-icon--small"></span>
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
            <p>Готовы ли вы инвестировать?</p>
            <div>
              <NuxtLink class="btn btn-light" to="#">Экспресс-тест в Telegram</NuxtLink>
              <UITheButton :label="'Записаться на консультацию'" class="btn-dark" />
            </div>
          </div>
        </div>
      </div>
      <div class="mentor__body">
        <div class="mentor-block">
          <div class="mentor-block__item" v-for="(item, i) in mentor" :key="i">
            <div class="mentor-block__name">
              <span v-if="item.ico">
                <img :src="`/image/mentor/${item.ico}`" :alt="item.alt" />
              </span>
              {{ item.name }}
            </div>
            <div class="mentor-block__description">
              <div class="mentor-block__text">
                <p>
                  {{ item.text }}
                </p>
                <div v-if="item.video" class="relative">
                  <span class="video-icon video-icon--small"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mentor: [
        {
          name: 'Модули программы:',
          text: 'Вместе с вами мы пройдем этапы, которые сформируют навыки, чтобы вы могли эффективно самостоятельно развиваться в инвестициях',
        },
        {
          name: 'Мышление',
          text: 'Адаптация психики и проработка мышления инвестора',
          ico: 'item1.svg',
          alt: 'svg',
          video: true,
        },
        {
          name: 'Теория',
          text: 'Изучение основ поиска, выбора и анализа инструментов',
          ico: 'item2.svg',
          alt: 'svg',
          video: true,
        },
        {
          name: 'Практика',
          text: 'Мы вместе составим портфель из акций, облигаций и валюты',
          ico: 'item3.svg',
          alt: 'svg',
          video: true,
        },
      ],
    };
  },
};
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
    font-size: 24px;
    font-weight: 400;
    color: var(--text);
    @media (max-width: 767px) {
      font-size: 15px;
    }
  }
}

.mentor-block {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin: 30px 0;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
  &__item {
    padding: 50px 35px 35px;
    border-radius: var(--radius);
    overflow: hidden;
    background-color: rgb(var(--light));
    display: flex;
    flex-direction: column;
    @media (max-width: 767px) {
      padding: 40px 25px 25px;
    }
    &:first-child {
      background-color: rgb(var(--primary));
      color: rgb(var(--light));
    }
  }
  &__name {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 32px;
    padding-bottom: 20px;
    height: 140px;
    @media (max-width: 1200px) {
      height: 100px;
      padding-bottom: 0;
    }
    @media (max-width: 767px) {
      height: auto;
      font-size: 22px;
    }
  }
  &__description {
    display: flex;
    margin-top: auto;
    height: 185px;
    align-items: flex-end;
    @media (max-width: 1200px) {
      height: 175px;
    }
    @media (max-width: 767px) {
      min-height: 92px;
      height: auto;
      padding-top: 10px;
    }
  }
  &__text {
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 767px) {
      font-size: 18px;
    }
    div {
      width: 55px;
      height: 55px;
      display: block;
    }
  }
}

.mentor-head {
  &__row {
    display: flex;
    align-items: center;
    position: relative;
    &:first-child {
      h2 {
        @media (max-width: 1200px) {
          max-width: 50%;
        }
      }
    }
    .relative {
      position: absolute;
      left: 70%;
      top: 20px;
      @media (max-width: 1200px) {
        top: 50%;
      }
      @media (max-width: 767px) {
        left: auto;
        right: 15px;
      }
    }
  }
  &__more {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-top: 20px;
    @media (max-width: 1200px) {
      flex-wrap: wrap;
    }
    p {
      font-size: 24px;
      font-weight: 400;
      color: var(--text);
      @media (max-width: 767px) {
        font-size: 18px;
      }
    }
    div {
      display: flex;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
      .btn {
        @media (max-width: 575px) {
          width: 100%;
          display: block;
          text-align: center;
        }
      }
    }
  }
}
</style>
