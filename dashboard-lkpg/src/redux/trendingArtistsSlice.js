import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock API call to fetch data
export const fetchTrendingArtists = createAsyncThunk(
  "trendingArtists/fetchTrendingArtists",
  async () => {
    const response = await fetch("/mockData.json"); // Adjust path if needed
    const data = await response.json();
    return data.users; // Extract users array from mockData.json
  }
);

const trendingArtistsSlice = createSlice({
  name: "trendingArtists",
  initialState: {
    artists: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingArtists.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrendingArtists.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artists = action.payload;
      })
      .addCase(fetchTrendingArtists.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default trendingArtistsSlice.reducer;
