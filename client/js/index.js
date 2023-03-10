import { renderHeader } from "./components/header.js";
import { renderSignup } from "./components/signup.js";
import { renderCabinetView } from "./components/cabinet-view.js";
import { renderLogin } from "./components/login.js";
import { renderSignupLoader } from "./components/signup-loader.js";
import { renderLogOut } from "./components/logout.js";
import { addToCabinetRender } from "./components/cabinet-update.js";
import { removeUserCabinet } from "./components/cabinet-update.js";
import { renderCocktailView } from "./components/cocktail-view.js";
import { deleteCabinetWarning } from "./components/cabinet-update.js";


renderHeader();



window.renderHeader = renderHeader;
window.renderSignup = renderSignup;
window.renderSignupLoader = renderSignupLoader;
window.renderLogin = renderLogin;
window.renderCabinetView = renderCabinetView;
window.renderLogOut = renderLogOut;
window.addToCabinetRender = addToCabinetRender;
window.removeUserCabinet = removeUserCabinet;
window.renderCocktailView = renderCocktailView;
window.deleteCabinetWarning = deleteCabinetWarning

