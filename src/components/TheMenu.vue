<template>
  <div class="main">
    <v-card class="pa-2 card" height="100vh" flat tile dark style="overflow-y: auto; scrollbar: thin">
      <!-- <v-card-title v-html="$ml.get('menu_header')"></v-card-title> -->
      <v-list class="list">
        <v-list-item></v-list-item>
        <v-list-item></v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="#fff">mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title @click="changeTutorial('landing')" v-html="$ml.get('start')"></v-list-item-title>
        </v-list-item>

        <v-list-group :value="false">
          <v-icon slot="prependIcon" color="#fff">mdi-account</v-icon>
          <template v-slot:activator>
            <v-list-item-title class="text-wrap" v-html="$ml.get('wolo_subgroup')"></v-list-item-title>
          </template>
          <v-list-item v-for="(item, index) in items_wolo" :key="item.id" link @click="changeTutorial(item.tutorial); changeTutTitle(item.title); changeActiveItem(item)">
            <v-list-item-title class="text-wrap">{{ index + 1 + "." }} {{ item.title }}</v-list-item-title>
            <v-list-item-icon>
              <!-- <v-icon color="#fff">{{ item.icon }}</v-icon> -->
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <v-list-group :value="false">
          <v-icon slot="prependIcon" color="#fff">mdi-account</v-icon>
          <template v-slot:activator>
            <v-list-item-title class="text-wrap" v-html="$ml.get('sozi_subgroup')"></v-list-item-title>
          </template>
          <v-list-item v-for="(item, index) in items_sozi" :key="item.id" link @click="changeTutorial(item.tutorial); changeTutTitle(item.title); changeActiveItem(item)">
            <v-list-item-title class="text-wrap">{{ index + 1 + "." }} {{ item.title }}</v-list-item-title>
            <v-list-item-icon>
              <!-- <v-icon color="#fff">{{ item.icon }}</v-icon> -->
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TheMenu",

  props: {
    items_wolo: Array,
    items_sozi: Array,
  },

  data() {
    return {
      right: null,
    };
  },

  methods: {
    changeTutorial(key) {
      console.log("tutorial: " + key);
      this.$emit("changeTutorial", key);
    },
    changeTutTitle(title) {
      console.log("Tut-Title: " + title);
      this.$emit("changeTutTitle", title);
    },
    changeActiveItem(item) {
      console.log("active item: " + item);
      this.$emit("changeActiveItem", item);
    },
  },
};
</script>

<style scoped>
.main {
  /* background: #006ab3; */
  background: url("../assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
}

.flexcard {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}

.list {
  background: #006ab3 !important;
  margin-bottom: 100px;
}

.card {
  background: #006ab3 !important;
  border-radius: 0 0 0 0 !important;
}

.text-wrap {
  white-space: normal !important;
}

</style>
