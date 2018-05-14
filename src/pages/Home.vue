<template>
  <div class='home'>
    <TopSearchBar class='home-search'/>
    <div class = 'home-head mlra'>
      <!-- id = 'main-content-th-wrapper' -->
      <ul class = 'home-head-list'>        
        <li
          class = 'home-head-list-item'
          v-for="(text,index) in headTexts" v-bind:key=index
        >
          <span
            @mouseover="thHoverIdx=index-1"
            @mouseleave="thHoverIdx=-1"
            v-bind:class="['bold', {'cursor-normal home-head-list-item--vertical-line':text=='|'}]">
            {{text}}
          </span>
          <span 
            ref="thHat"
            v-show="thHoverIdx==index-1&&text!='|'"
          >
            屎
          </span>
        </li>
      </ul>
    <div class = 'home-main'>
      <LeftDrawer class = 'home-main-column home-main-nav'/>
      <CenterImageCarousels class = 'home-main-column home-main-banners' />
      <div
        v-show="showImgColumn"
        class = 'home-main-column home-main-advs'
      >
        <LoadingMask
          v-if="!imgColumnUpperLoad"
          class = 'home-main-advs-upper'
        />
        <div
          v-show="imgColumnUpperLoad"
          class = 'home-main-advs-upper clickable overflow-hidden'
        >
          <img
            src='http://dummyimage.com/155x250'
            @load="imgColumnUpperLoad=true"
          />
        </div>
        <p class = 'home-main-advs-text no-padding no-bottom-margin'>
          今日特卖
        </p>
        <LoadingMask
          v-if="!imgColumnLowerLoad"
          class = 'home-main-advs-lower'
        />
        <div
          v-show="imgColumnLowerLoad"
          class = 'home-main-advs-lower clickable overflow-hidden'>
          <img
            src='http://dummyimage.com/155x222'
            @load="imgColumnLowerLoad=true"
          />
        </div>
      </div>
      <div class = 'home-main-column home-main-others'>
        <UserBoard />
        <InformationTab />
        <RightGrids />
      </div>
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
import LoadingMask from '../components/LoadingMask';

export default {
  name: "Home",
  components: {
    TopSearchBar,
    LeftDrawer,
    CenterImageCarousels,
    UserBoard,
    InformationTab,
    RightGrids,
    LoadingMask
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
      thHoverIdx: -1,
      imgColumnUpperLoad: false,
      imgColumnLowerLoad: false,
      showImgColumn: true,
      bodyWidth: document.getElementsByTagName('body')[0].clientWidth,
    };
  },
  mounted: function() {
    window.addEventListener('resize', this.onWindowResize);
  },
  methods: {
    onWindowResize: function() {
      this.bodyWidth = document.getElementsByTagName('body')[0].clientWidth
    }
  },
  watch: {
    bodyWidth: function(after, before) {
      if ( before >=1190 && after < 1190 )
        this.showImgColumn = false;
      else if (before < 1190 && after > 1190)
        this.showImgColumn = true;
    }
  }
};
</script>

<style lang='less' scoped>
@shitHeight: 10px;
@headHeight: 30px;
@totalHeight: @shitHeight + @headHeight;
.shit-block-gradient(@color) {
  background: linear-gradient(
    to top,
    @color 0%,
    @color @headHeight,
    white @shitHeight,
    white @totalHeight
  )
}
.home {
  &-search {
    padding-bottom: @shitHeight;
  }
  &-head {
    width: var(--body-width);
    transform: translateY(-@shitHeight);    
    &-list {
      height: @totalHeight;
      .shit-block-gradient(#FF9100);
      line-height: @headHeight;
      color: white;
      display: flex;
      flex-direction: row;
      // 
      &-item {
        font-size: var(--font-large);
        text-align: center;
        display: flex;
        flex-direction: column-reverse;
        &--vertical-line {
          font-size: var(--font-xlarge);
          line-height: 25px;
        }
      } // end of home-head-list-item
      &-item:first-of-type {
        vertical-align: top;
        height: @totalHeight;
        .shit-block-gradient(orangered);
        width: 190px;
        text-align: center;        
      }
      &-item:not(:first-of-type) {
        cursor: pointer;
        margin-left: var(--margin-xsmall);
        margin-right: var(--margin-xsmall);
        span {
          display: flex;
          justify-content: center;
        }
        span:first-of-type {
          height: @headHeight;
        }
        span:last-of-type {
          height: @shitHeight;
          line-height: @shitHeight;
          font-size: var(--font-small);
        }
      } // end of home-head-list-item:not(:first-of-type)
    } // end of home-head-list
  } // end of home-head
  &-main {
    height: 1000px;
    &-column {
      display: inline-block;
      vertical-align: top;
      overflow: hidden;
    }
    &-others { // right column
      margin-top: var(--margin-small);
      margin-left: var(--margin-small);
      width: 292px;
    }
    &-advs {
      width: 155px;
      margin-top: var(--margin-small);
      margin-left: var(--margin-small);
      &-upper {
        border-color: black;
        height: 250px;
      }
      &-text {
        font-size: var(--font-small);
        margin-top: 16px;
        color: grey;
      }
      &-lower {
        margin-top: var(--margin-xxxsmall);
        border-color: black;
        height: 222px;
      }
    }
  } // end of home-main
} // end of .home
</style>
