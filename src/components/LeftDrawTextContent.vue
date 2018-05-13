<template>
  <div class = 'container__left-drawer-content'>
    <p> {{title}} </p>
    <ul class = 'list__left-drawer-content'>
      <li
        class = 'list-item__left-drawer-content'
        v-for="(text,index) in texts" v-bind:key=index
      >
        {{text}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LeftDrawTextContent",
  props: {
    title: String,
    texts: Array
  }
};
</script>

<style scoped>
.container__left-drawer-content > p {
  margin-top: var(--margin-small);
  margin-left: var(--margin-medium);
  font-weight: bold;
}
.list__left-drawer-content {
  padding-left: var(--margin-medium);
}
.list-item__left-drawer-content {
  font-size: var(--font-small);
  line-height: var(--font-xlarge);
  display: inline-block;
  padding-left: var(--margin-xxsmall);
  padding-right: var(--margin-xxsmall);
}
</style>
