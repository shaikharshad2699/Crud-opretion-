import express from "express";

const port = 3000;
import connectDB from "./db/connectdb.js ";
import route from "./routes/routes.js";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

const app = express();
// database collection
connectDB(DATABASE_URL);
// route
app.use("/", route);

app.listen(port, () => {
  console.log(`server is running at port : ${port}`);
});
