import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Category from '../views/category/Category.vue'
import Cart from '../views/cart/Cart.vue'
import Profile from '../views/profile/Profile.vue'
import Reg from '../views/reg/Reg.vue'
import Login from '../views/login/Login.vue'
import Detail from '../views/detail/Detail.vue'
import Zxg from '../views/category/page/zxg.vue'
import Zhicai from '../views/category/page/zhicai.vue'
import Temai from '../views/category/page/temai.vue'
import Paihang from '../views/category/page/paihang.vue'
import Mai from '../views/category/page/mai.vue'
import Li  from '../views/category/page/li.vue'
import Laojiu from '../views/category/page/laojiu.vue'
import Hongjiu from '../views/category/page/hongjiu.vue'
import Datan from '../views/category/page/datan.vue'
import Baijiu from '../views/category/page/baijiu.vue'
import Yangjiu from '../views/category/page/yangjiu.vue'
import Putao from '../views/category/page/putao.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category,

    },
    {
        path: '/cart',
        component: Cart
    }, {
        path: '/profile',
        component: Profile
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/reg',
        component: Reg
    }, {
        path: '/goods',
        component: Detail
    },
    {
        path: '/zxg',
        component: Zxg
    },
    {
        path:'/zhicai',
        component: Zhicai
    },
    {
        path: '/temai',
        component: Temai
    },
    {
        path: '/paihang',
        component: Paihang
    },
    {
        path: '/mai',
        component: Mai
    },
    {
        path: '/li',
        component: Li
    },
    {
        path: '/datan',
        component: Datan
    },
    {
        path: '/hongjiu',
        component: Hongjiu
    },
    {
        path: '/laojiu',
        component: Laojiu
    },
    {
        path: '/laojiu',
        component: Laojiu
    },
    {
        path: '/baijiu',
        component: Baijiu
    },
    {
        path: '/putao',
        component: Putao
    },
    {
        path: '/yangjiu',
        component: Yangjiu
    },

];

const router = new VueRouter({
    routes
})

export default router