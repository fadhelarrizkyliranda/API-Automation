const request = require("supertest")("http://restapi.adequateshop.com/api");
const expect = require("chai").expect;
import { resbody } from '../Test/userLogin'

let token = '4beb00fa-6f17-4754-b12e-8d5ae7b278f7' //kalo tidak bisa pake auto pake ini copy dari console(log)
let tokenauto = resbody.restoken;

describe("POST /users", function(){
    it("Create new users", async function(){
        const response = await request
            .post("/users")
            .send({
                "name":"ayam",
                "email":"ayam2@ymail.com",
                "location":"USA"
            })
            .set({ "Authorization": `Bearer ${tokenauto}` });

            // let responseRegis2 = Object.keys(response.body.data[0])
            // let responseRegis3 = response.body.data[0].email
            
            // console.log("Ini : " + responseRegis3);
            // console.log("Ini : " + responseRegis2);

        expect (response.status).to.eql(201);
        // expect (response.body);
        // expect (response.body.name).to.eql(USER_DATA.name);
        // expect (response.body.job).to.eql(USER_DATA.job);
    })
})