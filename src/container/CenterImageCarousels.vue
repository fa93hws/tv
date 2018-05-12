<template>
  <div>
    <LoadingMask
      v-show="!loadStatus.upper.loadDone"
      key="upper-loading"
      class='upper-carousel-container'
    />
    <ImgCarousel
      v-show="loadStatus.upper.loadDone"
      v-if="loadStatus.upper.ajaxDone"
      key="upper-ready"
      class='upper-carousel-container'
      :imgurls="upperImgCarousel.url"
      :container="upperImgCarousel.style"
      @load="loadStatus.upper.loadDone=true"
    />
    <LoadingMask
      v-show="!loadStatus.lower.loadDone"
      key="lower-loading"
      class='lower-img-carousel'
    />
    <div
      v-show="loadStatus.lower.loadDone"
      v-if="loadStatus.lower.ajaxDone"
      key="lower-ready"
      class = 'lower-img-carousel'>
      <span>猫Logo</span>
      <span>天猫Logo</span>
      <span>理想生活上天猫</span>
      <span
        v-if="loadStatus.lower.loadDone"
        class = 'float-right'
      >
        {{lowerImgIdx+1}}/{{ lowerImgCarousel.url.length }}
      </span>
      <ul class='no-padding no-margin'>
        <li
          ref="lowerCarouselJumpControllerPiece"
          v-for="(url,idx) in lowerImgCarousel.url" v-bind:key="idx"
          v-bind:class="{'selected':lowerImgIdx===idx}"
          @mousedown="lowerCarouselJumpTo(idx)"
        >
        </li>
      </ul>
      <ImgCarousel
        class='lower-carousel-container'
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
import ImgCarousel from '../components/ImgCarousel.vue';
import ResourcesAPI from '../api/Resources';
import LoadingMask from '../components/LoadingMask';

export default {
  name: 'CenterImageCarousels',
  components: {
    ImgCarousel,
    LoadingMask
  },
  data: function () {
    return {
      upperImgCarousel: {
        style:{
          width: 500,
          height: 250,
        },
        url: []
      },
      lowerImgCarousel: {
        style:{
          width: 500,
          height: 200,
        },
        url: [],
        options:{
          junpToolTip: false,
        }
      },
      lowerImgIdx: 0,
      loadStatus: {
        upper:{
          ajaxDone: false,
          loadDone: false
        },
        lower:{
          ajaxDone: false,
          loadDone: false
        }
      }
    }
  },
  created: function () {
    ResourcesAPI.getUpperCarouselImages().then( (response) => {
      this.upperImgCarousel.url = response.data.Images;
      this.$nextTick( function () {
        this.loadStatus.upper.ajaxDone = true;
      })      
    }).catch( (error)=>{
      // handel error
      // console.log(error)
    })

    ResourcesAPI.getLowerCarouselImages().then( (response) => {
      this.lowerImgCarousel.url = response.data.Images;
      this.$nextTick( function () {
        this.loadStatus.lower.ajaxDone = true;
      })      
    }).catch( (error)=>{
      // handel error
      // console.log(error)
    })
    
  },
  mounted: function () {
  },
  methods: {
    lowerIdxChange: function (after, before) {
      this.lowerImgIdx = after;
    },
    lowerCarouselJumpTo : function (toIdx) {
      this.$refs.lowerCarousel.jumpTo(this.lowerImgIdx, toIdx);
    },
    onLowerReady: function () {
      this.loadStatus.lower.loadDone = true;
      // set width for lowerCarouselJumpController
      let spans = this.$refs.lowerCarouselJumpControllerPiece;
      for (let i=0; i < spans.length; i++){
        spans[i].style.width = 100/spans.length + '%';
      }
    }
  }
}
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
  height: 200px;
}
.lower-img-carousel > span {
  margin-left: var(--margin-xxsmall);
  margin-right: var(--margin-xxsmall);
  font-size: var(--font-small);
}
ul {
  font-size: 0px;
  height: 10px;
}
li {
  display: inline-block;
  background: orangered;
  cursor: pointer;
  height: 10px;
}
li.selected{
  background: black;
}
</style>
