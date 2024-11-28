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
  .btn {
    font-size: 16px;
    font-weight: 400;
    border: solid 1px transparent;
    padding: 16px 38px;
    cursor: pointer;
    border-radius: var(--radius);
    transition: 0.3s;
    display: flex;
    align-items: center;
    
    &:active {background-color: tomato}
    &.btn-dark {
      background-color: rgb(var(--primary));
      color: #fff;
      &:hover {
        @media(min-width: 1023px) {
          background-color: rgb(var(--primary));
          filter: brightness(90%);
          color: #fff;
        }
      }
    }
    &.btn-light {
      border-color: rgb(var(--primary));
      &:hover {
        @media(min-width: 1023px) {
          background: rgba(var(--primary),  0.2);
        }
      }
    }
  }


</style>