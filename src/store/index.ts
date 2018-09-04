import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

export default createStore(rootReducer, devToolsEnhancer({}));
export { RootState } from "./rootReducer";
export { RootAction } from "./rootReducer";
