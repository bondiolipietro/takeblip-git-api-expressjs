class Member {
  constructor(member) {
    this.name = member.login;
    this.avatar_url = member.avatar_url;
    this.url = member.url;
  }
}

module.exports = Member;
