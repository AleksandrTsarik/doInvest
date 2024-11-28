<template>
  <button
    :type="type"
    class="btn"

  >
    <span v-if="svg" v-html="svg"></span>
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      label: String,
      default: '',
      require: true
    },
    type: {
      type: String,
      dafault: ''
    },
    svg: {
      type: String,
      dafault: ''
    }
  }
}
</script>

<style lang="scss">
// @use "_variables" as *;
// @use "sass:color";
  .btn {
    font-size: 16px;
    font-weight: 400;
    border: solid 1px transparent;
    padding: 16px 38px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
    display: flex;
    align-items: center;
    &:active {background-color: tomato;}
    &.btn-dark {
      background-color: #FED700;
      color: #2B2B2B;
      &:hover {
        @media(min-width: 1023px) {
          background-color: darken(#FED700, 2%);
          // background-color: color.adjust($red,#FED700 -10%);
        }
      }
    }
    &.btn-light {
      border-color: #FED700;
      color: #2B2B2B;
      background-color: #fff;
      &:hover {
        @media(min-width: 1023px) {
          background-color: rgba($color: #FED700, $alpha: 0.2);
        }
      }
    }
  }


</style>