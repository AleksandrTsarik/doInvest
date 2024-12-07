<template>
  <div>
    <div class="section-page__title checklists__title title">Чек-листы</div>
    <div class="checklists__top">
      <div class="section-page__subtitle checklists__subtitle subtitle t-24">
        Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. Незаменимый помощник любого дизайнера, вебмастера и проектировщика. ... Текста-рыбы является извест
      </div>
      <div class="checklists__access">
        <div class="checklists__access-title">
          Безлимитный доступ к чек-листам
        </div>
        <div class="checklists__access-btn">
          <UITheButton 
            :class="['btn', 'btn-dark']" 
            :label="'Получить доступ'">
          </UITheButton>
        </div>
      </div>
    </div>  
    
    <div class="checklists__filters">
      <TheFilterAccess 
        @filter-items-access="filterItemsAccess"
        :filterAccessTag="filterAccessTag"
      />
    </div>

    <div class="checklists__catalog">
      <div 
        v-for="(lesson, i) in lessons"
        :key="i"
        class="checklists__item">
        <div class="lesson-big-item">
          <div class="lesson-big-item__row">
            <div class="lesson-big-item__info">
              <div class="lesson-big-item__name t-32">{{ lesson.name }}</div>
              <div class="lesson-big-item__descr t-18">{{ lesson.descr }}</div>

              <div class="lesson-big-item__info-bottom">
                <div class="lesson-big-item__info-bottom-left">
                  <div class="lesson-big-item__rating">
                    <TheRating :rate="lesson.rate"/>
                    <span>{{ lesson.rate }}</span>
                  </div>
                  <div class="lesson-big-item__price">
                    <span>Цена: </span>{{ lesson.price ? lesson.price + ' рублей' : 'бесплатно' }}
                  </div>
                </div>
                <div class="lesson-big-item__info-bottom-right">
                  <UITheButton 
                    :class="['btn', 'btn-dark']" 
                    :label="'Получить урок'">
                  </UITheButton>
                </div>  
              </div>
            </div>

            <div class="lesson-big-item__photo">
              <img :src="lesson.pic" alt="">
              <span 
                v-if="lesson.frame"
                class="video-icon" 
                @click="modalVideoOpen(lesson.frame)">
              </span>
              <span
                v-if="lesson.access"
                class="lesson-big-item__access-shield">
                Доступ открыт
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lessons: {type: Array, default: [], required: true},
    filterAccessTag: {type: String, default: '', required: true}
  },  
  methods: {
    filterItemsAccess(value) {
      this.$emit('filter-items-access', value)
    },
    modalVideoOpen(frameSrc) {
      this.$emit('modal-video-open', {src: frameSrc})
    }
  }
}

</script>

<style lang="scss">
.checklists {
  &__top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 15px;

    @media screen and (max-width: 991px) {
      flex-direction: column;
      justify-content: initial;      
      margin-bottom: 20px;
    }
  }
  &__title {
    margin-bottom: 30px;
  }

  &__subtitle {
    flex: 0 0 calc(50% - 15px);
    margin-bottom: 50px;
    max-width: 650px;
    @media screen and (max-width: 991px) {
      margin-bottom: 20px;
    }
  }

  &__access {
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    row-gap: 9px;   

    &-title {
      font-size: 18px;

      @media screen and (max-width: 767px) {
        font-size: 15px;
      }
    }

    .btn {
      @media screen and (max-width: 767px) {
        width: 100%;
        justify-content: center;
      }
    }
  }

  &__filters {
    display: flex;
    flex-wrap: wrap;
    padding-right: 135px;
    align-items: center;
    column-gap: 15px;
    row-gap: 15px;
    margin-bottom: 24px;

    @media screen and (max-width: 1023px) {
      margin-bottom: 20px;
    }

    @media screen and (max-width: 767px) {
      position: relative;
      flex-wrap: nowrap;
      overflow: auto;
      white-space: nowrap;
    }
  }

  &__catalog {
    display: flex;
    flex-direction: column;
    row-gap: 35px;
    margin-bottom: 30px;
  }
}
</style>