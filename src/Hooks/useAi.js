import { useDispatch } from "react-redux";
import { addMovies } from "../Store/GptSlice";
import axios from "axios";
import Constant from "../Config/Constant";
import { GoogleGenAI } from "@google/genai";
import API from "../Config/config"

const useAi = () => {
  const { AI_API } = API;
  const dispatch = useDispatch();

  const fetchMovieName = async (query) => {
    try {
      console.log("User query", query)

      let movieList = [];

      const ai = new GoogleGenAI({ apiKey: AI_API });

      async function main() {
        const response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: `You are a movie (indian Hindi latest ) recommendation expert. Based on the user's query, return exactly 5 movie titles **only** as a raw JSON array of strings. Do NOT include backticks or explanations. User query: "${query}"`
        });

        const text = await response.text;
        console.log(text)
        try {
          movieList = JSON.parse(text);
          console.log(movieList);
        } catch (error) {
          console.error("Error parsing Gemini response:", error.message);
        }
      }


      await main();

      const fetchMovieFromTMDB = async (movie) => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
        const response = await axios.get(url, Constant.TMDB_OPTION);
        return response.data.results;
      };

      const TMDB_Responses = await Promise.all(movieList.map(fetchMovieFromTMDB));

      dispatch(addMovies(TMDB_Responses));
    } catch (error) {
      console.error("Error fetching movies:", error.message);
    }
  };

  return fetchMovieName;
};

export default useAi;
