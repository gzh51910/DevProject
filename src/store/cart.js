
// import axios from 'axios';

import { my } from '../network';
// import my from '../Api/my'
export default {
    // 设置命名空间
    // namespaced: true,

    state: {
        goodslist: [
]
    },
    getters: {
        totalPrice(state) {
            let total = 0;
            state.goodslist.forEach(item => {
                if (item.selected) {
                    total += Number(item.price.slice(1)) * item.qty;
                }
            })
            return total
        }
    },

    //   mutation的调用方式：store.commit(mutation)
    mutations: {
     
        addlist(state,list){
            state.goodslist=list
        },
        // 删除单个商品
        // state:上面的state
        // payload:触发mutation时传入的参数
        removeFromCart(state, id) {
            // state.goodslist.forEach((item,idx)=>{
            //     if(item.id === id){
            //         state.goodslist.splice(idx,1)
            //     }
            // })
            state.goodslist = state.goodslist.filter(item => item._id != id)
        },

        // 清空购物车
        // clearCart(state) {
        //     state.goodslist = []
        // },

        // 列表页添加到购物车
        addToCart(state, goods) {
            var test=0;
            state.goodslist.forEach(item => {
                if (goods._id == item._id) {
                    item.qty = item.qty + goods.qty;
                    test+=1;
                }
            })
             if (test==0) {
                 state.goodslist.unshift(goods)
             }
        },
        // 修改数量
        changeQty(state, payload) {
            state.goodslist.forEach(item => {
                if (item.id === payload.id) {
                    item.qty = payload.qty;
                }
            })
        }
    },

    // actions：间接修改state的方式
    // 触发action: store.dispatch(action)
    actions: {
        // context: 一个类似于store的对象
        // payload: 触发action时传入的参数
        async ['adddata'](store) {
            const {rootState,commit } = store
            console.log("11111",rootState.common.user.username) // 打印根 state
                const { data:{data}} = await my.get('/cart', {gather: "cart",username:rootState.common.user.username})
                let arr=[]
                data.forEach(item=>{
                    arr.push(item.goods)
                })
                commit('addlist', arr)
                console.log(arr);
                
           
        }
    }

}