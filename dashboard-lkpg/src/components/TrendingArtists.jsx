import React from "react";

const TrendingArtists = ({ users }) => {
  // Aggregate streams per artist
  const artistStreams = {};

  users.forEach((user) => {
    user.topSongs.forEach((song) => {
      if (!artistStreams[song.artist]) {
        artistStreams[song.artist] = {
          name: song.artist,
          totalStreams: 0,
          profilePicture: user.profilePicture, // Assign first found profile pic (can be improved)
        };
      }
      artistStreams[song.artist].totalStreams += song.streams;
    });
  });

  // Convert to array and sort by streams
  const trendingArtists = Object.values(artistStreams)
    .sort((a, b) => b.totalStreams - a.totalStreams)
    .slice(0, 5); // Show top 5 artists

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        🔥 Trending Artists
      </h2>
      {trendingArtists.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          No trending artists available.
        </p>
      ) : (
        <ul className="space-y-4">
          {trendingArtists.map((artist, index) => (
            <li
              key={index}
              className="flex items-center p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition rounded-lg"
            >
              <span className="text-lg font-semibold text-gray-600 dark:text-gray-300 w-8">
                #{index + 1}
              </span>
              <img
                src={artist.profilePicture}
                alt={artist.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div className="flex-grow">
                <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  {artist.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {artist.totalStreams.toLocaleString()} streams
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TrendingArtists;