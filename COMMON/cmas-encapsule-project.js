"use strict";

// cmasViewpath5.js
// This is the common root CellModelArtifactSpace for @encapsule/encapsule-project services.
(function () {
  var _require = require("@encapsule/holarchy"),
      CellModelArtifactSpace = _require.CellModelArtifactSpace;

  var irutAnonymousNamespaceSeed = "D6dk3L15Q-yLyxc9p7Qt-g";

  var appBuild = require("../app-build");

  var cmas = new CellModelArtifactSpace({
    spaceLabel: ["~", "D6dk3L15Q-yLyxc9p7Qt-g", appBuild.app.author, appBuild.app.name].join(".")
  });

  if (!cmas.isValid()) {
    throw new Error(cmas.toJSON());
  }

  module.exports = cmas;
})();