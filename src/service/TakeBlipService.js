const axios = require('axios');
const Repository = require('../model/Repository');
const Member = require('../model/Member');

class TakeBlipService {
  async getAllRepositories(language, orderBy, limit) {
    const url = 'https://api.github.com/orgs/takenet/repos';
    let { data: repos } = await axios.get(url);
    repos = repos.map((repo) => new Repository(repo));
    return repos;
  }

  async getRepository(name) {
    const url = `https://api.github.com/repos/takenet/${name}`;
    let { data: repo } = await axios.get(url);
    repo = new Repository(repo);
    return repo;
  }

  async getAllMembers(orderBy, limit) {
    const url = 'https://api.github.com/orgs/takenet/members';
    let { data: members } = await axios.get(url);
    members = members.map((member) => new Member(member));
    return members;
  }
}

module.exports = new TakeBlipService();
