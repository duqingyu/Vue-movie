<template>
<div>
<br>
 <div class="container">  
        <div class="media" v-for="(value,index) in articles">  
            <a class="media-left" href="#">  
                <img :src='value.subject.images.medium' alt="">  
            </a>  
            <div class="media-body">  
                <h4 class="media-heading">  
                    {{value.subject.title}}
                </h4>  
                <p>{{value.subject.original_title}}</p>
              <p>导演：{{value.subject.directors[0].name}}</p>  
            主演： <span v-for="(people,index) in value.subject.casts" @click="a">{{people.name}}</span>
             <p> 类型：{{value.subject.genres[0]}}</p>
            </div>  
            <li class="list-group-item" v-show="show"  v-for="people in value.subject.casts">
             <p>{{people.name}}</p>
                 <img :src='people.avatars.small' />  
            </li>
             <li class="list-group-item">排名：{{value.rank}}</li>
        </div>  
        <br><br><br>
</div>
</div>
</template>
<script>
    export default {
        data () {
            return {
                title: '主页',
                articles:[],
                show:false
            }
        },
       mounted: function() {
this.$http.jsonp('http://api.douban.com/v2/movie/us_box', {}, {
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
methods:{
    a:function(){
        if(this.show == false){
            this.show = true;
        }
        else{
            this.show = false;
        }
    }
},
    }
</script>
<style>
.media{
   color:white;
}
.list-group-item{
    color:black;
}
</style>
