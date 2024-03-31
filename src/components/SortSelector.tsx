import { Menu, Button, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import useGameQueryStore from "../store/gameStore";

const SortSelector = () => {
  const sortText = useGameQueryStore(s=> s.gameQuery.sort)
  const setSortText = useGameQueryStore(s=> s.setSortOrder)
  const sortOrders = [
    { value: "name", label: "Name" },
    { value: "released", label: "Released" },
    { value: "-added", label: "Date Added" },
    { value: "-created", label: "Date Created" },
    { value: "updated", label: "Updated" },
    { value: "-rating", label: "Average Rating" },
    { value: "metacritic", label: "Popularity" },
  ];

  const currentSort =  sortOrders.find(order => order.value === sortText)
  // const {data, error, isLoading} = usePlatforms();
  // if (error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
      {currentSort?.label ||  "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort, index) => (
          <MenuItem key={index} value={sort.value} onClick={() => setSortText(sort.value)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
