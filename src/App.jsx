import React, { useState } from "react";
import Header from "./components/Header";
import InputText from "./components/InputText";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center py-6">
        <InputText darkMode={darkMode} />
      </div>
    </div>
  );
};

export default App;
