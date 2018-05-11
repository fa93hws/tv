<template>
  <div>
    <ul v-for="idxO in [0,1]" v-bind:key="idxO"
      id = 'right-col-tab-content' class='h-list no-padding'>
      <li
        v-for="idx in numberToRange(mode[idxO])"
        v-bind:key="idx"
        v-bind:class="['clickable',{long:mode[idxO]==1, short:mode[idxO]==2}]"
      >
        {{getText(idxO,idx)}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RightTabContent',
  props: {
    texts: {
      type: Array,
      required: true,
    },
    mode:{
      type: Array,
      required: true
    },
  },
  mounted: function () {
  },
  methods: {
    getText: function (row, col) {
      return this.texts[row * this.mode[0] + col];
    },
    numberToRange: function (int) {
      let out = [];
      for (let i=0; i<int; i++) out.push(i);
      return out;
    }
  }
}
</script>

<style scoped>
ul {
  width: 90%;
  margin: var(--margin-small) auto 0px auto;
}
li {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 5%;
}
li:hover {
  color: orangered;
}
li.long {
  width: 90%;
}
li.short {
  width: 40%;
}
</style>
