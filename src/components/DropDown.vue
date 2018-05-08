<template>
  <div>
    <div 
      class="open" ref = 'menuButton'
      @mouseover="()=>{isShown=true;}"
      @mouseleave="()=>{isShown=false}"
      :style="[this.isShown ? this.styles.menuOpenStyle : '']"
      :class="{ menuOpenStyle: isShown}"
    >
      <span>{{text}} &#9661; </span>
    </div>
    <div
      ref = 'dropDown'
      id="drop-down-c" :class="{hide: !isShown, show: isShown}"
      :style="this.styles.dropDown"
      @mouseover="()=>{this.isShown=true;}"
      @mouseleave="()=>{this.isShown=false}"
    >
      <ul @mouseleave="changeBackgroundOnHover(-1)">
        <li
          v-for="(option, index) in optionList" :key=option.index
          ref = 'dropDownList'
          @mouseover="changeBackgroundOnHover(index)"   
        >
          {{option}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  methods:{
    changeBackgroundOnHover: function (idx) {
      for (let i=0; i<this.optionList.length; i++){
        if (i===idx)
          this.$refs.dropDownList[i].style.background = this.styles.dropDownItemHover.hover_bg;
        else
          this.$refs.dropDownList[i].style.background = this.$refs.dropDown.style.background;
      }
    }//changeBackgroundOnHover
  },
  props:{
    text:String,
    defaultVal:Number,
    optionList:Array,
    styles: {
      menuOpenStyle:Object,
      dropDown: Object,
      dropDownItemHover: Object
    }
  },
  data() {
    return {
      val: this.defaultVal,
      isShown: false,
      dropDownStyle: {},
      menuOpenStyle: {},
      dropDownItemHover: {}
    }
  },
  updated: function () {
    this.$emit('updated-handler');
  }
}
</script>

<style scoped>
#drop-down-c{
    -webkit-padding-start: 0px;
    -webkit-margin-before: 0px;
    -webkit-margin-after: 0px;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    background:white;
    z-index:1;
    /* border-style: solid; */
    position: absolute;
}
ul{
  list-style-type:none;
  padding-left:0px;
}
ul>li{
  text-align:left;  
}
</style>


