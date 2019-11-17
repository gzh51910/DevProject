const express = require('express');

const Router = express.Router();

const { create } = require('../db/mongodb');
const { formatData } = require('../utils')


const colName = 'cart'

Router.post('/', async (req, res) => {
    let {username, goods} = req.body;

    let result = await create(colName, {username, goods})

    if (result.insertedCount > 0) {
        res.send(formatData());
    } else {
        res.send(formatData({ status: 0 }));
    }
})
Router.patch('/:id',async (req,res)=>{
    let {id} = req.params;
    let {qty} = req.query;
    // 查询数据库
    let qty1=qty++
    let result = await update(colName,{_id:id},{qty1});

    if(result.modifiedCount>0){
        res.send(formatData())
    }else{
        res.send(formatData({status:0}))
    }
})
module.exports = Router