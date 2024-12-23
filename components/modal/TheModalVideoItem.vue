<template>
  <teleport to="body">
    <div class="modal modal-video">
      <div class="modal__overlay"></div>
      <div class="modal-video__wrap modal__wrap">
        <div class="modal__close" @click="closeModal"></div>
        <div class="modal-video__iframe iframe">
          <iframe
            :src="frameSrc"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import TheCheckbox from '../UI/TheCheckbox.vue';
export default {
  components: { TheCheckbox },
  props: {
    frameSrc: {
      type: String,
      default: '',
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close', false);
    },
  },
};
</script>

<style lang="scss">
.modal-video {
  &__wrap {
    background-color: #fff;
    padding: 40px 20px;
    max-width: 90vh;
  }
  // &__iframe {
  //   iframe {
  //     height: 20vw;
  //   }
  // }
}
</style>
