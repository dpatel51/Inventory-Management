const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require("chai-http");
const app = require("../app");
chai.use(chaiHttp);

describe("Validate get all sales:", function async() {
  it("should return success message", function async(done) {
    chai
      .request(app)
      .get("/sales")
      .end((err, res) => {
        // response should have a 200 status code
        expect(res).to.have.status(200);

        done();
      });
  });

  it("should be an array of objects", function async(done) {
    chai
      .request(app)
      .get("/sales")
      .end((err, res) => {
        // Expect an array of objects to be returned
        expect(res.body).to.be.an("array");
        done();
      });
  });

  it("should have no errors", function async(done) {
    chai
      .request(app)
      .get("/sales")
      .end((err, res) => {
        // expect error as null
        expect(res.error).to.be.false;
        done();
      });
  });
});
