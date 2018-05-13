<template>
  <div
    v-bind:class="[container.className, 'container__imgcarousel-frame']"
    ref="frame"
    v-bind:style="{height:container.height + 'px'}"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
  >
    <ul
      class='container__imgcarousel no-padding no-margin clearfix'
      ref="carousel" >
      <li
        v-for="(url,idx) in images"
        v-bind:key="idx"
        class='slide__imgcarousel float-left'
        >
        <img
          v-bind:src="url" 
          v-bind:style="{width:container.width+'px',height:container.height+'px'}"
          @load="numImgLoaded++"
        />
      </li>
    </ul>
    <div
      v-show="onHover&&realOptions.controlButton"
      ref='nextButton'
      class = 'button__imgcarousel--next background__imgcarousel-control button'
      @mousedown="next"
    >
      <v-icon class = 'button-text__imgcarousel button-text__imgcarousel--next'>
        keyboard_arrow_right
      </v-icon>
    </div>
    <div
      v-show="onHover&&realOptions.controlButton"
      class = 'button__imgcarousel--previous background__imgcarousel-control button'
      @mousedown="previous"

    >
      <v-icon class = 'button-text__imgcarousel button-text__imgcarousel--previous'>
        keyboard_arrow_left
      </v-icon>
    </div>
    <div
      v-show="realOptions.jumpToolTip"
      ref='dir'
      class = 'tooltip__imgcarousel background__imgcarousel-control clickable'
    >
      <div
        class='circle tooltip-item__imgcarousel'
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
          typeof this.options.jumpToolTip === "undefined"
            ? true
            : this.options.jumpToolTip,
        controlButton:
          typeof this.options.controlButton === 'undefined'
            ? true
            : this.options.controlButton
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
      numImgLoaded: 0,
      onHover: false,
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
    mouseover: function() {
      this.onHover = true;
      this.$emit('mouseover');
    },
    mouseleave: function() {
      this.onHover = false;
      this.$emit('mouseleave')
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
      }
    },
    onHover: function(after, before) {
      // if (realOptions.controlButton && after)
      //   this.setPositionForControls();
    }
  }
  // updated: function () {
  //   this.$emit('updated-handler');
  // }
};
</script>

<style scoped>
.container__imgcarousel-frame {
  position: relative;
  overflow: hidden;
}
/* button control */
.button__imgcarousel--next {
  top: 50%;
  left: 100%;
  transform: translate(-100%,-50%);  
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.button__imgcarousel--previous {
  top: 50%;
  transform: translateY(-50%);
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
.container__imgcarousel-frame .button {
  position: absolute;
  height: 30px;
  width: 20px;
}
.container__imgcarousel-frame .background__imgcarousel-control {
  color: silver;
  background: grey;
  opacity: 0.99;
}
.container__imgcarousel-frame .background__imgcarousel-control:hover {
  opacity: 0.5;
}
.button-text__imgcarousel {
  display: block;
  height: 30px;
  line-height: 30px;
  font-size: var(--font-xxlarge);
}
.button-text__imgcarousel--previous {
  text-align: left;
  transform: translateX(-40%)
}
/* tooltips */
.tooltip__imgcarousel {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  height: 20px;
  width: auto;
  border-radius: 10px;
  padding: 0px 5px 0px 5px;
}
.tooltip-item__imgcarousel.circle {
  display: inline-block;
  margin: 5px 5px auto 5px;
  background: white;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;  
}
.circle.highlight {
  background: black;
}
/* transition */
.animated {
  transition-duration: 0.3s;
  transition-property: transform;
}
</style>
