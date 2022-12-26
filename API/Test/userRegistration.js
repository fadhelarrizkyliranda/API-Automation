const request = require("supertest")("http://restapi.adequateshop.com/api/authaccount/");
const expect = require("chai").expect;
// const { USER_DATA } = require("../data/userData");


describe("POST /registration", function(){
    it("create new users", async function(){
        const response = await request
            .post("/registration")
            .send({
                "name":"Developer",
                "email":"dev@gmail.com",
                "password":123456
            });            
        expect (response.status).to.eql(200);
    })
        
})



