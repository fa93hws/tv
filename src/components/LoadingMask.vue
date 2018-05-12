<template>
  <div class='lazy-load-mask'>
    <div>
      <p>Loading!!!!!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LazyLoadMask"
};
</script>

<style>
.lazy-load-mask > div {
  position: relative;
  width: 100%;
  height: 100%;
  font-size: var(--font-xxxlarge);
  text-align: center;
  background: white;
}
.lazy-load-mask p {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  color: red;
  transform: translateY(-50%);
}
</style>
