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
      <el-col
        :span="4"
        style="font-size: 14px;color: #626365;position:relative"
        @click.native="goto"
      >
        <i class="el-icon-goods"></i>
        <p>购物车</p>
        <div class="detailTag">
          <el-badge :value="goodsNumber" class="item"></el-badge>
        </div>
      </el-col>
      <el-col
        :span="6"
        style="background: #fc5a5a;color:#fff;line-height:46px"
        @click.native="addToCart();homeAddToCart();addHomeList()"
      >加入购物车</el-col>
      <el-col
        :span="6"
        style="background: #3c3f51;color:#fff;line-height:46px;"
        @click.native="goto"
      >立即购买</el-col>
    </el-row>
  </div>
</template>
<script>
import { my } from "../../network";
// import { log } from 'util';
import axios from "axios";
export default {
  data() {
    return {};
  },
  props: ["goods", "homeGoods", "id", "hListgoods"],
  computed: {
    goodsNumber() {
      return this.$store.state.cart.goodslist.length;
    }
  },
  methods: {
    goto() {
      this.$router.push("/cart");
    },
    addHomeList() {
      // if (this.goods) {
      //   let data = this.goods;
      //   console.log("111111", data);
      //   let id = this.id;
      //   let qty = data.qty;
      //   let selected = false;
      //   let allSelected = false;
      //   let price =
      //     data.price.slice(0, 1) == "￥" ? data.price : "￥" + data.price;
      //   let goods_thumb = data.goods_thumb;
      //   let goods_name = data.goods_name;
      //   console.log(this.$store.state.cart.goodslist);
      //   let username = this.$store.state.common.user.username;
      //   let { data: data1 } = await my.post("/cart", {
      //     username,
      //     selected,
      //     allSelected,
      //     price,
      //     id,
      //     qty,
      //     goods_thumb,
      //     goods_name
      //   });
      //   console.log(data1);
      //   this.$store.dispatch("adddata");
      // }
    },
    async addToCart() {
      if (this.goods) {
        let data = this.goods;
        let id = this.id;
        let qty = data.qty;
        let selected = false;
        let allSelected = false;
        let price =
          data.price.slice(0, 1) == "￥" ? data.price : "￥" + data.price;
        let goods_thumb = data.goods_thumb;
        let goods_name = data.goods_name;
        let username = this.$store.state.common.user.username;
        let current = this.$store.state.cart.goodslist.filter(item => item.id == this.id)[0]
        if(current){

        let current = this.$store.state.cart.goodslist.filter(
          item => item.id == this.id
        )[0];
        console.log("current", current);
        if (current) {
          //  let  qty1=current.qty+1;
          let { data } = await axios.patch(
            `http://10.3.136.140:1910/cart/${this.id}`,
            {
              qty: current.qty + 1
            }
          );
          this.$store.dispatch("adddata");
          console.log(data);
        } else {
          let { data: data1 } = await my.post("/cart", {
            username,
            selected,
            allSelected,
            price,
            id,
            qty,
            goods_thumb,
            goods_name
          });
          console.log(data1);
          this.$store.dispatch("adddata");
        }

        //    this.$store.state.cart.goodslist.forEach(async item=>{
        //       if(item.id==this.id){
        //       let qty1=qty++;
        //         let { data } = await axios.patch(`http://10.3.136.140:1910/cart/${this.id}`, {
        //         qty1
        //         });
        //         this.$store.dispatch('adddata')
        //         console.log("22222",data);
        //       }
        //       else{
        //  console.log(this.$store.state.common.user.username);
        //   let username=this.$store.state.common.user.username
        //            let { data:data1 } = await my.post("/cart", {
        //          username,
        //       selected,
        //       allSelected,
        //       price,
        //           id,
        //           qty ,
        //           goods_thumb,
        //           goods_name
        //         });
        //         console.log(data1);
        //         this.$store.dispatch('adddata')
        //       }
        // })
      }
    }
    },
    async homeAddToCart() {
      if (this.homeGoods) {
        let data = this.homeGoods;
        console.log("111111", data);
        let id = this.id;
        let qty = data.qty;
        let selected = false;
        let allSelected = false;
        let price =
          data.price.slice(0, 1) == "￥" ? data.price : "￥" + data.price;
        let goods_thumb = data.goods_thumb;
        let goods_name = data.goods_name;
        let username = this.$store.state.common.user.username;
        let goods = {
          id: this.id,
          goods_thumb: data.imgPath,
          goods_name: data.pname,
          proshop2: "",
          xx: "",
          price: "￥" + data.actPrice,
          qty: data.qty,
          selected: false,
          allSelected: false
        };
        console.log(goods);
        let { data: data1 } = await my.post("/cart", {
          username,
          selected,
          allSelected,
          price,
          id,
          qty,
          goods_thumb,
          goods_name
        });
        this.$store.dispatch("adddata");
      }
    }
  }
};
</script>
<style lang="css" scoped>
.detailTag {
  position: absolute;
  top: 0;
  right: 12px;
}
</style>