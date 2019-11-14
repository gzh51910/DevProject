<template>
  <div class="sizeBox">
    <el-row class="sizeText">规格</el-row>
    <el-row>
      <p class="redG">52°酒鬼原浆酒</p>
    </el-row>
    <el-row class="redP">
      <p>52°酒鬼原浆酒500ml（6瓶装）</p>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.sizeBox {
    margin-top: 10px;
  padding-left: 20px;
    padding-bottom: 10px;
  background: #fff;
}
.sizeText {
  font-size: 14px;
  color: #666666;
  line-height: 30px;
}
.redP {
  line-height: 24px;
  width: 220px;
  color: #fc5a5a;
  font-size: 13px;
  border: 1px solid #fc5a5a;
  border-radius: 13px 13px 13px 13px;
  background: #ffeeee;
  padding: 0 14px;
    margin: 0 10px 20px 0;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.redG {
  line-height: 26px;
  background: #f5f5f5;
  border-radius: 13px 13px 13px 13px;
  padding: 0 15px;
  float: left;
  font-size: 13px;
  color: #333333;
  margin: 0 10px 20px 0;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>