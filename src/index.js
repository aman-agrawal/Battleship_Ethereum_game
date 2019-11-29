import React from "react";
import { render } from "react-dom";
import cookie from "fg-cookie";
import qs from "qs";
//
import store from "data/store";
import createWeb3 from "utils/web3";
import Application from "./application";
import App from "./App";

const query = document.location.search.substr(1);
const params = qs.parse(query);

//
// Testing goodies !
//
if (params.provider) {
  cookie("provider", params.provider);
}

if (typeof params.account !== "undefined") {
  cookie("account", params.account);
}

// Force use of Ganache (ignore Metamask)
const ganache = true;

let accountIndex;

if (ganache) {
  accountIndex = cookie("account") || "0";
  accountIndex = parseInt(accountIndex, 10);
}

window.addEventListener("load", async ev => {
  let provider = null;

  const web3 = (window.web3 = createWeb3(provider));
  const app = new Application(web3, store, accountIndex);

  await app.init();

  render(<App store={store} />, document.getElementById("root"));
});
