const takeBlipService = require('../service/TakeBlipService');

class TakeBlipController {
  async getAllRepositories(req, res) {
    const { language = null, orderBy = 'new', limit = null } = req.query;
    res.status(200).json({ data: 'repositories list' });
  }

  async getRepository(req, res) {
    const { repoName } = req.params;
    res.status(200).json({ data: 'repository' });
  }

  async getAllMembers(req, res) {
    const { orderBy } = req.query;
    res.status(200).json({ data: 'members list' });
  }
}

module.exports = new TakeBlipController();
