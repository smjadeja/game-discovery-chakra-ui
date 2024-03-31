import { Menu, Button, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store/gameStore";


const PlatformSelector = () => {
  const { data : platforms, error } = usePlatforms();
  const platformId = useGameQueryStore(s =>  s.gameQuery.platformId)
  const setPlatformId = useGameQueryStore(s =>  s.setPlatformId)
  const platform = usePlatform(platformId)

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {" "}
        {platform?.name || "Platforms"}{" "}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() =>setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
