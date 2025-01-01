import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // pastikan untuk mengimpor file CSS

function App() {
  const [file, setFile] = useState(null);
  const [jsonOutput, setJsonOutput] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State untuk animasi loading

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setFileName(uploadedFile ? uploadedFile.name.split(".")[0] : "output");
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setIsLoading(true); // Tampilkan animasi loading
    try {
      const response = await axios.post("http://localhost:8081/convert", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setJsonOutput(response.data.json);
    } catch (error) {
      alert("Failed to convert file. Please try again.");
    } finally {
      setIsLoading(false); // Sembunyikan animasi loading
    }
  };

  const handleDownload = () => {
    if (!jsonOutput) return;

    const blob = new Blob([JSON.stringify(jsonOutput, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName}.json`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-gray-800">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-semibold">CSV to JSON Converter</h1>
        <p className="text-lg mt-2 text-gray-600">
          A simple tool to convert your CSV files to JSON format.
        </p>
      </header>

      <main className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <div className="flex flex-col items-center">
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="mb-4 text-sm"
          />
          {isLoading ? (
            <button
              disabled
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            >
              <div className="spinner"></div>
              Loading...
            </button>
          ) : (
            <button
              onClick={handleUpload}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Convert to JSON
            </button>
          )}
        </div>

        {jsonOutput && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Output:</h2>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto max-h-96">
              {JSON.stringify(jsonOutput, null, 2)}
            </pre>
            <button
              onClick={handleDownload}
              className="bg-green-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-700 transition"
            >
              Download JSON
            </button>
          </div>
        )}
      </main>

      <footer className="mt-12 text-gray-500 text-sm">
        Built with ❤️ by Gusti Padaka
      </footer>
    </div>
  );
}

export default App;