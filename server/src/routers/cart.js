const express = require('express');

const Router = express.Router();

const { create,find,remove, update} = require('../db/mongodb');
const { formatData } = require('../utils')

// 注册
const colName = 'cart'

Router.post('/', async (req, res) => {
    let {username,id,selected,allSelected,price,qty,goods_thumb,goods_name} = req.body;


    let result = await create(colName, {username,id,selected,allSelected,price,qty,goods_thumb,goods_name})

    if (result.insertedCount > 0) {
        res.send(formatData());
    } else {
        res.send(formatData({ status: 0 }));
    }
})
Router.get('/', async (req, res) => {
    let {gather,username} = req.query
    const colName = gather
    let data = await find(colName,{username});
    res.send(formatData({ data }))
})



Router.delete('/:id',async (req,res)=>{
    let {id} = req.params;
    // 查询数据库
    let result = await remove('cart',{id});

    if(result.deletedCount>0){
        res.send(formatData())
    }else{
        res.send(formatData({status:0}))
    }
})

Router.patch('/:id',async (req,res)=>{
    let {id} = req.params;
    let {qty} = req.body;
    console.log(qty);
    
    // 查询数据库

    
    let result = await update(colName,{id:id},{qty:qty});

    if(result.modifiedCount>0){
        res.send(formatData())
    }else{
        res.send(formatData({status:0}))
    }
})

module.exports = Router
