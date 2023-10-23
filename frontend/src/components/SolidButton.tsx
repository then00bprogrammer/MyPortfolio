import { Button, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const SolidButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button
      variant="solid"
      colorScheme={useColorModeValue("red", "gold")}
      borderRadius={0}
      size="lg"
    >
      {children}
    </Button>
  );
};

export default SolidButton;
