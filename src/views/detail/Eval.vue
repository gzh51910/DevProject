<template>
  <div>
    <!-- 评价头 -->
    <el-row
      style="margin-top:10px;background:#fff;padding:0 10px;border-bottom: 1px solid #f0f0f0;height:45px"
    >
      <el-col :span="4">
        <p class="textSame">商品评价</p>
      </el-col>
      <el-col :span="12">
        <p style="color: #666;font-size: 12px;line-height:45px">40932 人评价</p>
      </el-col>
      <el-col :span="8">
        <p style="color: #666;font-size: 12px;line-height:45px">
          好评度
          <span style="color: #fc5a5a">98 %"</span>
        </p>
      </el-col>
    </el-row>
    <!-- 评价体 -->
    <el-row
      class="eval evalText"
      style="background:#fff;padding:0 10px;border-bottom: 1px solid #f0f0f0;height:45px"
    >
      <el-row>
        <div class="photo floatLeft">
          <img src="http://img10.jiuxian.com/upheader/avatar/002/04/37/34_avatar_big.jpg" alt />
        </div>
        <p class="evalUsername floatLeft">大鱼水煮</p>
        <span>酒仙</span>
        <time>2019-09-08 15:18:11</time>
      </el-row>
      <el-rate v-model="value1"></el-rate>
      <p>酒仙家的酒真的非常奈斯！！！</p>
      <el-row>
        <img
          src="http://img09.jiuxian.com/eva//2019/0908/b09731dbc54c4077b49503b7fa13d9792.jpg"
          alt
        />
      </el-row>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
.photo {
  width: 45px;
  height: 45px;
}
.evalText {
  font-size: 12px;
  color: #252525;
}
/* .evalUsername{

} */
</style>