<template>
  <div 
    ref='avatar'
    class='mlra'
  >
    <img
      v-show="isUrlGiven"
      :width="width"
      :height="height"
      :src="url"
    />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    width: Number,
    height: Number,
    url: {
      type: String,
      default: ""
    }
  },
  computed: {
    isUrlGiven: function() {
      return typeof this.url == "undefined" || this.url == "" ? false : true;
    }
  },
  mounted: function() {
    this.$refs.avatar.style.width = this.width + "px";
    this.$refs.avatar.style.height = this.height + "px";
  }
};
</script>
