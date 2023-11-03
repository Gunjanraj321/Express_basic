const path = require('path'); 

const express = require('express');
const app = express();

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const contactRoute = require('./routes/contact-us')
const successRoute = require('./routes/success')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoute);
app.use('/shop',shopRoute);
app.use('/contact-us',contactRoute);
app.use('/success',successRoute)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000);