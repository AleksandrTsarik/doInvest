<template>
  <div class="container">
    <TheBreadCrumbs :breadCrumbs="breadCrumbs" />
  </div>
  <section class="section-page">
    <div class="container">
      <TheTerminal />
    </div>
  </section>

  <section class="section-page">
    <div class="container">
      <TheMentor title="" />
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      modalVideo: false,
      breadCrumbs: [
        {
          name: 'Видеоуроки',
          url: '#',
          current: false,
        },
        {
          name: 'Работа с терминалом',
          url: '#',
          current: true,
        },
      ],
    };
  },
};
</script>
<style lang="scss"></style>
