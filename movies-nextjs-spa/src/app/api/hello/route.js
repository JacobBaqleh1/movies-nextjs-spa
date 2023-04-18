import axios from "axios";

export async function GET(request) {
  return new Response("Hello, Next.js!");
}

const usePopularMovies = () => {
  useEffect(() => {
    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=629a273e48cb2530e7dfe69e18a528a4`;

    axios
      .get(API_URL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
};
export default usePopularMovies;
