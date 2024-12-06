<template>
  <div class="rating-wrap">
    <div class="rating-default"></div>
    <div class="rating-active" :style="'width: '+(rate/5)*100+'%'"></div>
  </div>
</template>

<script>
export default {
  props: {
    rate: {
      label: Number,
      default: 5,
      require: true,
    },
  },
};
</script>

<style lang="scss">
.rating {
  &-wrap {
    position: relative;
    width: 120px;
  } 

  &-default {    
    width: 120px;
    height: 24px;
    background-image: url('@/assets/img/rating-default.svg');
    background-position: left top;
    background-repeat: no-repeat;
    z-index: 1;
  }
  &-active {  
    position: absolute;  
    top: 0;
    left: 0;
    bottom: 0;
    background-image: url('@/assets/img/rating-active.svg');
    background-position: left top;
    background-repeat: no-repeat;
    z-index: 2;
  }
}


</style>
