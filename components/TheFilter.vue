<template>
  <div class="filter">
    <div class="filter__title title">Настройте фильтры по своим акциям</div>
    <div class="filter__inner">
      <div class="filter_block">
        <div class="filter__row">Пример использования<span class="video-icon"></span></div>
        <TheChoice class="filter-form" />
        
      </div>
      <div class="filter__block">
        <div class="filter-info">
          <div class="filter-info__title t-32">Получайте информацию в ленту</div>
          <div class="filter-info__list">
            <div class="filter-info__item" v-for="(item, i) in filterCard" :key="i">
              <div class="filter-info__img">
                <img :src="item.img" alt="...">
              </div>
              <div class="filter-info__info">
                <div class="filter-info__name t-24">{{ item.name }}</div>
                <div class="filter-info__text t-18">{{ item.text }}</div>
                <div class="filter-info__date">
                  <span>{{ item.date }}</span>
                  <span>{{ item.time }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="filter-info__more">
            <button>
              Подгрузить ещё новости
              <svg width="18.000000" height="13.000000" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs/>
                <path id="Vector" d="M17.7 5.29C17.89 5.48 18 5.72 18 5.98C18 6.24 17.89 6.49 17.7 6.67L11.93 12.2C11.84 12.29 11.72 12.36 11.6 12.41C11.47 12.47 11.34 12.49 11.21 12.5C11.07 12.5 10.94 12.47 10.81 12.42C10.68 12.37 10.57 12.3 10.48 12.21C10.38 12.12 10.3 12.01 10.25 11.89C10.2 11.77 10.18 11.64 10.18 11.51C10.18 11.38 10.21 11.25 10.26 11.13C10.31 11.01 10.39 10.91 10.49 10.82L14.51 6.96L1.01 6.96C0.74 6.96 0.48 6.86 0.29 6.67C0.1 6.49 0 6.24 0 5.98C0 5.72 0.1 5.48 0.29 5.29C0.48 5.11 0.74 5.01 1.01 5.01L14.51 5.01L10.49 1.15C10.3 0.97 10.2 0.72 10.2 0.46C10.2 0.21 10.31 -0.04 10.5 -0.22C10.69 -0.4 10.95 -0.5 11.21 -0.5C11.48 -0.51 11.74 -0.41 11.93 -0.23L17.7 5.29Z" fill="#2B2B2B" fill-opacity="1.000000" fill-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

      filterCard: [],
    }
  },
  async mounted() {
		const filterCards = [];
		filterCards.push(
			{
				img: (await import("@/assets/img/filter-info.jpeg")).default,
				name: 'Заголовок новости',
        text: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
        date: '07.08.2023',
        time: '14:51'
			},
      {
				img: (await import("@/assets/img/filter-info.jpeg")).default,
				name: 'Заголовок новости',
        text: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
        date: '07.08.2023',
        time: '14:51'
			},
      {
				img: (await import("@/assets/img/filter-info.jpeg")).default,
				name: 'Заголовок новости',
        text: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
        date: '07.08.2023',
        time: '14:51'
			},
		);
		this.filterCard = filterCards
	}
}
</script>

<style lang="scss">
.filter {

  &__title {
    max-width: 40%;
    @media(max-width: 1400px) {
      max-width: 80%;
    }
    @media(max-width: 767px) {
      max-width: 100%;
    }
  }
  &__inner {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 220px;
    @media(max-width: 1400px) {
      gap: 50px;
    }
    @media(max-width: 1023px) {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }
  // &__wrap {
  //   background-color: #fff;
  //   border-radius: 10px;
  //   padding: 65px 50px;
  // }
  // &__name {
  //   font-size: 24px;
  //   font-weight: 400;
  //   line-height: 110%;
  //   margin-bottom: 30px;
  // }
  // &__block {
  //   margin-bottom: 35px;
  // }
  // &__list {
  //   column-count: 3;
  // }
  // &__item {
  //   break-inside: avoid;
  //   margin-bottom: 20px;
  // }
  // &__btn {
  //   margin-top: 55px;
  //   button {
  //     span {
  //       margin-bottom: -3px;
  //       margin-right: 10px;
  //     }
  //   }
  // }
  &__row {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-size: 24px;
    margin-bottom: 40px;
    @media(max-width: 767px) {
      margin-bottom: 0;
    }
    .video-icon {
      position: relative;
      display: block;
      top: auto;
      left: auto;
      right: auto;
      transform: translate(0,0);
      margin-left: 10px;
    }
  }
}
.filter-form {
  @media(max-width: 767px) {
    display: none;
  }
}
.filter-info {
  &__title {
    font-weight: 500;
    margin-bottom: 30px;
    @media(max-width: 767px) {
      margin-bottom: 15px;
    }
  }
  &__item {
    border-radius: 10px;
    background-color: #fff;
    margin-bottom: 10px;
    padding: 15px 20px;
    display: flex;
    @media(max-width: 767px) {
      flex-direction: column;
    }
  }
  &__img {
    margin-right: 25px;
    flex: 0 0 205px;
    @media(max-width: 767px) {
      flex: 0 0 100%;
      margin: 0 0 10px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      overflow: hidden;
    }
  }
  &__list {
    margin-bottom: 50px;
  }
  &__info {
    display: flex;
    flex-direction: column;
  }
  &__name {
    margin-bottom: 8px;
  }
  &__text {
    margin-bottom: 30px;
  }
  &__date {
    margin-top: auto;
  }
  &__more {
    button {
      display: flex;
      align-items: center;
      font-size: 24px;
      font-weight: 400;
      transition: 0.3s;
      &:hover {
        border-bottom: solid 1px;
      }
      
    }
    svg {
      margin-bottom: -2px;
      margin-left: 10px;
    }
  }
}
</style>