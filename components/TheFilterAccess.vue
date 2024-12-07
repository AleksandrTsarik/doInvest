<template>
  <UITheButton
    @click="filterLessons('')"
    :label="'Все уроки'"
    :class="['btn-filter', {active: !filterLessonsTag}]"
  />
  <UITheButton
    @click="filterLessons('No')"
    :label="'Не полученные'"
    :class="['btn-filter', {active: filterLessonsTag === 'No'}]"
  />
  <UITheButton
    @click="filterLessons('My')"
    :label="'Мои'"
    :class="['btn-filter', {active: filterLessonsTag === 'My'}]"
  /> 
</template>

<script>
export default {
  props: {
    filterLessonsTag: {type: String, default: '', required: true}
  },
  methods: {
    filterLessons(tag) {      
      this.$emit('filter-lessons', tag)
    }
  }
}
</script>