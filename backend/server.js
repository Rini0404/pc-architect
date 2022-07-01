const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");
const app = express();

connectDB();
// middleware for parsing json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// @ desc  in the second arg, we require the path to the route we want to take.
app.use("/api/", require("./routes/gpuRoutes"));
app.use("/api/users/", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.blue.bold);
});
