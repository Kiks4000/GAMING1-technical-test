import { Request, Response } from "express";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const LEADERBOARD_FILE = process.env.LEADERBOARD_FILE as string;
const LEADERBOARD_LIMIT = parseInt(process.env.LEADERBOARD_LIMIT as string);

interface LeaderboardEntry {
  name: string;
  score: number;
}

export const getLeaderboard = (req: Request, res: Response) => {
  try {
    const leaderboard = JSON.parse(fs.readFileSync(LEADERBOARD_FILE, "utf8"));

    leaderboard.sort(
      (a: LeaderboardEntry, b: LeaderboardEntry) => b.score - a.score
    );

    const limitedLeaderboard = leaderboard.slice(0, LEADERBOARD_LIMIT);

    res.json(limitedLeaderboard);
    console.log("Leaderboard generated !");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const addLeaderboardEntry = (req: Request, res: Response) => {
  try {
    const { name, score } = req.body;

    if (!name || !score) {
      console.log("Missing name or score in request body");
      res.status(400).send("Missing name or score in request body");
      return;
    }

    const leaderboard = JSON.parse(fs.readFileSync(LEADERBOARD_FILE, "utf8"));
    const lowestScore = leaderboard[leaderboard.length - 1].score;

    if (leaderboard.length >= LEADERBOARD_LIMIT && score < lowestScore) {
      console.log("Score is too low to be added to leaderboard.");
      res.status(400).send("Your score is too low. Try again!");
      return;
    }

    leaderboard.push({ name, score });
    console.log("Leaderboard updated !");

    leaderboard.sort(
      (a: LeaderboardEntry, b: LeaderboardEntry) => b.score - a.score
    );

    const limitedLeaderboard = leaderboard.slice(0, LEADERBOARD_LIMIT);

    fs.writeFileSync(LEADERBOARD_FILE, JSON.stringify(limitedLeaderboard));

    res.json(limitedLeaderboard);
    // res.status(200).send("Score added to leaderboard !");
  } catch (err) {
    res.status(500).send("Server error");
  }
};
