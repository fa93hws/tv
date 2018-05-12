<template>
  <div class = 'nav'>
    <div class="main-container">
      <ul class="nav-item h-list">
        <li class = 'float-left' > <RegionSelector /> </li>
        <li class = 'float-left'> <NavBarLoginControl /> </li>
        <li class = 'float-left' v-if="!userAgent.isMobile"> 手机逛淘宝 </li>
      </ul>

      <ul class="nav-item">
        <li class = 'float-right'> <SiteNavDropDown /> </li>
        <li class = 'float-right'>
          <DropDown
            class = 'nav-dropdown'
            :text="'联系客服'"
            :optionList="['消费者客服','卖家客服']"
            :defaultVal="0"
            :styles="dropDownStyles"
          />
        </li>
        <li class = 'float-right'>
          <DropDown
            class = 'nav-dropdown'
            :text="'卖家中心'"
            :optionList="['免费开店','已卖出的宝贝','出售中的宝贝','卖家服务市场','卖家培训中心','体检中心','问商友']"
            :defaultVal="0"
            :styles="dropDownStyles"
          />
        </li>
        <li class = 'float-right'>
          <DropDown
            class = 'nav-dropdown'
            :text="'收藏夹'"
            :optionList="['收藏的宝贝','收藏的店铺']"
            :defaultVal="0"
            :styles="dropDownStyles"
          />
        </li>
        <li class = 'float-right'>
          <DropDown
            class = 'nav-dropdown'
            :text="'购物车'"
            :optionList="['']"
            :defaultVal="0"
            :styles="dropDownStyles"
          />
        </li>
        <li class = 'float-right'>
          <DropDown
            class = 'nav-dropdown'
            :text="'我的淘宝'"
            :optionList="['已买到的宝贝','我的足迹']"
            :defaultVal="0"
            :styles="dropDownStyles"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import RegionSelector from "./RegionSelector.vue";
import DropDown from "../components/DropDown.vue";
import NavBarLoginControl from "./NavBarLoginControl.vue";
import SiteNavDropDown from "./SiteNavDropDown.vue";

export default {
  name: "NavBar",
  components: {
    RegionSelector,
    NavBarLoginControl,
    DropDown,
    SiteNavDropDown
  },
  data() {
    return {
      userAgent: {},
      dropDownStyles: {
        menuOpenStyle: {
          background: "white"
        },
        dropDown: {
          "max-height": "300px",
          "border-style": "solid",
          "border-color": "#f5f5f5",
          "border-width": "1px",
          "border-top": "none",
          "padding-left": "5px",
          "padding-right": "5px"
        },
        dropDownItemHover: {
          hover_bg: "#f5f5f5"
        }
      }
    };
  },
  methods: {
    getUserAgent: () => {
      return {
        isMobile: false
      };
    } // end of function getUserAgent
  },
  mounted: () => {
    // userAgent = getUserAgent();
  }
};
</script>

<style scoped>
.nav {
  width: 100%;
  background: #f5f5f5;
  height: 36px;
  line-height: 36px;
}
.nav-item {
  list-style-type: none;
  margin-top: auto;
  margin-bottom: auto;
  padding: 0px;
}
.nav-item > div,
.nav-item > li {
  margin-right: var(--margin-small);
  font-size: var(--font-small);
  cursor: pointer;
}
.nav-dropdown >>> .open > .icon {
  font-size: var(--font-small);
  color: #3C3C3C;
}
</style>

