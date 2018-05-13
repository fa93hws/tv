<template>
  <div id = 'right-col-girds-containers'>
    <div class='empty-element'>&nbsp;</div>
    <ul
      ref="withDropDown"
      class='h-list no-margin no-padding'
      id='grid-item-container'>
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
      <!-- lazy loading -->
      <GridDropdownControl
        class = 'grid-dropdown'
        v-if="tabShownIdx>-1 || firstLoaded"
        v-for=" (detail, idx) in dropdownDetails"
        v-bind:key=idx
        ref="dropDownContainer"
        @onClose="tabShownIdx=-1"
        :usedComponents="detail.components"
        :tabTitles="detail.tabTitles"
      />
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
import GridDropdownControl from "./GridDropdownControl";
import Recharge1 from "./Recharge1";
import Recharge2 from "./Recharge2";
import Recharge3 from "./Recharge3";
import Recharge4 from "./Recharge4";
import Travel1 from "./Travel1";
import Travel2 from "./Travel2";
import Travel3 from "./Travel3";
import Travel4 from "./Travel4";
import Car1 from "./Car1";
import Car2 from "./Car2";

export default {
  name: "RightGrids",
  mounted: function() {
    // console.log(this.dropdownDetails)
  },
  components: {
    GridDropdownControl
  },
  computed: {
    items: function() {
      return [
        "游戏",
        "彩票",
        "电影",
        "酒店",
        "理财",
        "找服务",
        "演出",
        "水电煤",
        "火车票"
      ];
    },
    getIcon: function() {
      return faSpinner;
    }
  },
  data: function() {
    return {
      tabShownIdx: -1,
      dropdownDetails: [
        {
          // recharge
          components: [Recharge1, Recharge2, Recharge3, Recharge4],
          tabTitles: ["充话费", "充流量", "充固话", "充宽带"]
        },
        {
          // travel
          components: [Travel1, Travel2, Travel3, Travel4],
          tabTitles: ["机票", "酒店客栈", "度假门票", "火车票"]
        },
        {
          components: [Car1, Car2],
          tabTitles: ["车险", "意外险"]
        }
      ],
      firstLoaded: false
    };
  },
  watch: {
    tabShownIdx: function(after, before) {
      this.firstLoaded = true;
      this.$nextTick(() => {
        if (before > -1) {
          this.$refs.dropDownContainer[before].$el.style.display = "none";
          this.$refs.dropDownContainer[before].tabClose();
        }
        if (after > -1)
          this.$refs.dropDownContainer[after].$el.style.display = "block";
      });
    }
  },
  mounted: function() {
    // console.log(this.$refs);
    // // define close funciont
    // const closeDropdown = ele => {
    //   const notInEle = document.getElementById("right-col-girds-containers");
    //   if (typeof notInEle == "undefined") return;
    //   if (!notInEle.contains(ele.target)) {
    //     this.tabShownIdx = -1;
    //   }
    // };
    // // regisiter in document event listener
    // document.addEventListener("click", closeDropdown);
  },
  beforeDestroy: function() {}
};
</script>

<style scoped>
#right-col-girds-containers {
  position: relative;
  width: 100%;
  background: white;
}
#right-col-girds-containers > ul {
  margin-top: var(--margin-xsmall);
}
#grid-item-container > li {
  position: relative;
  width: 73px;
  height: 75px;
  line-height: 77px;
  text-align: center;
  font-size: var(--font-medium);
  margin-top: -1px;
  margin-left: -1px;
  border-style: solid;
  border-width: 1px;
  border-color: #f5f5f5;
  background: white;
}
#grid-item-container > li.selected {
  border-bottom: none;
  border-color: orangered;

  z-index: 2;
}
/* drop down */
#grid-drop-down-container > .grid-dropdown {
  display: none;
  position: absolute;
  top: 83px;
  left: -1px;
  width: 289px;
  height: 149px;
  border-style: solid;
  border-width: 1px;
  border-color: orangered;
  background: white;
  z-index: 1;
}
i#drop-down-close-button {
  position: absolute;
  display: block;
  font-size: 18px;
  left: 265px;
  top: 89px;
  cursor: pointer;
  z-index: 2;
}
</style>
