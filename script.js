import {
  nav as navData,
  users as usersData,
  posts as postsData,
  albums as albumsData,
} from "./data/index.js";

const navEl = document.querySelector("[data-nav]");
const usersTopSectionUserEl = document.querySelector("[data-top-section-user]");
const usersContactsEl = document.querySelector("[data-users-contacts]");
const userInfoEl = document.querySelector("[data-user-info]");
const userIntroductionEl = document.querySelector("[data-user-introduction]");
const addCommentEl = document.querySelector("[data-user-add-comment]");
const usersEl = document.querySelector("[data-users]");
const postsLeftSection = document.querySelector("[data-posts-left-section]");
const postsRightSection = document.querySelector("[data-posts-right-section]");
const openUsersButtonEl = document.querySelector("[data-open-users]");
const smallNavButtonEl = document.querySelector("[data-open-navbar]");

const nav = Array.from(navData);
const users = Array.from(usersData);
const posts = Array.from(postsData);
const albums = Array.from(albumsData);

const currentUserId = 2;
const currentUser = users.find((user) => user.id == currentUserId);

nav.forEach((menu) => {
  let menuEl = document.createElement("ul");
  menuEl.classList.add("nav__menu");
  menuEl.innerHTML = `<h3>${menu.title}</h3>`;

  menu.items.forEach((item) => {
    menuEl.innerHTML += `
            <li>
                ${
                  menu.title == nav[0].title
                    ? `<i class="${item.icon}"></i>`
                    : `<img src="./assets/nav/${item.icon}.png"></img>`
                }
                <span>${item.name}</span>
            </li>
        `;
  });

  navEl.appendChild(menuEl);
});

users.forEach((user) => {
  if (user.id == currentUserId) return;

  let lastSeen =
    user.lastSeen < 60
      ? `${user.lastSeen} minutes ago`
      : `${Math.floor(user.lastSeen / 60)} hours ago`;

  usersContactsEl.innerHTML += `
    <div class="contacts__user">
      <img src="./assets/users/${user.name}.jpg"/>
      <div>
        <p>${user.name}</p>
        <span>${user.active ? "Active" : lastSeen}</span>
        <span class="${
          user.active ? "user__active" : "user__not-active"
        }"></span>
      </div>
    </div>
  `;
});

usersTopSectionUserEl.children[0].innerHTML = currentUser.name;
usersTopSectionUserEl.children[1].src = `./assets/users/${currentUser.name}.jpg`;

userInfoEl.innerHTML = `
  <div>
    <img src="assets/users/${currentUser.name}.jpg">
    <h2>${currentUser.name}</h2>
  </div>
  <ul class="user__links">
    <li class="active">Timeline</li>
    <li>About</li>
    <li>Friends</li>
    <li>Photos</li>
    <li>More</li>
  </ul>
`;
userInfoEl.style.backgroundImage = `url("./assets/backdrop images/${currentUser.backdrop_img}.jpg")`;

userIntroductionEl.innerHTML += `<p>${currentUser.introduction}</p>`;
addCommentEl.innerHTML = `
  <ul class="add-comment__top-section">
    <li class="active">Status</li>
    <li>Photos</li>
    <li>Videos</li>
  </ul>
  <div class="add-comment__comment-section">
    <img src="assets/users/${currentUser.name}.jpg">
    <textarea placeholder="Write something to ${currentUser.name}."></textarea>
  </div>
  <div class="add-comment__bottom-section">
    <ul>
      <li>
        <svg viewBox="-42 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M333.7 123.3c0 33.9-12.2 63.2-36.2 87.2-24 24-53.3 36.1-87.1 36.1h-.1c-33.9 0-63.2-12.1-87.1-36.1-24-24-36.2-53.3-36.2-87.2 0-33.9 12.2-63.2 36.2-87.2 24-24 53.2-36 87-36.1h.2c33.8 0 63.2 12.2 87.1 36.1 24 24 36.2 53.3 36.2 87.2zm0 0" fill="#ffbb85"></path>
        <path d="M427.2 424c0 26.7-8.5 48.3-25.3 64.3-16.5 15.7-38.4 23.7-65 23.7H90.2c-26.6 0-48.5-8-65-23.7C8.5 472.3 0 450.7 0 423.9c0-10.2.3-20.4 1-30.2a302.7 302.7 0 0112.1-64.9c3.3-10.3 7.8-20.5 13.4-30.3 5.8-10.2 12.5-19 20.1-26.3a89 89 0 0129-18.2c11.2-4.4 23.7-6.7 37-6.7 5.2 0 10.3 2.2 20 8.5l21 13.5c6.6 4.3 15.7 8.3 27 11.9a107.7 107.7 0 0033 5.3c11 0 22-1.8 33-5.3 11.2-3.6 20.3-7.6 27-12l21-13.4c9.7-6.3 14.7-8.5 20-8.5 13.3 0 25.7 2.3 37 6.7a89 89 0 0128.9 18.2c7.6 7.3 14.4 16.1 20.2 26.3 5.5 9.8 10 20 13.3 30.3a305.5 305.5 0 0112.1 64.9c.7 9.8 1 20 1 30.2zm0 0" fill="#6aa9ff"></path>
        <path d="M210.4 246.6h-.1V0c34 0 63.3 12.2 87.2 36.1 24 24 36.2 53.3 36.2 87.2 0 33.9-12.2 63.2-36.2 87.2-24 24-53.3 36.1-87.1 36.1zm0 0" fill="#f5a86c"></path>
        <path d="M427.2 424c0 26.7-8.5 48.3-25.3 64.3-16.5 15.7-38.4 23.7-65 23.7H210.2V286.5h3.3c11 0 22-1.8 33-5.3 11.2-3.6 20.3-7.6 27-12l21-13.4c9.7-6.3 14.7-8.5 20-8.5 13.3 0 25.7 2.3 37 6.7a89 89 0 0128.9 18.2c7.6 7.3 14.4 16.1 20.2 26.3 5.5 9.8 10 20 13.3 30.3a305.5 305.5 0 0112.1 64.9c.7 9.8 1 20 1 30.2zm0 0" fill="#2682ff"></path>
        </svg>
        <span>People</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M87.084 192c-.456-5.272-.688-10.6-.688-16C86.404 78.8 162.34 0 256.004 0s169.6 78.8 169.6 176c0 5.392-.232 10.728-.688 16h.688c0 96.184-169.6 320-169.6 320s-169.6-223.288-169.6-320h.68zm168.92 32c36.392 1.024 66.744-27.608 67.84-64-1.096-36.392-31.448-65.024-67.84-64-36.392-1.024-66.744 27.608-67.84 64 1.096 36.392 31.448 65.024 67.84 64z" fill="#e21b1b"></path>
        </svg>
        <span>Check in</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <circle cx="256" cy="256" r="256" fill="#ffca28"></circle>
          <g fill="#6d4c41">
            <path d="M399.68 208.32c-8.832 0-16-7.168-16-16 0-17.632-14.336-32-32-32s-32 14.368-32 32c0 8.832-7.168 16-16 16s-16-7.168-16-16c0-35.296 28.704-64 64-64s64 28.704 64 64c0 8.864-7.168 16-16 16zM207.68 208.32c-8.832 0-16-7.168-16-16 0-17.632-14.368-32-32-32s-32 14.368-32 32c0 8.832-7.168 16-16 16s-16-7.168-16-16c0-35.296 28.704-64 64-64s64 28.704 64 64c0 8.864-7.168 16-16 16z"></path>
          </g>
          <path d="M437.696 294.688c-3.04-4-7.744-6.368-12.736-6.368H86.4c-5.024 0-9.728 2.336-12.736 6.336-3.072 4.032-4.032 9.184-2.688 14.016C94.112 390.88 170.08 448.32 255.648 448.32s161.536-57.44 184.672-139.648c1.376-4.832.416-9.984-2.624-13.984z" fill="#fafafa"></path>
        </svg>
        <span>Mood</span>
      </li>
    </ul>
    <button>Share</button>
  </div>
`;

posts.forEach((post) => {
  if (post.authorId != currentUserId) return;
  postsLeftSection.innerHTML += `
    <div class="post">
      <img src="assets/posts/${post.img}.jpg">
      <div class="post__info">
        <h3>${post.title}</h3>
        <p>${post.createdAt}</p>
      </div>
    </div>
  `;
});

albums.forEach((album) => {
  if (album.authorId != currentUserId) return;
  postsRightSection.innerHTML += `
    <div class="album">
      <div class="album__author">
        <img src="assets/users/${currentUser.name}.jpg">
        <div class="author__content">
          <div>
            <h3>${currentUser.name}</h3>
            <span>create new</span>
            <a>album</a>
          </div>
          <span>${album.createdAt}</span>
        </div>
      </div>
      <p>${album.description}</p>
      <div class="album__images">
        <img src="./assets/albums/${album.img1}.jpg">
        <img src="./assets/albums/${album.img2}.jpg">
        <img src="./assets/albums/${album.img3}.jpg">
      </div>
      <ul class="album__stats">
        <li><i class="bx bx-heart"></i><span>${album.likes}</span></li>
        <li><i class="bx bx-comment"></i><span>${album.comments}</span></li>
        <li><i class="bx bx-repost"></i><span>${album.reposts}</span></li>
      </ul>
    </div>
  `;
});

if (
  posts.filter((post) => post.authorId == currentUserId).length != 0 ||
  albums.filter((album) => album.authorId == currentUserId).length != 0
) {
  document.querySelector("[data-main-content]").style.height = "100%";
}

let clickOnUsers = false;
let clickOnNav = false;
openUsersButtonEl.addEventListener("click", () => {
  usersEl.classList.add("active");
  clickOnUsers = true;
});

smallNavButtonEl.addEventListener("click", () => {
  navEl.classList.add("active");
  clickOnNav = true;
});

window.addEventListener("mousedown", (e) => {
  let usersWidth = parseInt(
    getComputedStyle(document.documentElement)
      .getPropertyValue("--users-width")
      .replace("px", "")
  );
  let navWidth = parseInt(
    getComputedStyle(document.documentElement)
      .getPropertyValue("--nav-width")
      .replace("px", "")
  );

  if (e.x > window.innerWidth - usersWidth) {
    clickOnUsers = true;
  } else {
    clickOnUsers = false;
  }

  if (e.x < navWidth) {
    clickOnNav = true;
  } else {
    clickOnNav = false;
  }
});

window.addEventListener("click", () => {
  if (!clickOnUsers) {
    usersEl.classList.remove("active");
  }

  if (!clickOnNav) {
    navEl.classList.remove("active");
  }
});
