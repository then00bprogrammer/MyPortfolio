import { Button, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const OutlineButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button
      variant="outline"
      colorScheme={useColorModeValue("black", "gold")}
      borderRadius={0}
      size="lg"
    >
      {children}
    </Button>
  );
};

export default OutlineButton;
