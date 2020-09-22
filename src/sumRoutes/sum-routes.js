const express = require('express');
const router = express.Router();

const sumControllerV1 = require('./v1.0.0/sum-controller');
const sumControllerV2 = require('./v2.0.0/sum-controller');
const { versioning } = require('../utils/versioning');

router.get(
    '/middleware/cms/sum',
    versioning({ '1.0.0': sumControllerV1, '2.0.0': sumControllerV2 })
);

module.exports = router;
