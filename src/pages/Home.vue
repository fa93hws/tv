<template>
  <div id = 'home-main-container'>
    <TopSearchBar />
    <div id = 'main-content-th-wrapper'>
      <ul id = 'main-content-th'>        
        <li 
          v-for="(text,index) in headTexts" v-bind:key=index
          @mouseover="thHoverIdx=index-1"
          @mouseleave="thHoverIdx=-1"
        >
          <div class = 'vertical-stack'>            
            <div>
              <a v-bind:class="['th-text bold', {'cursor-normal vertical-line':text=='|'}]">
                {{text}}
              </a>
            </div>
            <div><span ref="thHat" class = 'hide orangered-text'>屎</span></div>
          </div>
        </li>
      </ul>
    </div>
    <div id = 'main-content-container'>
      <LeftDrawer />
      <CenterImageCarousels />
      <div id = 'main-right-column'>
        <UserBoard />
        <InformationTab />
        <RightGrids />
      </div>
    </div>
  </div>
</template>

<script>
import TopSearchBar from "../container/TopSearchBar.vue";
import LeftDrawer from "../container/LeftDrawer.vue";
import CenterImageCarousels from "../container/CenterImageCarousels.vue";
import UserBoard from "../container/UserBoard.vue";
import InformationTab from "../container/InformationTab.vue";
import RightGrids from "../container/RightGrids/index.vue";

export default {
  name: "Home",
  components: {
    TopSearchBar,
    LeftDrawer,
    CenterImageCarousels,
    UserBoard,
    InformationTab,
    RightGrids
  },
  data: function() {
    return {
      headTexts: [
        "主题市场",
        "天猫",
        "聚划算",
        "|",
        "淘抢购",
        "电器城",
        "司法拍卖",
        "中国制造",
        "兴农扶贫",
        "|",
        "飞猪旅行",
        "智能生活",
        "苏宁易购"
      ],
      thHoverIdx: -1
    };
  },
  watch: {
    thHoverIdx: {
      handler: function(after, before) {
        if (before > -1 && this.headTexts[before + 1] !== "|") {
          this.$refs.thHat[before + 1].classList.remove("show");
          this.$refs.thHat[before + 1].classList.add("hide");
        }
        if (after > -1 && this.headTexts[after + 1] !== "|")
          this.$refs.thHat[after + 1].classList.remove("hide");
        this.$refs.thHat[after + 1].classList.add("show");
      }
    }
  }
};
</script>

<style scoped>
#main-content-th-wrapper {
  height: 40px;
  width: 100%;
  background: linear-gradient(
    to top,
    rgb(255, 145, 0) 0%,
    rgb(255, 145, 0) 75%,
    white 75%,
    white 100%
  );
  /* background: orangered; */
  line-height: 30px;
}
#main-content-th {
  height: 40px;
  padding: 0px;
  width: var(--body-width);
  margin-left: auto;
  margin-right: auto;
  color: white;
  display: flex;
  flex-direction: row;
}
.vertical-stack {
  display: flex;
  flex-direction: column-reverse;
  line-height: 30px;
}
.vertical-stack > div:first-child {
  height: 30px;
}
.vertical-stack > div:nth-child(2) {
  height: 10px;
}
.vertical-stack > div > span {
  line-height: 8px;
  font-size: var(--font-small);
}
a.vertical-line {
  font-size: var(--font-xlarge);
  line-height: 25px;
}
#main-content-th > li {
  font-size: var(--font-large);
  text-align: center;
}
#main-content-th > li:first-child {
  vertical-align: top;
  height: 40px;
  background: linear-gradient(
    to top,
    orangered 0%,
    orangered 75%,
    white 75%,
    white 100%
  );
  /* background: orangered; */
  width: 190px;
  text-align: center;
}
#main-content-th > li:not(:first-child) {
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
}
#main-content-container {
  height: 1000px;
  width: var(--body-width);
  margin-left: auto;
  margin-right: auto;
}
#main-content-container > div {
  display: inline-block;
  vertical-align: top;
}
#main-right-column {
  margin-top: var(--margin-small);
  margin-left: var(--margin-medium);

  width: 288px;
}
</style>
