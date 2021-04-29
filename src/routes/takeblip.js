const express = require('express');

const takeBlipRouter = express.Router({ mergeParams: true });

takeBlipRouter.get('/takeblip/repos/', async (req, res) => {
  res.json({ data: 'repositories list' });
});

takeBlipRouter.get('/takeblip/repos/:repoName', async (req, res) => {
  res.json({ data: 'repository' });
});

takeBlipRouter.get('/takeblip/members/', async (req, res) => {
  res.json({ data: 'members list' });
});

module.exports = takeBlipRouter;
