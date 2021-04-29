const axios = require('axios');

const Repository = require('../model/Repository');
const Member = require('../model/Member');

const takeBlipUtil = require('../util/TakeBlipUtil');

class TakeBlipService {
  async getAllRepositories(language, orderBy, limit) {
    const url = 'https://api.github.com/orgs/takenet/repos?per_page=100';
    let { data: repos } = await axios.get(url);
    repos = repos.map((repo) => new Repository(repo));
    repos = await takeBlipUtil.filterRepositoriesByLanguage(repos, language);
    repos = await takeBlipUtil.sortRepositoriesByCreationDate(repos, orderBy);
    repos = await takeBlipUtil.filterRepositoriesByLimit(repos, limit);
    return repos;
  }

  async getRepository(name) {
    const url = `https://api.github.com/repos/takenet/${name}`;
    let { data: repo } = await axios.get(url);
    repo = new Repository(repo);
    return repo;
  }

  async getAllMembers() {
    const url = 'https://api.github.com/orgs/takenet/members';
    let { data: members } = await axios.get(url);
    members = members.map((member) => new Member(member));
    return members;
  }
}

module.exports = new TakeBlipService();
