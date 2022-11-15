export default class Post {
  constructor(
    img1,
    img2,
    img3,
    description,
    authorId,
    createdAt,
    likes,
    comments,
    reposts
  ) {
    this.img1 = img1;
    this.img2 = img2;
    this.img3 = img3;
    this.description = description;
    this.authorId = authorId;
    this.createdAt = createdAt;
    this.likes = likes;
    this.comments = comments;
    this.reposts = reposts;
  }
}
