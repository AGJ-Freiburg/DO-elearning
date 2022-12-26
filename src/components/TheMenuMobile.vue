<template>
  <div class="main">
    <h3 class="menu-title">Menü</h3>
    <v-app-bar extended color="#fff" class="toolbar" flat>
      <v-spacer></v-spacer>
      <v-icon 
      @click="nav_drawer = true"
      class="nav-icon"
      large
      >mdi-menu</v-icon>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
    class="nav"
    v-model="nav_drawer"
    absolute
    dark
    temporary
    >
      <v-list class="list" three-line>
        <v-list-item link>
          <v-list-item-icon style="align-self: center">
            <v-icon color="#fff">mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title @click="changeTutorial('landing'); nav_drawer = false" v-html="$ml.get('start')"></v-list-item-title>
        </v-list-item>

        <v-list-group :value="false">
          <template v-slot:activator>
            <v-list-item-title class="text-wrap" v-html="$ml.get('wolo_subgroup')"></v-list-item-title>
          </template>
          <v-list-item v-for="item in items_wolo" :key="item.id" link @click="changeTutorial(item.tutorial); changeTutTitle(item.title); changeActiveItem(item); nav_drawer = false">
            <v-list-item-title class="text-wrap">{{ item.id + 1 + ". " }} {{ item.title }}</v-list-item-title>
            <v-list-item-icon style="align-self: center">
              <!-- <v-icon color="#fff">{{ item.icon }}</v-icon> -->
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <v-list-group :value="false">
          <template v-slot:activator>
            <v-list-item-title class="text-wrap" v-html="$ml.get('sozi_subgroup')"></v-list-item-title>
          </template>
          <v-list-item v-for="item in items_sozi" :key="item.id" link @click="changeTutorial(item.tutorial); changeTutTitle(item.title); changeActiveItem(item); nav_drawer = false">
            <v-list-item-title class="text-wrap">{{ item.id + 1 + ". " }} {{ item.title }}</v-list-item-title>
            <v-list-item-icon style="align-self: center">
              <!-- <v-icon color="#fff">{{ item.icon }}</v-icon> -->
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "TheMenuMobile",

  props: {
    items_wolo: Array,
    items_sozi: Array,
  },

  data() {
    return {
      right: null,
      nav_drawer: false,
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
  /* background: url("../assets/bg.jpg"); */
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

.nav {
  background: #006ab3 !important;
}

.nav-icon {
  margin-top: 10px !important;
  margin-bottom: 20px !important;
  margin-left: 30px;
}

.toolbar {
  width: 100vh !important;
  max-height: 60px;
  justify-content: center !important;
  align-content: center !important;
  display: flex !important;
}

.menu-title {
  text-align: center;
  margin-top: 20px;
}

</style>
