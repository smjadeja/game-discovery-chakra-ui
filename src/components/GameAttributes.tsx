import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import GameAttribute from "./GameAttribute";
import { Game } from "../entities/Game";

interface Prop {
  game: Game;
}
const GameAttributes = ({ game }: Prop) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <GameAttribute title="Platform">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </GameAttribute>
      <GameAttribute title="MetaScore">
        <CriticScore score={game.metacritic} />
      </GameAttribute>
      <GameAttribute title="Genres">
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GameAttribute>
      <GameAttribute title="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </GameAttribute>
    </SimpleGrid>
  );
};

export default GameAttributes;
