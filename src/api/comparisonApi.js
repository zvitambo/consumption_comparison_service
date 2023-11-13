const { StatusCodes } = require("http-status-codes");
const CustomError = require("../utils/errors");
const { ComparisonService } = require("../services/comparison-service");
const { TariffService } = require("../services/tariff-service");

const comparisonService = new ComparisonService();
const tariffService = new TariffService();

const getConsumption = async (req, res) => {
  const { consumption } = req.query;
  if (!consumption)
    throw new CustomError.BadRequestError(`consumption amount is required`);

  const tariffs = await tariffService.getTariffs();

  if (!tariffs) throw new CustomError.NotFoundError(`tariffs unavailable`);

  const results = await comparisonService.processComparison(
    tariffs,
    parseInt(consumption)
  );

  res.status(StatusCodes.OK).json({ results });
};

module.exports = {
  getConsumption,
};
