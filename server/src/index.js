import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import connectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 4000;
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR :", error);
      throw error;
    });
    app.listen(port, () => {
      console.log(`Server isrunning on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection faild !! ", err);
  });
