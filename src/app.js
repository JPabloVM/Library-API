import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipulateErrors from "./middlewares/error.middleware.js";
import Manipulator404 from "./middlewares/manipulator404.js";

const connect = await connectDatabase();

connect.on("error", (error) => {
  console.error("Connection error ", error);
});

connect.once("open", () => {
  console.log("Sucess on connection with Database!");
});

const app = express();
routes(app);

app.use(Manipulator404);

// eslint-disable-next-line no-unused-vars
app.use(manipulateErrors);

export default app;