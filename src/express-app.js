const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

//  routers
const comparisonRouter = require("./routes/comparisonRoutes");

// middleware
const notFoundMiddleware = require("./utils/middleware/not-found");
const errorHandlerMiddleware = require("./utils/middleware/error-handler");

module.exports = async (app) => {
  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  //routes
  app.use("/api/v1/compare", comparisonRouter);

  // error handling
  app.use(notFoundMiddleware);
  app.use(errorHandlerMiddleware);
};
