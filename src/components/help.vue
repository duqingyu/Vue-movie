<template>

 <div class="page-swipe" >
        <mt-swipe :auto="0" :show-indicators="true" :continuous="false" :defaultIndex="1">
            <mt-swipe-item class="slide1">
               
                    <img src="../assets/timg2.png"/>
                    
               
            </mt-swipe-item>
            <mt-swipe-item class="slide2">
            
                    <img src="../assets/timg3.jpg"/>
             
            </mt-swipe-item>
            <mt-swipe-item class="slide3">
          
                    <img src="../assets/timg1.jpg" />
          
            </mt-swipe-item>
        </mt-swipe>
    </div>

</template>
<script>
    export default {
        data () {
            return {
   
            }
        },
        mounted: function() {

  },
methods:{

},
    }
</script>

<style>
.mint-swipe {
    width: 100%;
    height: 600px;
    color: #fff;
    font-size: 30px;
    text-align: center;
}
.page-swipe img{
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }

.slide1 {
    background-color: black;
    color: #fff;
    position: relative;
}
.slide2 {
    background-color: black;
    color: #000;
    position: relative;
}

.slide3 {
    background-color: black;
    color: #fff;
    position: relative;
}
</style>
