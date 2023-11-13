const { ComparisonRepository } = require("./comparison-repository");
const { data } = require("../utils/mock/tariff-data");

describe("ComparisonRepository", () => {
  const comparisonRepository = new ComparisonRepository();

  const result = comparisonRepository.compare(data, 999);

  test("defines compare()", () => {
    expect(typeof comparisonRepository.compare).toBe("function");
  });

  test("compare() returns an array", () => {
    expect(result).toBeInstanceOf(Array);
  });

  test("compare() returns a non empty array", () => {
    expect(result.length).not.toBe(0);
  });

  test("should throw an error if no value is passed into the function", () => {
    const resultFn = () => {
      comparisonRepository.compare();
    };
    expect(resultFn).toThrow();
  });

  test("should throw an error if one number argument is passed into the function", () => {
    const resultFn = () => {
      comparisonRepository.compare(34);
    };
    expect(resultFn).toThrow();
  });

});
