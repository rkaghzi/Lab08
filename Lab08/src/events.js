const fs = require("fs");
const path = require("path");

const eventsFilePath = path.join(__dirname, "../data/events.json");


const loadEvents = () => {
  if (!fs.existsSync(eventsFilePath)) return [];
  const data = fs.readFileSync(eventsFilePath, "utf8");
  return JSON.parse(data);
};


const saveEvents = (events) => {
  fs.writeFileSync(eventsFilePath, JSON.stringify(events, null, 2), "utf8");
};


const addEvent = (name, description, date, time, category, reminder) => {
  const events = loadEvents();
  const newEvent = { id: events.length + 1, name, description, date, time, category, reminder };
  events.push(newEvent);
  saveEvents(events);
  return newEvent;
};


const getEvents = () => {
  return loadEvents();
};

const getUpcomingEvents = () => {
  return loadEvents().sort((a, b) => new Date(a.date) - new Date(b.date));
};


const getEventsByCategory = (category) => {
  return loadEvents().filter(event => event.category === category);
};

module.exports = { addEvent, getEvents, getUpcomingEvents, getEventsByCategory };
