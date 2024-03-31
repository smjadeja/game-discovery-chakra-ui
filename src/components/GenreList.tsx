import {
  List,
  ListItem,
  HStack,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store/gameStore";


const GenreList = () => {
  const { data } = useGenres();
  const genreId = useGameQueryStore(s =>  s.gameQuery.genreId)
  const setGenreId = useGameQueryStore(s => s.setGenreId)


  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genre
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} padding={1}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit="cover"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => setGenreId(genre.id)}
                variant="link"
                fontSize={genreId === genre.id ? "lg" : "sm"}
              >
                {genre.name}{" "}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
