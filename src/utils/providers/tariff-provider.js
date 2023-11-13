const { data } = require("../mock/tariff-data");
module.exports = {
  queryTariffProvider: () => {
    let headers = {
      "content-type": "application/json",
    };
    return new Promise((resolve, reject) => {
      // mock provider url
      let URL = `${process.env.TARIFF_PROVIDER_URL}/?api_key=${process.env.TARIFF_PROVIDER_URL}`;
      // mock call to provider
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  },
};
