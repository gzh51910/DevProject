<template>
    <div>
        <nav-bar class="head">
            <div slot="left"><a class="back" href="#/category"></a></div>
            <div slot="center"><h2 class="headTitle">海外直采专场</h2></div>
            <div slot="right"><a class="navbar"></a></div>
        </nav-bar>
         <el-row style="margin-top:40px">
                <el-col :span="24">
                    <a style="display:block;background:#f5f5f5"><img src="https://img07.jiuxian.com/bill/2017/0930/7b3f820bcecf48d08de46e70ded3cd46.jpg"></a>
                </el-col>
            </el-row>
        <div class="haibig">
             <div>
            <el-row>
                <el-col :span="24">
                    <a href=""><img src="https://img06.jiuxian.com/bill/2017/0930/2d84b86c09c848d7ac4ca4b80381c180.jpg" ></a>
                </el-col>
            </el-row>
            </div>
            <el-row :gutter="10" class="banner">
                <el-col :span="11" v-for="(item,id) in 5" :key="id" @click.native="goto('/goods')" style="height:'248px'; width:'176px';background:#fff;margin:5px">
                    <el-card :body-style="{padding: '0'}">
                        <div style="text-align: center;">
                            <img src="http://img06.jiuxian.com/2019/1106/3f7e5df6f2b0403dba87dc237d1928b34.png" class="image">
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
                    <a href=""><img src="https://img08.jiuxian.com/bill/2017/0930/8a0708ae3c5e4d4dad7d16faff7ca1c3.jpg" ></a>
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
                    <a href=""><img src="https://img10.jiuxian.com/bill/2017/0930/c7792ed6259d4eaa841ab77247e9b873.jpg" ></a>
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
            <div>
            <el-row>
                <el-col :span="24">
                    <a href=""><img src="https://img09.jiuxian.com/bill/2017/0930/0e14c594f8eb45ed87b23f397954b3e8.jpg" ></a>
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
import { Script } from 'vm';

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
<style scoped>
.haibig{
    overflow: auto;
    background-color: #006699;
}
    
</style>