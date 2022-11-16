const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require("chai-http");
const app = require("../app");
chai.use(chaiHttp);


describe("validate update product:", function async() { 
    it("should return success message", function async(done) {
        chai
        .request(app)
        .post("/update/635ac32c95b4a7e11596b9b4")
        .send({
            name: "test1",
            quantity: 1,
            pur_price: 100,
            sell_price:  120, 
            low_warn: 10,
        })
        .end((err, res) => {

            // response should have a 200 status code 
            expect(res).to.have.status(200);
           
            done();
        });
    });

    it("should be acknowledged", function async(done) {
        chai
        .request(app)
        .post("/update/635ac32c95b4a7e11596b9b4")
        .send({
            name: "test1",
            quantity: 1,
            pur_price: 100,
            sell_price:  120, 
            low_warn: 10,
        })
        .end((err, res) => {
            
            expect(res.body.acknowledged).to.be.true;
            
            done();
        });
    });


    it("should have no errors", function async(done) {
        chai
        .request(app)
        .post("/update/635ac32c95b4a7e11596b9b4")
        .send({
            name: "test1",
            quantity: 1,
            pur_price: 100,
            sell_price:  120, 
            low_warn: 10,
        })
        .end((err, res) => { 

            expect(res.error).to.be.false;
            
            done();
        });
    });
 
     
});

