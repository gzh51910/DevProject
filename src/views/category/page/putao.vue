<template>
  <div>
    <nav-bar class="head">
      <div slot="left">
        <a class="back" href="#/category"></a>
      </div>
      <div slot="center">
        <div>
          <em class="input-em sIcon"></em>
          <input
            style="width:260px;height28px;border-radius:5px;"
            type="text"
            placeholder="硬核返场购 津贴每满299减20"
          />
        </div>
      </div>
      <div slot="right">
        <a class="navbar"></a>
      </div>
    </nav-bar>
    <div class="baibig">
      <div 
      style="height:80px;text-align:center;line-height:40px;margin:40px 0 10px;">
        <el-row :gutter="20">
          <el-col :span="6">综合</el-col>
          <el-col :span="6">销量</el-col>
          <el-col :span="6">价格</el-col>
          <el-col :span="6">筛选</el-col>
        </el-row>
        <div class="flil">
          <a>酒仙配送</a>
          <a>CLUB会员价</a>
        </div>
      </div>
      <el-row :gutter="5" class="banner">
          <el-col
            :span="11"
            v-for="(item,id) in 5"
            :key="id"
            @click.native="goto('/goods')"
            style="height:'248px'; width:'176px';background:#fff;margin:5px"
          >
            <el-card :body-style="{padding: '0',height:'248px'}">
              <div style="text-align: center;">
                <img
                  src="http://img10.jiuxian.com/2017/0503/f1b75021f2a44fe5b0ac61391c24247b4.jpg"
                  class="image"
                />
                <p class="names">53°茅台生肖酒国博十二生肖纪念酒500ML*12瓶</p>
              </div>
              <div class="orice">
                <p class="goodlist">
                  <span class="price">￥333</span>
                  <del>666</del>
                </p>
                <a href>点击购买</a>
              </div>
            </el-card>
          </el-col>
        </el-row>
    </div>
  </div>
</template>
<script>
import NavBar from "../../../components/common/navBar/navBar.vue";
export default {
  data() {
    return {
      input1: ""
    };
  },
  components: {
    NavBar
  },
   methods:{
        goto(){
            this.$router.push('/goods')
        }
    }
};
</script>
<style scoped>
.baibig {
  background-color: #fff;
  /* overflow: auto; */
}

.sIcon {
  background: url(../img/searchIcon.png) no-repeat;
  background-size: 120px 40px;
  cursor: pointer;
}
.bai-input {
  width: 288px;
  height: 28px;
  background-color: #e4e4e4;
  margin-top: 6px;
}
.input-em {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-position: -41px -18px;
  position: absolute;
  left: 36px;
  top: 14px;
}
.flil {
  height: 42px;
  padding: 3px 15px 0;
  background-color: #fff;
  text-align: left;
  border-bottom:1px solid #ccc;
}
.flil a {
  display: inline-block;
  height: 26px;
  line-height: 26px;
  color: #333;
  font-size: 12px;
  background-color: #f6f6f6;
  border-radius: 13px;
  margin-right: 10px;
  padding: 0 15px;
}
</style>