const express = require('express');

const Router = express.Router();

// 引入数据库操作方式

const mongodb = require('../db/mongodb')
const {formatData} = require('../utils')

// 编写数据接口

const colName = 'user';

// @查询所有商品
Router.get('/',async (req,res)=>{
   
    let {page,size=6,sort} = req.query;

    // 根据分页和每页数量计算跳过的索引值
    let index = (page-1)*size
    
  
    // mongodb查询数据库
    let data = await mongodb.find(colName,{},{skip:index,limit:size,sort});
    res.send(formatData({data}))
})

Router.delete('/:_id',async (req,res)=>{
    let {_id} = req.params;
    let data = await mongodb.remove(colName,{_id}) 
    res.send(formatData({data}))
})
module.exports = Router