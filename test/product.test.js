const chai= require('chai');
const expect=chai.expect;

describe('testing running...',async()=>{
    it('this should compare two numbers',async()=>{
        let expectedVal=10
        let actualVal=10
        expect(actualVal).to.be.equal(expectedVal);
    })
})