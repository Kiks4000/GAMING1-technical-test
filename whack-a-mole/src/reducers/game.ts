import { createSlice } from "@reduxjs/toolkit";

interface NameState {
  name: string;
}

interface ScoreState {
  score: number;
}

const initialState: NameState & ScoreState = {
  name: "",
  score: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const { setName, setScore } = gameSlice.actions;

export default gameSlice.reducer;
