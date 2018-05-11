<template>
  <div id = 'top-search-container'>
    <div 
      id = 'top-search'
      class = 'mid-main'
    >
      <div class= 'img-div float-left'>
        <img src="../assets/logo.png" alt="Smiley face" height="70" width="150">
      </div>
      
      <div id = 'top-search-wrapper' class = 'float-left margin-search-box-left'>
        <div id = 'top-search-label-wrapper' >
          <span 
            v-for="(item,index) in searchTabText" :key=index
            ref=searchTab
            @mousedown="activeSearchTab(index)"
            class = 'font-medium'
          >
            {{item}}
          </span>
        </div>
        <SearchBox
          :placeHolder = "searchPlaceHolder"
        />
        <div id = 'top-search-bottom-wrapper'>
          <span class = 'font-small'>新款连衣裙</span>
          <span class = 'font-small'>四件套</span>
          <span class = 'font-small'>潮流T恤</span>
          <span class = 'font-small'>时尚女鞋</span>
        </div>
      </div>

      <div ref='qrBox' class= 'img-div float-right'>
        <div 
          id = 'top-search-qr-close-container'
          class = 'float-left'
          @mousedown = 'hideQRCode()'
        >
          <span>x</span>
        </div>
        <div id = 'top-search-qr-container' class = 'float-left'>  
          <span class = 'font-small'>手机淘宝</span><br/>
          <img src="../assets/code.png" alt="Smiley face" height="62" width="62">
        </div>
      </div>
    </div>

    <div 
      id = 'top-search-fixed-wrapper'
      v-bind:class="{'fixed-top':true, 'hide':isSearchBarVisible, 'show':!isSearchBarVisible}">
      <div class = 'mid-main'>
        <div class= 'float-left' style='width:150px;height:70px;'>
          <img src="../assets/logo.png" alt="Smiley face" height="40" width="100">
        </div>
        <div class = 'float-left margin-search-box-left'>
          <SearchBox
            :leftDropDown = "true"
            :placeHolder = "searchPlaceHolder"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from "../components/SearchBox.vue"

export default {
  name: "TopSearchBar",
  components: {
    SearchBox
  },
  created: function () {
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted: function () {
    this.activeSearchTab(0);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data: function () {
    return {
      searchPlaceHolder: "some unicode text in 宝贝",
      activeTabId: -1,
      searchTabText: ["宝贝","天猫","店铺"],
      isSearchBarVisible: true
    }
  },
  watch:{
    activeTabId: {
      handler: function(after, before){
        if (before > -1){
          this.$refs['searchTab'][before].classList.remove('selected');
        }
        this.$refs['searchTab'][after].classList.add('selected');
      }
    }
  },
  methods: {
    activeSearchTab: function (idx) {
      this.activeTabId = idx;
    },
    hideQRCode: function () {
      this.$refs.qrBox.style.display = 'none';
    },
    handleScroll: function () {
      let scrollDistance = window.scrollY;
      let thisHeight = this.$el.clientHeight;
      let navHeight = document.getElementsByClassName('nav')[0].clientHeight;
      let marginBetween = 14;

      this.isSearchBarVisible = scrollDistance < thisHeight + navHeight + marginBetween;
      // console.log(this);
      // this.isSearchBarVisible = ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
  }
}
</script>

<style scoped>
  #top-search-container{
    width: 100%;
    height: 80px;
  }
  .mid-main {
    width: var(--body-width);
    margin-left: auto;
    margin-right: auto;
  }
  #top-search-fixed-wrapper{
    height:50px;
    width: 100%;
    background: white;
  }
  /* var(--body-width); */
  #top-search{
    margin-top: var(--margin-medium);
    text-align: center;
  }
  #top-search > div{
    display: inline-block;
  }
  .img-div{
    margin-top: auto;
    margin-bottom: auto;
  }
  .margin-search-box-left{
    margin-top:4px;
    margin-left: 100px;
  }
  #top-search-label-wrapper, #top-search-bottom-wrapper{
    text-align: left;
    margin-left: 18px;
    color: orangered
  }
  #top-search-bottom-wrapper{
    margin-top:5px;
  }
  #top-search-label-wrapper > span {
    padding: 5px 5px 1px 5px;
    cursor: pointer;
  }
  #top-search-label-wrapper > span:not(.selected):hover{
    background: rgb(255, 249, 237);
  }
  #top-search-bottom-wrapper > span{
    padding:  2px;
    color: grey;
    cursor: pointer;
  }
  span.selected{
    /* background:orangered; */
    background: linear-gradient(right, orangered, orange);
    color:white;
    border-top-left-radius:  8px;
    border-top-right-radius: 8px;
    font-weight: bold;
  }
  #top-search-qr-container{
    display: block;
    border-style: solid;
    border-width: 0.5px;
    border-color: rgb(228, 228, 228);
    padding: 5px;
    margin-right: 80px;
  }
  #top-search-qr-container:hover{
    cursor: pointer;
  }
  #top-search-qr-container > span{
    color:orangered;
    margin-bottom: 2px;
  }
  #top-search-qr-close-container{
    width:16px;
    height:16px;
    border-color: rgb(228, 228, 228);
    border-width: 0.5px;
    border-style: solid;
    color: rgb(228, 228, 228);
    font-size: var(--font-small)
  }
  #top-search-qr-close-container:hover{
    cursor: pointer;
  }
</style>
