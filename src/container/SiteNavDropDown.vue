<template>
  <div>
    <span>网站导航 &#9661;</span>
    <div id="drop-down" ref="container">
      <table id='outer-table'>
        <tr>
          <td ref='outterCell0'>
            <table id='inner-table' border='1' ref='innerTable0'>
              <!-- <tr> 
                <td colspan='4' class='bold font-large' style='color:red'> 主题市场 </td>
              </tr> -->
              <tr >
                <td>女装</td> <td>男装</td> <td>内衣</td> <td>鞋靴</td>
              </tr>
              <tr >
                <td>女装</td> <td>男装</td> <td>内衣</td> <td>鞋靴</td>
              </tr>
              <tr >
                <td>女装</td> <td>男装</td> <td>内衣</td> <td>鞋靴</td>
              </tr>
              <tr >
                <td>女装</td> <td>男装</td> <td>内衣</td> <td>鞋靴</td>
              </tr>
              <tr >
                <td>女装</td> <td>男装</td> <td>内衣</td> <td>鞋靴</td>
              </tr>
              <tr >
                <td>女装</td> <td>男装</td> <td>内衣</td> <td>鞋靴</td>
              </tr>
              <tr >
                <td>女装</td> <td>男装</td> <td>内衣</td> <td>鞋靴</td>
              </tr>
            </table>
          </td>

          <td ref='outterCell1'>
          </td>

          <td ref='outterCell2'>
          </td>

          <td ref='outterCell3'>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteNavDropDown',
  mounted: function(){
    // adjust right aligned
    let bodyWidth = document.body.clientWidth;
    let mainWidth = document.getElementsByClassName('main-container')[0].clientWidth;
    this.$refs.container.style.right = (bodyWidth-mainWidth)/2 + "px";
    // set width for individualWindow
    let indvidualWindowWidth = mainWidth/4 + "px";
    for (let i=0; i<4; i++){
      this.$refs['outterCell'+i].style.width = indvidualWindowWidth;
    }
  },
  data: function(){
    return {
    }
  }
}
</script>

<style scoped>
#drop-down{
    -webkit-padding-start: 0px;
    -webkit-margin-before: 0px;
    -webkit-margin-after: 0px;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    position: absolute;
    width: var(--body-width);
    /* right:50px;  */
    /* to be determined in js */
    left:auto;
    padding:0px;


    
    /* border-style:solid; */
    /* height:20px; */
}
#drop-down > *{
  border-style:solid;
  display:inline-block;
  padding:0 0 0 0;
  margin:0 0 0 0;
}
hr{
  border-style:solid;
  width:0px;

}
#outer-table{

  /* border-style:solid; */
}
#outer-table>tr>td:not(:last-child){
  border-color:silver;
  border-right:1px solid;
}
#inner-table{
  border-collapse: collapse;
  width:100%
}
/* #inner-table >tr{
  height:2px
}
#inner-table >tr >td{
  height:10px;
} */
td, tr{
  padding:0px;
  margin:0px;
  overflow:hidden;
}
tr{
  height:20px
}
</style>
