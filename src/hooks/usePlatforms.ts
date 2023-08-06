import useData from "./useData";
import { Platform } from "./useGames";

const usePlatforms = () => {
  return useData<Platform>("/pxlatforms/lists/parents");
};

export default usePlatforms;
