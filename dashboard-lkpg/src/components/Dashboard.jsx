import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';
import { setUserLeaderboard } from '../redux/userLeaderboardSlice';
import { Link } from 'react-router-dom';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from 'recharts';
import UserLeaderboard from './UserLeaderboard';
import ThemeToggle from './ThemeToggle';
import TrendingArtists from './TrendingArtists';

function Dashboard() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const userMusicStats = useSelector((state) => state.user.selectedUser);

  // Update user leaderboard when users change
  useEffect(() => {
    if (users.length > 0) {
      const sortedUsers = users.map(user => ({
        ...user,
        totalStreams: user.monthlyStreams.reduce((sum, { streams }) => sum + streams, 0),
      })).sort((a, b) => b.totalStreams - a.totalStreams);

      dispatch(setUserLeaderboard(sortedUsers));
    }
  }, [users, dispatch]);

  const handleUserChange = (event) => {
    dispatch(setSelectedUser(parseInt(event.target.value)));
  };

  return (
    <main className="p-6 mx-auto bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen">
      {/* Theme Toggle */}
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>

      {/* User Dropdown */}
      <div className="flex justify-center pb-16">
        <h2>Users:</h2>
        <select
          className="cursor-pointer text-2xl bg-white dark:bg-gray-700 dark:text-white border dark:border-gray-600"
          onChange={handleUserChange}
          value={userMusicStats.id}
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-6 flex-wrap md:flex-nowrap">
        {/* User Profile */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md w-1/3 min-w-[250px]">
          <h1 className="text-3xl font-bold mb-2 underline">
            <Link to={`/profiles/${userMusicStats.id}`}>
              {userMusicStats.name}
            </Link>
          </h1>
          <p>ID: {userMusicStats.id}</p>
          <p>Email: {userMusicStats.email}</p>
          <p>Location: {userMusicStats.location}</p>
          <img
            src={userMusicStats.profilePicture}
            alt={userMusicStats.name}
            className="w-20 h-20 rounded-full mt-4 border border-gray-300 dark:border-gray-700"
          />
        </div>

        {/* Trending Artists */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md w-2/3 min-w-[300px]">
          <TrendingArtists users={users} />
        </div>

        {/* Monthly Streams Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md w-2/3 min-w-[300px]">
          <p className="text-lg font-semibold">Monthly streams this year:</p>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={userMusicStats.monthlyStreams}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="streams" fill="#4F46E5" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-6 flex-wrap md:flex-nowrap">
        {/* User Leaderboard */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md w-2/3 min-w-[300px]">
          <UserLeaderboard />
        </div>

        {/* Top Songs */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md w-1/3 min-w-[250px]">
          <h2 className="text-xl font-semibold mb-4">Top Songs</h2>
          <ul className="grid grid-cols-1 gap-4">
            {userMusicStats.topSongs.map((song, index) => (
              <li key={index} className="border-b last:border-b-0 py-3">
                <p className="font-medium">
                  {song.song} - <span className="text-gray-500">{song.artist}</span>
                </p>
                <p className="text-gray-500">Streams: {song.streams}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
