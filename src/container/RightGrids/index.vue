<template>
  <div id = 'right-col-girds-containers'>
    <ul class='h-list no-margin no-padding' id='grid-item-container'>
      <li v-bind:class="['clickable', 'with-drop-down',{'selected':tabShownIdx==0}]"
        @mouseover="tabShownIdx=0"
      >
        冲话费
      </li><li 
        v-bind:class="['clickable', 'with-drop-down',{'selected':tabShownIdx==1}]"
        @mouseover="tabShownIdx=1"
      >
        旅行</li><li
        v-bind:class="['clickable', 'with-drop-down',{'selected':tabShownIdx==2}]"
        @mouseover="tabShownIdx=2"
      >
        车险</li><li
        v-for="(item,idx) in items" v-bind:key="idx"
        class = 'clickable'
      >
        {{item}}
      </li>
    </ul>
    <div id = 'grid-drop-down-container'>
      <RechargeGrids ref="dropDownContainer0" @onClose="tabShownIdx=-1"/>
      <TravelGrids ref="dropDownContainer1" @onClose="tabShownIdx=-1"/>
      <CarInsGrids ref="dropDownContainer2" @onClose="tabShownIdx=-1"/>
      <v-icon v-if="tabShownIdx>-1"
        @mousedown="tabShownIdx=-1"
        id = 'drop-down-close-button'
        class = 'noselect'
      >
        close
      </v-icon>
    </div>
  </div>
</template>

<script>
import RechargeGrids from './RechargeGrids.vue';
import TravelGrids from './TravelGrids.vue';
import CarInsGrids from './CarInsGrids.vue';

export default {
  name: 'RightGrids',
  components: {
    RechargeGrids, TravelGrids, CarInsGrids,
  },
  computed: {
    items: function () {
      return ['游戏','彩票','电影','酒店','理财','找服务','演出','水电煤','火车票']
    },
    getIcon: function () {
      return faSpinner
    }
  },
  data: function () {
    return {
      tabShownIdx: -1
    }
  },
  watch: {
    tabShownIdx: function (after, before) {
      // console.log(this.$refs['dropDownContainer1'])
      if (before > -1){
        this.$refs['dropDownContainer'+before].$el.style.display = 'none';
        this.$refs['dropDownContainer'+before].tabClose();
      }
      if (after > -1)
        this.$refs['dropDownContainer'+after].$el.style.display = 'block';
    }
  },
  methods: {
  }
}
</script>

<style scoped>
#right-col-girds-containers {
  position: relative;
  width: 100%;
  margin-top: var(--margin-xxxsmall);
  background:white
}
li {
  position: relative;
  width: 24%;
  height: 77px;
  line-height: 77px;
  text-align: center;
  font-size: var(--font-medium);
  margin-top: -1px;
  margin-left:-1px;
  border-style: solid;
  border-width: 1px;
  /* border-color:rgb(228, 228, 228); */
  z-index:0;
}
li.selected {
  border-style: solid;
  border-width: 1px;
  border-bottom: none;
  border-color: orangered;
  background:white;
  /* outline: 20px solid white; */
  /* padding-bottom: 10px; */
  z-index:2
}
/* drop down */
#grid-drop-down-container > div {
  display: none;
  position: absolute;
  top:75px;
  left:-1px;
  width:280px;
  height:155px;
  border-style:solid;
  border-width:1px;
  border-color:orangered;
  background:white;
  z-index: 1;
}
i#drop-down-close-button {
  position: absolute;
  display: block;
  font-size: 18px;
  left: 257px;
  top: 78px;
  cursor: pointer;
  z-index:2;
}
</style>
