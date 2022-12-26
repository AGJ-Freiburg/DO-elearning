<template>
  <v-img
  :src="require('../assets/tutorials/' + step_image)"
  :aspect-ratio="1"
  ></v-img>
</template>

<script>

export default {
  components: {
    },
  name: "TutorialImage",
  props: {
    step_image: String,
  },
  data() {
    return {
    };
  },

  methods: {},
};
</script>

<style scoped>
</style>
