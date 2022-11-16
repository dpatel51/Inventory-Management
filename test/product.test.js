const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require("chai-http");
const app = require("../app");
chai.use(chaiHttp);

// describe('testing running...',async()=>{
//     it('this should compare two numbers',async()=>{
//         let expectedVal=10
//         let actualVal=10
//         expect(actualVal).to.be.equal(expectedVal);
//     })
// })

// describe("Api test running...", async () => {
//   it("this should compare two numbers", async (done) => {
//     console.log("aa");

//     await chai
//       .request(app)
//       .get("/productList")
//       .end((err, res) => {
//         console.log("api response", res.body);
//         // expect(res).to.have.status(200);

//         expect(res.statusCode).to.be.equal(200);

//         done();
//       });

//     // let expectedVal=10

//     // let actualVal=10
//     // expect(actualVal).to.be.equal(expectedVal);
//   }).timeout(10000);
// });

describe("Validate Event:", function async() {
  it("should return success message", function async(done) {
    console.log("aa");

    chai
      .request(app)
      .get("/productList")
      .end((err, res) => {
        expect(res).to.have.status(200);

        done();
      });
  });
});
