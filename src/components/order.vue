<template>
 <div class="container">  
 <li class="list-group-item" style="background-color:black;color:white; border-bottom:none; ">
  <div class="row">
 <span class="col-xs-4" >欢迎</span>
  <span class="col-xs-8" >{{this.$store.state.user}}</span>
 </div>
 </li>
        <div class="media" v-for="(value,index) in articles">  
            <a class="media-left" href="#">  
                <img :src='value.images.medium' alt="">  
            </a>  
            <div class="media-body">  
                <h4 class="media-heading">  
                    {{value.title}}
                </h4>  
                <p>原名：{{value.original_title}}</p>
              <p>导演：{{value.directors[0].name}}</p>  
            主演： <span v-for="people in value.casts">{{people.name}}</span>
             <p> 类型：{{value.genres[0]}}</p>
            </div>  
 <li class="list-group-item">            
 <div class="row">    
<span class="col-xs-4">收藏{{index+1}}</span>
<span class="col-xs-8" @click="cancle(index)" style="color:green">取消收藏</span>
 </div>
          </li>
        </div>
        <br>
        <br>  
        <br>
</div>
</template>
<script>
import { MessageBox } from 'mint-ui';
    export default {
        data () {
            return {
                articles:[],
            }
        },
        mounted: function() {
      this.articles = this.$store.state.Item;
  },
methods:{
    cancle:function(index){
        this.articles = this.articles.splice(index,1);
       MessageBox.alert("已取消收藏!","提示：欢迎使用豆瓣电影app！")
    },
},
    computed: {
            articles(){
                //  console.log(this.$store.state.params)
                return this.$store.state.Item;
            }
        }
    }
</script>
<style>
body{
    background-color:black;
}
</style>
