import "./index.css";
import App from "./App";
import router from "./routes";

document.querySelector("#app").append(new App().el);

router();
