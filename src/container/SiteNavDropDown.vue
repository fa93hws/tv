<template>
  <div
    @mouseover="()=>{this.inMenu = true}"
    @mouseleave="()=>{this.inMenu = false}"
  >
    <span
      id = 'sit-nav-drop-down-menu'
    >
      网站导航 &#9661;
    </span>
    <div 
      id="drop-down" ref="container"
      @mouseover="()=>{this.inDropDown = true}"
      @mouseleave="()=>{this.inDropDown = false}"
      :class="{hide: !isShown, show: isShown}"
    >
      <div class='inner-container' ref='outterCell0'>
        <ul id='inner-ul-1' ref='innerTable0'>
          <li style="width:100%">
            <span class='bold font-large' style='color:red;'>主题市场</span>
          </li>
          <li >
            <a>女装</a>
          </li>
          <li >
            <a>男装</a>
          </li>
          <li >
            <a>内衣</a>
          </li>
          <li >
            <a>鞋靴</a>
          </li>
          <li >
            <a>女装</a>
          </li>
          <li >
            <a>男装</a>
          </li>
          <li >
            <a>内衣</a>
          </li>
          <li >
            <a>鞋靴</a>
          </li>
          <li >
            <a>女装</a>
          </li>
          <li >
            <a>男装</a>
          </li>
          <li >
            <a>内衣</a>
          </li>
          <li >
            <a>鞋靴</a>
          </li>         
        </ul>
      </div>
      <hr ref="vLine0"/>
      <div class='inner-container' ref='outterCell1'>
        <ul id='inner-ul-2' ref='innerTable0'>
          <li style="width:100%">
            <span class='bold font-large' style='color:green;'>特色市场</span>
          </li>
          <li >
            <a>iFashion</a>
          </li>
          <li >
            <a>爱逛街</a>
          </li>
          <li >
            <a>美妆秀</a>
          </li>
          <li >
            <a>全球购</a>
          </li>
          <li >
            <a>腔调</a>
          </li>
          <li >
            <a>淘女郎</a>
          </li>
          <li >
            <a>星店</a>
          </li>
          <li >
            <a>极有家</a>
          </li>
          <li >
            <a>特色中国</a>
          </li>
        </ul>
      </div>
      <hr ref="vLine1"/>
      <div class='inner-container' ref='outterCell2'>
        <ul id='inner-ul-3' ref='innerTable0'>
          <li style="width:100%">
            <span class='bold font-large' style='color:purple;'>阿里APP</span>
          </li>
          <li >
            <a>iFashion</a>
          </li>
          <li >
            <a>爱逛街</a>
          </li>
          <li >
            <a>美妆秀</a>
          </li>
          <li >
            <a>全球购</a>
          </li>
          <li >
            <a>腔调</a>
          </li>
          <li >
            <a>淘女郎</a>
          </li>
        </ul>        
      </div>
      <hr ref="vLine2"/>
      <div class='inner-container' ref='outterCell3'>
       <ul id='inner-ul-4' ref='innerTable0'>
          <li style="width:100%">
            <span class='bold font-large' style='color:blue;'>精彩推荐集</span>
          </li>
          <li >
            <a>iFashion</a>
          </li>
          <li >
            <a>爱逛街</a>
          </li>
          <li >
            <a>美妆秀</a>
          </li>
        </ul>         
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteNavDropDown',
  created: function() {
    this.isShown = false;
  },
  mounted: function(){
    // adjust right aligned
    let bodyWidth = document.body.clientWidth;
    let mainWidth = document.getElementsByClassName('main-container')[0].clientWidth;
    this.$refs.container.style.right = (bodyWidth-mainWidth)/2 + "px";
    // add hover style
  },
  data: function(){
    return {
      inMenu: false,
      inDropDown: false,
      isShown:false
    }
  },
  watch: {
    inMenu: {
      handler: function(after,before){
        this.updateDropDownStatus(after,before);
      }
    },
    inDropDown: {
      // handler: this.updateDropDownStatus
      handler: function(after,before){
        this.updateDropDownStatus(after,before);
      }
    }
  },
  methods: {
    updateDropDownStatus: function (after, before) {
      this.isShown = this.inMenu || this.inDropDown;
    }
  },
  updated: function () {
    // adjust v-line height
    // console.log(this.$refs['vLine1'].parentElement.offsetHeight);
    if (this.isShown)
      for (let i=0;i<3;i++){
        this.$refs['vLine'+i].style.height = this.$refs['outterCell'+i].offsetHeight + 'px';
      }
  }
}
</script>

<style scoped>
#drop-down{
  position: absolute;
  width: var(--body-width);
  z-index:1;
  background:white;
}
#drop-down > div{
  display:inline-block;
}
.inner-container{
  width:24%;
  vertical-align:top;
}
ul{
  width:100%;
  padding-left:var(--margin-text-small);
  word-wrap: break-word;
}
li{
  /* display:inline-block; */
  padding:0px;
  margin:0px;
  vertical-align: middle;
}
hr{
  width: 0px;
  border-style: solid;
  border-color: silver;
  vertical-align: top;
  display:inline-block;
}
ul>li:not(:first-child){
  display:inline-block
}
#inner-ul-1>li{
  width:24%
}
a{
  padding:5px;
}
li>a:hover{
  color:white
}
#inner-ul-1>li>a:hover{
  background:red;
}
#inner-ul-2>li{
  width:32%
}
#inner-ul-2>li>a:hover{
  background:green;
}
#inner-ul-3>li{
  width:32%
}
#inner-ul-3>li>a:hover{
  background:purple;
}
#inner-ul-4>li{
  width:48%
}
#inner-ul-4>li>a:hover{
  background:blue;
}
#sit-nav-drop-down-menu:hover{
  background: white
}
</style>
