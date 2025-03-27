import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import themeReducer from './themeSlice'; // Import themeReducer
import TrendingArtistsReducer from './trendingArtistsSlice'; // Import the correct reducer
import UserLeaderboardReducer from './userLeaderboardSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    trendingArtists: TrendingArtistsReducer,
    userLeaderboard: UserLeaderboardReducer, // Add userLeaderboard to the store
  },
});

export default store;
