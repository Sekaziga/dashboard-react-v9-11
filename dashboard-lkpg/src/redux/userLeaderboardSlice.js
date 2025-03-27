import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  leaderboard: [],
};

const userLeaderboardSlice = createSlice({
  name: 'userLeaderboard',
  initialState,
  reducers: {
    setUserLeaderboard: (state, action) => {
      state.leaderboard = action.payload;
    },
  },
});

export const { setUserLeaderboard } = userLeaderboardSlice.actions;
export default userLeaderboardSlice.reducer;
