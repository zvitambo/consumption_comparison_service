const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotenv.config({ path: configFile });
} else {
  dotenv.config();
}

module.exports = {
  PORT: process.env.PORT || 5000,
  TARIFF_PROVIDER_API_KEY: process.env.TARIFF_PROVIDER_API_KEY,
  TARIFF_PROVIDER_URL: process.env.TARIFF_PROVIDER_URL,
};
