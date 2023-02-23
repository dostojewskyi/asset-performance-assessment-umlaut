/**
 * These are quick & dirty convenience functions. They're overly restrictive
 * regarding the content they accept for their element type. They're OK for now,
 * but should be cleaned up before being used more widely.
 */
export function makeLink(href, label, newTab = false) {
    const link = document.createElement("a");
    link.setAttribute("href", href);
    link.textContent = label;
    if (newTab) {
        link.setAttribute("target", "_blank");
    }
    return link;
}
export function makeList(listItems, ordered = false) {
    const listType = ordered ? "ol" : "ul";
    const list = document.createElement(listType);
    listItems.forEach((itemText) => {
        const listItem = document.createElement("li");
        listItem.textContent = itemText;
        list.appendChild(listItem);
    });
    return list;
}
export function makeParagraph(text = "") {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}
export function makeSpan(text) {
    const span = document.createElement("span");
    span.textContent = text;
    return span;
}
export function renderView(viewFn) {
    const wrapper = clearMainWrapper();
    const view = viewFn();
    wrapper === null || wrapper === void 0 ? void 0 : wrapper.appendChild(view);
}
function clearMainWrapper() {
    const wrapper = document.getElementById("section-content");
    wrapper === null || wrapper === void 0 ? void 0 : wrapper.childNodes.forEach((childNode) => {
        wrapper.removeChild(childNode);
    });
    return wrapper;
}
//# sourceMappingURL=views.utils.js.map