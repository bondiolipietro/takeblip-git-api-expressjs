const takeBlipService = require('../service/TakeBlipService');

class TakeBlipController {
  async getAllRepositories(req, res) {
    const { language = null, order_by = 'new', limit = null } = req.query;
    try {
      const repositories = await takeBlipService.getAllRepositories(
        language,
        order_by,
        limit
      );
      if (!repositories.length > 0) {
        throw new Error();
      }
      res.status(200).json({ status: 'ok', data: repositories, msg: '' }).end();
    } catch (e) {
      res
        .status(400)
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
      res.status(200).json({ status: 'ok', data: repository, msg: '' }).end();
    } catch (e) {
      res
        .status(400)
        .json({ status: 'error', msg: `Could not find any repository named ${repoName}` })
        .end();
    }
  }

  async getAllMembers(req, res) {
    try {
      const members = await takeBlipService.getAllMembers();
      if (!members.length > 0) {
        throw new Error();
      }
      res.status(200).json({ status: 'ok', data: members, msg: '' }).end();
    } catch (e) {
      res.status(400).json({ status: 'error', msg: 'Could not find any member.' }).end();
    }
  }
}

module.exports = new TakeBlipController();
