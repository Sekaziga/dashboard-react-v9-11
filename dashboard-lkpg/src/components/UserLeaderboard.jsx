import React from 'react';
import { useSelector } from 'react-redux';

const UserLeaderboard = () => {
  const users = useSelector(state => state.userLeaderboard.users);

  // If no users are available or the users array is empty
  if (!users || users.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          User Streams Leaderboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400">No users to display.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        User Streams Leaderboard
      </h1>
      <ul className="space-y-4">
        {users.map((user, index) => (
          <li
            key={user.id}
            className="flex items-center p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
          >
            <span className="text-lg font-semibold text-gray-600 dark:text-gray-300 w-8">
              {index + 1}.
            </span>
            <img
              src={user.profilePicture}
              alt={user.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div className="flex-grow">
              <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {user.name}{' '}
                <span className="text-gray-500 dark:text-gray-400">({user.location})</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Streams: {user.totalStreams}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserLeaderboard;