const express = require('express');

const Router = express.Router();

// 引入数据库操作方式
const mongodb = require('../db/mongodb')
const { formatData } = require('../utils')

// 编写数据接口

const colName = 'gdlist';

// @查询所有商品
Router.get('/', async (req, res) => {

    // let {page=1,size=20,sort} = req.query;

    // 根据分页和每页数量计算跳过的索引值
    // let index = (page-1)*size
    //   let {type}=  req.params
    let data = await mongodb.find(colName);
    res.send(formatData({ data }))
})


// @添加商品
Router.post('/', async (req, res) => {


    let sql = `insert into goods(`
    for (let key in req.body) {
        sql += `${key},`
    }
    sql = sql.replace(/,$/, ') values(')
    for (let key in req.body) {
        sql += `"${req.body[key]}",`
    }
    sql = sql.replace(/,$/, ')');
    console.log(sql);
    let result = await query(sql)
    res.send(result)
})

// @查询单个商品
Router.get('/:id', (req, res) => {

    let { id } = req.params;
    // 查询数据：
    let sql = `select * from goods where id=${id}`;


    query(sql, function (data) {
        res.send(data)
    });

    
})

// @查询单个商品


module.exports = Router