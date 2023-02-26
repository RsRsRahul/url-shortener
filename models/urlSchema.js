const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortUrl :{
        type: String,
        required: true,
        unique: true,
    },
    actualUrl:{
        type: String,
        required: true,
    },
    HistoryOfUrl:[{
        timestamp:{type: Number},
    }]
},{timestamps: true});

const URL = mongoose.model('url', urlSchema);

module.exports = URL;