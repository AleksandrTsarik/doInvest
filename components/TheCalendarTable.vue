<template>
  <div class="table table-calendar">
    <table>
      <thead>
        <tr>
          <th>
            <div>
              Название
              <TheSvg :type="'arrow-table'" />
              <br />
              <br />
            </div>
          </th>
          <th>
            <div>
              Последний день <br /> для покупки
              <TheSvg :type="'arrow-table'" />
            </div>
          </th>
          <th>
            <div>
              Дата закрытия реестра <br /> под дивиденды
              <TheSvg :type="'arrow-table'" />
            </div>
          </th>
          <th>
            <div>
              Дивидендная <br /> активность
              <TheSvg :type="'arrow-table'" />
            </div>
          </th>
          <th>
            <div>
              Размер <br /> дивиденда
              <TheSvg :type="'arrow-table'" />
            </div>
          </th>
          <th>
            Цена акции
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in bodyTable" :key="i">
          <td>
            <div class="table-calendar__name">
              <img :src="item.ico" alt="svg">
              <div class="table-calendar__text">
                <p>{{ item.name }}</p>
                <span>{{ item.subName }}</span>
              </div>
            </div>
          </td>
          <td>{{ item.lastDate }}</td>
          <td>{{ item.closeDate }}</td>
          <td>{{ item.activiti }} %</td>
          <td>{{ item.size }} ₽</td>
          <td>{{ item.priceShare }} ₽</td>
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
        ico: (await import("@/assets/img/gazprom.svg")).default,
        name: 'Газпром нефть 6мес. 2024',
        subName: 'SIBN',
        lastDate: '23.12.2023',
        closeDate: '27.12.2023',
        activiti: 9.85,
        size: 84.2,
        priceShare: 843
			},
      {
        ico: (await import("@/assets/img/kyznec.svg")).default,
        name: 'Газпром нефть 6мес. 2024',
        subName: 'SIBN',
        lastDate: '23.12.2023',
        closeDate: '27.12.2023',
        activiti: 9.85,
        size: 84.2,
        priceShare: 843
			},
      {
        ico: (await import("@/assets/img/gazprom.svg")).default,
        name: 'Газпром нефть 6мес. 2024',
        subName: 'SIBN',
        lastDate: '23.12.2023',
        closeDate: '27.12.2023',
        activiti: 9.85,
        size: 84.2,
        priceShare: 843
			},
      {
        ico: (await import("@/assets/img/kyznec.svg")).default,
        name: 'Газпром нефть 6мес. 2024',
        subName: 'SIBN',
        lastDate: '23.12.2023',
        closeDate: '27.12.2023',
        activiti: 9.85,
        size: 84.2,
        priceShare: 843
			},
      {
        ico: (await import("@/assets/img/gazprom.svg")).default,
        name: 'Газпром нефть 6мес. 2024',
        subName: 'SIBN',
        lastDate: '23.12.2023',
        closeDate: '27.12.2023',
        activiti: 9.85,
        size: 84.2,
        priceShare: 843
			},
      {
        ico: (await import("@/assets/img/kyznec.svg")).default,
        name: 'Газпром нефть 6мес. 2024',
        subName: 'SIBN',
        lastDate: '23.12.2023',
        closeDate: '27.12.2023',
        activiti: 9.85,
        size: 84.2,
        priceShare: 843
			},
		)
		this.bodyTable = bodyTables
	}
}
</script>

<style lang="scss">
  .table-calendar {
    table {
      th {
        text-align: left;
        font-size: 16px;
        font-weight: 600;
        &:first-child {
          @media(max-width: 575px) {
            max-width: 40%;
          }
        }
      }
      th svg{
        cursor: pointer;
      }
      tbody {
        position: relative;
        td {
          font-size: 18px;
          font-weight: 500;
          @media(max-width: 767px) {
            font-size: 15px;
          }
          &:first-child {
            @media(max-width: 575px) {
              max-width: 40%;
              padding-right: 5px;
            }
            img {
              width: 30px;
              margin-bottom: 5px;
            }
          }
        }
      }
    }
    &__name {
      display: flex;
      @media(max-width: 575px) {
        flex-direction: column;
      }
      img {
        margin-right: 10px;
      }
    }
    &__text {
      span {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }

</style>