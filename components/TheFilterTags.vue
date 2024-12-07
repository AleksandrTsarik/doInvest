<template>
  <div class="materials__filters">
    <UITheButton
      @click="filterMaterials()"
      :label="'Все'"
      :class="['btn-filter', { active: !currentTag }]"
    />
    <UITheButton
      v-for="(tag, i) in tagsMaterials"
      :key="i"
      @click="filterMaterials(tag)"
      :label="tag"
      :class="['btn-filter', { active: currentTag === tag }]"
    />
  </div>
</template>

<script>
export default {
  props: {
    currentTag: { type: String, default: '', require: true },
    tagsMaterials: { type: String, default: [], require: true },
  },
  methods: {
    filterMaterials(tag) {
      this.$emit('filter-materials', tag)
    }
  }

}
</script>