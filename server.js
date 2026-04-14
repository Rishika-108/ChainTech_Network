import connectDB from "./config/db";
import express from express;
import dotenv from dotenv;

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