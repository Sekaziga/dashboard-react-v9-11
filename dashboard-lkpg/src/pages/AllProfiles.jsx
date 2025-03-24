import Footer from '../components/Footer';
import NavHeader from '../components/NavHeader';
import mockData from '../data/mockData.json';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

function AllProfiles() {
  return (
    <>
    <main className="p-6  mx-auto bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen">
      <NavHeader />
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <div className='bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white'>
        {mockData.users.map((user) => (
          <div
            key={user.id}
            className='flex items-center p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition'
          >
            <img
              src={user.profilePicture}
              alt={`${user.name}'s profile`}
              className='w-10 h-10 rounded-full mr-4 border border-gray-300 dark:border-gray-600'
            />
            <div className='flex-grow'>
              <p className='text-lg font-medium text-gray-900 dark:text-white'>
                <Link to={`/profiles/${user.id}`} className='hover:underline'>
                  {user.name}
                </Link>
                <span className='text-gray-500 dark:text-gray-400'> ({user.location})</span>
              </p>
              <p className='text-sm text-gray-600 dark:text-gray-300'>
                Total Streams: {user.totalStreams}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      </main>
    </>
  );
}
export default AllProfiles;
