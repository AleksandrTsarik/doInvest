<template>

    <div v-if="type === 'text'" class="block-input">
      <label>
        <input type="text" :value="modelValue" :placeholder="placeholder" @input="modelValue = $event.target.value">
        <span v-if="name">{{ name }}</span>
        <span v-if="img" class="block-input__img">
          <svg width="17.000000" height="18.000000" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>
                Created with Pixso.
            </desc>
            <defs/>
            <path id="Vector" d="M16 16.5L12.13 12.63M13.68 10.33C14.03 9.46 14.22 8.54 14.22 7.61C14.22 6.67 14.03 5.75 13.68 4.88C13.32 4.02 12.79 3.24 12.13 2.58C11.47 1.92 10.69 1.39 9.83 1.04C8.96 0.68 8.04 0.5 7.11 0.5C6.17 0.5 5.25 0.68 4.38 1.04C3.52 1.39 2.74 1.92 2.08 2.58C0.74 3.91 0 5.72 0 7.61C0 9.49 0.74 11.3 2.08 12.63C3.41 13.97 5.22 14.72 7.11 14.72C8.99 14.72 10.8 13.97 12.13 12.63C12.79 11.97 13.32 11.19 13.68 10.33Z" stroke="#212529" stroke-opacity="1.000000" stroke-width="1.066654" stroke-linejoin="round"/>
          </svg>
        </span>
      </label>
    </div>
    <div v-else-if="type === 'tel'" class="block-input">
      <label>
        <input :value="modelValue" type="tel" :placeholder="placeholder" @input="modelValue = $event.target.value">
        <span v-if="name">{{ name }}</span>
      </label>
    </div>
    <div v-else-if="type === 'email'" class="block-input">
      <label>
        <input :value="modelValue" type="email" :placeholder="placeholder" @input="modelValue = $event.target.value">
        <span v-if="name">{{ name }}</span>
      </label>
    </div>
    <div v-else-if="type === 'textarea'" class="block-textarea">
      <textarea :placeholder="placeholder" @input="modelValue = $event.target.value"></textarea>
    </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      defrault: '',
      require: true
    },
    placeholder: {
      type: String,
      default: '',
      require: true
    }
  },
  data() {
    return {
      modelValue: ''
    }
  },
  methods: {
  },
}
</script>

<style lang="scss">
.block-input {
  width: 100%;
  border: solid 1px #C9C9C9;
  border-radius: 6px;
  font-size: 18px;
  position: relative;
  margin-bottom: 10px;
  input {
    padding: 14px 25px;
  }
  &__img {
    position: absolute;
    right: 20px;
    top: 60%;
    transform: translateY(-50%);
  }
}
</style>