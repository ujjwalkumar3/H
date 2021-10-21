const app = require('./index.js');
const supertest = require('supertest');
const { expect, test } = require('@jest/globals');
const request = supertest(app);

describe("tests for get requests", function(){
    test("tests /",async ()=>{
        const res=await request.get("/");
        expect(res.status).toBe(200);
    });

    test("gets the entire player records",async() =>{
        const res=await request.get("/records");
        expect(res.status).toBe(200);
    });

    test("should return 404",async()=>{
        await request.get("/other")
        .expect(404);
    });
    
});

describe("tests for post /add", ()=>{
    test("checks whether the information is being sent",async ()=>{
        await request.post("/add")
        .send({
            name:"R Pant",
            team:"DD"
        })
        .expect(200);
    });
});