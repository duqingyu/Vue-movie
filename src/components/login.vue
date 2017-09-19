<template>

 <div>
  <br><br>
 <li class="list-group-item" style="background-color:#222423;border:none  "> 
 <img src="../assets/7.jpg" style="width:100%;height:150px" />
        <div class="login-wrap" v-show="showLogin">
            <h3  style="color:white">LOGIN</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="user" v-model="username"  style="background-color:#161a1d;color:white">
            <input type="password" placeholder="password" v-model="password" style="background-color:#161a1d;color:white">
            <button v-on:click="login" style="background-color:#131313">登录</button>
            <span v-on:click="ToRegister" style="color:white">没有账号？马上注册</span>
        </div>

        <div class="register-wrap" v-show="showRegister">
            <h3 style="color:white">REGISTER</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="user" v-model="newUsername" style="background-color:#161a1d;color:white">
            <input type="password" placeholder="password" v-model="newPassword" style="background-color:#161a1d;color:white">
            <button v-on:click="register" style="background-color:#131313">注册</button>
            <span v-on:click="ToLogin" style="color:white">已有账号？马上登录</span>
            <br>
        </div>
        </li>    
         <br><br> <br><br>
    </div>
</template>
<script>
// json-server .\mock-data.json || npm run mock 启动模拟数据
import { MessageBox } from 'mint-ui';
    export default {
        data () {
            return {
               showLogin: true,
                showRegister: false,
                showTishi: false,
                tishi: '',
                username: '',
                password: '',
                newUsername: '',
                newPassword: '',
            }
        },
        mounted: function() {

  },
methods:{
    ToRegister:function(){
        this.showLogin = false;
        this.showRegister = true;
    },
        ToLogin:function(){
        this.showLogin = true;
        this.showRegister = false;
    },
   login:function(){
 this.$http.get('http://localhost:3000/users?username='+this.username+'&password='+this.password).then((response) => { 
                        //这里在isLogin方法中先判断一下后台返回的是否为空值，如果不是然后提交后台返回的值。
                        if(response.body != null & response.body.length > 0){ 
                            this.$store.commit('islogin',response.body[0].username);
                            this.username=''
                            this.password= ''
                            console.log(this.$store.state.user)
                            this.$router.push({ path: '/components/order' }) 
                        }else{
                            MessageBox.alert('请输入正确的用户名和密码！！！');
                            this.username=''
                            this.password=''
                        }
                        
                    }).then((error)=> this.error = error)
    },
    register:function(){
    this.$http.post('http://localhost:3000/users',{username:this.newUsername,password:this.newPassword}).then(
            function (res) {
                // 处理成功的结果
         MessageBox.alert("注册成功!","欢迎使用豆瓣电影App")
         this.newUsername = "";
         this.newPassword = "";
              console.log(res.data)
            },function (res) {
            // 处理失败的结果
            console.log('1')
            }
        );
        
    },
  /*   logintest:function(){
  MessageBox.alert("登陆成功!","欢迎使用豆瓣电影App")
    },*/
},
    }
</script>
<style>
    .login-wrap{text-align:center;}
    input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
    p{color:red;}
    button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
    span{cursor:pointer;}
    span:hover{color:#41b883;}
    h3{color:white}
</style>
