import request from "supertest"
import app from "../index.js"
import mongoose from 'mongoose'

beforeEach(async () => {
  await mongoose.connect(`mongodb+srv://root1:${process.env.DATABASE_PASSWORD}@twojekorki.v642pqe.mongodb.net/?retryWrites=true&w=majority`);

});

//integration testing

describe("GET /users", () => {

  describe("When getting all users", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/users")
      expect(response.statusCode).toBe(200),
      expect(response.body.results).toBeGreaterThan(0);
    })
  })

  describe("When getting user by id", () => {
    test("should respond user with id of ", async () => {
      const response = await request(app).get("/users/638bde2d2606e48ae43056a4")
      expect(response.body.data.user._id).toEqual("638bde2d2606e48ae43056a4")
    })
  })

})

describe("UPDATE /users", () => {
  describe("When updating name of user to Antoni", () => {
    test("should respond user with name of Antoni ", async () => {
      const response = await request(app)
      .patch("/users/638bde2d2606e48ae43056a4")
      .send({firstName: "Antoni"})
      expect(response.body.data.firstName).toEqual("Antoni")
    })
  })

describe("GET /annoucements", ()=>{
  describe("When getting all annoucements from database", () => {
    test("Should return array greater than 0 and status equal to 200", async () => {
      const response = await request(app)
      .get("/annoucements")
      expect(response.status).toBe(200)
      expect(response.body.results).toBeGreaterThan(0)
    })
  })

  describe("When getting annoucement from the given id", () => {
    test("Should return annoucement of the same id as given", async () => {
      const response = await request(app)
      .get("/annoucements/6387f09f3f5dbc957573c5ac")
      expect(response.body.data.annoucement._id).toEqual("6387f09f3f5dbc957573c5ac")
    })
  })

  describe("UPDATE /annoucements", () => {
    describe("When updating annoucement of given id title to 'updatedTitle'", () => {
      test("Should return annoucement with updated title", async () => {
        const response = await request(app)
        .patch("/annoucements/6387f09f3f5dbc957573c5ac")
        .send({"title": "updatedTitle"})
        expect(response.body.data.title).toEqual("updatedTitle")
      })
    })
  })
  
})



})

afterEach(async () => {
  await mongoose.connection.close();
}); 
