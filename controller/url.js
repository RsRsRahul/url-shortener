const shortid = require('shortid')
const URL = require('../models/urlSchema');
async function GenerateShortUrlId(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "url is required"})
    const shortId = shortid.generate();
    await URL.create({
        shortUrl: shortId,
        actualUrl: body.url,
        HistoryOfUrl: []
    })

    return res.json({id: shortId});
}

async function GenerateAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortUrl: shortId});
    return res.json({
        totalClicks: result.HistoryOfUrl.length,
        analytics: result.HistoryOfUrl
    })
}
module.exports = {
    GenerateShortUrlId,
    GenerateAnalytics
}