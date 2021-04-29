class TakeBlipUtil {
  async filterRepositoriesByLanguage(repos, language) {
    if (language) {
      return repos.filter((repo) => {
        if (repo.language) {
          return repo.language.toLowerCase() === language.toLowerCase();
        }
        return false;
      });
    }
    return repos;
  }

  async sortRepositoriesByCreationDate(repos, orderBy) {
    console.log({ repos });
    console.log({ orderBy });
    if (orderBy === 'new') {
      repos.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateB - dateA;
      });
    }
    if (orderBy === 'old') {
      repos.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateA - dateB;
      });
    }
    return repos;
  }

  async filterRepositoriesByLimit(repos, limit) {
    if (limit) {
      return repos.slice(0, limit);
    }
    return repos;
  }
}

module.exports = new TakeBlipUtil();
