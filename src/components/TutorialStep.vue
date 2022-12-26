<template>
  <div :class="(overlay)?'tutorial-step-overlay':'tutorial-step'">
    <v-card 
    :max-width="maxwidth_card"
    :min-width="minwidth_card"
    :min-height="minheight"
    dark
    hover
    class="card"
    >
      <v-badge
      class="badge"
      color="#006ab3"
      overlap
      :content="step_index + 1"
      inline
      >
      </v-badge>
      <!-- <v-card-title class="card_title">
        {{ step_title }}
      </v-card-title> -->
      <tutorial-image
      :step_image="step_image"
      ></tutorial-image>
      <tutorial-text
      :step_text="step_text"
      ></tutorial-text>
    </v-card>
    <!-- <v-overlay 
    v-if="overlay"
    @click="overlay = false"
    fill-width
    >
      <v-container fluid fill-width>
        <v-layout fill-width>
          <v-flex fill-width>
            <v-card 
            dark
            hover
            class="card-overlay"
            @click="overlay = !overlay"
            >
              <tutorial-image
              :step_image="step_image"
              ></tutorial-image>
              <tutorial-text
              :step_text="step_text"
              ></tutorial-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-overlay> -->
  </div>
</template>

<script>
import TutorialText from './TutorialText.vue';
import TutorialImage from "./TutorialImage.vue";

export default {
  components: {
    TutorialImage,
    TutorialText
    },
  name: "TutorialStep",
  props: {
    step_index: Number,
    step_image: String,
    step_text: String,
    maxwidth_card: Number,
    minwidth_card: Number,
    minheight: Number,
    overlay: Boolean,
    mobile: Boolean,
  },
  data() {
    return {
    };
  },

  methods: {},
};
</script>

<style scoped>
.card_title {
  background: #1b2c38;
  color: white !important;
  font-weight: bold;
}

.card {
  border-radius: 10px !important;
  background: #006ab3 !important;
}

.card-overlay {
  border-radius: 10px !important;
  background: #006ab3 !important;
  /* height: 80%;
  width: 80%; */
}

.tutorial-step {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
}

.tutorial-step-overlay {
  padding: 60px;
}

.v-overlay__content {
  height: 80vh !important;
}

.badge {
  float: left;
  color: #fff !important;
  border-radius: 4px;
  scale: 250%;
  position: absolute;
  z-index: 11;
}
</style>
