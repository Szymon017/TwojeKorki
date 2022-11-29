import request from "supertest"
import app from "./index.js"
import mongoose from 'mongoose'

beforeEach(async () => {
  await mongoose.connect(`mongodb+srv://root1:${process.env.DATABASE_PASSWORD}@twojekorki.v642pqe.mongodb.net/?retryWrites=true&w=majority`);

});

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
      const response = await request(app).get("/users")
      expect(response.statusCode).toBe(200),
      expect(response.body.results).toBeGreaterThan(0);
    })
  })

})

afterEach(async () => {
  await mongoose.connection.close();
});