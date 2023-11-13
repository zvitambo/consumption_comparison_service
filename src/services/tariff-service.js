const { queryTariffProvider } = require("../utils/providers/tariff-provider");
const CustomError = require("../utils/errors");

class TariffService {
  async getTariffs() {
    try {
      return await queryTariffProvider();
    } catch (error) {
      throw new CustomError.BadRequestError("tariffs not found");
    }
  }
}

module.exports = { TariffService };
