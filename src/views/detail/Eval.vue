<template>
  <div>
    <!-- 评价头 -->
    <el-row
      style="margin-top:10px;background:#fff;padding:0 10px;border-bottom: 1px solid #f0f0f0;height:45px;line-height:45px"
    >
      <el-col :span="4">
        <p>商品评价</p>
      </el-col>
      <el-col :span="14">
        <p style="color: #666;font-size: 12px">40932 人评价</p>
      </el-col>
      <el-col :span="6">
        <p style="color: #666;font-size: 12px;float:left">好评度</p>
        <span style="color: #fc5a5a;float:left;line-height:45px">98%</span>
      </el-col>
    </el-row>
    <!-- 评价体 -->
    <el-row
      class="eval evalText"
      style="background:#fff;padding:10px 10px;border-bottom: 1px solid #f0f0f0;min-height:100px;line-height:45px;"
      v-for="item in allEvel"
      :key="item.userTilTwe"
    >
      <el-row>
        <div class="photo floatLeft">
          <img :src="item.photo" alt />
        </div>
        <p class="evalUsername floatLeft" style="margin-left:10px">{{item.username}}</p>
        <span class="tag">{{item.tag}}</span>
        <time class="floatRight" style="margin-right:10px">{{item.userTilTwe}}</time>
      </el-row>
      <el-rate v-model="value1" style></el-rate>
      <p>{{item.eval}}</p>
      <el-row style="width:200px;height:200px">
        <div class="imgHold">
          <img :src="item.imgHold" alt />
        </div>
      </el-row>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {

    return {
      value1: 5,
      allEvel: [
        {
          photo:
            " http://img10.jiuxian.com/upheader/avatar/002/04/37/34_avatar_big.jpg",

          username: "大鱼水煮",
          tag: "酒仙",
          userTilTwe: "2019-09-08 15:18:11",
          eval: "这就买了好多次了，口感还是比较适合女孩子。,送货快",
          imgHold:
            "http://img09.jiuxian.com/eva//2019/0908/b09731dbc54c4077b49503b7fa13d9792.jpg"
        },
        {
          photo:
            "http://wx.qlogo.cn/mmopen/pVvqjPOlUcxgvHraiaUNjyNv5M3qKkYgyPFO2BtFDTl35hiaTaSfcOeN15ws6OnYaF5N4jTxic91eicklyzy6m7Bvofw6Knfww9t/0",
          username: " 酒仙酒友",
          tag: "CLUB",
          userTilTwe: "2019-09-05 23:21:59",
          eval: "知道意思了吧,送货快",
          imgHold:
            "http://img07.jiuxian.com/eva//2019/0905/b94cc556b6b640a88404183d61b126062.jpg"
        },
        {
          photo:
            " http://img07.jiuxian.com/upheader/temp/b563c40405a04384b85e185df8711074.png",
          username: " 脱缰野马",
          tag: "酒仙",
          userTilTwe: "2019-09-05 16:27:49",
          eval:
            "通天红，好喝。,包装给力,原装进口,送爸妈挺好,礼盒很有面子,果香浓郁,颜色亮丽透明,单宁丰富,送货快,老牌名酒,多次购买",
          imgHold:
            "http://img06.jiuxian.com/eva//2019/0905/8bb9b8d0505a4afe8c729a330a8c9c702.jpg"
        }
      ]
    };


    

  }
};
</script>
<style  lang="css" scoped>
.floatRight {
  float: right;
}
img {
  width: 100%;
  height: 100%;
}
.floatLeft {
  float: left;
}
.photo {
  width: 45px;
  height: 45px;
  border-radius: 45px;
}
.photo img {
  width: 100%;
  height: 100%;
}
.evalText {
  font-size: 12px;
  color: #252525;
}
.tag {
  display: inline-block;
  padding: 0 5px;
  display: inline-block;
  margin-left: 10px;
  font-size: 10px;
  height: 15px;
  line-height: 15px;
  border: 1px solid #ccc;
}
.imgHold{
  height:160px;
  width:160px;
}
.imgHold img{
  width:100%;
  height:100%;
}
</style>
