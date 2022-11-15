export default class User {
  constructor(id, name, backdrop_img, active, introduction, lastSeen) {
    this.id = id;
    this.name = name;
    this.backdrop_img = backdrop_img;
    this.active = active;
    this.introduction = introduction;
    this.lastSeen = lastSeen;
  }
}
