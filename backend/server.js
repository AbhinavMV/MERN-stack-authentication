require("dotenv").config({ path: ".env" });
const express = require("express");
var cors = require("cors");

const connectDB = require("./database/db");
const errorHandler = require("./middleware/error");

const app = express();
const PORT = process.env.PORT || 5000;
const corsOpts = {
  origin: "*",
  methods: ["GET", "POST", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOpts));

app.use(express.json());

connectDB();

app.use("/api/auth", require("./routes/auth"));

app.use("/api/private", require("./routes/private"));

app.use(errorHandler);

const server = app.listen(PORT, () => console.log(`Server running on ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
