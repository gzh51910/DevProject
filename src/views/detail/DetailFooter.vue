<template>
  <div style=" width: 100%;z-index:10;position:fixed;bottom: 0;background: #fff">
      <el-row style="text-align:center">
        <el-col :span="4"
        style="font-size: 14px;color: #626365">
            <i class="el-icon-service"></i>
            <p>酒师</p>
        </el-col>
        <el-col :span="4"
         style="font-size: 14px;color: #626365">
             <i class="el-icon-star-on"></i>
            <p>收藏</p>
        </el-col>
        <el-col :span="4"
         style="font-size: 14px;color: #626365">
             <i class="el-icon-goods"></i>
            <p>购物车</p>
        </el-col>
         <el-col :span="6"
         style="background: #fc5a5a;color:#fff;line-height:46px;">
             加入购物车
        </el-col>
         <el-col :span="6"
         style="background: #3c3f51;color:#fff;line-height:46px;">
             立即购买
        </el-col>
      </el-row>
  </div>
</template>
<script>
export default {
    data(){
        return{}
    }
};
</script>
<style>
</style>