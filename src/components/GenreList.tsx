import {
  Text,
  Stack,
  Image,
  HStack,
  List,
  ListItem,
  Spinner,
  Button,
  theme,
  Heading,
  Box,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  return (
    <Box marginTop={6}>
      <Heading as={"h2"} size={"lg"} marginBottom={4}>
        Genres
      </Heading>
      {isLoading && <Spinner />}
      {error && <Text> {error} </Text>}
      <List justifyContent={"space-between"}>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={10}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="lg"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              >
                {genre.name}{" "}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;
