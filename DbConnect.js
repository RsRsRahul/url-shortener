const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
async function ConnectToMongo(url){    
    return mongoose.connect(url);
}
module.exports = {ConnectToMongo} 