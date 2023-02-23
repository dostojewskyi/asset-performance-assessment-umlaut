import { makeList } from "./views.utils.js";
const TECH_FUTURE_LIST = ["Kubernetes", "Azure", "MariaDB"];
export function makeFutureTechUseView() {
    const view = document.createElement("div");
    const list = makeList(TECH_FUTURE_LIST);
    view.appendChild(list);
    return view;
}
//# sourceMappingURL=future-technology-use.view.js.map