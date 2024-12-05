<!-- <template>
  <div class="table">
    <div class="table__head">
      <div class="table__result">Результаты (345)</div>
      <div class="table__btns">
        <UITheButton  :label="'Скачать'"  class="btn-border--yellow" :svg="icoSave" />
        <UITheButton  :label="'Следите за ценами'"  class="btn-border--yellow" :svg="icoStar" />
      </div>
    </div>
    <div class="table__body table-buy">
      <table>
        <thead>
          <th>
            <td>Тема<span><img src="@/assets/img/arrow-table.svg" alt="svg"></span>
            </td>
          </th>
          <th>
            <td>Покупка</td>
          </th>
          <th>
            <td>Тикер<span><img src="@/assets/img/arrow-table.svg" alt="svg"></span></td>
          </th>
          <th>
            <td>Цена<span><img src="@/assets/img/arrow-table.svg" alt="svg"></span></td>
          </th>
          <th>
            <td>Изменение<span><img src="@/assets/img/arrow-table.svg" alt="svg"></span></td>
          </th>
          <th>
            <td>Рыночная кап.<span><img src="@/assets/img/arrow-table.svg" alt="svg"></span></td>
          </th>
          <th>
            <td>Объём<span><img src="@/assets/img/arrow-table.svg" alt="svg"></span></td>
          </th>
        </thead>
        <UITheTable :rows="bodyTable" />
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icoSave: '<svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="clip1126_1141"><rect id="bi:download" width="16.000000" height="16.000000" fill="white" fill-opacity="0"/></clipPath></defs><rect id="bi:download" width="16.000000" height="16.000000" fill="#FFFFFF" fill-opacity="0"/><g clip-path="url(#clip1126_1141)"><path id="Vector" d="M0.5 10C0.63 10 0.75 10.05 0.85 10.14C0.94 10.24 1 10.36 1 10.5L1 13C1 13.26 1.1 13.51 1.29 13.7C1.48 13.89 1.73 14 2 14L14 14C14.26 14 14.51 13.89 14.7 13.7C14.89 13.51 15 13.26 15 13L15 10.5C15 10.36 15.05 10.24 15.14 10.14C15.24 10.05 15.36 10 15.5 10C15.63 10 15.75 10.05 15.85 10.14C15.94 10.24 16 10.36 16 10.5L16 13C16 13.53 15.78 14.03 15.41 14.41C15.03 14.78 14.53 15 14 15L2 15C1.46 15 0.96 14.78 0.58 14.41C0.21 14.03 0 13.53 0 13L0 10.5C0 10.36 0.05 10.24 0.14 10.14C0.24 10.05 0.36 10 0.5 10Z" fill="#2B2B2B" fill-opacity="1.000000" fill-rule="nonzero"/><path id="Vector" d="M8.14 11.85C8.19 11.9 8.24 11.93 8.3 11.96C8.36 11.98 8.43 12 8.5 12C8.56 12 8.63 11.98 8.69 11.96C8.75 11.93 8.8 11.9 8.85 11.85L11.85 8.85C11.94 8.75 12 8.63 12 8.5C12 8.36 11.94 8.24 11.85 8.14C11.75 8.05 11.63 7.99 11.49 7.99C11.36 7.99 11.23 8.05 11.14 8.14L9 10.29L9 1.5C9 1.36 8.94 1.24 8.85 1.14C8.75 1.05 8.63 1 8.5 1C8.36 1 8.24 1.05 8.14 1.14C8.05 1.24 8 1.36 8 1.5L8 10.29L5.85 8.14C5.76 8.05 5.63 7.99 5.5 7.99C5.36 7.99 5.24 8.05 5.14 8.14C5.05 8.24 5 8.36 5 8.5C5 8.63 5.05 8.75 5.14 8.85L8.14 11.85Z" fill="#2B2B2B" fill-opacity="1.000000" fill-rule="nonzero"/></g></svg>',
      icoStar: '<svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><path id="Vector" d="M12.25 16C12.03 16 11.82 15.93 11.65 15.8L8.05 13.27C8.03 13.26 8.01 13.25 7.99 13.25C7.96 13.25 7.94 13.26 7.92 13.27L4.32 15.8C4.14 15.93 3.93 16 3.71 15.99C3.49 15.99 3.28 15.91 3.11 15.78C2.93 15.65 2.79 15.47 2.72 15.25C2.65 15.04 2.64 14.8 2.69 14.58L3.87 10.21C3.88 10.18 3.88 10.16 3.87 10.14C3.87 10.12 3.85 10.1 3.84 10.08L0.43 7.28C0.25 7.14 0.11 6.94 0.05 6.72C-0.02 6.49 -0.02 6.25 0.05 6.03C0.12 5.81 0.25 5.61 0.43 5.47C0.61 5.33 0.83 5.25 1.05 5.25L5.39 5.08C5.42 5.08 5.44 5.07 5.45 5.06C5.47 5.04 5.48 5.02 5.49 5L6.99 0.73C7.06 0.52 7.2 0.33 7.38 0.2C7.56 0.07 7.78 0 8 0C8.21 0 8.43 0.07 8.61 0.2C8.79 0.33 8.93 0.52 9 0.73L10.5 5C10.51 5.02 10.52 5.04 10.54 5.06C10.55 5.07 10.57 5.08 10.6 5.08L14.94 5.25C15.16 5.25 15.38 5.33 15.56 5.47C15.74 5.61 15.87 5.81 15.94 6.03C16.01 6.25 16.01 6.49 15.94 6.72C15.88 6.94 15.74 7.14 15.56 7.28L12.15 10.08C12.14 10.1 12.12 10.12 12.12 10.14C12.11 10.16 12.11 10.18 12.12 10.21L13.3 14.58C13.34 14.75 13.34 14.92 13.31 15.09C13.28 15.26 13.21 15.42 13.11 15.56C13 15.7 12.87 15.81 12.72 15.88C12.58 15.96 12.41 16 12.25 16ZM7.99 12.24C8.2 12.25 8.41 12.32 8.58 12.45L12.18 14.98C12.2 15 12.22 15 12.25 15C12.27 15 12.29 15 12.31 14.98C12.33 14.97 12.34 14.95 12.35 14.93C12.36 14.9 12.36 14.88 12.35 14.86L11.16 10.48C11.11 10.27 11.11 10.04 11.18 9.83C11.24 9.61 11.37 9.43 11.54 9.29L14.95 6.48C14.96 6.47 14.98 6.45 14.99 6.42C14.99 6.4 14.99 6.38 14.99 6.35C14.98 6.33 14.96 6.31 14.95 6.3C14.93 6.28 14.91 6.28 14.88 6.28L10.54 6.11C10.32 6.1 10.12 6.02 9.95 5.89C9.77 5.76 9.64 5.58 9.57 5.37L8.07 1.1C8.07 1.08 8.05 1.06 8.04 1.04C8.02 1.03 8 1.02 7.97 1.02C7.95 1.02 7.93 1.03 7.91 1.04C7.89 1.06 7.88 1.08 7.87 1.1L6.39 5.36C6.32 5.57 6.19 5.75 6.01 5.89C5.84 6.02 5.64 6.09 5.42 6.1L1.08 6.27C1.06 6.27 1.03 6.28 1.02 6.29C1 6.31 0.98 6.33 0.98 6.35C0.97 6.37 0.97 6.4 0.98 6.42C0.98 6.44 1 6.46 1.02 6.48L4.43 9.29C4.6 9.43 4.72 9.61 4.79 9.83C4.85 10.04 4.86 10.27 4.8 10.48L3.62 14.86C3.62 14.88 3.62 14.9 3.62 14.92C3.63 14.94 3.64 14.96 3.66 14.98C3.68 14.99 3.7 15 3.72 15C3.75 15 3.77 14.99 3.79 14.98L7.39 12.45C7.57 12.32 7.77 12.26 7.98 12.26L7.99 12.24Z" fill="#2B2B2B" fill-opacity="1.000000" fill-rule="nonzero"/></svg>',
      bodyTable: [],
    }
  },
  async mounted() {
		const bodyTables = [];
		bodyTables.push(
			{
        ico: (await import("@/assets/img/sber.png")).default,
        name: 'Сбербанк',
        action: 'Купить',
        ticker: 'SBER',
        price: '12.233,14',
        change: '+0,34 %',
        market: '5.54',
        business: '5.54',
        color: 'green'
			},
      {
        ico: (await import("@/assets/img/airbnb.png")).default,
        name: 'Airbnb',
        action: 'Купить',
        ticker: 'ABNB',
        price: '12.233,14',
        change: '-0,44 %',
        market: '5.54',
        business: '5.54',
        color: 'red'
			},
      {
        ico: (await import("@/assets/img/sber.png")).default,
        name: 'Сбербанк',
        action: 'Купить',
        ticker: 'SBER',
        price: '12.233,14',
        change: '+0,34 %',
        market: '5.54',
        business: '5.54'
			},
      {
        ico: (await import("@/assets/img/airbnb.png")).default,
        name: 'Airbnb',
        action: 'Купить',
        ticker: 'ABNB',
        price: '12.233,14',
        change: '-0,44 %',
        market: '5.54',
        business: '5.54'
			},
      {
        ico: (await import("@/assets/img/sber.png")).default,
        name: 'Сбербанк',
        action: 'Купить',
        ticker: 'SBER',
        price: '12.233,14',
        change: '+0,34 %',
        market: '5.54',
        business: '5.54'
			},
      {
        ico: (await import("@/assets/img/airbnb.png")).default,
        name: 'Airbnb',
        action: 'Купить',
        ticker: 'ABNB',
        price: '12.233,14',
        change: '-0,44 %',
        market: '5.54',
        business: '5.54'
			},
      {
        ico: (await import("@/assets/img/sber.png")).default,
        name: 'Сбербанк',
        action: 'Купить',
        ticker: 'SBER',
        price: '12.233,14',
        change: '+0,34 %',
        market: '5.54',
        business: '5.54'
			},
      {
        ico: (await import("@/assets/img/airbnb.png")).default,
        name: 'Airbnb',
        action: 'Купить',
        ticker: 'ABNB',
        price: '12.233,14',
        change: '-0,44 %',
        market: '5.54',
        business: '5.54'
			},
		)
		this.bodyTable = bodyTables
	}
}
</script>

<style lang="scss">
// .table {
//   &__head {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//   }

//   &__btns {
//     display: flex;
//     align-items: center;
//     button + button {
//       margin-left: 20px;
//     }
//   }
// }
// .table-buy {
//   table {
//     tbody td {
//       &:first-child {
//         font-weight: 500;
//       }
//       &:nth-child(2) {
//         cursor: pointer;
//         text-decoration: underline;
//       }
//     }
//   }
// }
</style> -->
