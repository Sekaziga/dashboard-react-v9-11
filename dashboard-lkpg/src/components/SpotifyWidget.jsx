import { useState } from 'react';

const token = 'ae79924729f74508aae4926c93366e81';

const RandomSongs = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRandomSongs = async () => {
    setLoading(true);
    const randomLetter = String.fromCharCode(
      97 + Math.floor(Math.random() * 26)
    ); // Random letter a-z

    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${randomLetter}&type=track&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      console.error(
        'Error fetching songs:',
        response.status,
        await response.text()
      );
      setLoading(false);
      return;
    }

    const data = await response.json();
    setSongs(data.tracks?.items || []);
    setLoading(false);
  };

  return (
    <div className='max-w-xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold text-center mb-4'>
        Random Spotify Songs
      </h2>

      <button
        onClick={fetchRandomSongs}
        className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full mb-4'
        disabled={loading}>
        {loading ? 'Loading...' : 'Get Random Songs'}
      </button>

      <ul className='space-y-3'>
        {songs.length > 0 ? (
          songs.map(({ id, name, artists, album }) => (
            <li
              key={id}
              className='flex items-center space-x-4 bg-gray-800 p-3 rounded-lg shadow'>
              <img
                src={album.images[0]?.url}
                alt={name}
                className='w-12 h-12 rounded-lg'
              />
              <div>
                <p className='font-semibold'>{name}</p>
                <p className='text-sm text-gray-400'>
                  {artists.map((a) => a.name).join(', ')}
                </p>
              </div>
            </li>
          ))
        ) : (
          <p className='text-gray-400 text-center'>
            Click the button to load random songs.
          </p>
        )}
      </ul>
    </div>
  );
};

export default RandomSongs;
