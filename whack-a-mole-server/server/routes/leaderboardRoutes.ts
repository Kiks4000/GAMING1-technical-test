import { Router } from "express";
import {
  getLeaderboard,
  addLeaderboardEntry,
} from "./../controllers/leaderboardControllers";

const router = Router();

router.get("/getLeaderboard", getLeaderboard);

router.post("/postLeaderboard", addLeaderboardEntry);

export default router;
