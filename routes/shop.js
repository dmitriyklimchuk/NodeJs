const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const admimData = require('./admin');
const router = express.Router();

router.get('/',(req,res,next)=>{
    const products = admimData.products;
    res.render('shop', {
                            prods:products, 
                            pageTitle: 'Shop',
                            path: '/'
                        });
});

module.exports = router;