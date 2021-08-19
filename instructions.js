"use strict";

const { join } = require("path");

module.exports = async cli => {
  await cli.makeConfig("messagebird.js", join(__dirname, "./config/messagebird.js"));
  cli.command.completed("create", "config/messagebird.js");
};
