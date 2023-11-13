class Product {
  constructor(tariffs, consumption) {
    this.tariffs = tariffs;
    this.consumption = consumption;
  }

  compare() {
    const results = [];
    this.tariffs.forEach((tariffObj) => {
      const calculationResult = {};
      let annualCosts = 0;
      switch (tariffObj.type) {
        case 1:
          annualCosts = this.#basicElectricityTariffCalculation(tariffObj);
          break;
        case 2:
          annualCosts = this.#packagedTariffCalculation(tariffObj);
          break;
        default:
          break;
      }
      calculationResult["Tariff name"] = tariffObj.name;
      calculationResult["Annual costs (€/year)"] = annualCosts;
      results.push(calculationResult);
    });
    return results;
  }

  #basicElectricityTariffCalculation(tariffObj) {
    const annualCosts =
      tariffObj.baseCost * 12 +
      (tariffObj.additionalKwhCost / 100) * this.consumption;
    return parseFloat(annualCosts).toFixed(2);
  }

  #packagedTariffCalculation(tariffObj) {
    let annualCosts = 0;
    if (this.consumption <= tariffObj.includedKwh) {
      annualCosts = tariffObj.baseCost;
    } else {
      annualCosts =
        tariffObj.baseCost +
        (this.consumption - tariffObj.includedKwh) *
          (tariffObj.additionalKwhCost / 100);
    }
    return parseFloat(annualCosts).toFixed(2);
  }
}

module.exports = { Product };
