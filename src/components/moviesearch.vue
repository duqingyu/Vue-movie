<template>
        <div>     
 <div class="input-group">
           <input type="text" class="form-control" v-model="search" placeholder="输入电影名称或演员等关键字" />
           <span class="input-group-addon"><i class="glyphicon glyphicon-search" @click="onKeyDown"></i></span>
  </div>
  <br>
    <ul class="list-group" v-for="(value,index) in articles">
   <router-link :to="{ name:'searchdetail',params:{id:index,search:search}}">
    <img :src='value.images.large' /> 
    </router-link>
   <li class="list-group-item">  {{value.title}} </li>
   <li class="list-group-item">  
类型：
   {{value.genres[0]}}
   {{value.genres[1]}}
   {{value.genres[2]}}
</li>
    </ul>
  <br><br>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                title: '主页',
                articles:[],
                search:'',
            }
        },
        mounted() {
    },
methods:{
     onKeyDown(){
         var a = 'http://api.douban.com/v2/movie/search?q=';
          a = a + this.search;
 this.$http.jsonp(a, {}, {
    }).then(function(response) {
      // 这里是处理正确的回调
this.articles = response.data.subjects;
//console.log(this.articles)
        // this.articles = response.data["subjects"] 也可以
    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
    },
 
},
    }
</script>
<style>

</style>
