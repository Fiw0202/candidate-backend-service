import dotenv from "dotenv";
import app from "./app";
import { AppDataSource } from "./config/database.config";

dotenv.config();
const PORT = process.env.PORT;

console.log(PORT);

AppDataSource.initialize()
  .then(() => {
    console.log("***** Database connected *****");
    app.listen(PORT, () => {
      console.log(`Server is running at PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
