import { makeHomeView } from "./views/home.view.js";
import { makeNavView } from "./views/navigation.view.js";
import { renderView } from "./views/views.utils.js";
function init() {
    const navSection = document.getElementById("section-nav");
    const navView = makeNavView();
    navSection === null || navSection === void 0 ? void 0 : navSection.appendChild(navView);
    renderView(makeHomeView);
}
init();
//# sourceMappingURL=index.js.map