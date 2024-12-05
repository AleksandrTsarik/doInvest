<template>
  <div class="quota__block quota-block">
    <div class="quota-block__choice">
      <p class="t-20">Результаты <span>(345)</span></p>
      <div class="quota-block__btns">
        <UITheButton :label="'Скачать'" class="btn-light" :svg="svgSave" />
        <UITheButton :label="'Следите за ценами'" class="btn-light" :svg="svgStar" />
      </div>
    </div>
    <div class="quota-tab">
      <UITheTabs :tabs="tabs">
        <slot />
        <template v-slot:content="{ active }">
          <template v-if="active == 'Обзор'"><TheCurrencyTable /></template>
          <template v-if="active == 'Фин. показатели'">Пустой таб</template>
          <template v-if="active == 'Теханализ'"><TheCurrencyTable /></template>
          <template v-if="active == 'Статистика'">Пустой таб</template>
          <template v-if="active == 'Свечные модели'"><TheCurrencyTable /></template>
        </template>
      </UITheTabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          title: 'Обзор',
          name: 'name1',
          content: 'content1',
          value: 'Обзор',
        },
        {
          title: 'Фин. показатели',
          name: 'name2',
          content: 'content2',
          value: 'Фин. показатели',
        },
        {
          title: 'Теханализ',
          name: 'name3',
          content: 'content3',
          value: 'Теханализ',
        },
        {
          title: 'Статистика',
          name: 'name4',
          content: 'content4',
          value: 'Статистика',
        },
        {
          title: 'Свечные модели',
          name: 'name5',
          content: 'content5',
          value: 'Свечные модели',
        },
      ],
      svgStar:
        '<svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><path id="Vector" d="M12.25 16C12.03 16 11.82 15.93 11.65 15.8L8.05 13.27C8.03 13.26 8.01 13.25 7.99 13.25C7.96 13.25 7.94 13.26 7.92 13.27L4.32 15.8C4.14 15.93 3.93 16 3.71 15.99C3.49 15.99 3.28 15.91 3.11 15.78C2.93 15.65 2.79 15.47 2.72 15.25C2.65 15.04 2.64 14.8 2.69 14.58L3.87 10.21C3.88 10.18 3.88 10.16 3.87 10.14C3.87 10.12 3.85 10.1 3.84 10.08L0.43 7.28C0.25 7.14 0.11 6.94 0.05 6.72C-0.02 6.49 -0.02 6.25 0.05 6.03C0.12 5.81 0.25 5.61 0.43 5.47C0.61 5.33 0.83 5.25 1.05 5.25L5.39 5.08C5.42 5.08 5.44 5.07 5.45 5.06C5.47 5.04 5.48 5.02 5.49 5L6.99 0.73C7.06 0.52 7.2 0.33 7.38 0.2C7.56 0.07 7.78 0 8 0C8.21 0 8.43 0.07 8.61 0.2C8.79 0.33 8.93 0.52 9 0.73L10.5 5C10.51 5.02 10.52 5.04 10.54 5.06C10.55 5.07 10.57 5.08 10.6 5.08L14.94 5.25C15.16 5.25 15.38 5.33 15.56 5.47C15.74 5.61 15.87 5.81 15.94 6.03C16.01 6.25 16.01 6.49 15.94 6.72C15.88 6.94 15.74 7.14 15.56 7.28L12.15 10.08C12.14 10.1 12.12 10.12 12.12 10.14C12.11 10.16 12.11 10.18 12.12 10.21L13.3 14.58C13.34 14.75 13.34 14.92 13.31 15.09C13.28 15.26 13.21 15.42 13.11 15.56C13 15.7 12.87 15.81 12.72 15.88C12.58 15.96 12.41 16 12.25 16ZM7.99 12.24C8.2 12.25 8.41 12.32 8.58 12.45L12.18 14.98C12.2 15 12.22 15 12.25 15C12.27 15 12.29 15 12.31 14.98C12.33 14.97 12.34 14.95 12.35 14.93C12.36 14.9 12.36 14.88 12.35 14.86L11.16 10.48C11.11 10.27 11.11 10.04 11.18 9.83C11.24 9.61 11.37 9.43 11.54 9.29L14.95 6.48C14.96 6.47 14.98 6.45 14.99 6.42C14.99 6.4 14.99 6.38 14.99 6.35C14.98 6.33 14.96 6.31 14.95 6.3C14.93 6.28 14.91 6.28 14.88 6.28L10.54 6.11C10.32 6.1 10.12 6.02 9.95 5.89C9.77 5.76 9.64 5.58 9.57 5.37L8.07 1.1C8.07 1.08 8.05 1.06 8.04 1.04C8.02 1.03 8 1.02 7.97 1.02C7.95 1.02 7.93 1.03 7.91 1.04C7.89 1.06 7.88 1.08 7.87 1.1L6.39 5.36C6.32 5.57 6.19 5.75 6.01 5.89C5.84 6.02 5.64 6.09 5.42 6.1L1.08 6.27C1.06 6.27 1.03 6.28 1.02 6.29C1 6.31 0.98 6.33 0.98 6.35C0.97 6.37 0.97 6.4 0.98 6.42C0.98 6.44 1 6.46 1.02 6.48L4.43 9.29C4.6 9.43 4.72 9.61 4.79 9.83C4.85 10.04 4.86 10.27 4.8 10.48L3.62 14.86C3.62 14.88 3.62 14.9 3.62 14.92C3.63 14.94 3.64 14.96 3.66 14.98C3.68 14.99 3.7 15 3.72 15C3.75 15 3.77 14.99 3.79 14.98L7.39 12.45C7.57 12.32 7.77 12.26 7.98 12.26L7.99 12.24Z" fill="#2B2B2B" fill-opacity="1.000000" fill-rule="nonzero"/></svg>',
      svgSave:
        '<svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="clip1126_1141"><rect id="bi:download" width="16.000000" height="16.000000" transform="translate(0.000000 -0.500000)" fill="white" fill-opacity="0"/></clipPath></defs><rect id="bi:download" width="16.000000" height="16.000000" transform="translate(0.000000 -0.500000)" fill="#FFFFFF" fill-opacity="0"/><g clip-path="url(#clip1126_1141)"><path id="Vector" d="M0.5 9.5C0.63 9.5 0.75 9.55 0.85 9.64C0.94 9.74 1 9.86 1 10L1 12.5C1 12.76 1.1 13.01 1.29 13.2C1.48 13.39 1.73 13.5 2 13.5L14 13.5C14.26 13.5 14.51 13.39 14.7 13.2C14.89 13.01 15 12.76 15 12.5L15 10C15 9.86 15.05 9.74 15.14 9.64C15.24 9.55 15.36 9.5 15.5 9.5C15.63 9.5 15.75 9.55 15.85 9.64C15.94 9.74 16 9.86 16 10L16 12.5C16 13.03 15.78 13.53 15.41 13.91C15.03 14.28 14.53 14.5 14 14.5L2 14.5C1.46 14.5 0.96 14.28 0.58 13.91C0.21 13.53 0 13.03 0 12.5L0 10C0 9.86 0.05 9.74 0.14 9.64C0.24 9.55 0.36 9.5 0.5 9.5Z" fill="#2B2B2B" fill-opacity="1.000000" fill-rule="nonzero"/><path id="Vector" d="M8.14 11.35C8.19 11.4 8.24 11.43 8.3 11.46C8.36 11.48 8.43 11.5 8.5 11.5C8.56 11.5 8.63 11.48 8.69 11.46C8.75 11.43 8.8 11.4 8.85 11.35L11.85 8.35C11.94 8.25 12 8.13 12 8C12 7.86 11.94 7.74 11.85 7.64C11.75 7.55 11.63 7.49 11.49 7.49C11.36 7.49 11.23 7.55 11.14 7.64L9 9.79L9 1C9 0.86 8.94 0.74 8.85 0.64C8.75 0.55 8.63 0.5 8.5 0.5C8.36 0.5 8.24 0.55 8.14 0.64C8.05 0.74 8 0.86 8 1L8 9.79L5.85 7.64C5.76 7.55 5.63 7.49 5.5 7.49C5.36 7.49 5.24 7.55 5.14 7.64C5.05 7.74 5 7.86 5 8C5 8.13 5.05 8.25 5.14 8.35L8.14 11.35Z" fill="#2B2B2B" fill-opacity="1.000000" fill-rule="nonzero"/></g></svg>',
    };
  },
};
</script>

<style lang="scss">
.quota {
  &__name {
    margin-bottom: 20px;
  }
}
.quota-block {
  &__choice {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    p {
      @media (max-width: 575px) {
        margin-bottom: 10px;
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
  }
  &__btns {
    display: flex;
    align-items: center;
    @media (max-width: 575px) {
      flex-wrap: wrap;
      flex: 0 0 100%;
      max-width: 100%;
    }
    button {
      white-space: nowrap;
      @media (max-width: 575px) {
        margin-bottom: 10px;
        flex: 0 0 100%;
        max-width: 100%;
        text-align: center;
        display: block;
        justify-content: center;
      }
    }
    button + button {
      margin-left: 20px;
      @media (max-width: 575px) {
        margin-left: 0;
      }
    }
    button svg {
      margin-right: 10px;
    }
    button {
      display: flex;
      align-items: center;
    }
  }
}
.quota-tab {
  margin-top: 15px;
}
</style>
