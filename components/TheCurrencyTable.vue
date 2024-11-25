<template>
  <div class="table table-currency">
    <table>
      <thead>
        <tr>
          <th>
            <div>
              Тема
              <TheSvg :type="'arrow-table'" />
            </div>
          </th>
          <th>
            <td>Покупка</td>
          </th>
          <th>
            <div>
              Тикер
              <TheSvg :type="'arrow-table'" />
            </div>
          </th>
          <th>
            <div>
              Цена
              <TheSvg :type="'arrow-table'" />
            </div>
          </th>
          <th>
            <div>
              Изменение
              <TheSvg :type="'arrow-table'" />
            </div>
          </th>
          <th>
            <div>
              Рыночная кап.
              <TheSvg :type="'arrow-table'" />
            </div>
          </th>
          <th>
            <div>
              Объём
              <TheSvg :type="'arrow-table'" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in bodyTable" :key="i">
          <td>
            <div class="table-currency__name">
              <img :src="item.ico" alt="ico">
              <p>{{ item.name }}</p>
            </div>
          </td>
          <td>
            <NuxtLink :to="item.urlBuy">{{ item.action }}</NuxtLink>
          </td>
          <td>{{ item.ticker }}</td>
          <td>{{ item.price }}₽</td>
          <td>
            <div :class="item.change > 0 ? 'table-green' : 'table-red'">{{ item.change > 0 ? `+${item.change}` : item.change }}%</div>
          </td>
          <td>{{ item.market }}</td>
          <td>{{ item.business }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        urlBuy: '#',
        ticker: 'SBER',
        price: '12.233,14',
        change: 0.34,
        market: '5.54',
        business: '5.54'
			},
      {
        ico: (await import("@/assets/img/airbnb.png")).default,
        name: 'Airbnb',
        action: 'Купить',
        urlBuy: '#',
        ticker: 'ABNB',
        price: '12.233,14',
        change: -0.44,
        market: '5.54',
        business: '5.54',
			},
      {
        ico: (await import("@/assets/img/sber.png")).default,
        name: 'Сбербанк',
        action: 'Купить',
        urlBuy: '#',
        ticker: 'SBER',
        price: '12.233,14',
        change: 0.34,
        market: '5.54',
        business: '5.54'
			},
      {
        ico: (await import("@/assets/img/airbnb.png")).default,
        name: 'Airbnb',
        action: 'Купить',
        urlBuy: '#',
        ticker: 'ABNB',
        price: '12.233,14',
        change: -0.44,
        market: '5.54',
        business: '5.54'
			},
      {
        ico: (await import("@/assets/img/sber.png")).default,
        name: 'Сбербанк',
        action: 'Купить',
        urlBuy: '#',
        ticker: 'SBER',
        price: '12.233,14',
        change: 0.34,
        market: '5.54',
        business: '5.54'
			},
      {
        ico: (await import("@/assets/img/airbnb.png")).default,
        name: 'Airbnb',
        action: 'Купить',
        urlBuy: '#',
        ticker: 'ABNB',
        price: '12.233,14',
        change: -0.44,
        market: '5.54',
        business: '5.54'
			},
      {
        ico: (await import("@/assets/img/sber.png")).default,
        name: 'Сбербанк',
        action: 'Купить',
        urlBuy: '#',
        ticker: 'SBER',
        price: '12.233,14',
        change: 0.34,
        market: '5.54',
        business: '5.54'
			},
      {
        ico: (await import("@/assets/img/airbnb.png")).default,
        name: 'Airbnb',
        action: 'Купить',
        urlBuy: '#',
        ticker: 'ABNB',
        price: '12.233,14',
        change: -0.44,
        market: '5.54',
        business: '5.54'
			},
		)
		this.bodyTable = bodyTables
	}
}
</script>

<style lang="scss">
  .table-currency {
    table {
      th svg{
        cursor: pointer;
      }
      thead {
        th {
          &:first-child {
            @media(max-width: 575px) {
              max-width: 140px;
            }
          }
        }
        
      }
      tbody {
        td a {
          color: #2B2B2B;
          border-bottom: solid 1px;
        }
        td {
          &:first-child {
            @media(max-width: 575px) {
              max-width: 140px;
            }
          }
        }
      }
    }
   &__name {
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
   } 
  }
  .table-green {
    color: #3AAA35;
  }
  .table-red {
    color: #EA3232;
  }

</style>