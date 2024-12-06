<template>
  <teleport to="body">
    <div class="modal modal-q">
      <div class="modal__overlay"></div>
      <div class="modal-q__wrap modal__wrap">
        <form action="">
          <div class="modal-q__inner">
            <div class="modal__close" @click="closeModal"></div>
            <div class="modal-q__title">Обсудить вопрос</div>
            <div class="modal-q__subtitle">
              Оставьте заявку и мы свяжемся с вами в ближайшее время....
            </div>
            <div class="modal-q-info">
              <div class="modal-q-info__left">
                <div class="modal-q-info__phone">+7 495 ХХХ-ХХ-ХХ</div>
                <div class="modal-q-info__email">do-invest@yandex.ru</div>
              </div>
              <div class="modal-q-info__right">
                <TheNetwork :type="'vk'" class="link-border" />
                <TheNetwork :type="'telegram'" class="link-border" />
                <TheNetwork :type="'youtube'" class="link-border" />
              </div>
            </div>
            <div class="modal-q-input">
              <div class="modal-q-input__input">
                <u-i-the-input :type="'text'" :placeholder="'Введите ваше имя'" :modelValue="''" />
              </div>
              <div class="modal-q-input__input">
                <u-i-the-input
                  :type="'tel'"
                  :placeholder="'Введите ваш телефон'"
                  :modelValue="''"
                />
              </div>
              <div class="modal-q-input__textarea">
                <u-i-the-input :type="'textarea'" :placeholder="'Комментарий'" :modelValue="''" />
              </div>
            </div>
            <div class="modal-q-send">
              <div class="modal-q-send__btn">
                <UITheButton :label="'Задать вопрос'" :type="'submit'" class="btn-dark" />
              </div>
              <div class="modal-q-send__checkbox">
                <the-checkbox
                  :label="`Я соглашаюсь с <a href='/' >политикой обработки персональных данных</a>`"
                />
              </div>
            </div>
            <div class="modal-q-choice">
              <div class="modal-q-choice__checkbox">
                <the-checkbox :label="'Пункт1'" />
                <the-checkbox :label="'Пункт2'" />
              </div>
              <div class="modal-q-choice__radio">
                <UITheRadio :label="'Пункт1'" :name="'name1'" />
                <UITheRadio :label="'Пункт2'" :name="'name1'" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </teleport>
</template>

<script>
import TheCheckbox from '../UI/TheCheckbox.vue';
export default {
  components: { TheCheckbox },
  props: {
    type: String,
    default: '',
  },
  methods: {
    closeModal() {
      this.$emit('close', false);
    },
  },
};
</script>

<style lang="scss">
.modal-q {
  &__inner {
    padding: 60px 70px;
    @media (max-width: 767px) {
      padding: 55px 20px;
    }
  }
  &__title {
    font-size: 44px;
    font-weight: 400;
    line-height: 100%;
    margin-bottom: 10px;
    @media (max-width: 767px) {
      font-size: 28px;
    }
  }
  &__subtitle {
    font-size: 24px;
    font-weight: 400;
    line-height: 110%;
    margin-bottom: 30px;
    @media (max-width: 767px) {
      font-size: 18px;
    }
  }
}
.modal-q-info {
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
  &__left {
    margin-right: 70px;
    font-size: 18px;
    @media (max-width: 767px) {
      font-size: 14px;
      margin-right: 0;
    }
  }
  &__right {
    a + a {
      margin-left: 5px;
    }
  }
}
.modal-q-input {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
  &__input {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 5px;
    @media (max-width: 767px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .block-input {
      background-color: #fff;
    }
  }
  &__textarea {
    padding: 5px;
    width: 100%;
    textarea {
      resize: none;
      width: 100%;
      min-height: 100px;
      padding: 15px 25px;
      border-radius: 5px;
      border: solid 1px #c9c9c9;
    }
  }
}
.modal-q-send {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &__btn {
    flex: 0 0 40%;
    max-width: 40%;
    @media (max-width: 767px) {
      flex: 0 0 100%;
      max-width: 100%;
      margin-bottom: 10px;
      button {
        width: 100%;
      }
    }
  }
  &__checkbox {
    flex: 0 0 60%;
    max-width: 60%;
    font-size: 13px;
    @media (max-width: 767px) {
      .default-checkbox__container {
        width: 10px;
        height: 10px;
        flex: 0 0 10px;
        &:before {
          width: 3px;
          height: 5px;
        }
      }
      .default-checkbox {
        column-gap: 5px;
      }
    }

    @media (max-width: 767px) {
      flex: 0 0 100%;
      max-width: 100%;
      font-size: 12px;
    }
    a {
      display: inline;
      text-decoration: underline;
      font-size: 13px;
      font-weight: 400;
      color: #2b2b2b;
      @media (max-width: 767px) {
        font-size: 12px;
      }
    }
  }
}
.modal-q-choice {
  margin-top: 15px;
  &__checkbox {
    margin-bottom: 10px;
    label + label {
      margin-left: 20px;
    }
  }
  &__radio {
    display: flex;
    align-items: center;
    .radio + .radio {
      margin-left: 20px;
    }
  }
}
</style>
