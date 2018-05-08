<template>
  <div id = 'left-drawer-container'>
    <div id = 'left-drawer-menu-container' class = 'solid-border'>
      <ul id = 'left-drawer-menu-ul'>
        <li
          v-for="(item, index) in menu" v-bind:key=item.index
        >
          {{item}}
        </li>
      </ul>
    </div>
    <div id = 'left-drawer-content-container' class = 'solid-border'>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftDrawer",
  data: function () {
    return {
      menu: ["女装/男装/内衣","珠宝/眼镜/手表", "美食/动漫/饮食", "汽车/二手车/用品"]
    }
  }
}
</script>

<style scoped>
/* general */
ul{
  margin: 0;
  padding: 0;
}
li{
  text-align: center;
  color: grey;
}
/* wrapper */
#left-drawer-container {
  height: 522px;
}
/* menu */
#left-drawer-menu-container {
  width: 188px;
  height: 100%;
  display: inline-block;
  vertical-align: top;
  border-top:none;
  border-color: orangered;
  border-width: 1px;
}
#left-drawer-menu-ul > li {
  line-height: 40px;  

}
#left-drawer-menu-ul > li:first-child{
  padding-top: 10px;
}
/* content */
#left-drawer-content-container{
  display: inline-block;
  vertical-align: top;
  height: 100%;
  width: 800px;
  margin-top: -2px;
  margin-left:-5px;
  border-color: orangered;
  border-width: 2px;
}
</style>
