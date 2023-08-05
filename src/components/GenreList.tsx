import { Text, Stack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <Stack justifyContent={"space-between"} padding="20px">
      {genres.map((genre) => (
        <Text key={genre.id}> {genre.name} </Text>
      ))}
    </Stack>
  );
};

export default GenreList;
