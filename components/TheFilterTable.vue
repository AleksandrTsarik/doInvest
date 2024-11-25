<template>
  <div class="table-filter__add t-24"><span class="span-circle"></span>Новый фильтр</div>
  <div class="table table-filter">
    <table>
      <thead>
        <tr>
          <th>
              ID
          </th>
          <th>
            Тема
          </th>
          <th>
            Теги
          </th>
          <th>
            Источник
          </th>
          <th>
            Период
          </th>
          <th>
            
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in bodyTable" :key="i">
          <td># {{ item.id }}<br /><br /><br /></td>
          <td>{{ item.theme }}</td>
          <td>
            <p v-for="(tag, i) in item.tag" :key="i">{{ tag }}</p>
          </td>
          <td>
            <p v-for="(source, i) in item.source" :key="i">{{ source }}</p>
          </td>
          <td>
            <p v-for="(period, i) in item.period" :key="i">{{ period }}</p>
          </td>
          <td>
            <div class="table-filter__btn" >
              <button :class="{'is-popup' : isSettingItemPopup === item.id}"  @click="settingItem(item.id)" > <TheSvg :type="'settings'" /></button>
              <button :class="{'is-popup' : isDeleteItemPopup === item.id}"  @click="deleteItem(item.id)"><TheSvg :type="'basket'"/></button>
            </div>

            <div class="table-filter-drop-del table-filter-drop"  :class="{'is-popup' : isDeleteItemPopup === item.id}">
              <div class="table-filter-drop__overlay"></div>
              <div class="table-filter-drop-del__inner table-filter-drop__inner">
                <div class="table-filter-drop__close" @click="closeDeleteItem"></div>
                <div class="table-filter-drop-del__text t-24">Вы уверены, что хотите удалить этот пункт?</div>
                <div class="table-filter-drop-del__btns">
                  <UITheButton :label="'Нет'" class="btn-dark" @click="closeDeleteItem" /> 
                  <UITheButton :label="'Да'" class="btn-light" @click="deleteFilterItem(index)" /> 
                </div>
              </div>
            </div>

            <div class="table-filter-drop-setting table-filter-drop"  :class="{'is-popup' : isSettingItemPopup === item.id}">
              <div class="table-filter-drop__overlay"></div>
              <div class="table-filter-drop-setting__inner table-filter-drop__inner">
                <div class="table-filter-drop__close" @click="closeSettingItem"></div>
                <div class="table-filter-drop-setting__list">
                  <ul>
                    <li>Пункт 1</li>
                    <li>Пункт 2</li>
                    <li>Пункт 3</li>
                    <li>Пункт 4</li>
                  </ul>
                </div>

              </div>
            </div>
 
          </td>
        </tr>
      </tbody>
    </table>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      isDeleteItemPopup: null, 
      isSettingItemPopup: null,
      bodyTable: [],
    }
  },
  async mounted() {
		const bodyTables = [];
		bodyTables.push(
			{
        id: 12884,
        theme: 'Нефть, газ',
        tag: ['Акции', 'Лукойл'],
        source: ['Комерсант', 'Лукойл', 'Транснефть'],
        period: ['За последние', '7 дней']
			},
      {
        id: 128,
        theme: 'Нефть, газ',
        tag: ['Акции', 'Лукойл'],
        source: ['Комерсант', 'Лукойл', 'Транснефть'],
        period: ['За последние', '7 дней']
			},
      {
        id: 0,
        theme: 'Нефть, газ',
        tag: ['Акции', 'Лукойл'],
        source: ['Комерсант', 'Лукойл', 'Транснефть'],
        period: ['За последние', '7 дней']
			},
      {
        id: 123,
        theme: 'Нефть, газ',
        tag: ['Акции', 'Лукойл'],
        source: ['Комерсант', 'Лукойл', 'Транснефть'],
        period: ['За последние', '7 дней']
			},
      {
        id: 1,
        theme: 'Нефть, газ',
        tag: ['Акции', 'Лукойл'],
        source: ['Комерсант', 'Лукойл', 'Транснефть'],
        period: ['За последние', '7 дней']
			},
      {
        id: 99999,
        theme: 'Нефть, газ',
        tag: ['Акции', 'Лукойл'],
        source: ['Комерсант', 'Лукойл', 'Транснефть'],
        period: ['За последние', '7 дней']
			},
		)
		this.bodyTable = bodyTables
	},
  methods: {
    deleteItem(id) {
      this.isDeleteItemPopup = id
      
    },
    settingItem(id) {
      this.isSettingItemPopup = id
      
    },
    closeDeleteItem() {
      this.isDeleteItemPopup = null
    },
    closeSettingItem () {
      this.isSettingItemPopup = null
    },
    deleteFilterItem(item) {
      this.bodyTable.splice(item, 1);
    },
  }
}
</script>

<style lang="scss">
  .table-filter {
    &__add {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      span {
        margin-right: 10px;
      }
    }
    table {
      thead {
        th {
          &:first-child {
            @media(max-width: 575px) {
              max-width: 120px;
            }
          }
        }
      }
      tbody {
        td {
          &:first-child {
            @media(max-width: 575px) {
              max-width: 120px;
            }
          }
        }
      }
    }
    &__btn {
      position: relative;
      z-index: 0;
      button svg {
        width: 20px;
        height: 20px;
      }
    }
  }
  .table-filter-drop {
    position: fixed;
    display: none;
    &.is-popup {
      display: block;
      padding: 45px;
    }
    &.is-popup .table-filter-drop__overlay {
      display: block;
      z-index: 999;
    }
    &__overlay {
      background-color: rgba(#000, 0.5);
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: none;
    }
    &__close {
      position: absolute;
      right: 14px;
      top: 14px;
      display: block;
      width: 20px;
      height: 20px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        @media(min-width: 1023px) {
          transform: rotate(90deg);
        }
      }
      &:after, &:before {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #000;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
    &__inner {
      display: block;
      background-color: #fff;
      border-radius: 10px;
      text-align: center;
      max-width: 390px;
      z-index: 100;
      padding: 45px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 99999;
    }
  }
  .table-filter-drop-del {
    &__btns {
      display: flex;
      align-items: center;
      margin: 20px auto 0;
      justify-content: center;
      button {
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
.table-filter-drop-setting {
  &__inner {

  }
  &__list {
    ul {
      text-align: left;
    }
    li {
      margin-bottom: 10px;
      font-size: 16px;
    }
  }
}
</style>