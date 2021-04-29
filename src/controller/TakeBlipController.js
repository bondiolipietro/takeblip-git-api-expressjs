const takeBlipService = require('../service/TakeBlipService');

class TakeBlipController {
  async getAllRepositories(req, res) {
    const { language = null, orderBy = 'new', limit = null } = req.query;
    try {
      const repositories = await takeBlipService.getAllRepositories(
        language,
        orderBy,
        limit
      );
      if (!repositories.length > 0) {
        throw new Error();
      }
      res.status(200).json({ status: 'ok', data: repositories }).end();
    } catch (e) {
      console.error(e);
      res
        .status(500)
        .json({ status: 'error', msg: 'Could not find any repository.' })
        .end();
    }
  }

  async getRepository(req, res) {
    const { repoName = null } = req.params;
    try {
      if (!repoName) {
        res
          .status(400)
          .json({
            status: 'error',
            msg: 'You should provide a repository name to search.',
          })
          .end();
      }
      const repository = await takeBlipService.getRepository(repoName);
      if (!repository) {
        throw new Error();
      }
      res.status(200).json({ status: 'ok', data: repository }).end();
    } catch (e) {
      console.error(e);
      res
        .status(400)
        .json({ status: 'error', msg: `Could not find any repository named ${repoName}` })
        .end();
    }
  }

  async getAllMembers(req, res) {
    const { orderBy = 'a-z', limit = null } = req.query;
    try {
      const members = await takeBlipService.getAllMembers(orderBy, limit);
      if (!members.length > 0) {
        throw new Error();
      }
      res.status(200).json({ status: 'ok', data: members }).end();
    } catch (e) {
      console.error(e);
      res.status(500).json({ status: 'error', msg: 'Could not find any member.' }).end();
    }
  }
}

module.exports = new TakeBlipController();
