<template>
  <v-tabs v-model="active" class = 'city-picker-tabs' :grow="true">
    <v-tab v-for="(title, idx) in tabTitle" v-bind:key="idx"
      class = 'city-picker-tab'>
      {{title}}
    </v-tab>
    <v-tab-item v-for="(cities, idx) in cityList" v-bind:key="idx"
      class = 'city-picker-tab-item'>
      <ul class='h-list no-margin no-padding city-picker-items'>
        <li v-for="(city,idx2) in cities" v-bind:key="idx2"
          class='city-picker-item clickable'
          @mouseover="mouseover(city)" @mousedown="mousedown(city)"
        >
          {{city}}
        </li>
      </ul>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CityP',
  computed: {
    ...mapGetters({
      cityList: 'cityList'
    })
  },
  data: function () {
    return {
      active: null,
      text: 123,
      tabTitle: ['热门','ABC','DEF','GHI','JKG']
    }
  },
  methods: {
    mousedown: function (city) {
      this.$emit('mousedown', city)
    },
    mouseover: function (city) {
      this.$emit('mouseover', city)
    }
  }
}
</script>

<style scoped>
.city-picker-tabs {
  width: 240px;
  height: 150px;
  background: white;

  /* border-color: grey;
  border-width: 1px;
  border-style: solid; */
}
.city-picker-tabs >>> .tabs__slider-wrapper{
  display: none;
}
.city-picker-tabs >>> tabs__container, .city-picker-tab {
  height: 20px;
}
.city-picker-tab >>> a.tabs__item {
  padding: 0px;
  line-height: 20px;
  font-size: var(--font-small);
}
li.city-picker-item {
  margin-right: var(--margin-small);
  font-size: var(--font-small);
  line-height: 20px;
}
li.city-picker-item:hover{
  background: orangered;
  color: white;
}
.city-picker-tab-item {
  width: 100%;
  margin: 0px auto 0px auto;
}
</style>

