import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock API call to fetch leaderboard data
export const fetchUserLeaderboard = createAsyncThunk(
  "userLeaderboard/fetchUserLeaderboard",
  async () => {
    const response = await fetch("/mockData.json"); // Adjust path if needed
    const data = await response.json();
    return data.users; // Ensure mockData.json has a 'leaderboard' key
  }
);

const userLeaderboardSlice = createSlice({
  name: "userLeaderboard",
  initialState: {
    leaderboard: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setUserLeaderboard: (state, action) => {
      state.leaderboard = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserLeaderboard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserLeaderboard.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.leaderboard = action.payload;
      })
      .addCase(fetchUserLeaderboard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setUserLeaderboard } = userLeaderboardSlice.actions;
export default userLeaderboardSlice.reducer;