import { Box, Heading } from "@chakra-ui/react";
import React, { Children, ReactNode } from "react";

interface Prop {
  title: string;
  children: ReactNode | ReactNode[];
}

const GameAttribute = ({ title, children }: Prop) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {title}
      </Heading>

      <dd>
      {children}

      </dd>
    </Box>
  );
};

export default GameAttribute;
