<template>
  <div class="pagination">
    <div class="pagination-arrow pagination-arrow__prev">
      <svg width="4.000000" height="7.000000" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs/>
        <path id="Vector 45 (Stroke)" d="M2.97 -0.64L3.57 -0.03L0.47 3.12L3.57 6.27L2.97 6.88L-0.73 3.12L2.97 -0.64Z" fill="#2B2B2B" fill-opacity="1.000000" fill-rule="evenodd"/>
      </svg>

    </div>
    <div class="pagination__numb">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>...</button>
      <button>23</button>
    </div>
    <div class="pagination-arrow pagination-arrow__next">
      <svg width="4.000000" height="7.000000" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs/>
        <path id="Vector 45 (Stroke)" d="M0.02 -0.64L-0.58 -0.03L2.52 3.12L-0.58 6.27L0.02 6.88L3.72 3.12L0.02 -0.64Z" fill="#2B2B2B" fill-opacity="1.000000" fill-rule="evenodd"/>
      </svg>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
      font-size: 18px;
      font-weight: 400;
      padding: 0 4px;
    }
    &__numb {
      padding: 0 10px;
    }
  }
  .pagination-arrow {
    display: flex;
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: #FED700;
    border-radius: 3px;
  }
</style>