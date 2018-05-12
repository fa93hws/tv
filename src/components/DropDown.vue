<template>
  <div>
    <div 
      class="open" ref = 'menuButton'
      @mouseover="()=>{isShown=true;}"
      @mouseleave="()=>{isShown=false}"
      :style="[this.isShown ? this.styles.menuOpenStyle : '']"
      :class="{ menuOpenStyle: isShown}"
    >
      <span>{{text}}</span>
      <v-icon class = 'icon' >keyboard_arrow_down</v-icon>
    </div>
    <div
      ref = 'dropDown'
      class="drop-down-c" :class="{hide: !isShown, show: isShown}"
      :style="this.styles.dropDown"
      @mouseover="()=>{this.isShown=true;}"
      @mouseleave="()=>{this.isShown=false}"
    >
      <ul @mouseleave="changeBackgroundOnHover(-1)">
        <li
          v-for="(option, index) in optionList" :key=index
          ref = 'dropDownList'
          :v-bind:style="dropDownItemStyle"
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
  methods: {
    changeBackgroundOnHover: function(idx) {
      for (let i = 0; i < this.optionList.length; i++) {
        if (i === idx)
          this.$refs.dropDownList[
            i
          ].style.background = this.styles.dropDownItemHover.hover_bg;
        else
          this.$refs.dropDownList[
            i
          ].style.background = this.$refs.dropDown.style.background;
      }
    } //changeBackgroundOnHover
  },
  props: {
    text: {
      type: String,
      required: true
    },
    defaultVal: {
      type: Number,
      required: true
    },
    optionList: {
      type: Array,
      required: true
    },
    styles: {
      menuOpenStyle: Object,
      dropDown: Object,
      dropDownItemHover: Object
    },
    dropDownItemStyle: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      val: this.defaultVal,
      isShown: false,
      dropDownStyle: {},
      menuOpenStyle: {},
      dropDownItemHover: {}
    };
  },
  updated: function() {
    this.$emit("updated-handler");
  }
};
</script>

<style scoped>
.drop-down-c {
  -webkit-padding-start: 0px;
  -webkit-margin-before: 0px;
  -webkit-margin-after: 0px;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  background: white;
  z-index: 1;
  /* border-style: solid; */
  position: absolute;
}
.drop-down-c > ul {
  list-style-type: none;
  padding-left: 0px;
}
.open > .icon {
  /* font-size: var(--font-small); */
}
</style>


