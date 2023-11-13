const request = require("supertest");
const app = require("../index");

describe("GET /api/v1/compare", () => {
  it("should return a json list", async () => {
    return request(app)
      .get("/api/v1/compare/?consumption=789")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it("should return statusCode of 200", async () => {
    return request(app)
      .get("/api/v1/compare/?consumption=789")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });

  it("should return statusCode of 400 if the consumption query parameter is missing", async () => {
    return request(app)
      .get("/api/v1/compare/")
      .expect(400)
      .then((res) => {
        expect(res.statusCode).toBe(400);
      });
  });

  it("should return response object with a results key", async () => {
    return request(app)
      .get("/api/v1/compare/?consumption=789")
      .then((res) => {        
        expect(res.statusCode).toEqual(200);
       expect(res.body).toHaveProperty("results");
      });
      
  });
  
  it("should return response object with a data array", async () => {
    return request(app)
      .get("/api/v1/compare/?consumption=789")
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.results).toHaveProperty("data");
      });
  });


  it("should return results object with a non empty data array", async () => {
    return request(app)
      .get("/api/v1/compare/?consumption=789")
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.results.data.length).toBeGreaterThan(0);
      });
  });
});
