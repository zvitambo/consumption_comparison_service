const express = require("express");
require("express-async-errors");
const { PORT } = require("./config");
const expressApp = require("./express-app");
const app = express();

const startServer = async () => {
  await expressApp(app);
  app
    .listen(PORT, () => {
      console.log(`listening to port ${PORT}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
};

startServer();

module.exports = app;
