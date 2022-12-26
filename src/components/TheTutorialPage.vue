<template>
  <v-app class="main">
    <v-card class="pa-2 tut" height="100vh" flat tile style="overflow-y: auto; scrollbar: thin">
      <v-card-title v-if="tutorial != 'landing'"><h1>{{ tutorial_title }}</h1></v-card-title>
      <v-card-title v-if="tutorial == 'landing'"><h1 v-html="$ml.get('subheader_start')"></h1></v-card-title>
      <h2 v-if="tutorial == 'landing'" v-html="$ml.get('subsubheader_start')"></h2>
      <h2 v-if="tutorial != 'landing'" v-html="$ml.get('how_its_done')"></h2>
      <the-landing-tut v-if="tutorial == 'landing'"></the-landing-tut>
        <v-container fluid grid-list-md class="container">
          <v-row
          cols="12"
          wrap 
          no-gutters
          align="start"
          justify="start"
          align-content="start"
          class="row"
          >
            <v-col 
            v-for="step in active_item.steps" 
            :key="step.index"
            >
              <div 
              style="position: sticky" 
              v-if="tutorial != 'landing'"
              @click="carousel_index = step.index; overlay = !overlay"
              >
                <tutorial-step 
                :step_image="step.img"
                :step_text="step.text"
                :step_index="step.index"
                :maxwidth_card="(mobile)? '' : 300"
                :minwidth_card="300"
                :minheight="450"
                >
                </tutorial-step>
                <!-- <v-spacer v-if="!mobile"></v-spacer> -->
              </div>
            </v-col>
            <!-- <v-spacer v-if="!mobile"></v-spacer> -->
            <v-overlay
            v-if="!mobile && overlay"
            @click="overlay = false"
            >
              <v-flex>
                <v-carousel
                v-model="carousel_index"
                hide-delimiters
                height="100vh"
                width="100vh"
                value="2"
                >
                  <v-carousel-item
                  v-for="step in active_item.steps" :key="step.index"
                  >
                    <tutorial-step 
                    :step_image="step.img"
                    :step_text="step.text"
                    :step_index="step.index"
                    :maxwidth_card="600"
                    :minwidth_card="600"
                    :mobile="mobile"
                    :overlay="overlay"
                    >
                    </tutorial-step>
                  </v-carousel-item>
                </v-carousel>
              </v-flex>
              <v-icon size="200%" style="position: fixed; top: 10px; right: 10px">mdi-close</v-icon>
            </v-overlay>
          </v-row>
        </v-container>
    </v-card>
  </v-app>
</template>

<script>
import TheLandingTut from "./TheLandingTut.vue";
import TutorialStep from "./TutorialStep.vue";

export default {
  components: { 
    TheLandingTut,
    TutorialStep
    },
  name: "TheTutorialPage",
  props: {
    items_wolo: Array,
    items_sozi: Array,
    tutorial: String,
    tutorial_title: String,
    active_item: Object,
    mobile: Boolean,
  },
  data() {
    return {
      overlay: false,
      carousel_index: 0,
    };
  },

  methods: {},
};
</script>

<style scoped>
.main {
  /* background: #006ab3; */
  background: url("../assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
  overflow: hidden !important;
}

.flexcard {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.tut {
  background: #fff !important;
  border-radius: 0 0 0 0 !important;
}

h2 {
  margin-left: 15px;
  margin-bottom: 10px;
}

body {
  margin: 0;
  padding: 0;
}

h1 {
  color: #006ab3 !important;
  justify-content: center;
  text-align: left;
  line-height: 100%;
  word-break: normal;
}

h2 {
  color: #006ab3 !important;
}

.container {
  margin: 0;
  padding: 0;
}

/* .my-overlay >>> .v-overlay__content {
    width: 100vh !important;
    height: 100vh !important;
  } */

.row {
  padding-bottom: 120px;
}
</style>
