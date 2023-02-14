import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import leaderboardRoutes from "./routes/leaderboardRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/leaderboard", leaderboardRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
