  <template>
  <div class="detail" style="background-color: #f3f5f6;">
    <!-- 顶头 -->
    <nav-bar class="detailHead" style="color: white;">
      <div class="left" slot="left" @click="$router.back(-1)">
        <i class="el-icon-arrow-left" style="color:#fff"></i>
      </div>
      <div class="center" slot="center" style="color:#fff">商品详情</div>
      <div class="right" slot="right">
        <i class="el-icon-menu" style="color:#fff"></i>
      </div>
    </nav-bar>
    <!-- 提示头-->
    <scroll class="con">
      <main style="margin-top:40px">
        <el-row v-if="show">
          <el-col :span="6">
            <div class="grid-content bg-purple" style="background:#2e2e2e;height:40px">
              <div class="remove" @click="removeItem">
                <i class="el-icon-error" style="color:#fff;"></i>
              </div>
              <div class="picture"></div>
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
            <div class="grid-content bg-purple right" style="background:#e62929;color:#fff">立即打开</div>
          </el-col>
        </el-row>
        <!-- 商品图片详情 -->
        <img class="imgdetail" v-lazy="goods.goods_thumb" alt />
        <!-- 文字介绍 -->
        <el-row style="padding:0 10px;background:#fff;padding-bottom:20px">
          <el-col>
            <h4>{{goods.goods_name}}</h4>
            <p class="price">
              <span style="color: #fc5a5a;font-size: 19px;float:left">￥{{goods.price}}</span>
              <del style="font-size: 12px;color: #999;padding-left:8px">酒仙价：￥{{goods.shop_price}}</del>
            </p>
          </el-col>
        </el-row>
        <!-- 规格 -->
        <size></size>
        <!-- 数量 -->
        <el-row style="margin-top:10px;background:#fff;padding:0 10px">
          <el-col :span="4">
            <p class="textSame">数量</p>
          </el-col>
          <div>
            <el-input-number
              v-model="num1"
              :min="1"
              :max="10"
              size="small"
              class="detailNum"
              @change="addNum($event)"
            ></el-input-number>
          </div>
        </el-row>
        <evl></evl>
      </main>
    </scroll>
    <detail-footer :goods="goods" :id="id"></detail-footer>
  </div>
</template>
<script>
import navBar from "../../components/common/navBar/navBar.vue";
import evl from "./Eval.vue";
import size from "./Size.vue";
import DetailFooter from "./DetailFooter.vue";
import { my } from "../../network";
import scroll from "../../components/common/scroll/scroll.vue";
export default {
  data() {
    return {
      num1: 1,
      show: true,
      Evel: { totalEval: "40932 人评价", goodEval: "98 %" },
      goods: [],
      id: ""
    };
  },
  watch: {
    $route: function(newVal, oldVal) {
      console.log(newVal, oldVal);

      this.getData();
    }
  },
  async created() {
    this.getData();
  },
  methods: {
    removeItem() {
      this.show = false;
    },
    addNum(num) {
      this.goods.qty = num;
    },
    async getData() {
      let { id, db } = this.$route.params;
      let {
        data: { data: goods }
      } = await my.get("/goods", { gather: db, _id: id });
      this.goods = goods[0];
      this.goods.qty = 1;
      this.id = id;
      console.log("=============", goods);
    }
  },
  components: {
    navBar,
    evl,
    size,
    DetailFooter,
    scroll
  }
};
</script>
<style  lang="css" scoped>
.detail {
  height: 100vh;
}
* {
  margin: 0;
  padding: 0;
}
.con {
  height: calc(100% - 50px);
  overflow: hidden;
}
.detailHead {
  width: 100%;
  z-index: 10;
  position: fixed;
  top: 0;
}
.remove {
  position: absolute;
  top: 0;
  left: 0;
}
.picture {
  width: 40px;
  height: 40px;
  float: left;
  margin-left: 20px;
  background: url(../../assets/img/detail/topApp.png) 0 -22px;
  background-size: 40px 70px;
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
.floatLeft {
  float: left;
}
.floatLeft {
  float: left;
}
.imgdetail {
  width: 100%;
  height: 100%;
}
</style>