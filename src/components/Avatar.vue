<template>
  <div ref='avatar'>
    
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props:{
    width: Number,
    height: Number
  },
  mounted: function () {
    this.$refs.avatar.style.width = this.width + 'px';
    this.$refs.avatar.style.height = this.height + 'px';
  }
}
</script>

<style scoped>
div {
  background: silver;
}
</style>
