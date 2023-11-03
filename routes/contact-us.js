const express= require('express')
const path = require('path');
const { route } = require('./admin');

const router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','contact-us.html'))
});

module.exports = router;

