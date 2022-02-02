"use strict";

// PostgreSQL example for Node.js
//
(function () {
  // Example code from: https://node-postgres.com/api/pool
  var process = require("process");

  var _require = require("pg"),
      Pool = _require.Pool;

  var connectionString = process.env["DATABASE_URL"];
  console.log("DATABASE_URL=\"".concat(connectionString, "\""));
  var pool = new Pool({
    connectionString: connectionString
  });
  var response = {
    error: null,
    result: null
  };
  pool.connect(function (err, client, release) {
    if (err) {
      response.error = "Error acquiring client ".concat(err.stack);
      console.error(response.error);
      return;
    }

    client.query('SELECT NOW()', function (err, result) {
      release();

      if (err) {
        response.error = "Error executing query ".concat(err.stack);
        console.error(response.error);
        return;
      }

      response.result = "Result of executing query ".concat(result.rows);
      console.log(response.result);
      return;
    });
  });

  module.exports = function () {
    return response;
  };
})();