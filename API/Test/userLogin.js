const request = require("supertest")("http://restapi.adequateshop.com/api/authaccount");
const expect = require("chai").expect;
global.token = undefined;

let resbody = {
    restoken : undefined
}

export {resbody};


describe("POST /login", function(){
    it("create new users", async function(){
        const response = await request
            .post("/login")
            .send({
                "email":"dev@gmail.com",
                "password":123456
            });

            let responseRegis3 = response.body.data.Token
            console.log("Ini Token : " + responseRegis3);
            resbody.restoken = responseRegis3;
        expect (response.status).to.eql(200);
    })
})
