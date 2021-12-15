import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/style.css";
import { search, popular } from "./script/view/main.js";
import { upcomingplaying } from "./script/view/main-up.js";
import { searchtvshow, tvshowpopular } from "./script/view/main-tvshow.js";

import "./script/components/topbar-navigation";
import "./script/components/header-background";
import "./script/components/main-body";
import "./script/components/footer-bar";

import "./script/components/upcpmingplayingcomp/header-background-up";
import "./script/components/upcpmingplayingcomp/main-body-up";

import "./script/components/tvshowpopcomponents/header-background-tv";
import "./script/components/tvshowpopcomponents/main-body-tv";

document.addEventListener("DOMContentLoaded", search);
document.addEventListener("DOMContentLoaded", popular);
document.addEventListener("DOMContentLoaded", upcomingplaying);
document.addEventListener("DOMContentLoaded", searchtvshow);
document.addEventListener("DOMContentLoaded", tvshowpopular);
