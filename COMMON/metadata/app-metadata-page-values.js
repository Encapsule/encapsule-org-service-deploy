"use strict"; // app-metadata-page-values.js

var appBuildManifest = require("../../app-build");

module.exports = {
  "/": {
    title: "Encapsule.org",
    description: "Welcome to Encapsule.org - the new Encapsule Project homepage application based on vLastest @encapsule/holistic.",
    name: "Encapsule.org",
    tooltip: "".concat("Go home...")
  },
  "/login-oauth2": {
    title: "${appBuildManifest.app.name} Login",
    description: "Integration w/Google OAuth2 to gain access to Viewpath5 user metadata associated w/their Google account (e.g. name, e-mail, Google user ID). We use this to verify identity currently.",
    name: "${appBUildManifest.appName} Login",
    tooltip: "Log in ".concat(appBuildManifest.app.name, "...")
  }
};