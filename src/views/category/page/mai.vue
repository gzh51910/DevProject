<template>
    <div>
        <nav-bar class="head">
            <div slot="left"><a class="back" href="#/category"></a></div>
            <div slot="center"><h2 class="headTitle">值得买（自营）</h2></div>
            <div slot="right"><a class="navbar"></a></div>
        </nav-bar>
        <el-row style="margin-top:40px">
                <el-col :span="24">
                    <a style="display:block;background:#f5f5f5"><img src="https://img10.jiuxian.com/bill/2017/0930/2789f169dd674c05995733c2427874d5.jpg"></a>
                </el-col>
            </el-row>
        <div class="tebig">
             <div>
            <el-row>
                <el-col :span="24">
                    <a href=""><img src="https://img06.jiuxian.com/bill/2017/0930/ac4d2b99a6c3497885013add91308dc0.jpg" ></a>
                </el-col>
            </el-row>
            </div>
            <el-row :gutter="10" class="banner">
                <el-col :span="11" v-for="(item,id) in 5" :key="id" @click.native="goto('/goods')" style="height:'248px'; width:'176px';background:#fff;margin:5px">
                    <el-card :body-style="{padding: '0'}">
                        <div style="text-align: center;">
                            <img src="http://img06.jiuxian.com/2018/0509/fe21ed7d467042858d5ec359c5f2227e4.jpg" class="image">
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
                    <a href=""><img src="https://img10.jiuxian.com/bill/2017/0930/e89eb3f1dd3e4ea2ab656bf471ad2d79.jpg" ></a>
                </el-col>
            </el-row>
            </div>
            <el-row :gutter="10" class="banner">
                <el-col :span="11" v-for="(item,id) in 5" :key="id" @click.native="goto('/goods')" style="height:'248px'; width:'176px';background:#fff;margin:5px">
                    <el-card :body-style="{padding: '0'}">
                        <div style="text-align: center;">
                            <img src="http://img08.jiuxian.com/2016/0526/7127a5cff3334d23b2772f3d935635374.jpg" class="image">
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
                    <a href=""><img src="https://img07.jiuxian.com/bill/2017/0930/0b8539bbe11a420b9500e93b22b2ab31.jpg" ></a>
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
.tebig{
    overflow: auto;
    background-color: #f5f5f5;
}
</style>