<template>
  <div>
    <v-tabs
      v-model="active"
      grow:true
    >
      <v-tab
        ref="tab"
        v-for="(title,idx) in tabTitles" v-bind:key="idx"
        @mouseover="tabMouseOver(idx)"
      >
        title
      </v-tab>
      <v-tab-item
        v-for="n in 4"
        :key="n"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      tabTitles: ['充话费','充流量','充固话','充宽带'],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  methods: {
    tabMouseOver: function (idx) {
      const active = parseInt(idx);
      this.active = active.toString();
      // const active = parseInt(this.active)
      // this.active = (active < 2 ? active + 1 : 0).toString()
    }
  }
}
</script>

<style scoped>
ul.tab-controller {
  width: 90%;
  margin-left: var(--margin-xsmall);
  margin-top: var(--margin-xxsmall);
}
ul.tab-controller > li {
  font-size: var(--font-small);
  width:25%;
}
ul.tab-controller > li.selected {
  color: orangered;
}
/* content 1*/
</style>
