const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");
const allocationRoute = require("./routes/allocationRoute");
const membershipRoute = require("./routes/membershipRoute");
const stripe = require("./routes/stripe");
dotenv.config();

const app = express();
app.use(cors()); //actual link will be added later
app.use(express.json());

app.use(userRoutes);
app.use(projectRoutes);
app.use(allocationRoute);
app.use(membershipRoute);
app.use(stripe);

const port = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // check
    console.log(`> MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// callingDBConnectionnFunctionToMakeDBConnection
connectDB();

// callingServer
app.listen(port, () => {
  console.log(`> Server up & running at http://localhost:${port}/`);
});

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(app.listen(port, () => console.log(`server running on ${port}`)))
//   .catch((error) => console.log(error.message));
