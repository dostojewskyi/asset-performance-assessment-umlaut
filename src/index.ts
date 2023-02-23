import { makeHomeView } from "./views/home.view.js";
import { makeNavView } from "./views/legacy/navigation.view.js";
import { renderView } from "./views/views.utils.js";

function init() {
    const navSection = document.getElementById("section-nav");
    const navView = makeNavView();
    navSection?.appendChild(navView);

    const homeView = makeHomeView();
    renderView(homeView);
}

init();