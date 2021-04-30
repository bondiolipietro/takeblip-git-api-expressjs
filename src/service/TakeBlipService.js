const axios = require('axios');

const Repository = require('../model/Repository');
const Member = require('../model/Member');

const takeBlipUtil = require('../util/TakeBlipUtil');

class TakeBlipService {
  async getAllRepositories(language, orderBy, limit) {
    const url = 'https://api.github.com/orgs/takenet/repos?per_page=100';
    let repositories = await this.recursivelyGetReposFromAllAvailablePages(
      url,
      1,
      [],
      20
    );
    repositories = repositories.map((repo) => new Repository(repo));
    repositories = await takeBlipUtil.filterRepositoriesByLanguage(
      repositories,
      language
    );
    repositories = await takeBlipUtil.sortRepositoriesByCreationDate(
      repositories,
      orderBy
    );
    repositories = await takeBlipUtil.filterRepositoriesByLimit(repositories, limit);
    return repositories;
  }

  async recursivelyGetReposFromAllAvailablePages(url, page, repoList, recursionLimit) {
    const { data: repos } = await axios.get(`${url}&page=${page}`);
    if (repos.length === 0 || recursionLimit === 0) {
      return repoList;
    }
    repoList = repoList.concat(repos);
    page++;
    recursionLimit--;
    return this.recursivelyGetReposFromAllAvailablePages(url, page, repoList);
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
