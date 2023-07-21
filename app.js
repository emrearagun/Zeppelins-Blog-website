const menuCollapseEl = document.querySelector(".menu_collapse");
const appLinksEl = document.querySelector(".app__links");
const purpleLogoEl = document.querySelector(".purple_logo");

if (menuCollapseEl && appLinksEl) {
  menuCollapseEl.addEventListener("click", () => {
    appLinksEl.classList.toggle("active");

    const purpleLogoEl = document.querySelector(".purple__logo");
    if (appLinksEl.classList.contains("active")) {

      menuCollapseEl.src = "./assets/images/menu_close_icon.svg";
      purpleLogoEl.src = "./assets/images/hire_me.svg";
     
    } else {
      menuCollapseEl.src = "./assets/images/menu_open_icon.svg";
      purpleLogoEl.src = "./assets/images/close_door_logo.svg";
     
    }
  });
}