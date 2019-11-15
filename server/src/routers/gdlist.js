const express = require('express');

const Router = express.Router();

// 引入数据库操作方式
const mongodb = require('../db/mongodb')
const { formatData } = require('../utils')

// 编写数据接口

// const colName = 'nav';

// @查询所有商品
Router.get('/', async (req, res) => {
    let {gather,condition,condition_value} = req.query
    const colName = gather
    // let {page=1,size=20,sort} = req.query;
    // 根据分页和每页数量计算跳过的索引值
    // let index = (page-1)*size
    //   let {type}=  req.params

    const query = {}
    query[`${condition}`] = condition_value

    let data = await mongodb.find(colName,query);
    res.send(formatData({ data }))
})

module.exports = Router