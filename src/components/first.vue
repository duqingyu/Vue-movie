<template>
    <div>
        <mt-header fixed title="豆瓣电影" style="background-color:black"><span slot="right" @click="top">↑</span></mt-header>
      <mt-navbar v-model="selected">
  <mt-tab-item id="1"><router-link to="/components/coming">即将上映</router-link></mt-tab-item>
  <mt-tab-item id="2"><router-link to="/components/in_theaters">正在上映</router-link></mt-tab-item>
  <mt-tab-item id="3"><router-link to="/components/top250">Top250</router-link></mt-tab-item>
  <mt-tab-item id="4"><router-link to="/components/moviesearch">电影搜索</router-link></mt-tab-item>
</mt-navbar>
<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
 <router-view></router-view>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
<router-view></router-view>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
 <router-view></router-view>
  </mt-tab-container-item>
    <mt-tab-container-item id="4">
  <router-view></router-view>
  </mt-tab-container-item>
</mt-tab-container>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                title: '主页',
                articles:[],
                selected:'',
            }
        },
        mounted: function() {
  },
methods:{
    top:function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }
},
    }
</script>
<style>
body{
    background-color:black;
}
</style>
