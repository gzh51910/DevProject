  <template>
  <div style="background-color: #f3f5f6;">
    <!-- 顶头 -->
    <nav-bar class="detailHead" style="color: white;">
      <div class="left" slot="left">
        <i class="el-icon-arrow-left" style="color:#fff"></i>
      </div>
      <div class="center" slot="center" style="color:#fff">商品详情</div>
      <div class="right" slot="right">
        <i class="el-icon-menu" style="color:#fff"></i>
      </div>
    </nav-bar>
    <!-- 提示头-->
    <main style="margin-top:40px">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple" style="background:#2e2e2e;height:40px">
            <i class="el-icon-error"></i>
          </div>
        </el-col>
        <el-col :span="12">
          <div
            class="grid-content bg-purple-light"
            style="background: #2e2e2e;text-align:center;height:40px"
          >
            <p style="color: #fff;font-size: 12px;padding-top:4px">打开酒仙网App</p>
            <p style="padding-bottom:2px;color: #fff;font-size: 12px">新人领198元礼包</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple right" style="background:#e62929">立即打开</div>
        </el-col>
      </el-row>
      <!-- 商品图片详情 -->
      <el-carousel height="320px" arrow="never" :autoplay="false" class="banner">
        <el-carousel-item v-for="item in detailImg" :key="item">
          <img atl :src="item" style="width:100%;height:100%" />
        </el-carousel-item>
      </el-carousel>
      <!-- 文字介绍 -->
      <el-row style="padding:0 10px;background:#fff;padding-bottom:20px">
        <el-col>
          <h4>整箱红酒7°通天柔红山葡萄甜酒750ml（6瓶装）</h4>
          <p class="price">
            <span style="color: #fc5a5a;font-size: 19px;float:left">￥99.00</span>
            <del style="font-size: 12px;color: #999;padding-left:8px">酒仙价：120.00</del>
          </p>
        </el-col>
      </el-row>
      <!-- 优惠和金币 -->
      <!-- <el-row style="margin-top:10px;background:#fff;padding:0 10px">
      <el-row style="margin-top:10px">
        <el-col :span="6" style="font-size: 14px;color: #666;">
            优惠
        </el-col>
         <el-col :span="10" style="position: absolute;top:-10px;right:28%">
           <span style="background: #8888ff;font-size: 11px;color:#fff">买一送一</span>
           <span style="font-size: 14px;">买赠品牌酒刀</span>
        </el-col>
      </el-row>
      <el-row style="padding-top:20px">
         <el-col style="width:45px;height:45px;">
           <div style="margin-right: 5px;border: 1px solid #e8e8e8;">
             <img src="https://img06.jiuxian.com/2019/0926/3fc2081699ff45d1962ffa17ff6e41702.jpg" alt="">
             <p>通天定制酒刀</p>
             <span>x1</span>
           </div>
        </el-col>
         <el-col :span="4">
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
        </el-col>
         <el-col :span="20">
        </el-col>
         <el-col :span="4">
        </el-col>
      </el-row>
      </el-row>-->
      <!-- 规格 -->
      <size></size>
      <!-- 数量 -->
      <el-row style="margin-top:10px;background:#fff;padding:0 10px">
        <el-col :span="4">
          <p class="textSame">数量</p>
        </el-col>
        <div>
          <el-input-number v-model="num1" :min="1" :max="10" size="small" class="detailNum"></el-input-number>
        </div>
      </el-row>
      <evl></evl>
    </main>
    <detail-footer></detail-footer>
  </div>
</template>
<script>
import navBar from "../../components/common/navBar/navBar.vue";
import evl from "./Eval.vue";
import size from "./Size.vue";
import DetailFooter from "./DetailFooter.vue";
import {my} from '../../network';
export default {
  data() {
    return {
      num1: "",
      detailImg: [
        "http://img07.jiuxian.com/2017/0822/9943eaa21aa64eb2aab522e0530678db5.jpg",
        "http://img08.jiuxian.com/2017/0822/67f109ceb3f14b4e8566681e868071ff5.jpg",
        "http://img09.jiuxian.com/2017/0821/7748ebaa1411400bae43abc7a090ad9e5.jpg",
        "http://img10.jiuxian.com/2019/1107/4617a23422a74283ba800e5dbcd31d865.jpg",
        "http://img06.jiuxian.com/2017/0821/4874cef2d4574658b7aa8f49969fdf1b5.jpg",
        "http://img08.jiuxian.com/2017/0822/78c0b66acb7a4707aedb70de47000a815.jpg"
      ],
      Evel: { totalEval: "40932 人评价", goodEval: "98 %" }
    };
  },
  async created(){
    // console.log(this.$route)
    let {id}=this.$route.params;
    // let id="5dcbf7772d6ba972dbcda8df";
    let data=await my.get(`/goods${id}`);
    console.log(data);
  },
  methods:{
    // addGoods(){
    //   let query=this.$route.
    // }
  },
  components: {
    navBar,
    evl,
    size,
    DetailFooter
  }
};
</script>
<style  lang="css" scoped>
* {
  margin: 0;
  padding: 0;
}
.detailHead {
  width: 100%;
  z-index: 10;
  position: fixed;
  top: 0;
}
img {
  width: 100%;
  height: 100%;
}
.left,
.right,
.center {
  line-height: 40px;
  font-size: 16px;
  text-align: center;
}
.tital {
  font-size: 15px;
  color: #252525;
  line-height: 20px;
}
.textSame {
  line-height: 40px;
  font-size: 14px;
  color: #666;
  text-align: center;
}
.floatRight {
  float: right;
}
.floatLeft {
  float: left;
}
.detailNum {
  margin-top: 4px;
}
</style>