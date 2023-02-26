const express = require('express');
const {GenerateShortUrlId, GenerateAnalytics} = require('../controller/url');
const router = express.Router();

router.post('/',GenerateShortUrlId);

router.get('/analytics/:shortId', GenerateAnalytics);

module.exports = router;