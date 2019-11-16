const express = require('express');

const Router = express.Router();

const { create } = require('../db/mongodb');
const { formatData } = require('../utils')

// 注册
const colName = 'cart'
Router.post('/', async (req, res) => {
    let {  goods} = req.body;
    console.log(goods);

    let result = await create(colName, { goods})

    if (result.insertedCount > 0) {
        res.send(formatData());
    } else {
        res.send(formatData({ status: 0 }));
    }
})

module.exports = Router