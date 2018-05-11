<template>
  <div>
    <DropDown 
      :text="text"
      :optionList="regionList"
      :defaultVal="defaultVal"
      :styles="styles"
    />
  </div>
</template>

<script>
import DropDown from "../components/DropDown.vue";

export default {
  name:"RegionSelector",
  components: {
    DropDown
  },

  created() {    
    this.regionList = (require('../assets/data.json').region);
    this.defaultVal = this.findDefaultRegion(this.regionList);
    this.text = this.regionList[this.defaultVal];
  },

  data() {
    return{
      regionList: [],
      defaultVal: "",
      styles:{
        menuOpenStyle: {
          background:'white'
        },
        dropDown: {
          'max-height': '300px',
          'border-style': 'solid',
          'border-color': '#f5f5f5',
          'border-width': "1px",
          'border-top' : 'none',
          'padding-left' : '5px',
          'padding-right': '5px'
        },
        dropDownItemHover:{
          hover_bg: '#f5f5f5'
        }
      }
    }
  },

  methods: {
    findDefaultRegion: (regionList) => {
      return 0;
    } //findDefaultRegion
  }
}
</script>

<style scoped>

</style>
