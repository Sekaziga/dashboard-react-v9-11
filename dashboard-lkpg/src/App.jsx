import { useState } from 'react';
import Dashboard from './components/Dashboard';
import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import mockData from './data/mockData.json';
import ChangeUser from './components/ChangeUser';

function App() {
  // const [selectedUser, setSelectedUser] = useState(null);

  // const handleUserChange = (user) => {
  //   setSelectedUser(user);
  //   console.log('Selected User:', user); // Check the console to see the user
  // };
  return (
    <>
      <NavHeader />
      <Dashboard />
      {/* <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Music Dashboard</h1>
      <ChangeUser usersData={mockData} onUserChange={handleUserChange} />
      {selectedUser && (
        <p className="mt-4 text-lg">
          You selected: {selectedUser.name} from {selectedUser.location}
        </p>
      )}
      <Footer />
      </div> */}
    </>
  );
}

export default App;
