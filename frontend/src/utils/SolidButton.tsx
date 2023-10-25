import { Button, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode, MouseEvent } from "react";

type SolidButtonProps = {
  children: ReactNode;
  light?: string;
  dark?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const SolidButton = ({ children, light = "red", dark = "gold", onClick }: SolidButtonProps) => {
  return (
    <Button
      variant="solid"
      colorScheme={useColorModeValue(light, dark)}
      borderRadius={0}
      size="lg"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default SolidButton;
