import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store/ConfigureStore";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store= {store}>
      <App />
  </Provider>, rootElement);
