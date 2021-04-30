const express = require('express');
const takeBlipController = require('../controller/TakeBlipController');

const takeBlipRouter = express.Router({ mergeParams: true });

takeBlipRouter.get('/takeblip/repositories/', takeBlipController.getAllRepositories);

takeBlipRouter.get('/takeblip/repositories/:repoName', takeBlipController.getRepository);

takeBlipRouter.get('/takeblip/members/', takeBlipController.getAllMembers);

module.exports = takeBlipRouter;
