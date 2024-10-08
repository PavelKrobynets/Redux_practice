import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";
import App from "./components/App";
import {Provider} from "react-redux"
import "./index.scss";

const store = createStore(reducer);



  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
			<Provider store={store}><App/></Provider>
    </React.StrictMode>
  );


