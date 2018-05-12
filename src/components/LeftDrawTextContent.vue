<template>
  <div id='left-drawer-main-content'>
    <p> {{title}} </p>
    <ul>
      <li v-for="(text,index) in texts" v-bind:key=index
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
p {
  margin-top: var(--margin-xsmall);
  margin-left: var(--margin-medium);
  font-weight: bold;
}
ul {
  padding-left: var(--margin-medium);
}
li {
  font-size: var(--font-small);
  line-height: var(--font-xlarge);
  display: inline-block;
  padding-left: var(--margin-xxsmall);
  padding-right: var(--margin-xxsmall);
}
</style>
