# 🎵 Music Dashboard App

A **React.js** dashboard for tracking user music statistics, trending artists, and monthly streams. Built using **Vite**, powered by **Redux** for state management, and styled with **Tailwind CSS Version 4**.

---

## 📌 Features

### 🏠 Dashboard Overview
- **User Profile:** Displays user details such as Id, name, email, location, and profile picture.
- **ThemeToggle :** Users can switch the app's theme between Dark Mode and Light Mode.
- **Trending Artists:** Dynamically sorted list of the most popular artists based on total streams.
- **Monthly Streams Chart:** A bar chart visualizing the user's music streaming activity over the year.
- **User Streams Leaderboard:** Ranking of users based on total music streams.
- **Top Songs:** Displays the most-played songs with artist names and total stream counts.

### 🔗 Navigation
- **🏠 Home:** Overview of user stats, trending artists, and streaming insights.
- **🎵 Top Songs:** List of the most popular songs with their respective artists.
- **👤 Profile:** Displays user-specific details and streaming history.

---

## 🛠️ Installation & Setup

### 1⃣ Clone the Repository
```sh
git clone https://github.com/Sekaziga/dashboard-react-v9-11.git
cd dashboard-react-v9-11/dashboard-lkpg
```

### 2⃣ Install Dependencies
```sh
npm install
```

### 3⃣ Start Development Server
```sh
npm run dev
```

---

## 🐂 State Management with Redux
This project utilizes **Redux** for state management, ensuring a predictable and centralized state store.

### 🔧 Key Redux Features
- **Global State Management:** Manages user authentication, theme state, and music statistics.
- **Redux Toolkit:** Simplifies reducers, actions, and store configuration.

### 📘 Redux Structure
```plaintext
📂 src
 ├── 📂 store          # Redux store setup
 │   ├── 📜 store.js   # Configures the Redux store
 │   ├── 📜 themeSlice.js  # Manages theme state
 │   ├── 📜 trendingArtistsSlice.js  # Handles trending artists data
 │   ├── 📜 userLeaderboardSlice.js  # Manages user leaderboard state
 │   ├── 📜 userSlice.js   # Handles user-related state
 ├── 📂 components      # Reusable UI components
 ├── 📂 data            # Mock data for users and artists
 ├── 📂 pages           # Pages for Home, Top Songs, Profile
 ├── 📜 App.jsx         # Main app entry point
 ├── 📜 main.jsx        # React root file with Redux provider
 ├── 📜 index.css       # Global styles
```

---

