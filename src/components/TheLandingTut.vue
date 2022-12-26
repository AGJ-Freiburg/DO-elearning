<template>
  <div>
    <p v-html="$ml.get('text_start')"></p>
  </div>
</template>

<script>
export default {
  name: "TheLandingTut",
  components: {},

  data() {
    return {
      i: 0,
    };
  },

  methods: {},
};
</script>

<style scoped>
h1 {
  margin-left: 15px;
  color: #006ab3 !important;
}

p {
  margin-left: 15px;
  color: #006ab3 !important;
}
</style>
