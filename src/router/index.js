import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home/Home.vue'
// import Category from '../views/category/Category.vue'
// import Cart from '../views/cart/Cart.vue'
// import Settlement from '../views/cart/Settlement.vue'
// import Profile from '../views/profile/Profile.vue'
// import Reg from '../views/reg/Reg.vue'
// import Login from '../views/login/Login.vue'
// import Detail from '../views/detail/Detail.vue'
// import homeDetail from '../views/detail/homeDetail.vue'
// import homeList from '../views/detail/homeList.vue'

// import { my } from "../network";

// import Zxg from '../views/category/page/zxg.vue'
// import Zhicai from '../views/category/page/zhicai.vue'
// import Temai from '../views/category/page/temai.vue'
// import Paihang from '../views/category/page/paihang.vue'
// import Mai from '../views/category/page/mai.vue'
// import Li from '../views/category/page/li.vue'
// import Laojiu from '../views/category/page/laojiu.vue'
// import Hongjiu from '../views/category/page/hongjiu.vue'
// import Datan from '../views/category/page/datan.vue'
// import Baijiu from '../views/category/page/baijiu.vue'
// import Yangjiu from '../views/category/page/yangjiu.vue'
// import Putao from '../views/category/page/putao.vue'


Vue.use(VueRouter);

const routes = [
    {
        path: '',
        redirect: '/home',
        component: r => require.ensure([], () => r(require('@/views/home/Home.vue')), 'demo')
    },
    {
        name: "home",
        path: '/home',
        meta: { keepAlive: true },
        component: r => require.ensure([], () => r(require('@/views/home/Home.vue')), 'demo')


    },
    {
        name: 'homelist',
        path: '/homelist/:id',
        component: r => require.ensure([], () => r(require('@/views/detail/homeList.vue')), 'demo')
    },
    {
        path: '/category',
        component: r => require.ensure([], () => r(require('@/views/category/Category.vue')), 'demo')
    },
    {
        path: '/cart',
        component: r => require.ensure([], () => r(require('@/views/cart/Cart.vue')), 'demo'),
        meta: { requiresAuth: true }
    },
    {
        path: '/settlement',
        component: r => require.ensure([], () => r(require('@/views/cart/Settlement.vue')), 'demo'),
        meta: { requiresAuth: true }
    }, {
        name: 'hdetail',
        path: '/hdetail',
        component: r => require.ensure([], () => r(require('@/views/detail/homeDetail.vue')), 'demo')
    }, {
        path: '/profile',
        component: r => require.ensure([], () => r(require('@/views/profile/Profile.vue')), 'demo'),
        meta: { requiresAuth: true }
    }, {
        path: '/login',
        component: r => require.ensure([], () => r(require('@/views/login/Login.vue')), 'demo')
    }, {
        path: '/reg',
        component: r => require.ensure([], () => r(require('@/views/reg/Reg.vue')), 'demo')
    }, {
        name: "goods",
        path: '/goods/:id',
        component: r => require.ensure([], () => r(require('@/views/detail/Detail.vue')), 'demo')
    },
    {
        path: '/zxg',
        component: r => require.ensure([], () => r(require('@/views/category/page/zxg.vue')), 'demo')
    },
    {
        path: '/zhicai',
        component: r => require.ensure([], () => r(require('@/views/category/page/zhicai.vue')), 'demo')
    },
    {
        path: '/temai',
        component: r => require.ensure([], () => r(require('@/views/category/page/temai.vue')), 'demo')
    },
    {
        path: '/paihang',
        component: r => require.ensure([], () => r(require('@/views/category/page/paihang.vue')), 'demo')
    },
    {
        path: '/mai',
        component: r => require.ensure([], () => r(require('@/views/category/page/mai.vue')), 'demo')
    },
    {
        path: '/li',
        component: r => require.ensure([], () => r(require('@/views/category/page/li.vue')), 'demo')
    },
    {
        path: '/datan',
        component: r => require.ensure([], () => r(require('@/views/category/page/datan.vue')), 'demo')
    },
    {
        path: '/hongjiu',
        component: r => require.ensure([], () => r(require('@/views/category/page/hongjiu.vue')), 'demo')
    },
    {
        path: '/laojiu',
        component: r => require.ensure([], () => r(require('@/views/category/page/laojiu.vue')), 'demo')
    },
    {
        path: '/baijiu',
        component: r => require.ensure([], () => r(require('@/views/category/page/baijiu.vue')), 'demo')
    },
    {
        path: '/putao',
        component: r => require.ensure([], () => r(require('@/views/category/page/putao.vue')), 'demo')
    },
    {
        path: '/yangjiu',
        component: r => require.ensure([], () => r(require('@/views/category/page/yangjiu.vue')), 'demo')
    },

];

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {

        let { Authorization } = JSON.parse(localStorage.getItem('user') || '[]');
        console.log(router);

        // let $store = router.app.$store
        // let Authorization = $store.state.common.user.Authorization;
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