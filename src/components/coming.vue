<template>
    <div>
    <br>
    <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :bottomPullText="bottomText" :auto-fill="false"   ref="loadmore">

<ul class="list-group" v-for="(value,index) in articles">
<router-link :to="{ name:'detail',params:{id:index}}">
<img :src='value.images.large' />
</router-link>
<li class="list-group-item"> 
电影名称：{{value.title}}
</li>
<li class="list-group-item">  
类型：
   {{value.genres[0]}}
   {{value.genres[1]}}
   {{value.genres[2]}}
</li>
<li class="list-group-item" style="background:black"> 
<button  type="button"  class="btn btn-lg btn-danger" @click="save(index)">收藏</button>
</li>
</ul>
</mt-loadmore>
<li class="list-group-item" v-show="a" style="background:black;color:white;border:none">没有更多数据...</li>
<br>
<br>
<br>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import { Loadmore } from 'mint-ui';
    export default {
        data () {
            return {
                title: '主页',
                articles:[],
                selected:'',
                number:10,
                bottomText:'加载中...',
                allLoaded:false,
                a:false,
            }
        },
        mounted: function() {
            this.shuju();
  },
methods:{
    shuju: function() {
this.$http.jsonp('http://api.douban.com/v2/movie/coming_soon?count='+this.number, {}, {
    }).then(function(response) {
      // 这里是处理正确的回调
this.articles = response.data.subjects
console.log(this.articles)
        // this.articles = response.data["subjects"] 也可以
    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  },
save(index){

                var thisItem = this.articles.splice(index,1,this.articles[index])
                   //console.log(thisItem)
                this.$store.commit('pushItem',thisItem);
                //console.log(this.$store.state.Item)
              MessageBox.alert("收藏成功!","提示：我的-我的收藏")

            },
loadBottom(){
   if(this.number >=55){
        this.a = true;
       this.allLoaded = true;
   }
    else{
        this.number+=10;
    this.shuju();
    this.$refs.loadmore.onBottomLoaded();
    }
  
},

},
    }
</script>
<style>
body{
    background-color:black;
}
</style>
