const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server running",
  });
});
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running at ${port} in ${process.env.MODE}`.bgGreen);
});
