const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Event Planner!");
});

app.post("/events", (req, res) => {
  const { name, description, date, time } = req.body;
  if (!name || !date || !time) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  res.status(201).json({ message: "Event created successfully!" });
});

module.exports = app; 
