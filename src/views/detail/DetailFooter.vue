<template>
  <div style=" width: 100%;z-index:10;position:fixed;bottom: 0;background: #fff">
    <el-row style="text-align:center">
      <el-col :span="4" style="font-size: 14px;color: #626365">
        <i class="el-icon-service"></i>
        <p>侍酒师</p>
      </el-col>
      <el-col :span="4" style="font-size: 14px;color: #626365">
        <i class="el-icon-star-on"></i>
        <p>收藏</p>
      </el-col>
      <el-col :span="4" style="font-size: 14px;color: #626365;position:relative">
        <i class="el-icon-goods"></i>
        <p>购物车</p>
        <div class="detailTag">
        <el-badge :value="goodsNumber" class="item" >
        </el-badge>
        </div>
      </el-col>
      <el-col :span="6" 
      style="background: #fc5a5a;color:#fff;line-height:46px"
      @click.native="addToCart"
      >加入购物车</el-col>
      <el-col :span="6" style="background: #3c3f51;color:#fff;line-height:46px;"  @click.native="goto">立即购买</el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props:["goods"],
  computed:{
      goodsNumber(){
        return this.$store.state.cart.goodslist.length;
      }
  },
  methods:{
   goto(){
       this.$router.push('/cart');
   },
     addToCart(){
       let {goodslist:goods} = this.$store.state.cart;
       let goods= {
                "_id": goods._id,
                "goods_thumb": goods.goods_thumb,
                "goods_name": goods.goods_name,
                "proshop2": goods.proshop2?goods.proshop2:"",
                "xx":goods.xx?goods.xx:"",
                "price": goods.price.slice(0,1)=="￥"?goods.price:"￥"+goods.price,
                "qty":goods.qty ,
                "selected": false,
                "allSelected": false
            }
       console.log(goods)
      this.$store.commit("addToCart",goods);
    }
  }
};
</script>
<style lang="css" scoped>
.detailTag{
    position: absolute;
    top:0;
    right:12px;
}
</style>