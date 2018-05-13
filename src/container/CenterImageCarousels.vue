<template>
  <div>
    <LoadingMask
      v-if="!loadStatus.upper.loadDone"
      key="upper-loading"
      class='upper-carousel-container'
    />
    <ImgCarousel
      v-show="loadStatus.upper.loadDone"
      v-if="loadStatus.upper.ajaxDone"
      key="upper-ready"
      class='upper-carousel-container clickable'
      :imgurls="upperImgCarousel.url"
      :container="upperImgCarousel.style"
      :options="upperImgCarousel.options"
      @load="loadStatus.upper.loadDone=true"
    />
    <div
      key="lower-ready"
      class = 'lower-img-carousel'>
      <div class = 'container__lower-imgcarousel-text'>
        <div class = 'container__lower-imgcarousel-text--left'>
          <span>猫Logo</span>
          <span>天猫Logo</span>
          <span>理想生活上天猫</span>
        </div>
        <div
          v-if="loadStatus.lower.loadDone"
          class = 'counter__lower-imgcarousel--right'
        >
          <span>{{lowerImgIdx+1}}</span>
          <span>/ {{ lowerImgCarousel.url.length }}</span>
        </div>
      </div>
      <ul class='tooltip__lower-imgcarousel no-padding no-margin'>
        <li
          class = 'tooltip-item__lower-imgcarousel'
          ref="lowerCarouselJumpControllerPiece"
          v-for="(url,idx) in lowerImgCarousel.url" v-bind:key="idx"
          v-bind:class="{'selected':lowerImgIdx===idx}"
          @mousedown="lowerCarouselJumpTo(idx)"
        >
        </li>
      </ul>
        <LoadingMask
        v-show="!loadStatus.lower.loadDone"
        class='lower-img-carousel-container'
      />
      <ImgCarousel
        class='lower-carousel-container clickable'
        v-show="loadStatus.lower.loadDone"
        v-if="loadStatus.lower.ajaxDone"
        ref="lowerCarousel"
        :imgurls="lowerImgCarousel.url"
        :container="lowerImgCarousel.style"
        :options="lowerImgCarousel.options"
        @idxChanged="lowerIdxChange"
        @load="onLowerReady"
      />
      </div>
    </div>
</template>

<script>
import ImgCarousel from "../components/ImgCarousel.vue";
import ResourcesAPI from "../api/Resources";
import LoadingMask from "../components/LoadingMask";

export default {
  name: "CenterImageCarousels",
  components: {
    ImgCarousel,
    LoadingMask
  },
  data: function() {
    return {
      upperImgCarousel: {
        style: {
          width: 500,
          height: 250
        },
        url: [],
        options: {
        }
      },
      lowerImgCarousel: {
        style: {
          width: 500,
          height: 222
        },
        url: [],
        options: {
          jumpToolTip: false
        }
      },
      lowerImgIdx: 0,
      loadStatus: {
        upper: {
          ajaxDone: false,
          loadDone: false
        },
        lower: {
          ajaxDone: false,
          loadDone: false
        }
      }
    };
  },
  created: function() {
    ResourcesAPI.getUpperCarouselImages()
      .then(response => {
        this.upperImgCarousel.url = response.data.Images;
        this.$nextTick(function() {
          this.loadStatus.upper.ajaxDone = true;
        });
      })
      .catch(error => {
        // handel error
        // console.log(error)
      });

    ResourcesAPI.getLowerCarouselImages()
      .then(response => {
        this.lowerImgCarousel.url = response.data.Images;
        this.$nextTick(function() {
          this.loadStatus.lower.ajaxDone = true;
        });
      })
      .catch(error => {
        // handel error
        // console.log(error)
      });
  },
  methods: {
    lowerIdxChange: function(after, before) {
      this.lowerImgIdx = after;
    },
    lowerCarouselJumpTo: function(toIdx) {
      this.$refs.lowerCarousel.jumpTo(this.lowerImgIdx, toIdx);
    },
    onLowerReady: function() {
      this.loadStatus.lower.loadDone = true;
      // set width for lowerCarouselJumpController
      let spans = this.$refs.lowerCarouselJumpControllerPiece;
      spans.forEach( (el) => {
        el.style.width = 100/spans.length + '%'
      })
    },
  },
};
</script>

<style scoped>
/* carousel */
.upper-carousel-container {
  width: 500px;
  height: 250px;
  border-width: 1px;
  vertical-align: top;
  margin-left: var(--margin-small);
  margin-top: var(--margin-small);
}
/*carousel*/
.lower-img-carousel {
  margin-left: var(--margin-small);
  margin-top: var(--margin-small);
  width: 500px;  
}
.lower-img-carousel-container {
  width: 500px;
  height: 222px;
}
/* lower image carousel text on toolbar */
.container__lower-imgcarousel-text {
  /* position: relative; */
}
/* left */
.container__lower-imgcarousel-text--left {
  display: inline-block;
  width: 50%;
}
.container__lower-imgcarousel-text--left > span {
  display: inline-block;
  height: 100%;
  margin-left: var(--margin-xxsmall);
  margin-right: var(--margin-xxsmall);
  font-size: var(--font-small);
}
/* right */
.counter__lower-imgcarousel--right {
  display: inline-block;
  position: relative;
  width: 30px;
  text-align: left;
  left: 50%;
  transform: translateX(-100%);
  top: 2px;
}
.counter__lower-imgcarousel--right > span:first-child {
  color: orangered;
}
.counter__lower-imgcarousel--right > span {
  display: inline-block;
  font-size: var(--font-small)
}
.tooltip__lower-imgcarousel {
  margin-top: -1px;
  font-size: 0px;
  height: 5px;
}
.tooltip-item__lower-imgcarousel {
  display: inline-block;
  margin-top: 0px;
  background: orangered;
  cursor: pointer;
  height: 10px;
}
.tooltip-item__lower-imgcarousel.selected {
  background: black;
}
</style>
