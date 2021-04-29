class Repository {
  constructor(repo) {
    this.name = repo.name;
    this.full_name = repo.full_name;
    this.description = repo.description;
    this.owner = repo.owner.login;
    this.owner_avatar_url = repo.owner.avatar_url;
    this.created_at = repo.created_at;
    this.updated_at = repo.updated_at;
    this.pushed_at = repo.pushed_at;
    this.git_url = repo.git_url;
    this.ssh_url = repo.ssh_url;
    this.language = repo.language;
  }
}

module.exports = Repository;
