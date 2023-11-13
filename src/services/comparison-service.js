const { ComparisonRepository } = require("../repository/comparison-repository");
const CustomError = require("../utils/errors");
const { FormateData } = require("../utils");

class ComparisonService {
  constructor() {
    this.repository = new ComparisonRepository();
  }

  async processComparison(tariffs, consumption) {
    try {
      const comparisonResult = await this.repository.compare(
        tariffs,
        consumption
      );
      return FormateData(comparisonResult);
    } catch (err) {
      throw new CustomError.CustomAPIError(err.message);
    }
  }
}
module.exports = { ComparisonService };
