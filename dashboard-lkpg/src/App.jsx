import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import UserLeaderboard from './components/UserLeaderboard';
import mockData from './data/mockData.json';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Profiles from './pages/Profiles';
import AllProfiles from './pages/AllProfiles';
import TopSongs from './pages/TopSongs';
import ThemeToggle from './components/ThemeToggle';
import TrendingArtists from './components/TrendingArtists';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/profiles/:id',
    element: <Profiles />,
  },
  {
    path: '/profiles',
    element: <AllProfiles />,
  },
  {
    path: '/top-songs',
    element: <TopSongs />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
  )
}

export default App;
