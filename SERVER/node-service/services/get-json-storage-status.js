"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var httpServiceFilterFactory = require("@encapsule/holism").service;

  var factoryResponse = httpServiceFilterFactory.create({
    id: "nymKRRepSYma8UHCsidOmg",
    name: "Backend Storage Status",
    description: "Returns a JSON-encoded object w/current disposition of the backend's storage service.",
    constraints: {
      request: {
        content: {
          encoding: "utf8",
          type: "text/plain"
        },
        query_spec: {
          ____opaque: true
        },
        request_spec: {
          ____opaque: true
        }
      },
      response: {
        content: {
          encoding: "utf8",
          type: "application/json"
        },
        error_context_spec: {
          ____opaque: true
        },
        result_spec: {
          ____opaque: true
        }
      }
    },
    handlers: {
      request_handler: function request_handler(request_) {
        var response = {
          error: null,
          result: undefined
        };
        var errors = [];
        var inBreakScope = false;

        while (!inBreakScope) {
          inBreakScope = true;
          var responderResponse = request_.response_filters.result.request(_objectSpread(_objectSpread({}, request_), {}, {
            response_descriptor: {
              http: {
                code: 200,
                message: "Kick ass, dude."
              },
              content: {
                encoding: "utf8",
                type: "application/json"
              },
              data: request_.integrations.appStateContext.storage.postgresql()
            }
          }));
          break;
        }

        if (errors.length) {
          response.error = errors.join(" ");
        }

        return response;
      }
    }
  });

  if (factoryResponse.error) {
    throw new Error(factoryResponse.error);
  }

  module.exports = factoryResponse.result;
})();