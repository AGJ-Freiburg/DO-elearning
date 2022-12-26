<template>
  <div class="main">
    <language-picker @mlchange="populateArrayWolo(); populateArraySozi(); tutorial='landing'" :mobile="mobile"></language-picker>
    <the-menu-mobile
      v-if="mobile"
      :items_sozi="items_sozi"
      :items_wolo="items_wolo"
      @changeTutorial="
        (key) => {
          tutorial = key;
          mobile = false;
        }
      "
      @changeTutTitle="
        (title) => {
          tutorial_title = title;
          mobile = false;
        }
      "
      @changeActiveItem="
        (item) => {
          active_item = item;
          mobile = false;
        }
      "
    >
    </the-menu-mobile>
    <v-container fluid fill-height style="padding: 0" class="container">
      <v-row no-gutters>
        <v-col cols="12" s="1" style="max-width: 45vh !important">
          <the-menu
            v-if="!mobile"
            :items_sozi="items_sozi"
            :items_wolo="items_wolo"
            @changeTutorial="
              (key) => {
                tutorial = key;
              }
            "
            @changeTutTitle="
              (title) => {
                tutorial_title = title;
              }
            "
            @changeActiveItem="
              (item) => {
                active_item = item;
              }
            "
          ></the-menu>
        </v-col>
        <v-col>
          <the-tutorial-page
            class="tutorial-page"
            :mobile="mobile"
            :tutorial="tutorial"
            :tutorial_title="tutorial_title"
            :items_wolo="items_wolo"
            :items_sozi="items_sozi"
            :active_item="active_item"
          ></the-tutorial-page>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TheTutorialPage from "./TheTutorialPage.vue";
import TheMenu from "./TheMenu.vue";
import LanguagePicker from "./LanguagePicker.vue";
import TheMenuMobile from "./TheMenuMobile.vue";

export default {
  name: "TheIndex",
  components: {
    TheTutorialPage,
    TheMenu,
    TheMenuMobile,
    LanguagePicker,
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.xs;
    },
  },
  
  data() {
    return {
      lang: "",
      tutorial: "landing",
      tutorial_title: "Willkommen",
      items_wolo: [],
      items_sozi: [],
      active_item: {},
      // mobile: false,
    };
  },

  mounted() {
    this.populateArrayWolo();
    this.populateArraySozi();
  },

  
  methods: {
    // insertListS() {
    //   let iX = 0;
    //   this.items_sozi.forEach((itemS) => {
    //     this.items_sozi[iX].title = this.$ml.get("s_task_" + (iX+1) + "_title");
    //     console.log(itemS.steps);

    //     let iXS = 0;
    //     itemS.steps.forEach(() => {
    //       this.items_sozi[iX].steps[iXS] = this.$ml.get(
    //         "s_task_" + (iX+1) + "_step_" + iXS
    //       );
    //       iXS = iXS + 1;
    //     });

    //     iX = iX + 1;
    //   });
    // },
    populateArrayWolo() {
      this.items_wolo = [
        {
          id: 0,
          title: this.$ml.get("w_task_1_title"),
          icon: "mdi-login",
          tutorial: "login",
          steps: {
            step_1: {
              index: 0,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_1_step_1"),
            },
            step_2: {
              index: 1,
              img: "w_task_1_step_2.jpg",
              text: this.$ml.get("w_task_1_step_2"),
            },
            step_3: {
              index: 2,
              img: "w_task_1_step_3.jpg",
              text: this.$ml.get("w_task_1_step_3"),
            },
            step_4: {
              index: 3,
              img: "w_task_1_step_4.jpg",
              text: this.$ml.get("w_task_1_step_4"),
            },
          },
        },
        {
          id: 1,
          title: this.$ml.get("w_task_2_title"),
          icon: "mdi-logout",
          tutorial: "logout",
          steps: {
            step_1: {
              index: 0,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_2_step_1"),
            },
          },
        },
        // {
        //   id: 2,
        //   title: this.$ml.get('w_task_3_title'),
        //   icon: "mdi-lock-reset",
        //   tutorial: "reset_pw",
        //   steps: {
        //     step_1: {
        //       index: 0,
        //       img: "w_task_1_step_1.jpg",
        //       text: this.$ml.get('w_task_3_step_1'),
        //     },
        //   },
        // },
        {
          id: 3,
          title: this.$ml.get("w_task_4_title"),
          icon: "mdi-key-change",
          tutorial: "change_pw",
          steps: {
            step_1: {
              index: 0,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_4_step_1"),
            },
            step_2: {
              index: 1,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_4_step_2"),
            },
            step_3: {
              index: 2,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_4_step_3"),
            },
            step_4: {
              index: 3,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_4_step_4"),
            },
            step_5: {
              index: 4,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_4_step_5"),
            },
          },
        },
        {
          id: 4,
          title: this.$ml.get("w_task_5_title"),
          icon: "mdi-folder-plus",
          tutorial: "create_folder",
          steps: {
            step_1: {
              index: 0,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_5_step_1"),
            },
            step_2: {
              index: 1,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_5_step_2"),
            },
            step_3: {
              index: 2,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_5_step_3"),
            },
          },
        },
        {
          id: 5,
          title: this.$ml.get("w_task_6_title"),
          icon: "mdi-cloud-upload",
          tutorial: "upload",
          steps: {
            step_1: {
              index: 0,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_6_step_1"),
            },
            step_2: {
              index: 1,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_6_step_2"),
            },
            step_3: {
              index: 2,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_6_step_3"),
            },
            step_4: {
              index: 3,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_6_step_4"),
            },
            step_5: {
              index: 4,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_6_step_5"),
            },
            step_6: {
              index: 5,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_6_step_6"),
            },
            step_7: {
              index: 6,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_6_step_7"),
            },
            step_8: {
              index: 7,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_6_step_8"),
            },
            step_9: {
              index: 8,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_6_step_9"),
            },
          },
        },
        {
          id: 6,
          title: this.$ml.get("w_task_7_title"),
          icon: "mdi-lock-open",
          tutorial: "share",
          steps: {
            step_1: {
              index: 0,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_7_step_1"),
            },
            step_2: {
              index: 1,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_7_step_2"),
            },
            step_3: {
              index: 2,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_7_step_3"),
            },
            step_4: {
              index: 3,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_7_step_4"),
            },
            step_5: {
              index: 4,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_7_step_5"),
            },
          },
        },
        {
          id: 7,
          title: this.$ml.get("w_task_8_title"),
          icon: "mdi-lock-question",
          tutorial: "change_share",
          steps: {
            step_1: {
              index: 0,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_8_step_1"),
            },
            step_2: {
              index: 1,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_8_step_2"),
            },
            step_3: {
              index: 2,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_8_step_3"),
            },
            step_4: {
              index: 3,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_8_step_4"),
            },
          },
        },
        {
          id: 8,
          title: this.$ml.get("w_task_9_title"),
          icon: "mdi-lock-question",
          tutorial: "change_share",
          steps: {
            step_1: {
              index: 0,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_9_step_1"),
            },
            step_2: {
              index: 1,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_9_step_2"),
            },
            step_3: {
              index: 2,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_9_step_3"),
            },
          },
        },
        {
          id: 9,
          title: this.$ml.get("w_task_10_title"),
          icon: "mdi-lock-question",
          tutorial: "change_share",
          steps: {
            step_1: {
              index: 0,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_10_step_1"),
            },
            step_2: {
              index: 1,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_10_step_2"),
            },
            step_3: {
              index: 2,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_10_step_3"),
            },
          },
        },
        {
          id: 10,
          title: this.$ml.get("w_task_11_title"),
          icon: "mdi-folder-move",
          tutorial: "move",
          steps: {
            step_1: {
              index: 0,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_11_step_1"),
            },
            step_2: {
              index: 1,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_11_step_2"),
            },
            step_3: {
              index: 2,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_11_step_3"),
            },
            step_4: {
              index: 3,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_11_step_4"),
            },
            step_5: {
              index: 4,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_11_step_5"),
            },
            step_6: {
              index: 5,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_11_step_6"),
            },
            step_7: {
              index: 6,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_11_step_7"),
            },
          },
        },
        {
          id: 11,
          title: this.$ml.get("w_task_12_title"),
          icon: "mdi-delete",
          tutorial: "delete",
          steps: {
            step_1: {
              index: 0,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_12_step_1"),
            },
            step_2: {
              index: 1,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_12_step_2"),
            },
            step_3: {
              index: 2,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_12_step_3"),
            },
            step_4: {
              index: 3,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_12_step_4"),
            },
            step_5: {
              index: 4,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_12_step_5"),
            },
            step_6: {
              index: 5,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_12_step_6"),
            },
          },
        },
        {
          id: 12,
          title: this.$ml.get("w_task_13_title"),
          icon: "mdi-form-textbox",
          tutorial: "rename",
          steps: {
            step_1: {
              index: 0,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_13_step_1"),
            },
            step_2: {
              index: 1,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_13_step_2"),
            },
            step_3: {
              index: 2,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_13_step_3"),
            },
            step_4: {
              index: 3,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_13_step_4"),
            },
          },
        },
        {
          id: 13,
          title: this.$ml.get("w_task_14_title"),
          icon: "mdi-cloud-download",
          tutorial: "download",
          steps: {
            step_1: {
              index: 0,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_14_step_1"),
            },
            step_2: {
              index: 1,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_14_step_2"),
            },
            step_3: {
              index: 2,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_14_step_3"),
            },
          },
        },
        {
          id: 14,
          title: this.$ml.get("w_task_15_title"),
          icon: "mdi-file-find",
          tutorial: "preview",
          steps: {
            step_1: {
              index: 0,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_15_step_1"),
            },
            step_2: {
              index: 1,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_15_step_2"),
            },
            step_3: {
              index: 2,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_15_step_3"),
            },
            step_4: {
              index: 3,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_15_step_4"),
            },
          },
        },
        {
          id: 15,
          title: this.$ml.get("w_task_16_title"),
          icon: "mdi-file-find",
          tutorial: "preview",
          steps: {
            step_1: {
              index: 0,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_16_step_1"),
            },
            step_2: {
              index: 1,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_16_step_2"),
            },
          },
        },
        {
          id: 16,
          title: this.$ml.get("w_task_17_title"),
          icon: "mdi-file-find",
          tutorial: "preview",
          steps: {
            step_1: {
              index: 0,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_17_step_1"),
            },
            step_2: {
              index: 1,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_17_step_2"),
            },
          },
        },
      ]
    },
    populateArraySozi() {
      this.items_sozi = [
        {
          id: 0,
          title: this.$ml.get("w_task_1_title"),
          icon: "mdi-file-find",
          tutorial: "preview",
          steps: {
            step_1: {
              index: 0,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_1_step_1"),
            },
            step_2: {
              index: 1,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_1_step_2"),
            },
            step_3: {
              index: 2,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_1_step_3"),
            },
            step_4: {
              index: 3,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_1_step_4"),
            },
          },
        },
        {
          id: 1,
          title: this.$ml.get("w_task_2_title"),
          icon: "mdi-logout",
          tutorial: "logout",
          steps: {
            step_1: {
              index: 0,
              img: "w_task_1_step_1.jpg",
              text: this.$ml.get("w_task_2_step_1"),
            },
          },
        },
        // {
        //   id: 2,
        //   title: this.$ml.get('s_task_3_title'),
        //   icon: "mdi-lock-reset",
        //   tutorial: "reset_pw",
        //   steps: {
        //     step_1: {
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get('s_task_3_step_1'),
        //     },
        //   },
        // },
        {
          id: 3,
          title: this.$ml.get("s_task_4_title"),
          icon: "mdi-logout",
          tutorial: "logout",
          steps: {
            step_1: {
              index: 0,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_4_step_1"),
            },
            step_2: {
              index: 1,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_4_step_2"),
            },
            step_3: {
              index: 2,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_4_step_3"),
            },
            step_4: {
              index: 3,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_4_step_4"),
            },
            step_5: {
              index: 4,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_4_step_5"),
            },
          },
        },
        {
          id: 4,
          title: this.$ml.get("s_task_5_title"),
          icon: "mdi-logout",
          tutorial: "logout",
          steps: {
            step_1: {
              index: 0,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_5_step_1"),
            },
            step_2: {
              index: 1,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_5_step_2"),
            },
            step_3: {
              index: 2,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_5_step_3"),
            },
            step_4: {
              index: 3,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_5_step_4"),
            },
          },
        },
        {
          id: 5,
          title: this.$ml.get("s_task_6_title"),
          icon: "mdi-logout",
          tutorial: "logout",
          steps: {
            step_1: {
              index: 0,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_6_step_1"),
            },
            step_2: {
              index: 1,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_6_step_2"),
            },
            step_3: {
              index: 2,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_6_step_3"),
            },
            step_4: {
              index: 3,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_6_step_4"),
            },
          },
        },
        {
          id: 6,
          title: this.$ml.get("s_task_7_title"),
          icon: "mdi-logout",
          tutorial: "logout",
          steps: {
            step_1: {
              index: 0,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_7_step_1"),
            },
            step_2: {
              index: 1,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_7_step_2"),
            },
            step_3: {
              index: 2,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_7_step_3"),
            },
          },
        },
        // {
        //   id: 7,
        //   title: this.$ml.get('s_task_8_title'),
        //   icon: "mdi-logout",
        //   tutorial: "logout",
        //   steps: {
        //     step_1: {
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get('s_task_8_step_1'),
        //     },
        //     step_2: {
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get('s_task_8_step_2'),
        //     },
        //     step_3: {
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get('s_task_8_step_3'),
        //     },
        //     step_4: {
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get('s_task_8_step_4'),
        //     },
        //   },
        // },
        {
          id: 8,
          title: this.$ml.get("s_task_9_title"),
          icon: "mdi-logout",
          tutorial: "logout",
          steps: {
            step_1: {
              index: 0,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_9_step_1"),
            },
            step_2: {
              index: 1,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_9_step_2"),
            },
            step_3: {
              index: 2,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_9_step_3"),
            },
            step_4: {
              index: 3,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_9_step_4"),
            },
            step_5: {
              index: 4,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_9_step_5"),
            },
            step_6: {
              index: 5,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_9_step_6"),
            },
            step_7: {
              index: 6,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_9_step_7"),
            },
            step_8: {
              index: 7,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_9_step_8"),
            },
            step_9: {
              index: 8,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_9_step_9"),
            },
            step_10: {
              index: 9,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_9_step_10"),
            },
            step_11: {
              index: 10,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_9_step_11"),
            },
          },
        },
        // {
        //   id: 9,
        //   title: this.$ml.get("s_task_10_title"),
        //   icon: "mdi-logout",
        //   tutorial: "logout",
        //   steps: {
        //     step_1: {
        //       index: 0,
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get("s_task_10_step_1"),
        //     },
        //     step_2: {
        //       index: 1,
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get("s_task_10_step_2"),
        //     },
        //     step_3: {
        //       index: 2,
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get("s_task_10_step_3"),
        //     },
        //     step_4: {
        //       index: 3,
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get("s_task_10_step_4"),
        //     },
        //     step_5: {
        //       index: 4,
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get("s_task_10_step_5"),
        //     },
        //     step_6: {
        //       index: 5,
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get("s_task_10_step_6"),
        //     },
        //   },
        // },
        // {
        //   id: 10,
        //   title: this.$ml.get('s_task_11_title'),
        //   icon: "mdi-logout",
        //   tutorial: "logout",
        //   steps: {
        //     step_1: {
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get('s_task_11_step_1'),
        //     },
        //     step_2: {
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get('s_task_11_step_2'),
        //     },
        //     step_3: {
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get('s_task_11_step_3'),
        //     },
        //     step_4: {
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get('s_task_11_step_4'),
        //     },
        //   },
        // },
        // {
        //   id: 11,
        //   title: this.$ml.get("s_task_12_title"),
        //   icon: "mdi-logout",
        //   tutorial: "logout",
        //   steps: {
        //     step_1: {
        //       index: 0,
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get("s_task_12_step_1"),
        //     },
        //     step_2: {
        //       index: 1,
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get("s_task_12_step_2"),
        //     },
        //     step_3: {
        //       index: 2,
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get("s_task_12_step_3"),
        //     },
        //     step_4: {
        //       index: 3,
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get("s_task_12_step_4"),
        //     },
        //     step_5: {
        //       index: 4,
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get("s_task_12_step_5"),
        //     },
        //     step_6: {
        //       index: 5,
        //       img: "s_task_1_step_1.jpg",
        //       text: this.$ml.get("s_task_12_step_6"),
        //     },
        //   },
        // },
        {
          id: 12,
          title: this.$ml.get("s_task_13_title"),
          icon: "mdi-logout",
          tutorial: "logout",
          steps: {
            step_1: {
              index: 0,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_13_step_1"),
            },
            step_2: {
              index: 1,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_13_step_2"),
            },
            step_3: {
              index: 2,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_13_step_3"),
            },
            step_4: {
              index: 3,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_13_step_4"),
            },
          },
        },
        {
          id: 13,
          title: this.$ml.get("s_task_14_title"),
          icon: "mdi-logout",
          tutorial: "logout",
          steps: {
            step_1: {
              index: 0,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_14_step_1"),
            },
            step_2: {
              index: 1,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_14_step_2"),
            },
            step_3: {
              index: 2,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_14_step_3"),
            },
            step_4: {
              index: 3,
              img: "s_task_1_step_1.jpg",
              text: this.$ml.get("s_task_14_step_4"),
            },
          },
        },
      ]
    }
  },
};
</script>

<style scoped>
.main {
  background: #ffffff;
  /* background: url("../assets/bg.jpg"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* display: flex; */
  overflow: hidden !important;
}

.flexcard {
  display: flex;
  flex-direction: column;
}

.tutorial-page {
  background: #006ab3 !important;
}

/* .container {
  padding-bottom: 100px !important;
} */
</style>
