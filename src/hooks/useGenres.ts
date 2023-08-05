import useData from "./useData";

interface Genres {
  id: number;
  name: string;
}

const useGenres = () => {
  return useData<Genres>("/genres");
};

export default useGenres;
