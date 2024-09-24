import React from "react";
import { Link } from "react-router-dom";

const Responses = ({ url, submittedUrl, darkMode }) => {
  return (
    <div
      className={`mt-5 w-full max-w-md mx-auto p-4 sm:p-6 rounded-md shadow-md transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div
        className={`flex flex-col border rounded-md p-4 ${
          darkMode ? "border-gray-600" : "border-gray-300"
        }`}
      >
        {/* Original URL Section */}
        <div className="flex flex-col mb-4">
          <h2 className={`font-bold mb-1 ${darkMode ? "text-white" : "text-gray-800"}`}>
            Original URL
          </h2>
          <Link
            to={url}
            className={`text-blue-600 underline break-words ${
              darkMode ? "hover:text-blue-400" : ""
            }`}
            target="_blank"
          >
            {url}
          </Link>
        </div>

        <div className="flex flex-col">
          <h2 className={`font-bold mb-1 ${darkMode ? "text-white" : "text-gray-800"}`}>
            Shortened URL
          </h2>
          <Link
            to={submittedUrl ? `https://urlshortner-y5u7.onrender.com/${submittedUrl}` : submittedUrl}
            className={`text-blue-600 underline break-words ${
              darkMode ? "hover:text-blue-400" : ""
            }`}
            target="_blank"
          >
            {submittedUrl ? `https://urlshortner-y5u7.onrender.com/${submittedUrl}` : "URL not generated"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Responses;
