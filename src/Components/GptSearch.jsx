import Input from "./Input";
import Button from "./Button";
import { useRef, useState } from "react";
import useAi from "../Hooks/useAi";

const GptSearch = () => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const fetchMovieName = useAi();

  const handleSearch = async () => {
    const query = inputRef.current.value.trim();

    if (!query) {
      alert("Enter something");
      return;
    }

    setLoading(true);
    try {
      await fetchMovieName(query);
    } catch (error) {
      console.error("Error while fetching movie name:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const name = loading ? "Loading..." : "Search";

  return (
    <div className="bg-gray-900 p-4 flex flex-row items-center gap-3 rounded-lg h-25 shadow-md border border-white">
      <Input
        ref={inputRef}
        type="text"
        placeholder="What do you want to search?"
        className="bg-gray-800 text-white p-2 rounded-lg border border-gray-700 focus:outline-none"
      />

      <Button
        onClick={handleSearch}
        disabled={loading}
        className={`${
          loading ? "bg-gray-600 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
        } text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md`}
        name={name}
      />
    </div>
  );
};

export default GptSearch;
