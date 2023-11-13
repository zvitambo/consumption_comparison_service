const { Product } = require("./Product");
const { data } = require("../utils/mock/tariff-data");

describe("Product", () => {
  const product = new Product(data, 999);

  const result = product.compare();

  test("defines compare()", () => {
    expect(typeof product.compare).toBe("function");
  });

  test("compare() returns an array", () => {
    expect(product.compare()).toBeInstanceOf(Array);
  });

  test("compare() returns a non empty array", () => {
    expect(result.length).not.toBe(0);
  });

  test("property tariffs is an  array", () => {
    expect(product.tariffs).toBeInstanceOf(Array);
  });

  test("property consumption is a number", () => {
    expect(typeof product.consumption).toBe("number");
  });
});
