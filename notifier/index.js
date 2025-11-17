const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/notify", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const weather = await axios.get(`http://weather-api:5000/weather?city=${city}`);
    const data = weather.data;

    let message = "";
    if (data.temperature > 30) message = "It's quite hot! Stay hydrated.";
    else if (data.temperature >= 20) message = "Weather is pleasant.";
    else message = "It's cold! Wear warm clothes.";

    res.json({
      city: data.city,
      temperature: data.temperature,
      condition: data.condition,
      message,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather" });
  }
});

app.listen(7000, () => {
  console.log("Notifier running on port 7000");
});
