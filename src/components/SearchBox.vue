<template>
  <div id = 'search-box'>
    <div id = 'left-dropdown-wrapper'
    class = 'quater-radius float-left'
    ref = 'leftDropDownWrapper'
    v-if="leftDropDown||false">
      <DropDown
        ref = "dropDown"
        class = 'searchbox-prefix-dropdown'
        @updated-handler="dropDownUpdated"
        :text="'宝贝'"
        :optionList="['天猫','店铺']"
        :defaultVal="0"
        :styles="dropDownStyles"
        :dropDownItemStyle="{'text-align':'center'}"
      />
    </div>
    <div class = 'text-wrapper float-left' >
      <input type="text" :placeholder="placeHolder">
    </div>
    <div class = 'button-wrapper float-right'>
      <span class = 'bold clickable noselect'> 搜索 </span>
    </div>
  </div>
</template>

<script>
import DropDown from "../components/DropDown.vue";

export default {
  name: "SearchBox",
  props: {
    placeHolder: String,
    leftDropDown: Boolean
  },
  components: {
    DropDown
  },
  data: function() {
    return {
      dropDownStyles: {
        menuOpenStyle: {
          background: "rgb(224, 224, 224)",
          "border-top-left-radius": "20px",
          "border-bottom-left-radius": "20px",
        },
        dropDown: {
          "max-height": "300px",
          width: "80px",
          background: "rgb(224, 224, 224)",
          "margin-top": "-4px"
        },
        dropDownItemHover: {
          hover_bg: "#f5f5f5"
        }
      } // end dropDownStyles
    };
  },
  methods: {
    dropDownUpdated: function() {
      if (this.$refs.dropDown.isShown){
        this.$refs.leftDropDownWrapper.classList.remove("quater-radius");
      }
      else this.$refs.leftDropDownWrapper.classList.add("quater-radius");
    }
  }
};
</script>

<style scoped>
#search-box {
  width: 630px;
  border-style: solid;
  border-color: orangered;
  border-width: 2px;
  height: 40px;
  border-radius: 20px;
  line-height: 40px;
  /* background:white; */
}
#search-box > .button-wrapper {
  padding: 0px;
  margin-right: -2px;
  margin-top: -2px;
  color: white;
  background: orangered;
  font-size: var(--font-xlarge);
  width: 80px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  text-align: center;
}
.text-wrapper {
  margin-top: -2px;
  margin-left: 8px;
  width: 70%;
}
#left-dropdown-wrapper > div {
  background: rgb(224, 224, 224);
  border-top-left-radius: 18px;
  width: 80px;
  text-align: center;
  height: 36px;
}
.quater-radius > div {
  border-bottom-left-radius: 18px;
}
.text-wrapper > input {
  border-style: none;
  height: 25px;
  line-height: 25px;
  width: 300px;
  width: 100%;
}
input:focus {
  /* border-style: none; */
  outline: none;
}
.searchbox-prefix-dropdown >>> .open > .icon {
  font-size: var(--font-small);
}
</style>
