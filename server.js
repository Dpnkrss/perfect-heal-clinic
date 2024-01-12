const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
//mongodb connection
connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
//routes
app.use("/api/v1/doctor", require("./routes/docRoutes"));
app.use("/api/v1/doc", require("./routes/appointmentRoutes"));

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server running",
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running at ${port} in ${process.env.MODE}`.bgGreen.white);
});
