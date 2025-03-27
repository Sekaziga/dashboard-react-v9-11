import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profiles from './pages/Profiles';
import AllProfiles from './pages/AllProfiles';
import TopSongs from './pages/TopSongs';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles/:id" element={<Profiles />} />
          <Route path="/profiles" element={<AllProfiles />} />
          <Route path="/top-songs" element={<TopSongs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
