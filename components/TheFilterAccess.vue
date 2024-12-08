<template>
  <UITheButton
    @click="filterItemsAccess('')"
    :label="'Все уроки'"
    :class="['btn-filter', {active: !filterAccessTag}]"
  />
  <UITheButton
    @click="filterItemsAccess('No')"
    :label="'Не полученные'"
    :class="['btn-filter', {active: filterAccessTag === 'No'}]"
  />
  <UITheButton
    @click="filterItemsAccess('My')"
    :label="'Мои'"
    :class="['btn-filter', {active: filterAccessTag === 'My'}]"
  /> 
</template>

<script>
export default {
  emits: ['filter-items-access'],
  props: {
    filterAccessTag: {type: String, default: '', required: true}
  },
  methods: {
    filterItemsAccess(tag) {      
      this.$emit('filter-items-access', tag)
    }
  }
}
</script>