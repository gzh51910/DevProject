import Vue from 'vue';

import VueRouter from 'vue-router';



Vue.use(VueRouter);

import goodsList from '../page/goodlist.vue'

const router=new VueRouter({
    routes:[
        {
            name:'goodlist',
            path:'/goodlist',
            component:goodsList
        },
    ]
});
export default router;