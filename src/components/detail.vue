<template>
    <div>
    <ul class="list-group" v-for="(value,index) in articles">
    <img :src='value.images.large' />
    <li class="list-group-item">电影名称：{{value.title}}</li>
    <li class="list-group-item">电影原名：{{value.original_title}}</li>
    <li class="list-group-item" v-for="people in value.casts">
        <p>主要演员：{{people.name}}</p>
                 <img :src='people.avatars.small' />         
    </li>
    <li class="list-group-item">年份：{{value.year}}</li>
    <li class="list-group-item">
        平均评分：{{value.rating.average}}
    </li>
      <li class="list-group-item">最高评分：{{value.rating.max}}</li>
       <li class="list-group-item">最低评分：{{value.rating.min}}</li>
       <li class="list-group-item">
       <span class="badge">热</span>
      <router-link :to="{ name:'details',params:{id:value.id}}"> 电影详情摘要 </router-link>
       </li>
       <li class="list-group-item" @click="routerBack" >返回</li>
       <br>
       <br>
</ul>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                title: '主页',
                articles:[],
                selected:'',
                a:'http://api.douban.com/v2/movie/coming_soon',
            }
        },
        mounted: function() {
            this.a=this.a+'?count=1&'+'start='+this.$route.params.id;
            console.log(this.a)
this.$http.jsonp(this.a, {}, {
    }).then(function(response) {
      // 这里是处理正确的回调
this.articles = response.data.subjects
//console.log(this.articles)
        // this.articles = response.data["subjects"] 也可以
    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  },
methods:{
       routerBack(){
        this.$router.go(-1);
      }
},
    }
</script>
<style>
body{
    background-color:black;
}
</style>
