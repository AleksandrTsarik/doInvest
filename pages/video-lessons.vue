<template>
  <main>

    <section class="section-page video-lessons">
      <TheBreadCrumbs :breadCrumbs="breadCrumbs" />
      <div class="container">
        <TheVideo 
          :videoLessons="currentVideoLessons.slice(0,3)"
          :videoThemes="currentVideoThemes"
          @search-video-theme="searchVideoTheme"
          @filter-video-lessons="filterVideoLessons"
          @modal-video-open="modalVideoOpen"
        />

        <ThePagination />
      </div>      
    </section> 
  </main>
</template>

<script>
export default {
  data() {
    return {      
      breadCrumbs: [
        {
          name: 'Видеоуроки',
          url: '#',
          current: true,
        }
      ],
      videoSearchDrop: false,
      videoThemes: [
        {
          id: 1,
          name: 'Что такое инвестиции?'
        },
        {
          id: 2,
          name: 'Как оценивать инвестиции?'
        },
        {
          id: 3,
          name: 'Как оценивать риски?'
        },
        {
          id: 4,
          name: 'Что такое инвестиции?'
        },
        {
          id: 5,
          name: 'Как оценивать инвестиции?'
        },
        {
          id: 6,
          name: 'Как оценивать риски?'
        },
        {
          id: 7,
          name: 'Что такое инвестиции?'
        },
        {
          id: 8,
          name: 'Как оценивать инвестиции?'
        },
        {
          id: 9,
          name: 'Как оценивать риски?'
        },
        {
          id: 10,
          name: 'Что такое инвестиции?'
        },
        {
          id: 11,
          name: 'Как оценивать инвестиции?'
        },
        {
          id: 12,
          name: 'Как оценивать риски?'
        },
        {
          id: 13,
          name: 'Что такое инвестиции?'
        },
        {
          id: 14,
          name: 'Как оценивать инвестиции?'
        },
        {
          id: 15,
          name: 'Как оценивать риски?'
        },
        {
          id: 16,
          name: 'Что такое инвестиции?'
        },
        {
          id: 17,
          name: 'Как оценивать инвестиции?'
        },
        {
          id: 18,
          name: 'Как оценивать риски?'
        },
      ],
      videoSearchField: '',
      currentVideoThemes: [],
      videoLessons: [
        {
          id: 1,
          themeId: 1,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 1)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/1u-jamdlQfY?si=pz1dlPCCUPrO2imX',
          access: true,
        },
        {
          id: 2,
          themeId: 1,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 1)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: '',
          access: false,
        },
        {
          id: 3,
          themeId: 1,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 1)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          access: true,
        },
        {
          id: 4,
          themeId: 2,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 2)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          access: true,
        },
        {
          id: 5,
          themeId: 2,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 2)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          access: true,
        },
        {
          id: 6,
          themeId: 2,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 2)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          access: true,
        },
        {
          id: 7,
          themeId: 3,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 3)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 0,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          access: true,
        },
        {
          id: 8,
          themeId: 3,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 3)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          access: true,
        },
        {
          id: 9,
          themeId: 3,
          name: 'Что такое опцион и почему не нужно его покупать (themeId 3)',
          descr: 'Lorem ipsum — классический текст-«рыба» Lorem ipsum — классический текст-«рыба»',
          price: 150,
          oldPice: 200,
          frame: 'https://www.youtube.com/embed/l3OorRmFsto?si=Rp7OBg4n2oGxOEdf',
          access: true,
        }
      ],
      currentVideoLessons: [],
    }
  },
  methods: {
    searchVideoTheme(value) {
      if(value) {
        this.currentVideoThemes = this.videoThemes.filter(item => item.name.toLowerCase().includes(value.toLowerCase())) 
      }else{
        this.currentVideoThemes = this.videoThemes
      }
    },
    getVideoThemes() {
      this.currentVideoThemes = this.videoThemes
    },
    filterVideoLessons(value) {
      let themeId = value 
      this.currentVideoLessons = this.videoLessons.filter(item => item.themeId === themeId)
    },
    getVideoLessons() {
      this.currentVideoLessons = this.videoLessons
    }, 
  },
  mounted() {
    this.getVideoThemes()
    this.getVideoLessons()
  },
};
</script>

<style lang="scss" scoped>
.video-lessons {
  .pagination {
    margin-top: 30px;
  }
}
</style>