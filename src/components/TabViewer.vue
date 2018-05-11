<template>
  <div v-bind:id="elementId.container">
    <ul class = 'tab-view-control-tab no-padding no-margin'
      v-bind:id="elementId.tab"
    >
      <li v-for="(title, index) in tabTitles" v-bind:key="index"
        v-bind:class="['clickable', {'selected':tabIdx==index}]"
        @mouseover="tabIdx=index"
      >
        {{title}}
      </li>
    </ul>
    <keep-alive>
      <div
        v-bind:id="elementId.content"
        v-bind:is="contentTemplate.template[templateIdx].name"
        v-bind="bindData[tabIdx]"
      >
      </div>
    </keep-alive>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'TabViewer',
  created: function () {
    for (let i=0; i < this.contentTemplate.template.length; i++)
      Vue.component(this.contentTemplate.template[i].name, this.contentTemplate.template[i]);
  },
  props: {
    tabTitles: {
      type: Array,
      required: true
    },
    elementId: {
      type: Object,
      required: false,
    },
    contentTemplate: {
      type: Object,
      required: true
    },
    bindData: Array
  },
  computed: {
    templateIdx: function () {
      return this.contentTemplate.useTemplateIdx[this.tabIdx];
    }
  },
  data: function () {
    return {
      tabIdx: 0,
    }
  },
  watch: {
    tabIdx: {
      handler: function (after, before) {
      }
    }
  }
}
</script>

<style scoped>
ul {
  width: 280px;
  text-align: center;
}
li {
  display: inline-block;
  text-align: center;
}
</style>
