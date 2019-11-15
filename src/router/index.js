import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Category from '../views/category/Category.vue'
import Cart from '../views/cart/Cart.vue'
import Settlement from '../views/cart/Settlement.vue'
import Profile from '../views/profile/Profile.vue'
import Reg from '../views/reg/Reg.vue'
import Login from '../views/login/Login.vue'
import Detail from '../views/detail/Detail.vue'


import { my } from "../network";

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
        component: Cart,
    },
    {
        path: '/settlement',
        component: Settlement,
        meta: { requiresAuth: true }
    }, {
        path: '/profile',
        component: Profile,
        meta: { requiresAuth: true }
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/reg',
        component: Reg
    }, {
        name:'goods',
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

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        // 获取token
        // let { Authorization } = JSON.parse(localStorage.getItem('user'));
        // console.log(router);

        let $store = router.app.$store
        let Authorization = $store.state.common.user.Authorization;
        console.log('校验结果：', Authorization)
        if (Authorization) {
            // 登录则放行
            next();

            // 发送校验请求
            router.app.$axios.get('http://localhost:1910/verify', {
                headers: {
                    Authorization
                }
            }).then(({ data }) => {
                console.log('校验结果：', data)
                if (data.status === 0) {
                    // $store.commit('logout');
                    next({
                        path: '/login',
                        query: {
                            redirectUrl: to.fullPath
                        }
                    })
                }
            })
        } else {
            // 否则跳到登录页面
            // router.push('/login')
            next({
                path: '/login',
                query: {
                    redirectUrl: to.fullPath
                }
            })
        }
    } else {
        next();
    }
    console.log('全局.beforeEach');
})


export default router