<template>
  <div id="app">
  <div v-show="photo" class="banner" style="position:relative; top:-57px; left:0px;">
     <img src="./assets/timg.jpg" />
     <li class="list-group-item" style="background-color:black;color:white;border:none">版本&nbsp;&nbsp;2.14</li>
  </div>
  <div v-show="neirong">
    <div class="page-wrap">
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="首页">
         <first></first>
        </mt-tab-container-item>
        <mt-tab-container-item id="票榜">
        <second></second>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
        </mt-tab-container-item>
        <mt-tab-container-item id="附近">
        <fourth></fourth>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
      <third></third>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <img slot="icon" src="./assets/1.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="票榜">
        <img slot="icon" src="./assets/2.png">
        票榜
      </mt-tab-item>
      <mt-tab-item id="3">
        <img slot="icon" src="./assets/100x100.png">
      </mt-tab-item>
      <mt-tab-item id="附近">
        <img slot="icon" src="./assets/3.png">
        附近
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="./assets/4.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
    </div>
  </div>
</template>

<script>
  import first from './components/first.vue'
  import second from './components/second.vue'
  import third from './components/third.vue'
  import fourth from './components/fourth.vue'
  export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected:"首页",
      articles:[],
      neirong:false,
      photo:true
    }
  },
         mounted: function() {
   setTimeout(this.show,3000);
  },
  methods: {
    show:function(){
     this.neirong = true;
     this.photo = false;
    }
  },
  components: { first,second,third,fourth}
}
</script>

<style>
body{
  background-color:black;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
