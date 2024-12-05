git branch -M main
<template>
  <tbody>
    <tr v-for="(row, i) in rows" :key="i">
      <td>
        <span><img :src="row.ico" alt="" /></span>{{ row.name }}
      </td>
      <td>{{ row.action }}</td>
      <td>{{ row.ticker }}</td>
      <td>
        {{ row.price }} ₽
        <div v-if="row.color === 'green'" :class="test(row.color)">test</div>
      </td>
      <td>{{ row.change }} %</td>
      <td>{{ row.market }} T</td>
      <td>{{ row.business }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    rows: {
      type: Object,
      default: [],
      require: true,
    },
  },
};
</script>

<style lang="scss">
// table {
//   border-collapse: collapse;
//   width: 100%;
//   text-align: left;
//   thead {
//     border-bottom: solid 2px #3F3F3F;
//   }
//   th {
//     td {
//       display: flex;
//       align-items: center;
//       font-size: 16px;
//       font-weight: 600;
//       padding: 15px 0;
//       span {
//         margin-bottom: 5px;
//         margin-left: 5px;
//       }
//     }
//   }
//   tr {
//     border-bottom: solid 1px #CBCBCB;
//     td {
//       font-size: 18px;
//       font-weight: 400;
//       padding: 15px 0;
//       span {
//         margin-right: 5px;
//       }
//     }
//   }
// }
</style>
