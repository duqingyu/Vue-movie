import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


import VueRouter from "vue-router"
import VueResource from 'vue-resource'; 
Vue.use(VueResource);
//开启debug模式
Vue.config.debug = true;
Vue.use(VueRouter);

Vue.use(MintUI)



import store from './vuex/store'
import detail from './components/detail.vue'
import coming from './components/coming.vue'
import details from './components/details.vue'
import in_theaters from './components/in_theaters.vue'
import in_theatersdetail from './components/in_theatersdetail.vue'
import top250 from './components/top250.vue'
import top250detail from './components/top250detail.vue'
import moviesearch from './components/moviesearch.vue'
import searchdetail from './components/searchdetail.vue'
import us_box from './components/us_box.vue'
import order from './components/order.vue'
import login from './components/login.vue'
import help from './components/help.vue'
//axios.defaults.baseURL = 'https://way.jd.com/jisuapi/get';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 创建一个路由器实例并且配置路由规则
const router = new VueRouter({
  base: __dirname,
  routes: [
{ path: '/components/detail/', name:'detail',component: detail },
{ path: '/components/coming', name:'coming',component: coming },
{ path: '/components/details/', name:'details',component: details },
{ path: '/components/in_theaters', name:'in_theaters',component: in_theaters },
{ path: '/components/in_theatersdetail', name:'in_theatersdetail',component: in_theatersdetail },
{ path: '/components/top250', name:'top250',component: top250 },
{ path: '/components/top250detail', name:'top250detail',component: top250detail },
{ path: '/components/moviesearch', name:'moviesearch',component: moviesearch },
{ path: '/components/searchdetail', name:'searchdetail',component: searchdetail },
{ path: '/components/us_box', name:'us_box',component: us_box },
{ path: '/components/order', name:'order',component: order },
{ path: '/login', name:'login',component: login },
{ path: '/help', name:'help',component: help },
  ]
})

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
      router: router,
      store,
      render: h => h(App)
}).$mount('#app')

