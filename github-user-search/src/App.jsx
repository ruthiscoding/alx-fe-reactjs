import React, { useState } from "react";
import SearchComponent from "./components/Search";
import { fetchUserData } from "./services/githubService";
import Output from "./components/Output";

const App = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUserData(searchParams);
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container flex justify-center items-center flex-col gap-4 mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">GitHub User Search</h1>
      <SearchComponent onSearch={handleSearch} />
      <Output results={results} loading={loading} error={error} />
    </div>
  );
};

export default App;
