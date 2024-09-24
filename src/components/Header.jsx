import React from "react";

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <header
      className={`sticky top-0 z-50 p-4 ${darkMode ? "bg-gray-900" : "bg-gray-100"} shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1
            className={`text-2xl sm:text-3xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            URL Shortener
          </h1>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-md border transition duration-300 ease-in-out ${
              darkMode
                ? "bg-white text-gray-900 border-gray-600"
                : "bg-gray-900 text-white border-gray-900"
            } hover:bg-gray-800 hover:text-white`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
