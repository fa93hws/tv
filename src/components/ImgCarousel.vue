<template>
  <div
    v-bind:class="[container.className, 'carousel-view']"
    ref="frame"
    v-bind:style="{height:container.height + 'px'}"
  >
    <ul
      class='carousel clearfix'
      ref="carousel" >
      <li
        v-for="(url,idx) in images"
        v-bind:key="idx"
        class='slide'
        >
        <img
          v-bind:src="url" 
          v-bind:style="{width:container.width+'px',height:container.height+'px'}"
          @load="numImgLoaded++"
        />
      </li>
    </ul>
    <div
      ref='nextButton'
      id = 'next-button'
      class = 'button button-bg'
      @mousedown="next"
    >
      <span>&#10095;</span>
    </div>
    <div
      id = 'previous-button'
      class = 'button button-bg'
      @mousedown="previous"
    >
      <span>&#10094;</span>
    </div>
    <div
      v-show="realOptions.jumpToolTip"
      ref='dir'
      class = 'button button-bg carousel-tool-tip'
    >
      <div
        class='circle'
        v-bind:class="{'highlight':getIdx(activeIdx) == index }"
        v-for="(url,index) in imgurls" :key="index"
        @mousedown="jumpTo(activeIdx,index)"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImgRollover",
  props: {
    imgurls: {
      type: Array,
      required: true
    },
    container: {
      type: Object,
      default: function() {
        return {};
      }
    },
    options: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    realOptions: function() {
      return {
        jumpToolTip:
          typeof this.options.junpToolTip === "undefined"
            ? true
            : this.options.junpToolTip
      };
    },
    images: function() {
      return [
        this.imgurls[this.imgurls.length - 1],
        ...this.imgurls,
        this.imgurls[0]
      ];
    }
  },
  data: function() {
    return {
      activeIdx: 0,
      inTransition: false,
      numImgLoaded: 0
    };
  },
  mounted: function() {
    this.$nextTick(() => {
      this.$refs.carousel.style.transform =
        "translateX(-" + this.container.width + "px" + ")";
      this.$refs.carousel.style.width =
        this.container.width * (this.imgurls.length + 2) + "px";
      this.$refs.carousel.classList.add("animated"); // add class later to prevent inital animation
    });
  },
  methods: {
    previous: function() {
      if (this.activeIdx == -1) this.resetToLast();
      this.doTransform((this.activeIdx -= 1));
    },
    next: function() {
      if (this.activeIdx == this.imgurls.length) this.resetToFirst();
      this.doTransform((this.activeIdx += 1));
    },
    resetToFirst: function() {
      this.$refs.carousel.classList.remove("animated");
      this.doTransform((this.activeIdx = -1));
      this.$nextTick(() => {
        this.$refs.carousel.classList.add("animated");
        this.next();
      });
    },
    resetToLast: function() {
      this.$refs.carousel.classList.remove("animated");
      this.doTransform((this.activeIdx = this.imgurls.length));
      this.$nextTick(() => {
        this.$refs.carousel.classList.add("animated");
        this.previous();
      });
    },
    jumpTo: function(fromActiveidx, toIdx) {
      if (this.getIdx(fromActiveidx) == toIdx) return;
      this.doTransform((this.activeIdx = toIdx));
    },
    doTransform: function(activeIdx) {
      let pxShift = (this.activeIdx + 1) * this.container.width;
      this.$refs.carousel.style.transform =
        "translateX(-" + pxShift + "px" + ")";
    },
    getIdx: function(activeIdx) {
      if (activeIdx >= 0) return activeIdx % this.imgurls.length;
      else return activeIdx % this.imgurls.length + this.imgurls.length;
    },
    setPositionForControls: function() {
      this.$nextTick( () => {
        this.$refs.nextButton.style.left =
          this.container.width - this.$refs.nextButton.clientWidth + "px";
        if (this.realOptions.jumpToolTip)
          this.$refs.dir.style.left =
            this.container.width / 2 - this.$refs.dir.offsetWidth / 2 + "px";
        })
    }
  },
  watch: {
    activeIdx: function(after, before) {
      // console.log('child changed');
      this.$emit("idxChanged", this.getIdx(after), this.getIdx(before));
    },
    numImgLoaded: function(after, before) {
      if (this.numImgLoaded >= this.imgurls.length + 2) {
        this.$emit("load");
        this.setPositionForControls();
      }
    }
  }
  // updated: function () {
  //   this.$emit('updated-handler');
  // }
};
</script>

<style scoped>
.circle {
  width: 8px;
  height: 8px;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
  background: white;
}
.circle.highlight {
  background: black;
}
ul.carousel {
  padding-left: 0px;
  padding-top: 0px;
  margin-top: 0px;
}
ul.carousel > li {
  float: left;
}

.carousel-view {
  position: relative;
  overflow: hidden;
}
#next-button {
  position: absolute;
  top: 50%;
  text-align: right;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
#previous-button {
  position: absolute;
  top: 50%;
  text-align: left;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.button {
  height: 20px;
  width: 15px;
  line-height: 20px;
  color: silver;
  cursor: pointer;
  user-select: none;
}
.button-bg {
  background: grey;
  opacity: 0.99;
}
.button-bg:hover {
  opacity: 0.5;
}
.carousel-tool-tip {
  position: absolute;
  top: 80%;
  height: 20px;
  width: auto;
}

/* transition */
.animated {
  transition-duration: 0.3s;
  transition-property: transform;
}
</style>
