import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      })
      .catch((error) => {
        console.log("ServiceWorker registration failed: ", error);
      });
  });
}

let deferredPrompt;


window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallPromotion();
});

function showInstallPromotion() {
  const installBanner = document.createElement("div");
  installBanner.id = "install-banner";
  installBanner.innerHTML = `
    <div style="position: fixed; bottom: 0; left: 0; right: 0; background: #3a7bd5; border-top: 1px solid #ccc; padding: 10px; text-align: center; z-index: 1000;">
      <p style="margin: 0; padding: 0; font-size: 16px;"> جهت تجربه بهتر اپلکیشن را نصب کنید!</p>
      <button id="install-button" style="margin-top: 10px; padding: 10px 20px; font-size: 16px;">نصب اپلیکیشن</button>
    </div>
  `;
  document.body.appendChild(installBanner);

  const installButton = document.getElementById("install-button");
  installButton.addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
      document.getElementById("install-banner").remove();
    });
  });
}

window.addEventListener("appinstalled", () => {
  console.log("PWA was installed");
});
