<template>
  <button :type="type" class="btn">
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
      require: true,
    },
    type: {
      type: String,
      dafault: '',
    },
    svg: {
      type: String,
      dafault: '',
    },
  },
};
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
  display: inline-flex;
  align-items: center;
  &:focus {
    box-shadow: 0 0 0 4px rgba(var(--primary), 0.5);
  }
  &:active {
    background-color: tomato;
    color: var(--text);
  }
  &.btn-dark {
    background-color: rgb(var(--primary));
    color: #fff;
    &:hover {
      @media (min-width: 1023px) {
        background-color: rgb(var(--primary));
        filter: brightness(90%);
        color: #fff;
      }
    }
  }
  &.btn-light {
    border-color: rgb(var(--primary));
    &:hover {
      @media (min-width: 1023px) {
        background: rgba(var(--primary), 0.2);
      }
    }
  }
  &.btn-filter {
    font-family: 'Montserrat', Arial, sans-serif;
    border: solid 1px #c9c9c9;
    border-radius: 25px;
    padding: 13px 35px;
    &:hover {
      @media (min-width: 1023px) {
        background: rgba(var(--primary), 0.2);
      }
    }
    &.active {
      background-color: rgb(var(--primary));
      color: #fff;
      border-color: rgb(var(--primary));
      cursor: default;
    }
  }
}
</style>
