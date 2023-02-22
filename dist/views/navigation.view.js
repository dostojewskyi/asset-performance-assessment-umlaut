import { makeAboutSimonView } from "./about-simon.view.js";
import { makeAboutSiteView } from "./about-this-site.view.js";
import { makeHomeView } from "./home.view.js";
import { makeTechUsedView } from "./technology-used.view.js";
import { renderView } from "./views.utils.js";
const NAV_ITEMS = [
    ["Home", makeHomeView],
    ["About this site", makeAboutSiteView],
    ["About Simon", makeAboutSimonView],
    ["Technology used", makeTechUsedView],
];
export function makeNavView() {
    const wrapper = document.createElement("div");
    NAV_ITEMS.forEach((navItem) => {
        const navLink = makeNavLink(...navItem);
        wrapper.appendChild(navLink);
    });
    return wrapper;
}
function makeNavLink(label, viewFn) {
    const link = document.createElement("a");
    link.textContent = label;
    link.addEventListener("click", handleNavClick(viewFn));
    link.setAttribute("style", "padding: 2px; text-decoration: underline;");
    return link;
}
function handleNavClick(viewFn) {
    return function (event) {
        event.preventDefault();
        renderView(viewFn());
    };
}
//# sourceMappingURL=navigation.view.js.map