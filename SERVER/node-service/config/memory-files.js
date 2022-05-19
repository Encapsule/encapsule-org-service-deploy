"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var path = require("path"); // used only for logging here - leave path manipulation to the HolisticNodeService implementation to deal w/
  // As of holistic v0.0.49-spectrolite this is now a callback function dispatched inside a filter.


  module.exports = function (_ref) {
    var _memoryFileRegistrati;

    var appBuild = _ref.appBuild,
        deploymentEnvironment = _ref.deploymentEnvironment;
    console.log("> \"".concat(path.resolve(__filename), "\" Preparing deploymentEnvironment=").concat(deploymentEnvironment, " @encapsule/holism-format memory-cached cached file resource route map for ").concat(appBuild.app.name, " to return back to @encapsule/holism config orchestrator."));
    var cacheControlOverride = "immutable, public, max-age=".concat(45
    /*days*/
    * 24
    /*hours/day*/
    * 60
    /*mins/hour*/
    * 60
    /*secs/min*/
    ); // browser cache asset timeout example

    var memoryFileRegistrationMap = (_memoryFileRegistrati = {
      // ======================================================================
      // STYLESHEETS
      // ======================================================================
      "ASSETS/css/encapsule-org-base-styles.css": {
        request_bindings: {
          method: "GET",
          uris: ["/css/encapsule-org-base-styles.css"]
        },
        response_properties: {
          contentEncoding: "utf8",
          contentType: "text/css"
        }
      },
      // ======================================================================
      // IMAGES
      // ======================================================================
      './ASSETS/images/seattle-emp-gehry-bronze-wall.jpg': {
        request_bindings: {
          uris: ['/bronze-wall.jpg', '/images/bronze-wall.jpg'],
          method: 'GET'
        },
        response_properties: {
          contentEncoding: 'binary',
          contentType: 'image/jpeg'
        }
      },
      './ASSETS/images/twitter.svg': {
        request_bindings: {
          uris: ['/images/twitter.svg'],
          method: 'GET'
        },
        response_properties: {
          contentEncoding: 'binary',
          contentType: 'image/svg+xml'
        }
      },
      './ASSETS/images/github-octocat.svg': {
        request_bindings: {
          uris: ['/images/github-octocat.svg'],
          method: 'GET'
        },
        response_properties: {
          contentEncoding: 'binary',
          contentType: 'image/svg+xml'
        }
      },
      // TODO: deprecate these as soon as npm package logos are updated for all packages.
      // https://encapsule.io/images/blue-burst-encapsule.io-logo-251x64.png
      // v DEPRECATE ASAP
      './ASSETS/images/blue-burst-encapsule.io-logo-251x64.png': {
        request_bindings: {
          method: 'GET',
          uris: ['/images/blue-burst-encapsule.io-logo-251x64.png']
        },
        response_properties: {
          contentEncoding: 'binary',
          contentType: 'image/png'
        }
      },
      './ASSETS/images/blue-burst-encapsule.io-logo.svg': {
        request_bindings: {
          method: 'GET',
          uris: ['/images/blue-burst-encapsule.io-logo.svg']
        },
        response_properties: {
          contentEncoding: 'binary',
          contentType: 'image/svg+xml'
        }
      },
      // ^ DEPRECATE ASAP
      './ASSETS/images/blue-burst-encapsule.io-icon-16x16.png': {
        request_bindings: {
          method: 'GET',
          uris: ['/images/blue-burst-encapsule.io-icon-16x16.png']
        },
        response_properties: {
          contentEncoding: 'binary',
          contentType: 'image/png'
        }
      },
      './ASSETS/images/blue-burst-encapsule.io-icon-24x24.png': {
        request_bindings: {
          method: 'GET',
          uris: ['/images/blue-burst-encapsule.io-icon-24x24.png']
        },
        response_properties: {
          contentEncoding: 'binary',
          contentType: 'image/png'
        }
      },
      './ASSETS/images/blue-burst-encapsule.io-icon-32x32.png': {
        request_bindings: {
          method: 'GET',
          uris: ['/images/blue-burst-encapsule.io-icon-32x32.png']
        },
        response_properties: {
          contentEncoding: 'binary',
          contentType: 'image/png'
        }
      },
      './ASSETS/images/blue-burst-encapsule.io-icon-48x48.png': {
        request_bindings: {
          method: 'GET',
          uris: ['/images/blue-burst-encapsule.io-icon-48x48.png']
        },
        response_properties: {
          contentEncoding: 'binary',
          contentType: 'image/png'
        }
      },
      './ASSETS/images/blue-burst-encapsule.io-icon-56x56.png': {
        request_bindings: {
          method: 'GET',
          uris: ['/images/blue-burst-encapsule.io-icon-56x56.png']
        },
        response_properties: {
          contentEncoding: 'binary',
          contentType: 'image/png'
        }
      },
      './ASSETS/images/blue-burst-encapsule.io-icon-64x64.png': {
        request_bindings: {
          method: 'GET',
          uris: ['/images/blue-burst-encapsule.io-icon-64x64.png']
        },
        response_properties: {
          contentEncoding: 'binary',
          contentType: 'image/png'
        }
      },
      './ASSETS/images/blue-burst-encapsule.io-icon-72x72.png': {
        request_bindings: {
          method: 'GET',
          uris: ['/images/blue-burst-encapsule.io-icon-72x72.png']
        },
        response_properties: {
          contentEncoding: 'binary',
          contentType: 'image/png'
        }
      },
      './ASSETS/images/blue-burst-encapsule.io-icon-96x96.png': {
        request_bindings: {
          method: 'GET',
          uris: ['/images/blue-burst-encapsule.io-icon-96x96.png']
        },
        response_properties: {
          contentEncoding: 'binary',
          contentType: 'image/png'
        }
      },
      './ASSETS/images/blue-burst-encapsule.io-icon-1024x1024.png': {
        request_bindings: {
          method: 'GET',
          uris: ['/images/blue-burst-encapsule.io-icon-1024x1024.png']
        },
        response_properties: {
          contentEncoding: 'binary',
          contentType: 'image/png'
        }
      }
    }, _defineProperty(_memoryFileRegistrati, "./ASSETS/images/blue-burst-encapsule.io-icon-1024x1024.png", {
      request_bindings: {
        method: 'GET',
        uris: ['/images/blue-burst-encapsule.io-icon-1024x1024.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/blue-burst-encapsule.io-icon-490x478.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/blue-burst-encapsule.io-icon-490x478.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/blue-burst-encapsule.io-icon-v2.svg', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/blue-burst-encapsule.io-icon-v2.svg']
      },
      response_properties: {
        contentEncoding: 'utf8',
        contentType: 'image/svg+xml'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/encapsule-arccore.svg', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/encapsule-arccore.svg']
      },
      response_properties: {
        contentEncoding: 'utf8',
        contentType: 'image/svg+xml'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/encapsule-arccore-util.svg', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/encapsule-arccore-util.svg']
      },
      response_properties: {
        contentEncoding: 'utf8',
        contentType: 'image/svg+xml'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/encapsule-arccore-types.svg', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/encapsule-arccore-types.svg']
      },
      response_properties: {
        contentEncoding: 'utf8',
        contentType: 'image/svg+xml'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/encapsule-arccore-identifier.svg', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/encapsule-arccore-identifier.svg']
      },
      response_properties: {
        contentEncoding: 'utf8',
        contentType: 'image/svg+xml'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/encapsule-arccore-graph.svg', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/encapsule-arccore-graph.svg']
      },
      response_properties: {
        contentEncoding: 'utf8',
        contentType: 'image/svg+xml'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/encapsule-arccore-filter.svg', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/encapsule-arccore-filter.svg']
      },
      response_properties: {
        contentEncoding: 'utf8',
        contentType: 'image/svg+xml'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/encapsule-arccore-filter-32x32.svg', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/encapsule-arccore-filter-32x32.svg']
      },
      response_properties: {
        contentEncoding: 'utf8',
        contentType: 'image/svg+xml'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/encapsule-arccore-filter-32x32.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/encapsule-arccore-filter-32x32.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/encapsule-arccore-discriminator.svg', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/encapsule-arccore-discriminator.svg']
      },
      response_properties: {
        contentEncoding: 'utf8',
        contentType: 'image/svg+xml'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/encapsule-hrequest.svg', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/encapsule-hrequest.svg']
      },
      response_properties: {
        contentEncoding: 'utf8',
        contentType: 'image/svg+xml'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/encapsule-holism.svg', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/encapsule-holism.svg']
      },
      response_properties: {
        contentEncoding: 'utf8',
        contentType: 'image/svg+xml'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/encapsule-holism-32x32.svg', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/encapsule-holism-32x32.svg']
      },
      response_properties: {
        contentEncoding: 'utf8',
        contentType: 'image/svg+xml'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/encapsule-holism-32x32.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/encapsule-holism-32x32.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/encapsule-holistic.svg', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/encapsule-holistic.svg']
      },
      response_properties: {
        contentEncoding: 'utf8',
        contentType: 'image/svg+xml'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/encapsule-folder-icon.svg', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/encapsule-folder-icon.svg']
      },
      response_properties: {
        contentEncoding: 'utf8',
        contentType: 'image/svg+xml'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/encapsule-document-icon.svg', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/encapsule-document-icon.svg']
      },
      response_properties: {
        contentEncoding: 'utf8',
        contentType: 'image/svg+xml'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/begin-at-the-beginning.jpg', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/begin-at-the-beginning.jpg']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/jpeg'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/ITA-23.4.gif', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/ITA-23.4.gif']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/gif'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/digraph-dfs-edge-types.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/digraph-dfs-edge-types.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/favicon.ico', {
      request_bindings: {
        uris: ['/favicon.ico', '/images/favicon.ico'],
        method: 'GET'
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/x-icon'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/android-icon-192x192.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/android-icon-192x192.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/android-icon-144x144.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/android-icon-144x144.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/android-icon-96x96.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/android-icon-96x96.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/android-icon-72x72.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/android-icon-72x72.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/android-icon-48x48.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/android-icon-48x48.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/android-icon-36x36.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/android-icon-36x36.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/apple-icon-114x114.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/apple-icon-114x114.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/apple-icon-120x120.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/apple-icon-120x120.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/apple-icon-144x144.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/apple-icon-144x144.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/apple-icon-180x180.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/apple-icon-180x180.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/apple-icon-57x57.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/apple-icon-57x57.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/apple-icon-60x60.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/apple-icon-60x60.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/apple-icon-72x72.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/apple-icon-72x72.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/favicon-16x16.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/favicon-16x16.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/favicon-32x32.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/favicon-32x32.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/favicon-96x96.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/favicon-96x96.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/ms-icon-144x144.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/ms-icon-144x144.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/ms-icon-150x150.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/ms-icon-150x150.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/ms-icon-310x310.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/ms-icon-310x310.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/ms-icon-70x70.png', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/ms-icon-70x70.png']
      },
      response_properties: {
        contentEncoding: 'binary',
        contentType: 'image/png'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/images/manifest.json', {
      request_bindings: {
        method: 'GET',
        uris: ['/images/manifest.json']
      },
      response_properties: {
        contentEncoding: 'utf8',
        contentType: 'application/json'
      }
    }), _defineProperty(_memoryFileRegistrati, './ASSETS/text/robots.txt', {
      request_bindings: {
        method: 'GET',
        uris: ['/robots.txt']
      },
      response_properties: {
        contentEncoding: 'utf8',
        contentType: 'text/plain'
      }
    }), _memoryFileRegistrati);
    return {
      error: null,
      result: memoryFileRegistrationMap
    };
  }; // end HolisticAppServer::constructor function callback

})();