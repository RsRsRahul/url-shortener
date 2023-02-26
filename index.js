const express = require('express');
const {ConnectToMongo} = require('./DbConnect')
const urlRoute = require('./routers/url')
const URL = require('./models/urlSchema')
const app = express();

const PORT = 4000;

ConnectToMongo("mongodb://localhost:27017/shortUrl").then(()=>{console.log("connected to DB")})

app.use(express.json());
app.use('/url',urlRoute);

app.get('/:shortId', async(req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortUrl: shortId
    },
    {$push:
        {
        HistoryOfUrl:{timestamp: Date.now()}
        }
    });
    res.redirect(entry.actualUrl)
})

app.listen(4000,console.log("server started at port",PORT));

module.exports= app; 