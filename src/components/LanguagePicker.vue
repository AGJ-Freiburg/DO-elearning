<template>
  <div class="ml-menu">
    <v-select
      class="ml"
      v-model="lang"
      :items="$ml.list"
      menu-props="auto"
      :label="(mobile) ? '' : 'Sprache / Language'"
      hide-details
      prepend-icon="mdi-translate"
      :color="(mobile) ? '#006ab3' : '#fff'"
      :dark="(mobile) ? false : true"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: 'LanguagePicker',
  props: {
    mobile: Boolean
  },
  components: {},
  data() {
    return {
      lang: undefined
    };
  },
  methods: {},
  mounted() {
    this.lang = this.$ml.current;
  },
  watch: {
    lang() {
      this.$ml.change(this.lang);
      this.$emit("mlchange");
    }
  }
};
</script>

<style>
.ml {
  padding-top: 0px;
  margin-left: auto;
  margin-bottom: 20px;
  width: 100%;
  /* color: white !important; */
  position: relative;
  left: 0px;
  top: 0px;
}

.ml-menu {
  position: fixed;
  /* background:#fff; */
  top: 30px;
  left: 0px;
  border-radius: 20px;
  width: 15%;
  height: 50px;
  padding: 5px 20px;
  z-index: 1;
}
</style>
