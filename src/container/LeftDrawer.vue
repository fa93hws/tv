<template>
  <div id = 'left-drawer-container'>
    <div id = 'left-drawer-menu-container' class = 'solid-border'>
      <ul id = 'left-drawer-menu-ul'>
        <li
          v-for="(items, idxs) in menu" v-bind:key=items.index
          @mouseover="mouseEnterMenu(idxs)"
          @mouseleave="mouseLeaveMenu(idxs)"
        >
          <div
            v-for="(item, idx) in items" v-bind:key=item.index
            style="display:inline-block;"
          >
            <span style='cursor:pointer'> {{item}} </span>
            <span v-if="idx!=items.length-1">/</span>
          </div>
        </li>
      </ul>
    </div>
    <div ref = 'contentWrapper' id = 'left-drawer-content-container'
      class = 'solid-border hide'
      @mouseover="()=>{this.mouseInContent=true}"
      @mouseleave="()=>{this.mouseInContent=false}"
    >
      <div id = 'left-drawer-main-content-wrapper'>
        <LeftDrawTextContent
          v-for="content in textContent" v-bind:key=content.index
          :title = content.title
          :texts = content.texts
        />
      </div>
      <div ref = 'guessContent' id = 'left-drawer-content-wrapper-guess'>
        <span>猜你喜欢</span>
        <div id = 'left-drawer-content-guess-imgcontainer'>
          <img v-bind:src="mouseOnMenuIdx>-1 ? guessYouLike[mouseOnMenuIdx].url : ''"/>
        </div>
        <span>{{mouseOnMenuIdx>-1 ? guessYouLike[mouseOnMenuIdx].desc : ''}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import LeftDrawTextContent from '../components/LeftDrawTextContent';

export default {
  name: "LeftDrawer",
  components:{
    LeftDrawTextContent
  },
  data: function () {
    return {
      menu: [["女装","男装","内衣"],["珠宝","眼镜","手表"], ["美食","动漫","饮食"], ["汽车","二手车","用品"]],
      content:[[
        "羽绒服","连衣裙","风衣","裤子","T恤","衬衫","牛仔裤","阔腿裤","半身裙","大码女装","婚纱礼服"
      ],[
        "潮牌馆","原创设计","风格好店","西装","牛仔裤","POLO衫","皮衣","中老年","情侣装","大码","民族风"
      ],[
        "保暖内衣","长桶袜","连体睡衣","卡通睡衣","男士袜子","秋裤","棉袜","保暖背心","睡袍","睡裙女冬"
      ],
      [//
        "女鞋","红人同款","夏上新","一脚瞪","尖头","小高跟","运动风","爸爸鞋","布鞋","梦可鞋","豆豆鞋"
      ],[
        "羽绒服","连衣裙","风衣","裤子","T恤","衬衫","牛仔裤","阔腿裤","半身裙","大码女装","婚纱礼服"
      ],[
        "潮牌馆","原创设计","风格好店","西装","牛仔裤","POLO衫","皮衣","中老年","情侣装","大码","民族风"
      ],//
      [
        "羽绒服","连衣裙","风衣","裤子","T恤","衬衫","牛仔裤","阔腿裤","半身裙","大码女装","婚纱礼服"
      ],[
        "潮牌馆","原创设计","风格好店","西装","牛仔裤","POLO衫","皮衣","中老年","情侣装","大码","民族风"
      ],[
        "保暖内衣","长桶袜","连体睡衣","卡通睡衣","男士袜子","秋裤","棉袜","保暖背心","睡袍","睡裙女冬"
      ],[//
        "女鞋","红人同款","夏上新","一脚瞪","尖头","小高跟","运动风","爸爸鞋","布鞋","梦可鞋","豆豆鞋"
      ],[
        "羽绒服","连衣裙","风衣","裤子","T恤","衬衫","牛仔裤","阔腿裤","半身裙","大码女装","婚纱礼服"
      ],[
        "潮牌馆","原创设计","风格好店","西装","牛仔裤","POLO衫","皮衣","中老年","情侣装","大码","民族风"
      ]],
      guessYouLike:[{
        url: require("../assets/g1.jpg"),
        desc: "figure1"
      },{
        url: require("../assets/g2.jpg"),
        desc: "figure2"
      },{
        url: require("../assets/g1.jpg"),
        desc: "figure3"        
      },{
        url: require("../assets/g2.jpg"),
        desc: "figure4"        
      }],
      mouseOnMenuIdx: -1,
      mouseInMenu: false,
      mouseInContent: false,
      isContentShown: false,
      textContent:[{title:'a',texts:[]},{title:'b',texts:[]},{title:'c',texts:[]}]
    }
  },
  methods: {
    mouseEnterMenu: function (idxs) {
      this.mouseOnMenuIdx = idxs;
      this.mouseInMenu = true;
    },
    mouseLeaveMenu: function (idxs) {
      this.mouseOnMenuIdx = -1;
      this.mouseInMenu = false;
    }
  },
  watch: {
    mouseOnMenuIdx: function (after, before){
      if (after == -1) {
        if (this.mouseInContent){
          this.mouseOnMenuIdx = before;
        }
        return;
      }
      this.isContentShown = this.mouseInMenu || this.mouseInContent;
      // update html
      for (let i=0;i<3;i++){
        let idx = after*3+i;
        let title = this.menu[after][i];
        let texts = this.content[idx];
        this.textContent[i].title = title;
        this.textContent[i].texts = texts;
      }
    }, 
    mouseInMenu: function (after, before) {
      this.isContentShown = after || this.mouseInContent;      
    },
    mouseInContent: function (after, before) {
      this.isContentShown = this.mouseInMenu || after;
    },
    isContentShown: function (after, before) {
      if (after)
        this.$refs.contentWrapper.style.display = 'inline-block';
      else
        this.$refs.contentWrapper.style.display = 'none';
    },
  }
}
</script>

<style scoped>
/* general */
ul{
  margin: 0;
  padding: 0;
}
li{
  text-align: center;
  color: grey;
}
/* wrapper */
#left-drawer-container {
  height: 522px;
}
/* menu */
#left-drawer-menu-container {
  width: 188px;
  height: 100%;
  display: inline-block;
  vertical-align: top;
  border-top:none;
  border-color: orangered;
  border-width: 1px;
}
#left-drawer-menu-ul > li {
  line-height: 40px;  
}
#left-drawer-menu-ul > li:hover {
  background: rgb(255, 222, 160)
}
#left-drawer-menu-ul > li:first-child{
  padding-top: 10px;
}
/* content */
#left-drawer-content-container{
  /* display: inline-block; */
  vertical-align: top;
  height: 100%;
  width: 800px;
  margin-top: -2px;
  margin-left:-5px;
  border-color: orangered;
  border-width: 2px;
}
#left-drawer-main-content-wrapper {
  display: inline-block;
  vertical-align: top;
  width: 60%;
  height: 100%;
  border-style: solid;
  border-top:none;
  border-bottom:none;
  border-left:none;
  border-color: rgb(236, 236, 236);
  border-width: 1px;
}
#left-drawer-main-content-wrapper > div{
  /* border-style:solid; */
  width: 100%;
  height: 30%;
  margin-bottom: 2%;
}
#left-drawer-content-wrapper-guess {
  display: inline-block;
  vertical-align: top;
  /* border-style:solid; */
  margin-left: 5%;
  height: 95%;
  width: 30%;
  text-align:center;
}
</style>
