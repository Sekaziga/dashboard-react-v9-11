import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import mockData from '../data/mockData.json';
import ThemeToggle  from '../components/ThemeToggle';

function TopSongs() {
  // Collect all songs from all users
  const allSongs = mockData.users.flatMap((user) => user.topSongs);

  // Sort songs from most to least streams
  const sortedSongs = allSongs.sort((a, b) => b.streams - a.streams);

  return (
    <>
    <main className="p-6 mx-auto bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen">
      <NavHeader />
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
        <h2 className="text-2xl font-bold mb-4 text-secondary dark:text-gray-300">
          Top Songs
        </h2>
        <ul className="list-decimal pl-5 text-tertiary dark:text-gray-400">
          {sortedSongs.map((songObj, index) => (
            <li
              key={index}
              className="py-2 border-b border-gray-300 dark:border-gray-700"
            >
              <span className="font-semibold">{songObj.song}</span> -{' '}
              {songObj.artist} ({songObj.streams} streams)
            </li>
          ))}
        </ul>
      </div>
      <Footer />
      </main>
    </>
  );
}

export default TopSongs;
