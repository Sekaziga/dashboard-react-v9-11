import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(toggleTheme());
        document.documentElement.classList.toggle("dark", theme === "light");
      }}
      className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
