//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";
import InputToDo from "./component/InputToDo.js";
import injectContext from "./store/appContext";

const LoQueSea = injectContext(InputToDo);

//render your react application
ReactDOM.render(<LoQueSea />, document.querySelector("#app"));
