<template>
<div style="width:100%;height:230px">
    <div class="titlePhoto">
        <img src="../../assets/img/home/baijiu.jpg" alt="">
    </div>
    <div class="photoLeft">
        <img src="../../assets/img/home/baijiu1.jpg" alt="">
    </div>
    <div class="photoRight  clearfix">
        <div class="photoRightUp">
            <img src="../../assets/img/home/baijiu2.jpg" alt="">
        </div>
        <div class="photoRightDown">
            <img src="../../assets/img/home/baijiu3.jpg" alt="">
             <img src="../../assets/img/home/baijiu4.jpg" alt="">
        </div>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
/* .clearfix::after{
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
.clearfix{
    zoom:1;
} */
.titlePhoto{
    height: auto;
    min-height: 32px;
    max-height: 64px;
    font-size: 0;
    text-align: center;
    border-bottom: 1px solid #f1f1f1;
    background: #fff;
}
.titlePhoto >img{
    height: 100%;
    width:100%;
}
.photoLeft{
    height: 218px;
    width: 40%;
    float: left;
}
.photoLeft >img{
    height: 100%;
    width: 100%;
}
.photoRight{
    height: 218px;
    width: 60%;
    float: right;
}
.photoRightUp{
   height: 50%;
    width: 100%;
}
.photoRightUp >img{
   height: 100%;
    width: 100%;
}
.photoRightDown{
   height: 50%;
    width: 100%; 
}
.photoRightDown >img{
   height: 100%;
    width: 50%; 
}
</style>