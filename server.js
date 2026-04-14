import connectDB from "./config/db.js";
import express from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoute.js";
import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config();
//connectDB();

const app = express();
app.use(express.json());
app.use("/api/tasks", taskRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
    console.log(`Server running on PORT ${PORT}`);
})