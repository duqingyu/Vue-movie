<template>
<div>
 <mt-header fixed title="豆瓣电影" style="background-color:black">
 <span slot="right" @click="top">↑</span>
 </mt-header>
    <input type="text" id="suggestId" name="address_detail" placeholder="输入当前位置查找附近电影院" v-model="address_detail" class="input_style">
    <div id="allmap" style="width:100% ;background-color:black"></div>
</div>
 </template>
<script>
import {MP} from '../http/map.js'
export default {
 data(){
      return{
         address_detail: null, //详细地址
         userlocation:{lng:"",lat:""},          
      }
 },
mounted:function (){
      var total = document.documentElement.clientHeight;
      var colHeight = total-60-document.getElementById("allmap").offsetTop;
      document.getElementById("allmap").style.height=colHeight+"px";
      //console.log(colHeight)
      this.$nextTick(function () {
          MP("0zqdnqOa91lt5OqQeB23b7q5bNZStnKF").then( BMap => {
            var th = this
            var map = new BMap.Map("allmap");            // 创建Map实例
            var point = new BMap.Point(110, 40); // 创建点坐标
            map.centerAndZoom(point,15); //初始化地图*
            map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁止
            var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
              {"input" : "suggestId"
              ,"location" : map
            })
            var myValue
            ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
           console.log(e)
              var _value = e.item.value;
              myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
               this.address_detail = myValue
              setPlace();
            });

            function setPlace(){
              map.clearOverlays();    //清除地图上所有覆盖物
            /*  function myFun(){
                th.userlocation = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
                console.log(th.userlocation)
                map.centerAndZoom(th.userlocation, 18);
                map.addOverlay(new BMap.Marker(th.userlocation));    //添加标注
                
              }*/
              var local = new BMap.LocalSearch(map, { //智能搜索
               renderOptions:{map: map, autoViewport: true}  
              });
              local.searchNearby("电影院", myValue);
            }
            })
          })
  },
  methods:{
top:function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    },
  },
}
</script>
<style>
.input_style{
  width:100%;
} 
</style>