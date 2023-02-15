//

import axios from "axios";

const BASE_URL =
  process.env.API_URL_ENDPOINT || "http://localhost:5000/leaderboard";

export interface Leaderboard {
  name: string;
  score: number;
}

export const getLeaderboard = async (): Promise<Leaderboard[]> => {
  const response = await axios.get(`${BASE_URL}/getLeaderboard`);
  return response.data;
};

export const postLeaderboard = async (data: {
  name: string;
  score: number;
}): Promise<void> => {
  await axios.post(`${BASE_URL}/postLeaderboard`, data);
};
