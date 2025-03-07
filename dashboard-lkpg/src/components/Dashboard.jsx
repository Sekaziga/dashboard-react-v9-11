import { useState } from 'react';
import mockData from '../data/mockData.json';
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
import ChangeUser from './ChangeUser';

// Custom Tooltip component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-300 rounded shadow">
        <p className="text-gray-700">{`Month: ${label}`}</p>
        <p className="text-gray-700">{`Streams: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

function Dashboard() {
  const [selectedUser, setSelectedUser] = useState(mockData.users[0]);

  const handleUserChange = (user) => {
    setSelectedUser(user);
  };

  if (!selectedUser) {
    return (
      <main className="p-6 max-w-6xl mx-auto bg-gray-100 min-h-screen">
        <p className="text-red-500">No user selected. Please choose a user.</p>
      </main>
    );
  }

  const monthlyStreamsData = Object.entries(selectedUser.monthlyStreams || {}).map(
    ([month, streams]) => ({
      month,
      streams,
    })
  );

  return (
    <main className="p-6 max-w-6xl mx-auto bg-gray-100 min-h-screen">
      <div className="mb-6">
        <ChangeUser usersData={mockData} onUserChange={handleUserChange} />
      </div>

      <div className="flex gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md w-1/3 min-w-[250px]">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">
            {selectedUser.name || 'Unknown User'}
          </h1>
          <p className="text-gray-600 text-sm">ID: {selectedUser.id || 'N/A'}</p>
          <p className="text-gray-600 text-sm">Email: {selectedUser.email || 'N/A'}</p>
          <p className="text-gray-600 text-sm">
            Location: {selectedUser.location || 'N/A'}
          </p>
          <img
            src={selectedUser.profilePicture || 'https://via.placeholder.com/80'}
            alt={selectedUser.name || 'User'}
            className="w-20 h-20 rounded-full mt-4 border border-gray-300 shadow-sm"
          />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md w-2/3 min-w-[300px]">
          <p className="text-lg font-semibold text-gray-800">
            Monthly Streams This Year:
          </p>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyStreamsData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="streams" fill="#4F46E5" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-6">
        <div className="bg-white p-6 rounded-2xl shadow-md w-2/3 min-w-[300px]">
          <UserLeaderboard usersData={mockData} />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md w-1/3 min-w-[250px]">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Songs</h2>
          <ul className="grid grid-cols-1 gap-4">
            {selectedUser.topSongs && selectedUser.topSongs.length > 0 ? (
              selectedUser.topSongs.map((song, index) => (
                <li key={index} className="border-b last:border-b-0 py-3">
                  <p className="text-gray-700 font-medium">
                    {song.song} - <span className="text-gray-500">{song.artist}</span>
                  </p>
                  <p className="text-gray-500">Streams: {song.streams}</p>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No top songs available.</p>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;