<template>
  <div>
    <p v-html="step_text"></p>
  </div>
</template>

<script>

export default {
  components: {},
  name: "TutorialText",
  props: {
    step_text: String,
  },
  data() {
    return {
    };
  },

  methods: {},
};
</script>

<style scoped>
p {
  justify-content: center;
  text-align: left;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 10px;
}

</style>
