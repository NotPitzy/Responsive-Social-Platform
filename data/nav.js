import { NavMenu, NavItem } from "../models/index.js";

const nav = [
  new NavMenu("menu", [
    new NavItem("bx bx-home-alt", "Home"),
    new NavItem("bx bx-news", "Latest News"),
    new NavItem("bx bx-map", "Explore"),
    new NavItem("bx bx-file", "Files"),
    new NavItem("bx bx-image", "Gallery"),
    new NavItem("bx bx-calendar-event", "Events"),
  ]),
  new NavMenu("your favorite", [
    new NavItem("trees", "Foresto"),
    new NavItem("bird", "Birds"),
    new NavItem("island", "Nature"),
    new NavItem("turtle", "Animals"),
    new NavItem("motorbike", "Motobike"),
    new NavItem("confetti", "Dance"),
  ]),
];

export default nav;
