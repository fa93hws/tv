<template>
  <div id = 'recharge-grids'>
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
      <v-tab-item v-for="n in 4" v-bind:key="n"
      >
        <v-card ref='rechargeContent' flat v-bind:is="'Recharge'+n">
          
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import Recharge1 from './Recharge1';
import Recharge2 from './Recharge2';
import Recharge3 from './Recharge3';
import Recharge4 from './Recharge4';

export default {
  name: 'RechargeGrids',
  created: function () {
    Vue.component('Recharge1',Recharge1)
  },
  mounted: function () {

  },
  components: {
    Recharge1, Recharge2, Recharge3, Recharge4
  },
  data: function () {
    return {
      active: '0',
      tabTitles: ['充话费','充流量','充固话','充宽带'],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  methods: {
    tabClose: function(){
      let comps = this.$refs.rechargeContent;
      comps.forEach((ele)=>{
        ele.hideAll();
      })
    }
  },
  watch: {
    active: function (after, before) {      
      this.$refs.rechargeContent[before].hideAll();
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
#recharge-grids >>> .tabs__container {
  height: 20px;
  margin-top: var(--margin-xxsmall);
}
#recharge-grids >>> .tabs__items {
  margin-left: var(--margin-medium);
  margin-top: var(--margin-xsmall);
}
#recharge-grids >>> .tabs__item {
  font-size: var(--font-small);
}
/* content 1*/
</style>
