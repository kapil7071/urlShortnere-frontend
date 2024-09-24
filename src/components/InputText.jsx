import React, { useState } from "react";
import axios from "axios";
import Responses from "./Responses";
import Spinner from "./Spinner/spinner"; // Adjust the import path as necessary

const InputText = ({ darkMode }) => {
  const [url, setUrl] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true
    try {
      const response = await axios.post(
        "https://urlshortner-y5u7.onrender.com/generate",
        { url }
      );
      setSubmittedUrl(response.data);
      setUrl("");
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <div
        className={`max-w-lg w-full mx-auto p-4 sm:p-6 rounded-lg shadow-md transition-colors duration-300 ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="url"
              className={`text-base sm:text-lg font-medium mb-2 ${
                darkMode ? "text-white" : "text-gray-700"
              }`}
            >
              Original URL
            </label>
            <input
              type="text"
              name="url"
              id="url"
              value={url}
              onChange={handleInputChange}
              placeholder="https://example.com"
              className={`p-3 border rounded-md focus:outline-none focus:ring-2 transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-800 text-white border-gray-600 focus:ring-gray-300"
                  : "bg-white text-gray-900 border-gray-300 focus:ring-blue-500"
              }`}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full rounded-md shadow-md px-4 py-2 font-semibold transition-colors duration-300 ${
              darkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Show spinner while loading */}
      {loading && <Spinner />}

      {submittedUrl && (
        <Responses
          submittedUrl={submittedUrl.shortUrl}
          url={submittedUrl.originalUrl}
          darkMode={darkMode}
        />
      )}
    </>
  );
};

export default InputText;
