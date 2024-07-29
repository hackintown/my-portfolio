const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use("/api", contactRoutes);

//Connect DB
connectDB();

// Server Testing
app.post("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Your Server is Running at Port ${PORT}`);
});
