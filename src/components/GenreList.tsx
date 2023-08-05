import { Text, Stack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      {error && <Text> {error} </Text>}
      <Stack justifyContent={"space-between"} padding="20px">
        {data.map((genre) => (
          <Text key={genre.id}> {genre.name} </Text>
        ))}
      </Stack>
    </>
  );
};

export default GenreList;
