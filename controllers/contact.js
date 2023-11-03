const path = require('path');

exports.getContactDetails = (req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','contact-us.html'))
}