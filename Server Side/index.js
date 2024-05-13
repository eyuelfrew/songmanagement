import express from "express";
import dotenv from "dotenv";
import apiRoutes from "./routes/apiRoutes.js";
import connectDB from "./config/dbConfig.js";
import cors from "cors";
//process env variables
dotenv.config();
const corsOptions = {
  origin: "*",
};
const app = express();
app.use(express.json());
app.use(cors(corsOptions));
const PORT = process.env.PORT || 3000;

//API routes
app.use("/song", apiRoutes);

//mongoose connection
connectDB();
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
