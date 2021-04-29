const express = require('express');
const takeBlipRouter = require('./takeblip');

const router = express.Router();

router.use('/api/v1/', takeBlipRouter);

module.exports = router;
