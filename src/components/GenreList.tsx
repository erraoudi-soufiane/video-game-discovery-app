import { Text, Stack, Image, HStack, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      {error && <Text> {error} </Text>}
      <List justifyContent={"space-between"}>
        {data.map((genre) => (
          <ListItem paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={10}
              />
              <Text fontSize="lg" key={genre.id}>
                {" "}
                {genre.name}{" "}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
