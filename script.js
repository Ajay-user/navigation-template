const overlay = document.getElementById("overlay");
const menuBars = document.getElementById("menu-bars");
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const nav4 = document.getElementById("nav4");
const nav5 = document.getElementById("nav5");

const navItems = [nav1, nav2, nav3, nav4, nav5];

// control navigation animation
const navAnimation = (direction1, direction2) => {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
};

const toggleNav = () => {
  // toggle menu-bars
  menuBars.classList.toggle("change");

  // toggle menu active
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    //   animate in nav items
    // dry-code
    navAnimation("out", "in");
    // brute force-code
    // nav1.classList.remove("slide-out-1");
    // nav1.classList.add("slide-in-1");
    // nav2.classList.remove("slide-out-2");
    // nav2.classList.add("slide-in-2");
    // nav3.classList.remove("slide-out-3");
    // nav3.classList.add("slide-in-3");
    // nav4.classList.remove("slide-out-4");
    // nav4.classList.add("slide-in-4");
    // nav5.classList.remove("slide-out-5");
    // nav5.classList.add("slide-in-5");
  } else {
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    //   animate in nav items
    // dry-code
    navAnimation("in", "out");
    // brute-force - code
    // nav1.classList.remove("slide-in-1");
    // nav1.classList.add("slide-out-1");
    // nav2.classList.remove("slide-in-2");
    // nav2.classList.add("slide-out-2");
    // nav3.classList.remove("slide-in-3");
    // nav3.classList.add("slide-out-3");
    // nav4.classList.remove("slide-in-4");
    // nav4.classList.add("slide-out-4");
    // nav5.classList.remove("slide-in-5");
    // nav5.classList.add("slide-out-5");
  }
};

menuBars.addEventListener("click", toggleNav);
// dry-code-for-adding-event-listener
navItems.forEach((nav) => nav.addEventListener("click", toggleNav));
// brute-force
// nav1.addEventListener("click", toggleNav);
// nav2.addEventListener("click", toggleNav);
// nav3.addEventListener("click", toggleNav);
// nav4.addEventListener("click", toggleNav);
// nav5.addEventListener("click", toggleNav);
