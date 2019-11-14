import {
    request
} from '../network/request';
export default {
    state: {
        goodslist: [{
                goods_id: "5dcbf7772d6ba972dbcda8fd",
                goods_thumb: "https://img09.jiuxian.com/2019/0404/c398ad1ef8d34a47a1a7f4e7421e76762.png",
                goods_name: "45°古井大曲口感浓香型白酒250ml",
                proshop2: "限时抢购",
                xx: "买赠",
                sName: "博酒汇官方旗舰店",
                price: "￥199.00 ",
                qty:2
            },
            {
                goods_id: "5dcbf7772d6ba972dbcda905",
                goods_thumb: "https://img08.jiuxian.com/2018/0102/0f8860587dc84f1992dc8a0e710d31d12.jpg",
                goods_name: "五粮液股份A级佳宾级小酒版125ml",
                proshop2: "多买多赠",
                xx: "限时抢购",
                sName: "博酒汇官方旗舰店",
                price: "￥9.90 ",
                qty:2
            },
            {
                goods_id: "5dcbf7772d6ba972dbcda8df",
                goods_thumb: "https://img09.jiuxian.com/2017/0822/78c0b66acb7a4707aedb70de47000a812.jpg",
                goods_name: "【买一送二】52°酒鬼原浆酒500ml",
                proshop2: "掌上秒拍",
                xx: "满送",
                sName: "",
                price: "￥199.00 ",
                qty:2
            }
        ]
    },
    getters:{
            totalPrice(state) {
                return state.goodslist.reduce((prev, item) => prev + Number(item.price.slice(1)) * item.qty, 0);
            }
        },
    mutations: {
        removeGoods(state,id) {
            state.goodslist.forEach((item,index)=>{
                    if(item.goods_id === id){
                        state.goodslist.splice(index,1)
                    }
                })
        },
        // addGoods(id){
        //     let id

        // }
    }

}