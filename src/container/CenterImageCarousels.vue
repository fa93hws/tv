<template>
  <div>
    <ImgCarousel
      :imgurls="upperImgCarousel.url"
      :container="upperImgCarousel.style"
    />
    <div id = 'lower-img-carousel'>
      <span>猫Logo</span>
      <span>天猫Logo</span>
      <span>理想生活上天猫</span>
      <span class = 'float-right'>
        {{lowerImgIdx+1}}/{{lowerImgCarousel.url.length}}
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
        ref="lowerCarousel"
        :imgurls="lowerImgCarousel.url"
        :container="lowerImgCarousel.style"
        :options="lowerImgCarousel.options"
        @idxChanged="lowerIdxChange"
      />
      </div>
    </div>
</template>

<script>
import ImgCarousel from '../components/ImgCarousel.vue';

export default {
  name: 'CenterImageCarousels',
  components: {
    ImgCarousel
  },
  mounted: function () {
    this.$nextTick( ()=>{
      // set width for lowerCarouselJumpController
      let spans = this.$refs.lowerCarouselJumpControllerPiece;
      for (let i=0; i < spans.length; i++){
        spans[i].style.width = 100/spans.length + '%';
      }
    })
  },
  data: function () {
    return {
      upperImgCarousel: {
        style:{
          width: 500,
          height: 250,
          className: 'upper-carousel-container',
        },
        url: [
          require('../assets/upper0.jpg'),
          require('../assets/upper1.jpg'),
          require('../assets/upper2.jpg')
        ]
      },
      lowerImgCarousel: {
        style:{
          width: 500,
          height: 200,
          className: 'lower-carousel-container',
        },
        url: [
          require('../assets/upper0.jpg'),
          require('../assets/upper1.jpg'),
          require('../assets/upper2.jpg')
        ],
        options:{
          junpToolTip: false,
        }
      },
      lowerImgIdx: 0
    }
  },
  methods: {
    lowerIdxChange: function (after, before) {
      this.lowerImgIdx = after;
    },
    lowerCarouselJumpTo : function (toIdx) {
      this.$refs.lowerCarousel.jumpTo(this.lowerImgIdx, toIdx);
    }
  }
}
</script>

<style scoped>
/* carousel */
.upper-carousel-container{
  width: 500px;
  height: 250px;
  border-width: 1px;
  vertical-align: top;
  margin-left: var(--margin-small);
  margin-top: var(--margin-small);
}
/*carousel*/
#lower-img-carousel {
  margin-left: var(--margin-small);
  margin-top: var(--margin-small);
  width: 500px;
  height: 200px;
}
#lower-img-carousel > span {
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
