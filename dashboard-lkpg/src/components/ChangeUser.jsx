import { useState } from 'react';

const ChangeUser = ({ usersData, onUserChange }) => {
  // State to keep track of the selected user's ID
  const [selectedUserId, setSelectedUserId] = useState('');

  // Handle when the dropdown changes
  const handleChange = (event) => {
    const userId = event.target.value; // Get the selected ID
    setSelectedUserId(userId); // Update the state
    if (onUserChange) {
      // Find the full user object and pass it to the parent
      const selectedUser = usersData.users.find(user => user.id === parseInt(userId));
      onUserChange(selectedUser);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <label htmlFor="user-select" className="block text-lg font-medium text-gray-700 mb-2">
        Select a User:
      </label>
      <select
        id="user-select"
        value={selectedUserId}
        onChange={handleChange}
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">-- Choose a User --</option>
        {usersData && usersData.users && usersData.users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChangeUser;