<template>
  <div class="events-calendar">
    <div class="events-calendar__row">
      <div class="events-calendar__caption">Прошедшие события</div>

      <div :class="['events-calendar__select', {'show': isYearsShow}]">
        <div class="events-calendar__select-caption" @click="isYearsShow = !isYearsShow">{{ selectedEventsYear }} <span></span></div>
        <div class="events-calendar__select-drop">
          <ul>
            <li 
              v-for="(year, i) in yearsLastEvents" 
              :key="i"
              @click="getMonthLastEventsWidthYears(year)"
              :class="[{'current': year === selectedEventsYear}]"
            >
              {{ year }}
            </li>
          </ul>
        </div>
      </div>
      <div :class="['events-calendar__select', {'show': isMonthShow}]">
        <div class="events-calendar__select-caption" @click="isMonthShow = !isMonthShow">{{ getMonthLocal(selectedEventsMonth) }} <span></span></div>
        <div class="events-calendar__select-drop">
          <ul>
            <li 
              v-for="(month, i) in monthsLastEvents"
              :key="i"
              @click="getDaysLastEventsWidthYears(selectedEventsYear, month)"
              :class="[{'current': month === selectedEventsMonth}]"
              >
              {{ getMonthLocal(month) }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="events-calendar__days">
      <div 
        v-for="(day, i) in daysLastEvents"
        :key="i"
        :class="[
          'events-calendar__days-item',
          {'active': day.full === selectedDate} 
        ]"
        @click="setCurrentDay(day.number)">
        <div class="events-calendar__days-item-daynumber">{{ day.number }}</div>
        <div :class="['events-calendar__days-item-daylocal', {'weekend-day': day.local === 6 || day.local === 0}]">{{ daysLocal[day.local] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['output-selected-date'],
  data() {
    return {
      isYearsShow: false,
      isMonthShow: false,
      selectedEventsDay: null,
      selectedEventsMonth: null,
      selectedEventsYear: null,
      selectedDate: '',
      firstEventDate: '15.03.2019',
      currentMonth: '',
      currentYear: '',
      currentDay: '',
      monthsLastEvents: [],
      yearsLastEvents: [],
      daysLastEvents: [],
      monthLocal: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      daysLocal: [
        'Вс',
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб',
      ]
    }
  },
  methods: {
    getCurrentDate() {
      let currentDate = new Date()
      this.currentMonth = currentDate.getMonth()
      this.currentYear = currentDate.getFullYear()
      this.currentDay = currentDate.getDate() 
      // Устанавливаем выбранную даты для событий      
      this.selectedEventsDay = this.currentDay
      this.selectedEventsMonth = this.currentMonth
      this.selectedEventsYear = this.currentYear
      // Устанавливаем полную выбранную дату при начальной загрузке соответсвующей текущей
      this.selectedDate = `${this.currentDay}.${this.currentMonth}.${this.currentYear}`
    },
    getYearsLastEvents(currentYear) {
      let firstDateYear = parseInt(this.firstEventDate.split('.')[2])

      for (let year = currentYear; year >= firstDateYear; year--) {
        this.yearsLastEvents.push(year)
      }

      this.selectedEventsYear = currentYear      
    },
    getMonthLastEventsWidthYears(year) {
      let months = []
      let currentLastEventsYear = year ? year : this.currentYear
      let firstDateYear = parseInt(this.firstEventDate.split('.')[2])
      let firstDateMonth = parseInt(this.firstEventDate.split('.')[1] - 1)

      if(currentLastEventsYear !== firstDateYear) {
        let startMonth = currentLastEventsYear === this.currentYear ? this.currentMonth : 11
        for (let month = startMonth; month >= 0; month--) {
          months.push(month)
        }
      }else{
        let startMonth = (currentLastEventsYear === firstDateYear && currentLastEventsYear === this.currentYear) ? this.currentMonth : 11
        for (let month = startMonth; month >= firstDateMonth; month--) {
          months.push(month)
        }
      }

      this.monthsLastEvents = months.reverse() 
      this.selectedEventsYear = year ? year : this.currentYear
      this.selectedEventsMonth = this.monthsLastEvents[this.monthsLastEvents.length - 1]
      this.getDaysLastEventsWidthYears(currentLastEventsYear, this.monthsLastEvents[this.monthsLastEvents.length - 1])
      this.isYearsShow = false
    },
    getDaysLastEventsWidthYears(year, month) {
      let days = []
      let startDayOfMonth = new Date(year, month, 1).getDate()
      let finishDayOfMonth =  new Date(year, month+1, 0).getDate()

      for(let day = startDayOfMonth;day <= finishDayOfMonth; day++) {
        days.push({
          full: `${day}.${month}.${year}`,
          local: new Date(year, month, day).getDay(),
          number: day
        })
      }
      this.daysLastEvents = days
      this.selectedEventsMonth = month
      this.isMonthShow = false
    },
    setCurrentDay(day) {
      this.selectedDate = `${day}.${this.selectedEventsMonth}.${this.selectedEventsYear}`

      // Причёсываем дату для передачи родителю
      let parseDay = day < 10 ? `0${day}` : day
      let parseMonth = this.selectedEventsMonth < 9 ? `0${this.selectedEventsMonth+1}` : this.selectedEventsMonth + 1
      let parseDate = `${parseDay}.${parseMonth}.${this.selectedEventsYear}`

      this.$emit('output-selected-date', parseDate)
    },
    getMonthLocal(indexMonth) {
      return this.monthLocal[indexMonth]
    }
  },
  mounted() {    
    this.getCurrentDate()
    this.getYearsLastEvents(this.currentYear)
    this.getMonthLastEventsWidthYears()
    this.getDaysLastEventsWidthYears(this.currentYear, this.currentMonth) 
  }
}
</script>

<style lang="scss">
.events-calendar {
  margin-bottom: 40px;
  &__row {
    display: flex;
    align-items: center;
    column-gap: 15px;
  }

  &__caption {
    font-size: 20px;
  }

  &__select {
    position: relative;
    flex: 0 0 120px;
    max-width: 120px;
    color: var(--text);

    &.show {
      .events-calendar__select-caption span {
        transform: rotate(0deg);
      }
      .events-calendar__select-drop {
        opacity: 1;
        visibility: visible;
        pointer-events: all
      }
    }
  }

  &__select-caption {
    display: flex;
    align-items: center;
    column-gap: 9px;
    padding: 10px 14px 8px;
    font-size: 18px;
    font-weight: 700;

    span {
      flex: 0 0 12px;
      height: 6px;
      background-image: url('@/assets/img/arrow-calendar.svg');
      background-repeat: no-repeat;
      background-position: 50% 50%;
      transform: rotate(180deg);      
    }
  }

  &__select-drop {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 10px 14px 8px;
    background-color: #eee;
    border-radius: 6px;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    li {
      font-size: 18px;
      margin-bottom: 2px;
      transition: .3s;
      &:hover, &.current {
        cursor: pointer;
        color: rgb(var(--primary));
      }
    }
  }

  &__days {
    margin-top: 16px;
    display: flex;
    align-items: center;
    column-gap: 8px;    
  }

  &__days-item {
    flex: 0 0 39px;
    height: 61px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 6px;
    padding-bottom: 6px;
    color: var(--text);
    line-height: 135%;
    border-radius: 6px;    
    border: solid 1px transparent;
    transition: .3s;
    cursor: pointer;

    &:hover {
      @media screen and (min-width: 1024px) {
        border-color: var(--text);
      }
    }

    &.active {
      background-color:  rgb(var(--primary));
      color: #fff;

      .events-calendar__days-item-daylocal {
        color: #fff;
      }
    }
  }

  &__days-item-daylocal {
    font-size: 16px;  
    &.weekend-day {
      color: rgb(var(--primary));
    }  
  }

  &__days-item-daynumber {
    font-size: 20px;
    font-weight: 700;
    line-height: 135%;
  }
}
</style>