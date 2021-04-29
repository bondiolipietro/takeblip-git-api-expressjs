class TakeBlipUtil {
  async filterRepositoriesByLanguage(repositories, language) {
    if (language) {
      return repositories.filter((repo) => {
        if (repo.language) {
          return repo.language.toLowerCase() === language.toLowerCase();
        }
        return false;
      });
    }
    return repositories;
  }

  async sortRepositoriesByCreationDate(repositories, orderBy) {
    if (orderBy === 'new') {
      repositories.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateB - dateA;
      });
    }
    if (orderBy === 'old') {
      repositories.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateA - dateB;
      });
    }
    return repositories;
  }

  async filterRepositoriesByLimit(repositories, limit) {
    if (limit) {
      return repositories.slice(0, limit);
    }
    return repositories;
  }
}

module.exports = new TakeBlipUtil();
