const { Product } = require("../models/Product");
const CustomError = require("../utils/errors");

class ComparisonRepository {
  compare(tariffs, consumption) {
    try {
      const product = new Product(tariffs, consumption);
      return product.compare();
    } catch (err) {
      throw new CustomError.CustomAPIError(err.message);
    }
  }
}

module.exports = { ComparisonRepository };
