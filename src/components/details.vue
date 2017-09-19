<template>
    <div>
<ul class="list-group">
<img :src='src' />
<li class="list-group-item">看过人数：{{articles.collect_count}}</li>
<li class="list-group-item">想看人数：{{articles.wish_count}}</li>
<li class="list-group-item" v-for="countries in articles.countries">地区：{{countries}}</li>
<li class="list-group-item" v-for="directors in articles.directors">导演：{{directors.name}}</li>
<li class="list-group-item"><p>简介</p>{{articles.summary}}</li>
<li class="list-group-item" @click="routerBack" >返回</li>
</ul>
<br>
<br>
    </div>
</template>
<script>
import $jsonp from '../http/http.js'
    export default {
        data () {
            return {
                title: '主页',
                articles:[],
                src:''
            }
        },
        mounted: function() {
            var that = this;
            $jsonp('https://api.douban.com/v2/movie/subject/'+that.$route.params.id ,{},function (data) {
                that.articles= data;
                that.src = data.images.large
            })

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
