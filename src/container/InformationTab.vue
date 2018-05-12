<template>
  <div id = 'right-col-information-tab'>
    <span 
      id = 'right-col-information-tab-report'
      class = 'no-margin clickable'
    >
      <span class='text-wrapper'>网上有害信息举报专区</span>
      <v-icon class='icon'>play_arrow</v-icon>
    </span>    
    <!-- <div class='empty-element'>&nbsp;</div> -->
    <div id = 'right-col-tab-view'>
      <TabViewer 
        :tabTitles="tabTitles"
        :elementId="{
          container: 'right-col-tab-view-container',
          tabs:'right-col-tab-view-control',
          content:'right-col-tab-view-content'
        }"
        :content-template="contentTemplate"
        :bind-data="bindData"
      />
      </div>
  </div>
  
</template>

<script>
import TabViewer from "../components/TabViewer.vue";

import RightTabContent from "@/components/RightTabContent.vue";

export default {
  name: "InformationTab",
  components: {
    TabViewer
  },
  mounted: function() {},
  computed: {
    tabTitles: function() {
      return ["公告", "规则", "论坛", "安全", "公益"];
    }
  },
  data: function() {
    return {
      tabIdx: 0,
      tabContent: [],
      contentTemplate: {
        template: [RightTabContent],
        useTemplateIdx: [0, 0, 0, 0, 0]
      },
      bindData: [
        {
          texts: [
            "very long text very long text very long text very long text",
            "short text short text short text",
            "short text"
          ],
          mode: [1, 2]
        },
        {
          texts: [
            "short text short text ",
            "short text",
            "short text",
            "short text"
          ],
          mode: [2, 2]
        },
        {
          texts: [
            "very long text very long text very long text very long text",
            "very long text very long text very long text very long text"
          ],
          mode: [1, 1]
        },
        {
          texts: [
            "short text short text",
            "short text",
            "short text",
            "short text"
          ],
          mode: [2, 2]
        },
        {
          texts: [
            "short text",
            "short text short text",
            "short text",
            "short text"
          ],
          mode: [2, 2]
        }
      ]
    };
  },
  methods: {},
  watch: {}
};
</script>

<style scoped>
#right-col-information-tab {
  width: 100%;
  border-width: 1px;
  background: white;
}
#right-col-information-tab-report > span,
#right-col-information-tab-report > .icon {  
  color: orangered;
  line-height: 25px;
  height: 25px;
}
#right-col-information-tab-report > span {
  width: 50%;
  display: inline-block;
  font-size: var(--font-small);
  transform: translateX(50%);
}
#right-col-information-tab-report > .icon {
  width: 20%;
  font-size: var(--font-medium);
  float:right;
}
#right-col-information-tab-report {
  width: 100%;
  display: block;
  background: pink;
}
#right-col-tab-view {
  margin-top: var(--margin-small);
  background: white;
}
#right-col-tab-view-container>>>.tab-view-control-tab {
  width: 100%;
  font-size: var(--font-medium);
  height: 20px;
  line-height: 20px;
  margin-bottom: 0px;
  padding-bottom: 0px;
}
#right-col-tab-view-container>>>.tab-view-control-tab > li {
  width: 18%;
}
#right-col-tab-view-container>>>.tab-view-control-tab > li:hover {
  color: orangered;
}
#right-col-tab-view-container>>>.tab-view-control-tab > li.selected {
  font-weight: bold;
  color: orangered;
}
#right-col-tab-view-container>>>.right-col-tab-view-content {
  
}
#right-col-tab-content-wrapper {
  width: 100%;
}
</style>
