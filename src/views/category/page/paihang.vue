<template>
    <div>
        <nav-bar class="head">
            <div slot="left"><a class="back" href="#/category"></a></div>
            <div slot="center"><h2 class="headTitle">一键选酒-必买清单</h2></div>
            <div slot="right"><a class="navbar"></a></div>
        </nav-bar>
        <el-row style="margin-top:40px">
                <el-col :span="24">
                    <a style="display:block;background:#f5f5f5"><img src="https://img09.jiuxian.com/bill/2017/0930/3b6a061687294dadb1b3b486d9496eb0.jpg"></a>
                </el-col>
            </el-row>
        <div class="tebig">
             <div>
            <el-row>
                <el-col :span="24">
                    <a href=""><img src="https://img07.jiuxian.com/bill/2017/0930/e64a684fb7f84d7db9cd6d1c62005d08.jpg" ></a>
                </el-col>
            </el-row>
            </div>
            <el-row :gutter="10" class="banner">
                <el-col :span="11" v-for="(item,id) in 5" :key="id" @click.native="goto('/goods')" style="height:'248px'; width:'176px';background:#fff;margin:5px">
                    <el-card :body-style="{padding: '0'}">
                        <div style="text-align: center;">
                            <img src="http://img09.jiuxian.com/2018/1225/fc979c1278c5468a95150ec47723a1b24.jpg" class="image">
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
                    <a href=""><img src="https://img06.jiuxian.com/bill/2017/0930/f41685a5cde2441d90ed7ac13c4c42cb.jpg" ></a>
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
                    <a href=""><img src="https://img09.jiuxian.com/bill/2017/0930/6202dcde4a134ecea59f266e1b24a2a7.jpg" ></a>
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
                <a class="toTop">
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
<style>
.tebig{
    overflow: auto;
    background-color: #f5f5f5;
}
</style>