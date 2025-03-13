const request = require("supertest");
const app = require("./app"); 

describe("Event Management API", () => {
    test("should create a new event", async () => {
        const response = await request(app)
            .post("/events")
            .send({ name: "Meeting", description: "Project meeting", date: "2025-03-20", time: "10:00 AM" });
        expect(response.statusCode).toBe(201);
    });
});
