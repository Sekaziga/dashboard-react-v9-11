import React from 'react';

function TrendingArtists({ users }) {
  const artistStreamCounts = {};

  // Collect and sum streams for each artist
  users.forEach(user => {
    user.topSongs.forEach(song => {
      if (!artistStreamCounts[song.artist]) {
        artistStreamCounts[song.artist] = { name: song.artist, totalStreams: 0 };
      }
      artistStreamCounts[song.artist].totalStreams += song.streams;
    });
  });

  // Convert object to array and sort by streams
  const topArtists = Object.values(artistStreamCounts)
    .sort((a, b) => b.totalStreams - a.totalStreams) // Sort by highest streams
    .slice(0, 5); // Take top 5 artists

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Trending Artists</h2>
      <ul>
        {topArtists.map((artist, index) => (
          <li key={index} className="border-b last:border-b-0 py-3">
            <p className="font-medium">{artist.name}</p>
            <p className="text-gray-500">Total Streams: {artist.totalStreams.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingArtists;
