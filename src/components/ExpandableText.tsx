import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  if (!children) return null
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      {children.length >= limit && (
        <Button
          size={"xs"}
          fontWeight={"bold"}
          colorScheme={"yellow"}
          marginLeft={2}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Show more"}
        </Button>
      )}
    </Text>
  );
};

export default ExpandableText;
