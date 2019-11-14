import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Category from '../views/category/Category.vue'
import Cart from '../views/cart/Cart.vue'
import Profile from '../views/profile/Profile.vue'
import Reg from '../views/reg/Reg.vue'
import Login from '../views/login/Login.vue'
import Detail from '../views/detail/Detail.vue'
import goodList from '../views/category/page/goodlist.vue'
import { my } from "../network";

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
        path: '/goods/:id',
        component: Detail
    },
    {
        path: '/goodlist',
        component: goodList
    }

];

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        // 获取token
        let { Authorization } = JSON.parse(localStorage.getItem('user'));
        // console.log(router);

        // let $store = router.app.$store
        // let Authorization = router.app.$store.state.common.user.Authorization;
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