const express = require('express');
const takeBlipController = require('../controller/TakeBlipController');

const takeBlipRouter = express.Router({ mergeParams: true });

takeBlipRouter.get('/takeblip/repos/', takeBlipController.getAllRepositories);

takeBlipRouter.get('/takeblip/repos/:repoName', takeBlipController.getRepository);

takeBlipRouter.get('/takeblip/members/', takeBlipController.getAllMembers);

module.exports = takeBlipRouter;
