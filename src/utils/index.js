const CustomError = require("../utils/errors");

module.exports.FormateData = (data) => {
  if (data) {
    return { data };
  } else {
     throw new CustomError.CustomAPIError("Data Not found!");
  }
};
