<template>
  <div class="container">
    <TheBreadCrumbs :breadCrumbs="breadCrumbs" />
  </div>
  <section class="section-page">
    <div class="container">
      <TheTerminal @modal-video-open="modalVideoOpen" />
    </div>
  </section>

  <section class="section-page">
    <div class="container">
      <TheMentor @modal-video-open="modalVideoOpen" />
    </div>
  </section>

  <ModalTheModalVideoItem
    v-if="isModalVideoItem"
    @close="closeModalItem"
    :frameSrc="modalVideoItemSrcFrame"
  />
</template>
<script>
export default {
  data() {
    return {
      modalVideoItemSrcFrame: '',
      isModalVideoItem: false,
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
  methods: {
    modalVideoOpen(value) {
      if (value) {
        this.isModalVideoItem = true;
        this.modalVideoItemSrcFrame = value.src;
      }
    },
    closeModalItem() {
      this.isModalVideoItem = false;
    },
  },
};
</script>
<style lang="scss"></style>
