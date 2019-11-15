<template>
    <div>
        <nav-bar class="head">
            <div slot="left"><a class="back" href="#/category"></a></div>
            <div slot="center"><h2 class="headTitle">一键选酒-礼遇美酒</h2></div>
            <div slot="right"><a class="navbar"></a></div>
        </nav-bar>
        <el-row style="margin-top:40px">
                <el-col :span="24">
                    <a style="display:block;background:#f5f5f5"><img src="https://img09.jiuxian.com/bill/2017/0515/978c4dabc6d249b0966b2a8dd9f9bee8.jpg"></a>
                </el-col>
            </el-row>
        <div class="libig">
             <div>
            <el-row>
                <el-col :span="24">
                    <a href=""><img src="https://img06.jiuxian.com/bill/2016/1118/25eceab475194d639d933a3b582b31a1.jpg" ></a>
                </el-col>
            </el-row>
            </div>
            <el-row :gutter="10" class="banner">
                <el-col :span="11" v-for="(item,id) in 5" :key="id" @click.native="goto('/goods')" style="height:'248px'; width:'176px';background:#fff;margin:5px">
                    <el-card :body-style="{padding: '0'}">
                        <div style="text-align: center;">
                            <img src="http://img08.jiuxian.com/2016/1024/0762ee6b96d04a54a768f2185bbe3a5d4.jpg" class="image">
                            <p class="names">53°茅台生肖酒国博十二生肖纪念酒500ML*12瓶</p>
                        </div>
                        <div class="orice">
                            <p class="goodlist">
                                <span class="price">￥333</span>
                                <del>666</del>
                            </p>
                            <a href="">点击购买</a>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
             <div>
            <el-row>
                <el-col :span="24">
                    <a href=""><img src="https://img08.jiuxian.com/bill/2016/1118/d439350889a64a04ab2991be42cec1e6.jpg" ></a>
                </el-col>
            </el-row>
            </div>
            <el-row :gutter="10" class="banner">
                <el-col :span="11" v-for="(item,id) in 5" :key="id" @click.native="goto('/goods')" style="height:'248px'; width:'176px';background:#fff;margin:5px">
                    <el-card :body-style="{padding: '0'}">
                        <div style="text-align: center;">
                            <img src="http://img09.jiuxian.com/2018/0806/139340ea0bbf408d97d46db3314834794.jpg" class="image">
                            <p class="names">53°茅台生肖酒国博十二生肖纪念酒500ML*12瓶</p>
                        </div>
                        <div class="orice">
                            <p class="goodlist">
                                <span class="price">￥333</span>
                                <del>666</del>
                            </p>
                            <a href="">点击购买</a>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <div>
            <el-row>
                <el-col :span="24">
                    <a href=""><img src="https://img06.jiuxian.com/bill/2016/1118/6e372d4bdf314d4e9ec8d6d81385cf7d.jpg" ></a>
                </el-col>
            </el-row>
            </div>
            <el-row :gutter="10" class="banner">
                <el-col :span="11" v-for="(item,id) in 5" :key="id" @click.native="goto('/goods')" style="height:'248px'; width:'176px';background:#fff;margin:5px">
                    <el-card :body-style="{padding: '0'}">
                        <div style="text-align: center;">
                            <img src="http://img08.jiuxian.com/2016/0419/02885e966b044a6eb14efb075a7258874.jpg" class="image">
                            <p class="names">53°茅台生肖酒国博十二生肖纪念酒500ML*12瓶</p>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <div class="bottomBtn">
                <a  class="toTop">
                    <i></i>
                    <span>返回<br>顶部</span>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import NavBar from "../../../components/common/navBar/navBar.vue";

export default {
     data(){
        return{

        }
    },
    components: {
    NavBar
    },
     methods:{
        goto(){
            this.$router.push('/goods')
        }
    }
}
</script>
<style lang="css" scoped>
.libig{
    overflow: auto;
    background-color: #e8e8e0;
}
</style>