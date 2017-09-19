<template>
    <div>
        <mt-header fixed title="豆瓣电影" style="background-color:black"><span slot="right" @click="top">↑</span></mt-header>
      <mt-navbar v-model="selected">
  <mt-tab-item id="1"><router-link to="/components/us_box">北美票房榜</router-link></mt-tab-item>
</mt-navbar>
<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
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
