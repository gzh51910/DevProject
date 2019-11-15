
// import axios from 'axios';

import { my } from '../network';
// import my from '../Api/my'
export default {
    // 设置命名空间
    // namespaced: true,

    state: {
        goodslist: [{
                "_id": "5dcdfe4d704aa2e5f8fa6cb6",
                "goods_thumb": "https://img07.jiuxian.com/2019/0716/bbfac7baf70742e69d95564bfc7908762.jpg",
                "goods_name": "52°小糊涂神250ml（双瓶装）",
                "proshop2": "限时抢购",
                "xx": "",
                "price": "￥58.00 ",
                "qty": 2,
                "selected": false,
                "allSelected": false
            },
            {
                "_id": "5dcdfe4d704aa2e5f8fa6cb7",
                "goods_thumb": "https://img09.jiuxian.com/2017/0822/78c0b66acb7a4707aedb70de47000a812.jpg",
                "goods_name": "【买一送二】52°酒鬼原浆酒500ml",
                "proshop2": "掌上秒拍",
                "xx": "满送",
                "price": "￥199.00 ",
                "qty": 2,
                "selected": false,
                "allSelected": false
            },
            {
                "_id": "5dcdfe4d704aa2e5f8fa6cb8",
                "goods_thumb": "https://img06.jiuxian.com/2019/0902/29e4f1ce36eb46678ba34c7be529e5d52.jpg",
                "goods_name": "52°白水杜康一坛老酒1000ml",
                "proshop2": "买赠",
                "xx": "限时抢购",
                "price": "￥149.00 ",
                "qty": 2,
                "selected": false,
                "allSelected": false
            }
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

        // 添加到购物车
        addToCart(state, goods) {
            console.log(1111);
            // let test=0;
            // state.goodslist.forEach(item => {
            //     if (goods._id == item._id) {
            //         item.qty = item.qty + goods.qty;
            //         test+=1;
            //     }
            // })
            //  if (test!=0) {
                 state.goodslist.unshift(goods)
            //  }
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
        async changeQtyAsync(context, {
            id,
            qty
        }) {
            console.log('context', context);
            // 发起ajax请求
            // let { data: { data } } = await axios.get(`http://localhost:1910/goods/${id}/kucun`);
            let {
                data: {
                    data
                }
            } = await my.get(`/goods/${id}/kucun`)
            if (qty > data) {
                qty = data;
            }
            console.log(id, qty, data)
            context.commit('changeQty', { id, qty })

        }
    }

}