<template>
  <div id = 'grid-dropdown-controls'>
    <v-tabs
      v-model="active"
      grow:true
    >
      <v-tab
        ref="tab" v-bind:class="['clickable',{'text-orangered':active==idx.toString()}]"
        v-for="(title,idx) in tabTitles" v-bind:key="idx"
        @mouseover="active=idx.toString()"
      >
        {{title}}
      </v-tab>
      <v-tab-item
        v-for="n in usedComponents.length"
        v-bind:key="n"
      >
        <v-card
          ref='gridTabs'
          v-bind:is="usedComponents[n-1]">          
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'RechargeGrids',
  props: {
    usedComponents: Array,
    tabTitles: Array
  },
  data: function () {
    return {
      active: '0',
    }
  },
  methods: {
    tabClose: function(){
      let comps = this.$refs.gridTabs;
      comps.forEach((ele)=>{
        ele.hideAll();
      })
    }
  },
  watch: {
    active: function (after, before) {      
      this.$refs.gridTabs[before].hideAll();
    }
  }
}
</script>

<style scoped>
ul.tab-controller {
  width: 90%;
  margin-left: var(--margin-xsmall);
  margin-top: var(--margin-xxsmall);
}
ul.tab-controller > li {
  font-size: var(--font-small);
  width:25%;
}
ul.tab-controller > li.selected {
  color: orangered;
}
#grid-dropdown-controls >>> .tabs__container {
  height: 20px;
  margin-top: var(--margin-xxsmall);
}
#grid-dropdown-controls >>> .tabs__items {
  margin-left: var(--margin-small);
  margin-top: var(--margin-xsmall);
}
#grid-dropdown-controls >>> .tabs__item {
  font-size: var(--font-small);
}
</style>
