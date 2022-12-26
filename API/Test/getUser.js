const request = require("supertest")("http://restapi.adequateshop.com/api/users?page=");
const expect = require("chai").expect;
// const { USER_DATA } = require("../data/userData");


describe("GET /users", function(){
    it("create new users", async function(){
        const response = await request.get("1");

        let responseRegis3 = response.body.data[1].email
        console.log("Ini : " + responseRegis3);
        // let responseRegis = response.body.name
        // console.log("Ini : " + responseRegis);

            
        expect (response.status).to.eql(200);
        //expect (response.body.name).to.eql("Developer");
        // expect (response.body.job).to.eql(USER_DATA.job);
    })
})